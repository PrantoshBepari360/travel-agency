import React from "react";
import Service from "../Home/Service/Service";
import ServiceBanner from "../Home/Service/ServiceBanner/ServiceBanner";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const Services = () => {
  return (
    <div>
      <Navigation></Navigation>
      <ServiceBanner></ServiceBanner>
      <Service></Service>
      <Footer></Footer>
    </div>
  );
};

export default Services;
