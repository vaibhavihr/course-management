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
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      <div>
        <label>Course Name: </label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          style={{ margin: "0.5rem 0" }}
        />
      </div>
      <div>
        <label>Course Description: </label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
          style={{ margin: "0.5rem 0", width: "100%", height: "4rem" }}
        />
      </div>
      <div>
        <label>Image URL: </label>
        <input 
          type="url" 
          value={image} 
          onChange={(e) => setImage(e.target.value)} 
          required 
          style={{ margin: "0.5rem 0" }}
        />
      </div>
      <button type="submit" style={{ backgroundColor: "#4CAF50", color: "#fff", border: "none", padding: "0.5rem 1rem" }}>
        Add Course
      </button>
    </form>
  );
};

export default CourseForm;
