import NavLink from "../../Element/NavLink/NavLink";

const Navbar = () => {
  return (
    <nav className=" flex justify-between h-20 shadow-md fixed z-10 w-full bg-white/70 backdrop-blur-sm hover:bg-white duration-75">
      <div className="flex h-full ml-10 items-center gap-5">
        <img src="/anvaya-logo/logohijau.png" alt="Anvaya Logo" className="h-4/5" />
        <h1 className="text-xl">The Anvaya Juanda</h1>
      </div>

      <ul className="mr-10 flex h-full gap-5 items-center">
        <li>
          <NavLink Content="Home" goTo="/" />
        </li>
        <li>
          <NavLink Content="About" goTo="/about" />
        </li>
        <li>
          <NavLink Content="Contact" goTo="/contact" />
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
