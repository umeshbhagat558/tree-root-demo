import React, { useEffect, useState } from "react";

export const Table = () => {
  const [studentDetail, setStudentDetail] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userDetails")) || [];
    userData && setStudentDetail(userData);
  }, [loader]);
  return (
    <div className="card" style={{marginTop:"70px"}} >
      <div className="card-header">
        <p className="m-0 foont-weight-bolder h5 py-2 " style={{color:"rgb(115, 115, 115)"}}>USER DETAILS</p>
      </div>
      <div className="card-body" style={{height:"370px",overflow:"scroll"}}>
        <table className="table">
          {console.log(studentDetail)}
          <thead>
            <tr>
            <th scope="col">S.No</th>
              <th scope="col">Student Name</th>
              <th scope="col">Email Id</th>
              <th scope="col">Father's Name</th>
              <th scope="col">Contact No.</th>
              <th scope="col">School name</th>
            </tr>
          </thead>
          <tbody>
            {studentDetail &&
              studentDetail.length > 0 &&
              studentDetail.map((res, indexOf) => {
                return (
                  <tr key={indexOf}>
                     <td>{indexOf+1}</td>
                    <td>{res.studentName?res.studentName:"- no data -"}</td>
                    <td>{res.emailId?res.emailId:"- no data -"}</td>
                    <td>{res.fatherName?res.fatherName:"- no data -"}</td>
                    <td>{res.contactNo?res.contactNo:"- no data -"}</td>
                    <td>{res.SchoolName?res.SchoolName:"- no data -"}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {studentDetail && studentDetail.length < 1 && (
          <div className="w-100 h6 font-weight-bolder text-center py-4">
            Data Empty...
          </div>
        )}
      </div>
      <div className="card-footer">
        <div className="row">
          <div className="col-lg-12">
            <div className="w-auto d-flex justify-content-end">
              <div
                className="btn btn-secondary btn-md"
                onClick={() => {
                  localStorage.removeItem("userDetails");
                  setLoader(!setLoader);
                }}
              >
                Clear All Data
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
