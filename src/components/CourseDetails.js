import React from "react";

const CourseDetails = ({ course }) => {
  if (!course) {
    return <p><b>Select a course to see the details.</b></p>;
  }

  return (
    <div style={{ marginTop: "1rem" }}>
      <h2>Course Details</h2>
      <p><strong>Name:</strong> {course.name}</p>
      <p><strong>Description:</strong> {course.description}</p>
      {course.image && <img src={course.image} alt={course.name} style={{ maxWidth: "100%", borderRadius: "8px" }} />}
      {course.enrolled && <p style={{ color: "green" }}><strong>Status:</strong> Enrolled</p>}
      {course.saved && <p style={{ color: "blue" }}><strong>Status:</strong> Saved for Later</p>}
    </div>
  );
};

export default CourseDetails;
