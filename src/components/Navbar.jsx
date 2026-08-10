import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../GlobalContext";

function Navbar() {
  const { setIsSidebarOpen } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn" onClick={() => setIsSidebarOpen(true)}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
