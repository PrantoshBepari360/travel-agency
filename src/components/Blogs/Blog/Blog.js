import React from 'react';
import CompanyLogo from '../../AboutUs/CompanyLogo/CompanyLogo';
import Package from '../../AboutUs/Package/Package';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import BlogBanar from '../BlogBanar/BlogBanar';
import BlogCart from '../BlogCart/BlogCart';

const Blog = () => {
  return (
    <div>
      <Navigation></Navigation>
      <BlogBanar></BlogBanar>
      <BlogCart></BlogCart>
      <Package></Package>
      <CompanyLogo></CompanyLogo>
      <Footer></Footer>
    </div>
  );
};

export default Blog;