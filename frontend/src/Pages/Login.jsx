import React from "react";
import Button from "../Components/Button/Button";
import { mainColors } from "../assets/colors.js";
import { InputMail, InputPass } from "../Components/Input/Input.jsx";
function Login() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: mainColors.secondaryColor,
        gap: "10px",
      }}
    >
      <h1
        style={{ fontFamily: "Marcellus", fontWeight: "300", fontSize: "35px" }}
      >
        Lorem Ipsum
      </h1>
      <a
        href="#2"
        style={{ textDecoration: "none", color: mainColors.primaryColor }}
      >
        <h2
          style={{
            fontFamily: "Marcellus",
            fontWeight: "300",
            fontSize: "14px",
          }}
        >
          ¿YA TENÉS UNA CUENTA? INGRESÁ
        </h2>
      </a>
      <InputMail></InputMail>
      <InputPass></InputPass>
      <a
        href="#2"
        style={{
          maxWidth: "400px",
          width: "80%",
          alignSelf: "center",
          textAlign: "left",
          textDecoration: "none",
          color: mainColors.primaryColor,
        }}
      >
        <h2
          style={{
            fontFamily: "Marcellus",
            fontWeight: "300",
            fontSize: "12px",
          }}
        >
          ¿OLVIDASTE TU CONTRASEÑA?
        </h2>
      </a>

      <Button
        bColor={mainColors.primaryColor}
        tColor={mainColors.textColor}
        iColor={mainColors.inactiveColor}
        text={"INICIAR SESIÓN"}
      ></Button>
    </div>
  );
}

export default Login;
