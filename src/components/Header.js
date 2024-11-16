import React from "react";

const Header = ({ view, setView, loggedInUser, onLogout }) => {
  return (
    <header
      style={{
        backgroundColor: "#0073e6",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1>Course Management</h1>
      <nav style={{ marginTop: "10px" }}>
        <button
          style={{
            margin: "5px",
            padding: "10px 20px",
            backgroundColor: view === "add" ? "#f4b400" : "#34a853",
            border: "none",
            borderRadius: "4px",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={() => setView("add")}
        >
          Add Courses
        </button>
        <button
          style={{
            margin: "5px",
            padding: "10px 20px",
            backgroundColor: view === "enrolled" ? "#f4b400" : "#34a853",
            border: "none",
            borderRadius: "4px",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={() => setView("enrolled")}
        >
          Enrolled Courses
        </button>
        <button
          style={{
            margin: "5px",
            padding: "10px 20px",
            backgroundColor: view === "saved" ? "#f4b400" : "#34a853",
            border: "none",
            borderRadius: "4px",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={() => setView("saved")}
        >
          Saved for Later
        </button>
        <button
          style={{
            margin: "5px",
            padding: "10px 20px",
            backgroundColor: "#d9534f",
            border: "none",
            borderRadius: "4px",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={onLogout}
        >
          Logout
        </button>
      </nav>
      <p>Welcome, {loggedInUser}!</p>
    </header>
  );
};

export default Header;
