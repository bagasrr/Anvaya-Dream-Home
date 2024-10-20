import { WaLink } from "../../Element/Button/Button";
import NavLink from "../../Element/PageLink/NavLink";
import PageLink from "../../Element/PageLink/PageLink";
import PKAnvayaPDF from "/source/PK_The_Anvaya.pdf";

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row gap-10 bg-teal-500 text-white py-5 sm:p-10 ">
      <div className="w-screen sm:w-2/5 text-center flex flex-col items-center">
        <img src="/anvaya-logo/logoputih.png" alt="Logo Anvaya" className="w-20" />
        <h3 className="text-xl font-bold mb-5">
          Anvaya <br /> Rumah Impian
        </h3>
        <p className="text-sm font-light ">
          Jl.Tambak Cemandi Juanda,sidoarjo, <br />
          Jawa Timur 61253
        </p>
      </div>

      <div className="w-screen sm:w-3/5 p-5 flex justify-around">
        <div className="sm:w-1/2">
          <h3 className="text-lg sm:text-xl font-bold mb-5">Bantuan</h3>
          <ul className="text-sm grid gap-2">
            <li>
              <PageLink goTo="downloadPDF" content="Download PDF" type="normal" />
            </li>
            <li>
              <PageLink goTo="home" content="Home" type="normal" />
            </li>
            <li>
              <PageLink goTo="tentang" content="Tentang" type="normal" />
            </li>
            <li>
              <PageLink goTo="fasilitas" content="Fasilitas" type="normal" />
            </li>
            <li>
              <PageLink goTo="infoharga" content="Info Harga" type="img" />
            </li>
          </ul>
        </div>
        <div className="relative w-1/2 px-4">
          <a href="#" className="sm:text-xl text-md font-bold">
            Hubungi Kami
          </a>
          <div>
            {/* Telephone */}
            <div className="mt-5 flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-telephone-fill mr-3" viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
              <p className="text-xs sm:text-lg w-full">+62 812-5280-0095</p>
            </div>

            {/* Social Media */}
            <div className="mt-5 tes">
              <WaLink phoneNumber="81252800095" message="Halo! saya tertarik dengan Anvaya, Bolehkah saya bertanya beberapa hal?" caption="WhatsApp" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
