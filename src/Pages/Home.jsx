import { Fragment } from "react";
import Navbar from "../Fragment/Navbar/Navbar";
import Footer from "../Fragment/Footer/Footer";
import Header from "../Fragment/Header/Header";
import WhyUs from "../Fragment/WhyUs/WhyUs";
import Promotion from "../Fragment/Promotion/Promotion";
import Fasilitas from "../Fragment/Fasilitas/Fasilitas";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <Fragment>
      <Element name="home">
        <Navbar />
        <Header />
        <WhyUs />
        <Promotion />
        <Element name="fasilitas">
          <Fasilitas />
        </Element>
        <Footer />
      </Element>
    </Fragment>
  );
};
export default Home;
