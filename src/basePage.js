import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {Table} from "./_component/table";
import { AddDetailForm } from "./_component/addDataForm";

const BaseRoute = () =>{
    return(
     <Routes>
        {/* <Route path="/" element={<Dashboard/>}/> */}
        <Route path="/" element={<AddDetailForm/>} />
        <Route path="/student-details" element={<Table />} />
      </Routes>
    );
}

export default BaseRoute;