import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseDetails from "../CourseDetails/CourseDetails";

const Category = () => {
  const singleCourse = useLoaderData();
  console.log(singleCourse);
  return (
    <div>
      <h2>this new category mama {singleCourse.length}</h2>
      {singleCourse.map((course) => (
        <CourseDetails course={course}></CourseDetails>
      ))}
    </div>
  );
};

export default Category;
