import React, { useEffect, useState } from "react";

export const AddDetailForm = () => {
 const [studentName,setStudentName]=useState("");
 const [fatherName,setFatherName]=useState("");
 const [contactNo,setContactNo]=useState("");
 const [emailId,setEmailId]=useState("");
 const [SchoolName,setSchoolName]=useState("");

 const [studentDetail,setStudentDetail] = useState([]);

 useEffect(() => {
  const userDataList = JSON.parse(localStorage.getItem("userDetails")) || [];
  userDataList && setStudentDetail(userDataList);
}, []);

 const saveDataToTable = (
  { studentName,
   emailId,
   fatherName,
   contactNo,
   SchoolName}
 ) => {
   studentDetail.push({
     studentName: studentName,
     emailId: emailId,
     fatherName: fatherName,
     contactNo: contactNo,
     SchoolName: SchoolName,
   });
   console.log(studentDetail);
   localStorage.setItem("userDetails", JSON.stringify(studentDetail));
   setStudentDetail(studentDetail);
   setStudentName("");
   setEmailId("");
   setFatherName("");
   setSchoolName("");
   setContactNo("");
 };

  return (
    <div className="card" style={{marginTop:"70px"}}>
      <div
        className="card-header"
        style={{
          fontSize: "20px",
          fontWeight: "bolder",
          color: "rgb(115, 115, 115)",
          padding: "10px 10px 10px 10px",
        }}
      >
        ADD DETAILS
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-6">
            <label
              style={{ fontWeight: "550", color: "#5c5858", fontSize: "16px" }}
            >
              Name :
            </label>
            <input
              className="border"
              value={studentName}
              style={{
                width: "98%",
                marginTop: "5px",
                padding: "8px 0 4px 10px",
                borderRadius: ".3em",
                marginBottom: "10px",
              }}
              type="text"
              placeholder="Enter Student Name"
               onChange={(e)=>{
                setStudentName(e.target.value)
              }}
            />
          </div>
          <div className="col-lg-6">
            <label
              style={{ fontWeight: "550", color: "#5c5858", fontSize: "16px" }}
            >
             Email Id:
            </label>
            <input
              className="border"
              value={emailId}
              style={{
                width: "98%",
                marginTop: "5px",
                padding: "8px 0 4px 10px",
                borderRadius: ".3em",
                marginBottom: "10px",
              }}
              type="text"
              placeholder="Enter Email Id"
             onChange={(e)=>{
               setEmailId(e.target.value)
              }}/>

          </div>
          <div className="col-lg-6">
            <label
              style={{ fontWeight: "550", color: "#5c5858", fontSize: "16px" }}
            >
              Father's Name :
            </label>
            <input
              className="border"
              value={fatherName}
              style={{
                width: "98%",
                marginTop: "5px",
                padding: "8px 0 4px 10px",
                borderRadius: ".3em",
                marginBottom: "10px",
              }}
              type="text"
              placeholder="Enter Father's Name"
             onChange={(e)=>{
                setFatherName(e.target.value)
              }}/>

          </div>
          <div className="col-lg-6">
            <label
              style={{ fontWeight: "550", color: "#5c5858", fontSize: "16px" }}
            >
              Contact No. :
            </label>
            <input
              className="border"
              value={contactNo}
              style={{
                width: "98%",
                marginTop: "5px",
                padding: "8px 0 4px 10px",
                borderRadius: ".3em",
                marginBottom: "10px",
              }}
              type="number"
              placeholder="Enter Contact Number"
             onChange={(e)=>{
                setContactNo(e.target.value)
              }}/>

          </div>
          <div className="col-lg-6">
            <label
              style={{ fontWeight: "550", color: "#5c5858", fontSize: "16px" }}
            >
              School Name :
            </label>
            <input
              className="border"
              value={SchoolName}
              style={{
                width: "98%",
                marginTop: "5px",
                padding: "8px 0 4px 10px",
                borderRadius: ".3em",
                marginBottom: "10px",
              }}
              type="text"
              placeholder="Enter School Name"
             onChange={(e)=>{
                setSchoolName(e.target.value)
              }}/>

          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="row m-0">
          <div className="col-lg-12 py-2 d-flex justify-content-end">
                <div className="btn-secondary btn-md rounded px-4 py-2" 
                onClick={()=>{
               //  setShow("table")
                 saveDataToTable({studentName,emailId,fatherName,contactNo,SchoolName}); 
                }}>save</div>
          </div>
        </div>
      </div>
    </div>
  );
};
