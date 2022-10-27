import React from "react";
import { useLoaderData } from "react-router-dom";
import "./CheckOut.css";

const CheckOut = () => {
  const course = useLoaderData();
  console.log(course);
  const { title, price } = course;
  return (
    <div className="checkout_page">
      <div className="text-white ">
        <h1 className="text-center pt-5 check_page_title">{title}</h1>
        <div className="check_course d-flex flex-column align-items-center mt-5">
          <h2>get your favourite course</h2>
          <h5>we provide special bonus for you</h5>
          <div className="check_list">
            <li>instant support</li>
            <li>Lifetime Access</li>
            <li>Problem Solution</li>
            <li>80 hrs video time</li>
            <li>52 special lectures</li>
            <li>More Things included</li>
          </div>
          <p className="check_price">
            once in a lifetime pay only: <span>{price}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
