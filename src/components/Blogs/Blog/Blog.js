import React from 'react';
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
      <Footer></Footer>
    </div>
  );
};

export default Blog;