import { useGlobalContext } from "../GlobalContext";
import pages from "../data";
import PageItem from "./PageItem";

//only seen on small screens!
function Sidebar() {
  const { isSidebarOpen } = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-container">
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
