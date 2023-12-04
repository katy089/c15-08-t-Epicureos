import React, { useState } from "react";
import { mainColors } from "../assets/colors.js";
import BImage from "../assets/images/backgroundimage.png";
import Icon from "../assets/images/icon.png";
import VerificationInputC from "../Components/VerificationInput/VerificationInputC.jsx";

function Validation() {
  const [loading, setLoading] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: mainColors.secondaryColorO,
        gap: "35px",
        overflow: "hidden",
      }}
    >
      <img
        alt="Background"
        src={BImage}
        style={{
          position: "absolute",
          zIndex: "-1",
          width: "100vw",
          height: "100vh",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
      />
      <img
        src={Icon}
        style={{
          paddingTop: "0px",
          height: "190px",
          marginBottom: "10px",
        }}
        alt="Epicureos"
      ></img>
      <h2
        style={{
          fontFamily: "Marcellus",
          fontWeight: "300",
          fontSize: "14px",
          marginBottom: "0px",
          color: mainColors.primaryColor,
          textAlign: "center",
        }}
      >
        Por favor, introduce el codigo de verificación <br /> que se te envió al
        correo
      </h2>
      <VerificationInputC loading={loading} setLoading={setLoading} />
    </div>
  );
}

export default Validation;
