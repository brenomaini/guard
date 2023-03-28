<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStatusRequest;
use App\Http\Requests\UpdateStatusRequest;
use App\Models\Status;

class StatusController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return __FUNCTION__;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStatusRequest $request)
    {
        return __FUNCTION__;
    }

    /**
     * Display the specified resource.
     */
    public function show(Status $status)
    {
        return __FUNCTION__;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStatusRequest $request, Status $status)
    {
        return __FUNCTION__;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Status $status)
    {
        return __FUNCTION__;
    }
}
