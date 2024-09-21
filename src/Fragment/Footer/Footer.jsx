import PageLink from "../../Element/PageLink/PageLink";

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

      <div className="w-screen sm:w-3/5 p-5 flex justify-evenly gap-2">
        <div className="sm:w-1/2">
          <h3 className="text-lg sm:text-xl font-bold mb-5">Bantuan</h3>
          <ul className="text-sm grid gap-2">
            <li>
              <PageLink type="normal" content="Syarat dan Ketentuan" url="#" />
            </li>
            <li>
              <PageLink type="normal" content="Panduan Pembelian" url="#" />
            </li>
            <li>
              <PageLink type="normal" content="Panduan Pemilik" url="#" />
            </li>
            <li>
              <PageLink type="normal" content="F. A. Q" url="#" />
            </li>
            <li>
              <PageLink content="Download PDF" type="pdf" />
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
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
              <p className="text-xs sm:text-lg">+62 812-5280-0095</p>
            </div>

            {/* Social Media */}
            <div className="absolute bottom-0 flex gap-4 align-baseline"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
