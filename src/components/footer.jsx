import React from "react";

const Footer = () => {
  return (
    <p className="border-top pt-3 text-center">
      My First App &copy; {new Date().getUTCFullYear()}
    </p>
  );
};

export default Footer;
