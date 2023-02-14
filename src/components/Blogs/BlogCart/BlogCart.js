import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Blog from "./Blog/Blog";
import Pagination from "./Pagination/Pagination";
import "./BlogCart.css";
import BlogSideBar from "./BlogSideBar/BlogSideBar";

const BlogCart = () => {
  const [blogs, setBlog] = useState([]);
  const [loading, seLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPage] = useState(10);

  useEffect(() => {
    fetch("https://travel-agency-0dnf.onrender.com/services")
      .then((res) => res.json())
      .then((data) => setBlog(data));
    seLoading(false);
  }, []);

  // get current blog page
  const indexOfLastBlog = currentPage * blogPage;
  const indexOfFirstBlog = indexOfLastBlog - blogPage;
  const currentBlog = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <div className="row">
        <div className="col-lg-8">
          <h4 className="text-center mt-5 mb-3">
            {" "}
            <span className="text-success h2 deal">Deal News</span> / View All
            Promotions
          </h4>
          <Blog blogs={currentBlog} loading={loading} />
          <br />
          <Pagination
            blogPage={blogPage}
            totalBlog={blogs.length}
            paginate={paginate}
          />
        </div>
        <div className="col-lg-4">
          <BlogSideBar></BlogSideBar>
        </div>
      </div>
    </Container>
  );
};

export default BlogCart;
