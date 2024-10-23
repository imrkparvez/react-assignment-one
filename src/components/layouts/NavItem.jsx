import { Link } from "react-router-dom";

const NavItem = ({ title, link }) => {
  return (
    <>
      <Link
        to={link}
        className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark  dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:opacity-70"
        aria-label="Home"
      >
        {title}
      </Link>
    </>
  );
};

export default NavItem;
