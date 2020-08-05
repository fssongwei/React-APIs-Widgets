import React from "react";

const Footer = () => {
  return (
    <div
      className="d-flex justify-content-center"
      style={{
        position: "absolute",
        bottom: "0",
        width: "100%",
        height: "50px",
        background: "#fafafa",
      }}
    >
      <label className="m-auto">©&nbsp;2020 Wei Song</label>
    </div>
  );
};

export default Footer;
