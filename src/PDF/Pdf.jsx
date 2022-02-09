import React from "react";
import "./pdf.css";
// import { useNavigate } from 'react-router-dom';

export default function Pdf({ data }) {
  // const history = useNavigate()
  console.log(data);
  return (
    <div
      style={{
        backgroundColor: "#F2EFEF",
        textAlign: "center",
        paddingBottom: "30px",
      }}
    >
      <div
        style={{
          width: "100%",
          backgroundColor: "ECE8E8",
          color: "navy",
          display: "inline-flex",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
        <h1 style={{ width: "100%" }}>Records inserted</h1>
      </div>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1 style={{ color: "gray" }}>country : {data.order_from_country}</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // width: "60%",
            justifyContent: "space-evenly",
          }}
        >
          <div style={{ width: 300 }}>
            <h2 style={{ color: "navy", textAlign: "left" }}>SHIPPER DETAIL</h2>
            <div style={{ display: "flex" }}>
              <h4 style={{ fontSize: "20px" }}>Shipper address : </h4>
              <p style={{ marginTop: "26px", fontSize: "20px" }}>
                {data.shipAddr}
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <h4 style={{ fontSize: "20px" }}>Shipper tellephone :</h4>
              <p style={{ marginTop: "26px", fontSize: "20px" }}>
                {data.shipTell}
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <h4 style={{ fontSize: "20px" }}>Shipper Email :</h4>
              <p style={{ marginTop: "26px", fontSize: "20px" }}>
                {data.shipEmail}
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <h4 style={{ fontSize: "20px" }}>Shipper PIC :</h4>
              <p style={{ marginTop: "26px", fontSize: "20px" }}>
                {data.shipPic}
              </p>
            </div>
          </div>
          <div style={{ width: 300 }}>
            <h2 style={{ color: "navy", textAlign: "left" }}>
              CONSIGNEE DETAIL
            </h2>
            <div style={{ display: "flex" }}>
              <h4 style={{ fontSize: "20px" }}>Consignee address : </h4>
              <p style={{ marginTop: "26px", fontSize: "20px" }}>
                {data.consAddr}
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <h4 style={{ fontSize: "20px" }}>Consignee tellephone :</h4>
              <p style={{ marginTop: "26px", fontSize: "20px" }}>
                {data.consTell}
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <h4 style={{ fontSize: "20px" }}>Consignee Email :</h4>
              <p style={{ marginTop: "26px", fontSize: "20px" }}>
                {data.consEmail}
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <h4 style={{ fontSize: "20px" }}>Consignee PIC :</h4>
              <p style={{ marginTop: "26px", fontSize: "20px" }}>
                {data.consPic}
              </p>
            </div>
          </div>
        </div>
        <h2 style={{ color: "navy", textAlign: "left" }}>OTHER DETAILS</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // width: "60%",
            justifyContent: "space-evenly",
          }}
        >
          <div style={{ width: 300 }}>
            {/* <h4 style={{fontSize:'20px'}}>TERMS</h4> */}
            <div style={{ display: "flex" }}>
              <h4 style={{ fontSize: "20px" }}>Competition : </h4>
              <p style={{ marginTop: "26px", fontSize: "20px" }}>
                {data.competition}
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <h4 style={{ fontSize: "20px" }}>Freight term :</h4>
              <p style={{ marginTop: "26px", fontSize: "20px" }}>
                {data.freight_term}
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <h4 style={{ fontSize: "20px" }}>Volume :</h4>
              <p style={{ marginTop: "26px", fontSize: "20px" }}>
                {data.volume}
              </p>
            </div>
          </div>
          <div style={{ width: 300 }}>
            {/* <h4 style={{fontSize:'20px'}}>LOADING</h4> */}
            <div style={{ display: "flex" }}>
              <h4 style={{ fontSize: "20px" }}>Port of Loading :</h4>
              <p style={{ marginTop: "26px", fontSize: "20px" }}>
                {data.port_of_loading}
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <h4 style={{ fontSize: "20px" }}>Port of Discharge :</h4>
              <p style={{ marginTop: "26px", fontSize: "20px" }}>
                {data.port_of_discharge}
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <h4 style={{ fontSize: "20px" }}>Final destination :</h4>
              <p style={{ marginTop: "26px", fontSize: "20px" }}>
                {data.final_destination}
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 style={{ color: "navy" }}>
        <b>REMARKS</b>
      </h1>
      <p style={{ marginTop: "26px", fontSize: "20px" }}>
        <b>{data.remark}</b>
      </p>
    </div>
  );
}
