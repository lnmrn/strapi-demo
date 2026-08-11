function LinkItem({ link, className = "", iconStyle = "", linkStyle = "" }) {
  const { url, label, icon: Icon } = link;
  return (
    <li className={className}>
      <Icon className={iconStyle} />
      <a href={url} className={linkStyle}>
        {label}
      </a>
    </li>
  );
}

export default LinkItem;
