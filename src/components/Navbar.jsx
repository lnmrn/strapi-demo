import { FaBars, FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../GlobalContext";
import NavLinks from "./NavLinks";

function Navbar() {
  const { isSidebarOpen, setIsSidebarOpen, setPageId } = useGlobalContext();

  //closing the submenu when mouse leaves certain elements
  function handleSubmenu(e) {
    if (!e.target.classList.contains("nav-button")) {
      setPageId(null);
    }
  }

  return (
    <nav onMouseOver={handleSubmenu}>
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
        <NavLinks />
      </div>
    </nav>
  );
}

export default Navbar;
