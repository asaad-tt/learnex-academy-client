import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseDetails from "../CourseDetails/CourseDetails";
import "./Category.css";

const Category = () => {
  const singleCourse = useLoaderData();
  console.log(singleCourse);
  return (
    <div className="Course_details_page pt-5">
      {singleCourse.map((course) => (
        <CourseDetails key={course.category_id} course={course}></CourseDetails>
      ))}
    </div>
  );
};

export default Category;
