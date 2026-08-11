import { FaBars, FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../GlobalContext";

function Navbar() {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();

  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        {isSidebarOpen ? (
          <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>
            <FaTimes />
          </button>
        ) : (
          <button className="toggle-btn" onClick={() => setIsSidebarOpen(true)}>
            <FaBars />
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
