import { GlobalProvider } from "./contexts/GlobalContext";
import Home from "./pages/Home";
function App() {
  return (
    <GlobalProvider>
      <Home />
    </GlobalProvider>
  );
}

export default App;
