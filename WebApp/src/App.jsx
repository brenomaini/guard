import { QueryClient, QueryClientProvider } from "react-query";
import Routes from "./routes";
import "./styles/global.css";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}

export default App;
