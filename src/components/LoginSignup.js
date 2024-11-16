import React, { useState } from "react";

const LoginSignup = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle Login or Signup Logic
    if (isLogin) {
      console.log("Logging in:", formData);
      onLogin(formData.email); // Simulate login
    } else {
      console.log("Signing up:", formData);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f3f4f6",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <h2>{isLogin ? "Welcome back" : "Sign up"}</h2>
        <form onSubmit={handleFormSubmit} style={{ marginTop: "20px" }}>
          <div style={{ marginBottom: "15px", textAlign: "left" }}>
            <label htmlFor="email" style={{ display: "block", fontWeight: "bold" }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="name@email.com"
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                marginTop: "5px",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px", textAlign: "left" }}>
            <label htmlFor="password" style={{ display: "block", fontWeight: "bold" }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                marginTop: "5px",
              }}
            />
          </div>
          {isLogin && (
            <div style={{ textAlign: "right", marginBottom: "15px" }}>
              <button
                type="button"
                onClick={() => alert("Password recovery process")}
                style={{
                  fontSize: "14px",
                  color: "#0073e6",
                  background: "none",
                  border: "none",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Forgot password?
              </button>
            </div>
          )}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#0073e6",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <div style={{ marginTop: "15px", fontSize: "14px" }}>
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <span
                onClick={() => setIsLogin(false)}
                style={{
                  color: "#0073e6",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Sign up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setIsLogin(true)}
                style={{
                  color: "#0073e6",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Log in
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
