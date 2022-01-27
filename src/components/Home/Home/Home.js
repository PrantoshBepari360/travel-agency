import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Service from "../Service/Service";
import Reviews from "../Reviews/Reviews";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Service></Service>
      <Reviews></Reviews>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
};

export default Home;
