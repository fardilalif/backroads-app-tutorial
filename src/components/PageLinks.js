import { pageLinks } from "../data.js";
import PageLink from "./PageLink.js";

const PageLinks = (props) => {
  const { parentClass, itemClass } = props;
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        return <PageLink link={link} itemClass={itemClass} key={link.id} />;
      })}
    </ul>
  );
};
export default PageLinks;
