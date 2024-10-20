import React from "react";
import { Title } from "../../Element/Title/Title";
import PageLink from "../../Element/PageLink/PageLink";
import { Element } from "react-scroll";
// import PKAnvaya1 from "/source/PK_The_Anvaya.pdf";
// import PKAnvaya2 from "/source/ProductKnowledgeTheAnvayaJuanda.pdf";

const About = () => {
  const pdf = [
    {
      id: 1,
      name: "Browsur",
      link: "/source/PK_The_Anvaya.pdf",
      type: "pdf",
    },
    {
      id: 2,
      name: "Browsur",
      link: "/source/ProductKnowledgeTheAnvayaJuanda.pdf",
      type: "pdf",
    },
  ];
  return (
    <div>
      <img src="/source/Mainbanner.png" alt="Main Banner" className="mb-10" />
      <Title title="Tentang Kami" />
      <Element name="downloadPDF">
        <div className="md:flex items-center p-6 rounded-lg  gap-3 ">
          <div className="h-fit p-5 gap-11 md:flex md:flex-col text-center md:text-left mb-4 md:w-1/2">
            <p className="md:text-2xl font-bold mb-2">Anvaya Rumah Impian</p>
            <p className="text-gray-700 text-sm md:text-xl">Temukan rumah impian Anda di Anvaya, tempat tinggal yang nyaman dan modern.</p>
          </div>

          <div className="relative w-full pb-9/16">
            <video controls className="w-full h-full rounded-lg">
              <source src="/source/ProfileVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Element>

      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        {pdf.map((data) => (
          <div key={data.id} className="px-5 py-3 bg-teal-500 w-fit rounded-lg text-white cursor-pointer hover:bg-teal-800 shadow-md mt-5">
            <PageLink content={"Download PDF The Anvaya " + data.id} type={data.type} file={data.link} filename={data.name + data.id + ".pdf"} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
