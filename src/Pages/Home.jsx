import { Fragment } from "react";
import Navbar from "../Fragment/Navbar/Navbar";
import Footer from "../Fragment/Footer/Footer";
import Header from "../Fragment/Header/Header";
import WhyUs from "../Element/WhyUs/WhyUs";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <WhyUs />
      <Footer />
    </Fragment>
  );
};
export default Home;
