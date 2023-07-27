import { QueryClient } from "react-query";
import Routes from "./routes";
import "./styles/global.css";
const queryClient = new QueryClient();

function App() {
  return <Routes />;
}

export default App;
