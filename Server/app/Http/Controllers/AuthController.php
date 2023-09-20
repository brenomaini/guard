<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function login(Request $request)
    {
        try {
            $request->validate([
                'email' => 'required|string|email',
                'password' => 'required|string',
            ]);
            $credentials = $request->only('email', 'password');
            $token = Auth::attempt($credentials);

            if (!$token) {
                return response()->json([
                    'message' => 'Unauthorized',
                ], 401);
            }

            $user = Auth::user();
            return response()->json([
                'user' => $user,
                'authorization' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
            ]);
        } catch (\PDOException $e) {
            return response()->json([
                'msg' => 'Error: ' . $e->getMessage(),
            ], 500);
        }
    }

    public function register(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:6',
            ]);

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            return response()->json([
                'message' => 'User created successfully',
                'user' => $user
            ]);
        } catch (\PDOException $e) {
            return response()->json([
                'msg' => 'Error: ' . $e->getMessage(),
            ], 500);
        }
    }

    public function logout()
    {
        try {
            Auth::logout();
            return response()->json([
                'message' => 'Successfully logged out',
            ]);
        } catch (\PDOException $e) {
            return response()->json([
                'msg' => 'Error: ' . $e->getMessage(),
            ], 500);
        }
    }

    public function refresh()
    {
        try {
            return response()->json([
                'user' => Auth::user(),
                'authorization' => [
                    'token' => Auth::refresh(),
                    'type' => 'bearer',
                ]
            ]);
        } catch (\PDOException $e) {
            return response()->json([
                'msg' => 'Error: ' . $e->getMessage(),
            ], 500);
        }
    }
}
