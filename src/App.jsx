import { GlobalContext } from "./GlobalContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";

function App() {
  return (
    <main>
      <GlobalContext>
        <Navbar />
        <Hero />
        <Sidebar />
        <Submenu />
      </GlobalContext>
    </main>
  );
}

export default App;
