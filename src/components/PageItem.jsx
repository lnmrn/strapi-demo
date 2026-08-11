import LinkItem from "./LinkItem";

function PageItem({ item }) {
  const { page, links } = item;
  console.log(links);
  return (
    <section>
      <h4>{page}</h4>
      <div className="sidebar-sublinks">
        {links.map((link) => (
          <LinkItem link={link} key={link.id} />
        ))}
      </div>
    </section>
  );
}

export default PageItem;
