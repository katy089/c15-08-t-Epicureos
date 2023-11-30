import React from "react";
import Button from "../Components/Button/Button";
import { mainColors } from "../assets/colors.js";
import { InputMail, InputPass } from "../Components/Input/Input.jsx";
import { Link } from "react-router-dom";
import BImage from "../assets/images/backgroundimage.png";
import Icon from "../assets/images/icon.png";
function Login() {
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
        gap: "10px",
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
          paddingTop: "24px",
          height: "190px",
          marginBottom: "10px",
        }}
        alt="Epicureos"
      ></img>
      <Link
        to={"/"}
        style={{
          textDecoration: "none",
          color: mainColors.primaryColor,
          marginBottom: "20px",
        }}
      >
        <h2
          style={{
            fontFamily: "Marcellus",
            fontWeight: "300",
            fontSize: "15px",
            marginBottom: "0px",
            color: mainColors.primaryColor,
          }}
        >
          ¿No tenés una cuenta?{" "}
          <span style={{ textDecoration: "underline" }}>Registrate</span>
        </h2>
      </Link>
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
          marginBottom: "23px",
        }}
      >
        <h2
          style={{
            margin: "0px",
            fontFamily: "LEMONMILK",
            fontWeight: "300",
            fontSize: "10px",
            color: mainColors.primaryColor,
          }}
        >
          ¿OLVIDASTE TU CONTRASEÑA?
        </h2>
      </a>

      <Button
        bColor={mainColors.buttonColor}
        tColor={mainColors.textColor}
        iColor={mainColors.inactiveColor}
        text={"INICIAR SESIÓN"}
        click={() => console.log("Sign in")}
      ></Button>
    </div>
  );
}

export default Login;
