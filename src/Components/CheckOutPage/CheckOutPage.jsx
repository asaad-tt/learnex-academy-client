import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOutPage = () => {
  const course = useLoaderData();
  console.log(course);
  return (
    <div>
      <h2>hello</h2>
    </div>
  );
};

export default CheckOutPage;
