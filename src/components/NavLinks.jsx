import pages from "../data";
import { useGlobalContext } from "../GlobalContext";

//only seen on bigger screens
function NavLinks() {
  const { setPageId } = useGlobalContext();

  return (
    <div className="nav-links">
      {pages.map((item) => (
        <button
          key={item.pageId}
          className="nav-button"
          onMouseEnter={() => setPageId(item.pageId)}
        >
          {item.page}
        </button>
      ))}
    </div>
  );
}

export default NavLinks;
