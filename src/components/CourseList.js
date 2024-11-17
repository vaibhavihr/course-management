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
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#f4f7fc", // Light background color for the entire container
      }}
    >
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "600",
          textAlign: "center",
          color: "#333",
          marginBottom: "1.5rem",
        }}
      >
        Available Courses
      </h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {courses.map((course, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "1rem",
              borderRadius: "8px",
              borderBottom: "1px solid #ddd",
              backgroundColor: "#fff",
              marginBottom: "1rem",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth hover effect
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.02)";
              e.target.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
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
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#444",
                  wordBreak: "break-word", // Handles long course names gracefully
                }}
              >
                {course.name}
              </span>
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
                    padding: "0.4rem 1rem",
                    borderRadius: "5px",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
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
                    padding: "0.4rem 1rem",
                    borderRadius: "5px",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = "#e53935")}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "#f44336")}
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
                  padding: "0.4rem 1rem",
                  borderRadius: "5px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = course.saved ? "#e53935" : "#1976D2")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = course.saved ? "#f44336" : "#2196F3")
                }
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
                  padding: "0.4rem 1rem",
                  borderRadius: "5px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#e53935")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#f44336")}
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
