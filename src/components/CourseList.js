import React from "react";

const CourseList = ({
  courses,
  onSelectCourse,
  onDeleteCourse,
  onEnrollCourse,
  onSaveForLater,
  onUnenrollCourse,
}) => {
  return (
    <div>
      <h2>Available Courses</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {courses.map((course, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "1rem",
              borderBottom: "1px solid #ccc",
              justifyContent: "space-between",
            }}
          >
            <div
              onClick={() => onSelectCourse(course)}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                flex: "1",
              }}
            >
              <img
                src={course.image}
                alt={course.name}
                style={{
                  width: "80px",
                  height: "80px",
                  marginRight: "1rem",
                  borderRadius: "8px",
                }}
              />
              <span>{course.name}</span>
            </div>
            <div>
              {!course.enrolled ? (
                <button
                  onClick={() => onEnrollCourse(course)}
                  style={{
                    margin: "0 0.5rem",
                    backgroundColor: "#4CAF50",
                    color: "#fff",
                    border: "none",
                    padding: "0.3rem 0.8rem",
                  }}
                >
                  Enroll
                </button>
              ) : (
                <button
                  onClick={() => onUnenrollCourse(course)}
                  style={{
                    margin: "0 0.5rem",
                    backgroundColor: "#f44336",
                    color: "#fff",
                    border: "none",
                    padding: "0.3rem 0.8rem",
                  }}
                >
                  Unenroll
                </button>
              )}
              <button
                onClick={() =>
                  course.saved
                    ? onSaveForLater(course, false) // Unsave
                    : onSaveForLater(course, true) // Save
                }
                style={{
                  margin: "0 0.5rem",
                  backgroundColor: course.saved ? "#f44336" : "#2196F3",
                  color: "#fff",
                  border: "none",
                  padding: "0.3rem 0.8rem",
                }}
              >
                {course.saved ? "Unsave" : "Save for Later"}
              </button>
              <button
                onClick={() => onDeleteCourse(index)}
                style={{
                  margin: "0 0.5rem",
                  backgroundColor: "#f44336",
                  color: "#fff",
                  border: "none",
                  padding: "0.3rem 0.8rem",
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
