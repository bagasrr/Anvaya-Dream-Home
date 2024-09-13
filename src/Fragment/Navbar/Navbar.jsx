const Navbar = () => {
  return (
    <nav className=" flex justify-between h-20 shadow-md">
      <div className="flex h-full ml-10 items-center gap-5">
        <img src="/anvaya-logo/logohijau.png" alt="Anvaya Logo" className="h-4/5" />
        <h1 className="text-xl">The Anvaya Juanda</h1>
      </div>

      <ul className="mr-10 text-emerald-600 flex h-full gap-5 bg-white items-center text-l font-bold">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
