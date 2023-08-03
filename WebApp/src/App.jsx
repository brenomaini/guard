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
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}

export default App;
