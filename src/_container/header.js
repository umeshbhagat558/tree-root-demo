import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../_assest/assestHelper";

const Header = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "55px",
        background:'rgb(188, 192, 194)',
        textAlign: "right",
        borderBottom: "1px solid gray",
      }}
    >
      <div style={{ width: "100%" }}>
        {/* <SVG src={toAbsoluteUrl("/media/svg/demoLogo.svg")} /> */}
        <p
          style={{
            margin: "0",
            fontSize: "20px",
            color: "white",
            fontWeight: "650",
            padding: "15px 30px 0 10px",
          }}
        >
          STUDENT DETAILS
        </p>
      </div>
    </div>
  );
};

export default Header;
