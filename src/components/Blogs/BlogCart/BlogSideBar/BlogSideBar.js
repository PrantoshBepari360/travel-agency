import React from 'react';
import download from "../../../../images/New folder/download.png";
import download2 from "../../../../images/New folder/download (2).png";
import download3 from "../../../../images/New folder/b-sm2.3a5300a1.png";
import download4 from "../../../../images/New folder/download (1).png";
import download5 from "../../../../images/New folder/b-sm4.49313860.png";
import download6 from "../../../../images/New folder/download (2).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus, faUser } from "@fortawesome/free-regular-svg-icons";


const calender = <FontAwesomeIcon icon={faCalendarPlus} />
const user = <FontAwesomeIcon icon={faUser} />

const BlogSideBar = () => {
  return (
    <div>
      <div className="mt-5">
            <h3>Search Hear</h3>
            <hr />
            <input type="text" placeholder="Search Tour..." />
          </div>
          <div className="categori-list">
            <h2 className="pt-3">Categories</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <a href="#!">
                  New York City <span className="categori">(20)</span>
                </a>
              </li>
              <li className="list-group-item">
                <a href="#!">
                  Adventure Tour <span className="categori">(08)</span>
                </a>
              </li>
              <li className="list-group-item">
                <a href="#!">
                  Couple Tour <span className="categori">(18)</span>
                </a>
              </li>
              <li className="list-group-item">
                <a href="#!">
                  Village Tour <span className="categori">(21)</span>
                </a>
              </li>
              <li className="list-group-item">
                <a href="#!">
                  Group Tour <span className="categori">(09)</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="pt-3">Popular Post</h2>
            <hr />
            <div className="d-flex">
              <div className="me-3 w-25">
                <img src={download} className="w-100" alt="" />
              </div>
              <div className="w-75">
                <div className="mb-3 f-w">Lake Garda</div>
                <div className="d-flex">
                  <div className="me-2 w-100 f-s">{user} Dina Jems</div>
                  <div className="w-100 f-s">{calender} 21 April, 2021</div>
                </div>
              </div>
            </div>
            <br />
            <div className="d-flex">
              <div className="me-3 w-25">
                <img src={download2} className="w-100" alt="" />
              </div>
              <div className="w-75">
                <div className="mb-3 f-w">Parish Hill.</div>
                <div className="d-flex">
                  <div className="me-2 w-100 f-s">{user} Dina Jems</div>
                  <div className="w-100 f-s">{calender} 12 June, 2021</div>
                </div>
              </div>
            </div>
            <br />
            <div className="d-flex">
              <div className="me-3 w-25">
                <img src={download3} className="w-100" alt="" />
              </div>
              <div className="w-75">
                <div className="mb-3 f-w">Mount Dtna.</div>
                <div className="d-flex">
                  <div className="me-2 w-100 f-s">{user} Dina Jems</div>
                  <div className="w-100 f-s">{calender} 02 sept, 2021</div>
                </div>
              </div>
            </div>
            <br />
            <div className="d-flex">
              <div className="me-3 w-25">
                <img src={download4} className="w-100" alt="" />
              </div>
              <div className="w-75">
                <div className="mb-3 f-w">Lake Garda</div>
                <div className="d-flex">
                  <div className="me-2 w-100 f-s">{user} Dina Jems</div>
                  <div className="w-100 f-s">{calender} 25 Nov, 2021</div>
                </div>
              </div>
            </div>
            <br />
            <div className="d-flex">
              <div className="me-3 w-25">
                <img src={download5} className="w-100" alt="" />
              </div>
              <div className="w-75">
                <div className="mb-3 f-w">Franch Rivira</div>
                <div className="d-flex">
                  <div className="me-2 w-100 f-s">{user} Dina Jems</div>
                  <div className="w-100 f-s">{calender} 11 Jan, 2022</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="pt-3">Tages</h2>
            <hr />
            <ul className="d-flex flex-wrap tages">
              <li className="p-2"><a href="#!"><button className="button">Adventure</button></a></li>
              <li className="p-2"><a href="#!"><button className="button">Trip</button></a></li>
              <li className="p-2"><a href="#!"><button className="button">Guided</button></a></li>
              <li className="p-2"><a href="#!"><button className="button">Historical</button></a></li>
              <li className="p-2"><a href="#!"><button className="button">Road Trips</button></a></li>
              <li className="p-2"><a href="#!"><button className="button">Tourist</button></a></li>
              <li className="p-2"><a href="#!"><button className="button">Cultural</button></a></li>
              <li className="p-2"><a href="#!"><button className="button">Natural Tour</button></a></li>
              <li className="p-2"><a href="#!"><button className="button">Journey</button></a></li>
            </ul>
          </div>
          <div>
            <h2 className="pt-3">Gallery</h2>
            <hr />
            <ul className="d-flex flex-wrap gallery">
              <li className="p-1"><a href="#!"><img src={download} className="w-100" alt="" /></a></li>
              <li className="p-1"><a href="#!"><img src={download2} className="w-100" alt="" /></a></li>
              <li className="p-1"><a href="#!"><img src={download3} className="w-100" alt="" /></a></li>
              <li className="p-1"><a href="#!"><img src={download4} className="w-100" alt="" /></a></li>
              <li className="p-1"><a href="#!"><img src={download5} className="w-100" alt="" /></a></li>
              <li className="p-1"><a href="#!"><img src={download6} className="w-100" alt="" /></a></li>
            </ul>
          </div>
    </div>
  );
};

export default BlogSideBar;