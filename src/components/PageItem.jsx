import LinkItem from "./LinkItem";

function PageItem({ item }) {
  const { page, links } = item;

  return (
    <section>
      <h4>{page}</h4>
      <div className="sidebar-sublinks">
        {links.map((link) => (
          <LinkItem
            link={link}
            key={link.id}
            linkStyle="sidebar-anchor"
            iconStyle="sublink-icon"
          />
        ))}
      </div>
    </section>
  );
}

export default PageItem;
