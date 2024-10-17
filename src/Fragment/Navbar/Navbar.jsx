import NavLink from "../../Element/PageLink/NavLink";

const Navbar = () => {
  return (
    <nav className="flex justify-center md:justify-between h-20 shadow-md fixed z-10 w-full bg-white/70 backdrop-blur-sm hover:bg-white duration-75">
      <div className="flex h-full md:ml-10 items-center gap-5">
        <img src="/anvaya-logo/logohijau.png" alt="Anvaya Logo" className="h-4/5" />
        <h1 className="text-xl">The Anvaya Juanda</h1>
      </div>

      <ul className="mr-10 hidden md:flex h-full gap-5 items-center">
        <li>
          <NavLink goTo="home" Content="Home" />
        </li>
        <li>
          <NavLink goTo="category" Content="Categori" />
        </li>
        <li>
          <NavLink goTo="fasilitas" Content="Fasilitas" />
        </li>
        <li>
          <NavLink goTo="kontak" Content="Kontak" />
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
