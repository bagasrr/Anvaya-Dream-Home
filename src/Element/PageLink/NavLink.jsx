import { Link } from "react-scroll";

const NavLink = (props) => {
  const { Content, goTo } = props;
  return (
    <Link to={goTo} smooth={true} duration={500} className="text-l font-bold  text-emerald-600 hover:text-emerald-400 mx-5 cursor-pointer" offset={-80} spy={true} activeClass="active">
      {Content}
    </Link>
  );
};
export default NavLink;
