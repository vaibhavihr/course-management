import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#282c34", color: "#fff", padding: "1rem", marginTop: "2rem", textAlign: "center" }}>
      <p>&copy; {new Date().getFullYear()} Course Directory. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
