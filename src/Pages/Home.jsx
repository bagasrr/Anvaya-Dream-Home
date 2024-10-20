import { Fragment } from "react";
import Navbar from "../Fragment/Navbar/Navbar";
import Footer from "../Fragment/Footer/Footer";
import Header from "../Fragment/Header/Header";
import WhyUs from "../Fragment/WhyUs/WhyUs";
import Promotion from "../Fragment/Promotion/Promotion";
import Fasilitas from "../Fragment/Fasilitas/Fasilitas";
import { Element } from "react-scroll";
import About from "../Fragment/About/About";
import Kontak from "../Fragment/About/Kontak";
import PriceDisplay from "../Fragment/About/Harga";

const Home = () => {
  return (
    <Fragment>
      <Element name="home">
        <Navbar />
        <Header />
        <WhyUs />
        <Element name="tentang">
          <About />
        </Element>
        <Promotion />
        <PriceDisplay />
        <Kontak />
        <Fasilitas />
        <Footer />
      </Element>
    </Fragment>
  );
};
export default Home;
