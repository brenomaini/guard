import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Routes from "./routes";
import "./styles/global.css";
const queryClient = new QueryClient();

function App() {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Routes />;
      </QueryClientProvider>
    </StrictMode>
  );
}

export default App;
