import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faUser } from "@fortawesome/free-regular-svg-icons";

const comment = <FontAwesomeIcon icon={faComment} />;
const user = <FontAwesomeIcon icon={faUser} />;

const Blog = ({ blogs, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Row className="g-4">
      {blogs.map((blog) => (
        <Col key={blog._id} className="col-12 col-xl-6">
          <Card className="box text-center">
            <Card.Img className="services-img" variant="top" src={blog.image} />
            <Card.Body>
              <Card.Title className="services-title fs-6">
                {user} {blog.travel}
                <span className="comment">{comment} (3)Comments</span>
              </Card.Title>
              <Card.Title className="services-title">{blog.title}</Card.Title>
              <div className="service-meta">
                <Card.Text>
                  <h5>Cost: {blog.cost}</h5>
                </Card.Text>

                <Link className="card-btn" to={`/details/${blog._id}`}>
                  Read More
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Blog;
