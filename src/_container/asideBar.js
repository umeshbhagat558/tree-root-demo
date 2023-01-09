import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../_assest/assestHelper";
const AsideBar =( )=>{
    return(
        <div style={{ width: "18%", background: "rgb(128,128,128,.8)", height: "100vh" }}>
         <div style={{width:"100%",fontSize:"24px",fontWeight:"650",textAlign:"center"}}>
          <p style={{ wisth:"auto",margin:"0",padding:"10px 0 7px 0",color:"white"}}>Demo Test</p>
          <hr style={{color:"white",marginTop:'0',border:"1px solid white"}}/>
         </div>
        <div
          style={{
            width: "100%",
          }}
        >
          <div style={{ padding: "20px 15px 0px 10px" }}>
            <div>
              <a
              className=" btn btn-large  text-white"
                style={{
                  width: "100%",
                  padding: "4% 0 2% 0",
                  marginBottom: "6%",
                  fontWeight: "550",
                  borderRadius:".5em",
                  border:"1px solid gray",
                  background:'#a6aaad'
                }}
                href="/"
              >
               <SVG src={toAbsoluteUrl("/media/svg/table.svg")} />
               <span className="px-4">Add Data</span>
              </a>
            </div>
            <div>
              <a
              className=" btn btn-large  text-white"
                style={{
                  width: "100%",
                  padding: "4% 0 2% 0",
                  marginBottom: "6%",
                  fontWeight: "550",
                  borderRadius:".5em",
                  border:"1px solid gray",
                  background:'#a6aaad'
                }}
                href="/student-details"
              >
                 <SVG src={toAbsoluteUrl("/media/svg/addUserDetail.svg")} />
                 <span className="px-3">View Table</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AsideBar;