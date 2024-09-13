const NavLink = (props) => {
  const { Content, goTo, style } = props;
  return (
    <a href={goTo} className="text-l font-bold  text-emerald-600 hover:text-emerald-400 mx-5">
      {Content}
    </a>
  );
};
export default NavLink;
