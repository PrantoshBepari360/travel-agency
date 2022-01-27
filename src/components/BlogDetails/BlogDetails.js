import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BlogSideBar from "../Blogs/BlogCart/BlogSideBar/BlogSideBar";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import BlogDetailsBanner from "./BlogDetailsBanner/BlogDetailsBanner";
import "./BlogDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faComment,
  faCalendarPlus,
} from "@fortawesome/free-regular-svg-icons";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import Jasika from "../../images/New folder/download (4).png";
import John from "../../images/New folder/download (3).png";
import Jaklin from "../../images/New folder/download (5).png";
import { Button } from "react-bootstrap";

const comment = <FontAwesomeIcon icon={faComment} />;
const user = <FontAwesomeIcon icon={faUser} />;
const calender = <FontAwesomeIcon icon={faCalendarPlus} />;
const replay = <FontAwesomeIcon icon={faReply} />;

const BlogDetails = () => {
  let { _id } = useParams();
  const [order, setOrder] = useState([]);
  console.log(order);

  useEffect(() => {
    fetch(`https://dry-shelf-35127.herokuapp.com/services/${_id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [_id]);

  if (!order) {
    return <h1>your given is not valid</h1>;
  }

  return (
    <div>
      <Navigation></Navigation>
      <BlogDetailsBanner></BlogDetailsBanner>
      <div className="bg-light">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-8">
              <h1>Are You Still Intarested To Tour?</h1>
              <p>
                We Offer A Wide Range Of Procedures To Help You Get The Perfect
                Smile
              </p>
            </div>
            <div className="col-md-4 d-flex align-items-center">
              <Link className="ms-auto" to={`/addCart/${order._id}`}>
                <Button className="py-3 px-5">Book A Tour!</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h3 className="mt-5">{order.title}{order.location}</h3>
            <div className="mt-3 text-center f-s">
              <span className="center">{user} {order.travel}</span>
              <span>{calender} November 16-2021</span>
              <span className="comment">{comment} (3)Comments</span>
            </div>
            <div className="mt-3">
              <img className="w-100" src={order.image} alt="" />
            </div>
            <p className="mt-4">{order.description}</p>
            <h3>3 Comments</h3>
            <hr />
            <div>
              <div className="d-flex">
                <div className="me-4">
                  <img className="w-100" src={Jasika} alt="" />
                </div>
                <div>
                  <div className="py-2">Jasika</div>
                  <div>
                    2 April, 2021 <span>10.00PM</span>
                  </div>
                </div>
              </div>
              <br />
              <p>
                Morbi dictum pulvinar velit, id mollis lorem faucibus acUt sed
                lacinia ipsum. Suspendisse massa augue lorem faucibus acUt sed
                lacinia ipsum. Suspendisse
              </p>
              <p>{replay} Reply</p>
            </div>
            <div>
              <div className="d-flex">
                <div className="me-4">
                  <img className="w-100" src={John} alt="" />
                </div>
                <div>
                  <div className="py-2">Jonson Hur</div>
                  <div>
                    2 April, 2021 <span>10.00PM</span>
                  </div>
                </div>
              </div>
              <br />
              <p>
                Morbi dictum pulvinar velit, id mollis lorem faucibus acUt sed
                lacinia ipsum. Suspendisse massa augue lorem faucibus acUt sed
                lacinia ipsum. Suspendisse
              </p>
              <p>{replay} Reply</p>
            </div>
            <div>
              <div className="d-flex">
                <div className="me-4">
                  <img className="w-100" src={Jaklin} alt="" />
                </div>
                <div>
                  <div className="py-2">Jaklin</div>
                  <div>
                    2 April, 2021 <span>10.00PM</span>
                  </div>
                </div>
              </div>
              <br />
              <p>
                Morbi dictum pulvinar velit, id mollis lorem faucibus acUt sed
                lacinia ipsum. Suspendisse massa augue lorem faucibus acUt sed
                lacinia ipsum. Suspendisse
              </p>
              <p>{replay} Reply</p>
            </div>
          </div>
          <div className="col-md-4">
            <BlogSideBar></BlogSideBar>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BlogDetails;
