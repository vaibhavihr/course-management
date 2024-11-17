import React, { useState } from "react";

const LoginSignup = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in:", formData);
      onLogin(formData.email); // Simulate login
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
      } else {
        console.log("Signing up:", formData);
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to bottom, #0073e6, #00c6ff)", // Full background gradient
        color: "#fff",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "30px",
          backgroundColor: "#fff",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "700",
            color: "#0073e6",
            marginBottom: "20px",
          }}
        >
          {isLogin ? "Welcome Back!" : "Create Your Account"}
        </h2>
        <form onSubmit={handleFormSubmit} style={{ marginTop: "20px" }}>
          {!isLogin && (
            <div style={{ marginBottom: "20px", textAlign: "left" }}>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  fontWeight: "500",
                  color: "#555",
                  marginBottom: "5px",
                }}
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                required={!isLogin}
                style={{
                  width: "100%",
                  padding: "12px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  marginTop: "5px",
                  outline: "none",
                  transition: "border-color 0.3s ease",
                }}
              />
            </div>
          )}
          <div style={{ marginBottom: "20px", textAlign: "left" }}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                fontWeight: "500",
                color: "#555",
                marginBottom: "5px",
              }}
            >
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
                padding: "12px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                marginTop: "5px",
                outline: "none",
                transition: "border-color 0.3s ease",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px", textAlign: "left" }}>
            <label
              htmlFor="password"
              style={{
                display: "block",
                fontWeight: "500",
                color: "#555",
                marginBottom: "5px",
              }}
            >
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
                padding: "12px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                marginTop: "5px",
                outline: "none",
                transition: "border-color 0.3s ease",
              }}
            />
          </div>
          {!isLogin && (
            <div style={{ marginBottom: "20px", textAlign: "left" }}>
              <label
                htmlFor="confirmPassword"
                style={{
                  display: "block",
                  fontWeight: "500",
                  color: "#555",
                  marginBottom: "5px",
                }}
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm your password"
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  marginTop: "5px",
                  outline: "none",
                  transition: "border-color 0.3s ease",
                }}
              />
            </div>
          )}
          {isLogin && (
            <div style={{ textAlign: "right", marginBottom: "20px" }}>
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
                  transition: "color 0.3s ease",
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
              padding: "14px",
              backgroundColor: "#0073e6",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
              transition: "background-color 0.3s ease, transform 0.2s ease",
            }}
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <div style={{ marginTop: "20px", fontSize: "14px", color: "#555" }}>
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <span
                onClick={() => setIsLogin(false)}
                style={{
                  color: "#0073e6",
                  cursor: "pointer",
                  fontWeight: "600",
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
                  fontWeight: "600",
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
