import React, { useState } from "react";

const CourseForm = ({ addCourse }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addCourse({ name, description, image });
    setName("");
    setDescription("");
    setImage("");
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f6f9",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Dashboard Header */}
      <div
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          width: "100%",
          padding: "1rem 2rem",
          borderRadius: "8px 8px 0 0",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "28px", margin: 0 }}>Course Management</h1>
      </div>

      {/* Dashboard Body */}
      <div
        style={{
          padding: "2rem",
          backgroundColor: "#f8f9fa", // Light background for the form container
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "600px",
          margin: "auto",
          transition: "all 0.3s ease",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#333",
            textAlign: "center",
            marginBottom: "1.5rem",
            letterSpacing: "0.5px",
          }}
        >
          Add a New Course
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Input fields for Course */}
          <div style={{ marginBottom: "1rem" }}>
            <label
              style={{
                fontSize: "16px",
                fontWeight: "500",
                color: "#333",
                marginBottom: "0.5rem",
                display: "block",
              }}
            >
              Course Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                padding: "0.8rem",
                width: "100%",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "16px",
                color: "#333",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ fontSize: "16px", fontWeight: "500" }}>
              Course Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              style={{
                padding: "0.8rem",
                width: "100%",
                height: "6rem",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "16px",
                color: "#333",
              }}
            />
          </div>
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ fontSize: "16px", fontWeight: "500" }}>
              Image URL
            </label>
            <input
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
              style={{
                padding: "0.8rem",
                width: "100%",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "16px",
                color: "#333",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#4CAF50",
              color: "#fff",
              border: "none",
              padding: "0.8rem 2rem",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseForm;
