import React from "react";
import Button from "../Components/Button/Button.jsx";
import { mainColors } from "../assets/colors.js";
import { InputNom,InputTel, InputMail, InputPass } from "../Components/Input/Input.jsx";
import { Link } from "react-router-dom";
import BImage from "../assets/images/backgroundimage.png";
import Icon from "../assets/images/icon.png";
function Signup() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: mainColors.secondaryColorO,
        gap: "11px",
        overflow: "hidden",
      }}
    >
      <img
        src={Icon}
        style={{
          paddingTop: "24px",
          height: "190px",
          marginBottom: "10px",
        }}
        alt="Epicureos"
      ></img>
      <img
        alt="Background"
        src={BImage}
        style={{
          position: "absolute",
          zIndex: "-1",
          width: "100vw",
          height: "100vh",
        }}
      />
      <Link
        to={"/login"}
        style={{ textDecoration: "none", color: mainColors.primaryColor }}
      >
        <h2
          style={{
            fontFamily: "Marcellus",
            fontWeight: "300",
            fontSize: "15px",
            marginBottom: "20px",
            color: mainColors.primaryColor,
          }}
        >
          ¿Ya tenés una cuenta?{" "}
          <span style={{ textDecoration: "underline" }}>Ingresa</span>
        </h2>
      </Link>
      <InputNom></InputNom>
      <InputTel></InputTel>
      <InputMail></InputMail>
      <InputPass></InputPass>

      <div style={{ paddingTop: "27px" }}></div>

      <Button
        bColor={mainColors.buttonColor}
        tColor={mainColors.textColor}
        iColor={mainColors.inactiveColor}
        text={"REGISTRATE"}
      ></Button>
    </div>
  );
}
  
  export default Signup;
  