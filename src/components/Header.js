import React from "react";

const Header = ({ view, setView, loggedInUser, onLogout }) => {
  return (
    <header
      style={{
        background: "linear-gradient(135deg, #6a11cb, #2575fc)", // Gradient background
        color: "#f4f4f4",
        padding: "20px 30px",
        textAlign: "center",
        borderRadius: "12px",
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)", // Enhanced shadow
        marginBottom: "20px",
        transition: "all 0.3s ease-in-out",
      }}
    >
      {/* Header Title */}
      <h1
        style={{
          fontSize: "30px",
          fontWeight: "800",
          letterSpacing: "1.2px",
          marginBottom: "12px",
        }}
      >
        Course Management Dashboard
      </h1>

      {/* Navigation Buttons */}
      <nav
        style={{
          marginTop: "12px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        <button
          style={{
            padding: "12px 30px",
            backgroundColor: view === "add" ? "#f39c12" : "#16a085",
            border: "none",
            borderRadius: "12px",
            color: "#fff",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background-color 0.3s ease, transform 0.2s ease",
          }}
          onClick={() => setView("add")}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          Add Courses
        </button>

        <button
          style={{
            padding: "12px 30px",
            backgroundColor: view === "enrolled" ? "#f39c12" : "#16a085",
            border: "none",
            borderRadius: "12px",
            color: "#fff",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background-color 0.3s ease, transform 0.2s ease",
          }}
          onClick={() => setView("enrolled")}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          Enrolled Courses
        </button>

        <button
          style={{
            padding: "12px 30px",
            backgroundColor: view === "saved" ? "#f39c12" : "#16a085",
            border: "none",
            borderRadius: "12px",
            color: "#fff",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background-color 0.3s ease, transform 0.2s ease",
          }}
          onClick={() => setView("saved")}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          Saved for Later
        </button>

        <button
          style={{
            padding: "12px 30px",
            backgroundColor: "#e74c3c",
            border: "none",
            borderRadius: "12px",
            color: "#fff",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background-color 0.3s ease, transform 0.2s ease",
          }}
          onClick={onLogout}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          Logout
        </button>
      </nav>

      {/* Welcome Message */}
      <p
        style={{
          fontSize: "18px",
          fontWeight: "500",
          marginTop: "18px",
          color: "#e1e1e1",
          letterSpacing: "0.5px",
        }}
      >
        Welcome, <strong>{loggedInUser}</strong>!
      </p>
    </header>
  );
};

export default Header;
