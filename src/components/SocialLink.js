const SocialLink = (props) => {
  const {
    link: { id, href, icon },
    itemClass,
  } = props;
  return (
    <li>
      <a href={href} target="_blank" className={itemClass} rel="noreferrer">
        <i className={icon}></i>
      </a>
    </li>
  );
};
export default SocialLink;
