//only seen on bigger screens!
import pages from "../data";
import LinkItem from "./LinkItem";
import { useGlobalContext } from "../GlobalContext";

function Submenu() {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = pages.find((page) => page.pageId === pageId);

  function handleMouseLeave() {
    setPageId(null);
  }

  return (
    <div
      onMouseLeave={handleMouseLeave}
      className={currentPage ? "submenu show-submenu" : "submenu"}
    >
      <h5>{currentPage?.page}</h5>
      <div
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
        className="submenu-links"
      >
        {currentPage?.links?.map((link) => (
          <LinkItem key={link.id} link={link} iconStyle="sublink-icon" />
        ))}
      </div>
    </div>
  );
}

export default Submenu;
