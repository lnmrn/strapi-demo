function LinkItem({ link, className = "", iconStyle = "" }) {
  const { url, label, icon: Icon } = link;
  return (
    <li className={className}>
      <span className="sublink-container">
        <Icon className={iconStyle} /> <a href={url}>{label}</a>
      </span>
    </li>
  );
}

export default LinkItem;
