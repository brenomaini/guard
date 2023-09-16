import { AuthProvider } from "react-auth-kit";
import { QueryClient, QueryClientProvider } from "react-query";
import Routes from "./routes";
import "./styles/global.css";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ globally default to 10 seconds
      staleTime: 1000 * 30,
    },
  },
});

function App() {
  return (
    <AuthProvider
      authType={"cookie"}
      authName={"_auth"}
      cookieDomain={window.location.hostname}
      // cookieSecure={window.location.protocol === "https:"} reativar caso suba
      cookieSecure={false}
    >
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
