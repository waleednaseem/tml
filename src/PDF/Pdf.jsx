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
      <div>
        <h2 style={{ margin: "5px", paddingTop: "40px" }}>SHIPPER DETAIL</h2>
        <p style={{ margin: "5px" }}>
          Order from country : {data.order_from_country}
        </p>
        <p>Shipper address : {data.shipAddr}</p>
        <p>Shipper tellephone :{data.shipTell}</p>
        <p>Shipper Email :{data.shipEmail}</p>
        <p>Shipper PIC :{data.shipPic}</p>
        <h2 style={{ margin: "5px" }}>CONSIGNEE DETAIL</h2>
        <p style={{ margin: "5px" }}><span >Consignee address : </span>{data.consAddr}</p>
        <p style={{ margin: "5px" }}>Consignee tellephone :{data.consTell}</p>
        <p style={{ margin: "5px" }}>Consignee Email :{data.consEmail}</p>
        <p style={{ margin: "5px" }}>Consignee PIC :{data.consPic}</p>
        <h2 style={{ margin: "5px" }}>OTHER DETAILS</h2>
        <p style={{ margin: "5px" }}>Competition : {data.competition}</p>
        <p style={{ margin: "5px" }}>Volume :{data.volume}</p>
        <p style={{ margin: "5px" }}>Port of Loading :{data.port_of_loading}</p>
        <p style={{ margin: "5px" }}>
          Port of Discharge :{data.port_of_discharge}
        </p>
        <p style={{ margin: "5px" }}>
          Final destination :{data.final_destination}
        </p>
        <p style={{ margin: "5px" }}>Freight term :{data.freight_term}</p>
        <h1 style={{ color: "red" }}>REMARKS</h1>
        <p style={{ margin: "5px" }}>{data.remark}</p>
      </div>
    </div>
  );
}
