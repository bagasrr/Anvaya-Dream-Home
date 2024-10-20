import PKAnvayaPDF from "/source/PK_The_Anvaya.pdf";
import Pricelist1 from "/source/Pricelist1.jpeg";
import Pricelist2 from "/source/Pricelist2.jpeg";

import { Link } from "react-scroll";

const PageLink = (props) => {
  const { type } = props;
  return type === "pdf" ? PDFDownload(props) : type === "normal" ? NormalLink(props) : type === "img" ? ImgDownload(props) : null;
};
export default PageLink;

const PDFDownload = (props) => {
  const { content } = props;
  return (
    <a href={PKAnvayaPDF} download="The_anvaya.pdf" className="cursor-pointer">
      {content}
    </a>
  );
};
// const ImgDownload = (props) => {
//   const { content } = props;
//   return (
//     <a href={Pricelist1} download="pricelist.jpeg" className="cursor-pointer hover:text-emerald-400">
//       {content}
//     </a>
//   );
// };

const ImgDownload = (props) => {
  const { content, className = "cursor-pointer hover:text-emerald-400" } = props;

  const handleDownload = () => {
    const link1 = document.createElement("a");
    link1.href = Pricelist1;
    link1.download = "pricelist1.jpeg";
    document.body.appendChild(link1);
    link1.click();
    document.body.removeChild(link1);

    const link2 = document.createElement("a");
    link2.href = Pricelist2;
    link2.download = "pricelist2.jpeg";
    document.body.appendChild(link2);
    link2.click();
    document.body.removeChild(link2);
  };

  return (
    <button onClick={handleDownload} className={className}>
      {content}
    </button>
  );
};

const NormalLink = (props) => {
  const { goTo, content } = props;
  return (
    <Link to={goTo} smooth={true} duration={500} offset={-80} className="text-l text-white hover:text-emerald-400 cursor-pointer">
      {content}
    </Link>
  );
};
