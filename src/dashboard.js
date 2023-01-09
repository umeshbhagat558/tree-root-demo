import React, { useState } from "react";
import AsideBar from "./_container/asideBar";
import Header from "./_container/header";

const Dashboard = ({ children }) => {
  const [studentDetail, setStudentDetail] = useState([]);

  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "100%", display: "flex" }}>
        <AsideBar/>
        <div style={{ width: "82%" }}>
          <Header />
          <div
            style={{
              width: "100%",
              padding: "2% 5%",
              background: "rgb(244,246,249)",
              height: "85%",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
