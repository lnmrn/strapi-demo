import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../GlobalContext";
import pages from "../data";
import PageItem from "./PageItem";

//only seen on small screens!
function Sidebar() {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();
  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <button className="close-btn">
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {pages.map((item) => (
            <PageItem item={item} key={item.pageId} />
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
