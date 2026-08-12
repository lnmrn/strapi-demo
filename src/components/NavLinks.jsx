import pages from "../data";

//only seen on bigger screens
function NavLinks() {
  console.log(pages);
  return (
    <div className="nav-links">
      {pages.map((item) => (
        <button key={item.pageId} className="nav-button">
          {item.page}
        </button>
      ))}
    </div>
  );
}

export default NavLinks;
