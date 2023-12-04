import React, { useState } from "react";
import Button from "../Components/Button/Button";
import { mainColors } from "../assets/colors.js";
import { InputMail, InputPass } from "../Components/Input/Input.jsx";
import { Link } from "react-router-dom";
import BImage from "../assets/images/backgroundimage.png";
import Icon from "../assets/images/icon.png";

import { Spinner } from "react-activity";
import "react-activity/dist/library.css";

import validator from "validator";
function Login() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [camposVacios, setCamposVacios] = useState(false);
  const [loginFail, setLoginFail] = useState(false);

  const checkHandleLogin = () => {
    if (validator.isEmail(mail) && pass.length > 0) {
      handleLogIn();
      setCamposVacios(false);
      setLoginFail(false);
    } else {
      setCamposVacios(true);
      setLoginFail(false);
    }
  };
  const handleLogIn = async () => {
    console.log(mail, pass);
    setLoading(true);
    await fetch(`https://restaurant-c2gx.onrender.com/api/v1/auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: mail.toLowerCase(), password: pass }),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("User Logged");
          alert("User Logged");
          setLoading(false);
          setLoginFail(false);
        }
        if (response.status === 400) {
          console.log("User doesnt exist");
          setLoginFail(true);
          setLoading(false);
        } else {
          console.log("User doesnt exist");
          setLoginFail(true);
          setLoading(false);
        }
      })
      .catch((error) => console.log(error));
  };
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
          paddingTop: "0px",
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
            fontSize: "16px",
            marginBottom: "0px",
            color: mainColors.primaryColor,
          }}
        >
          ¿No tenés una cuenta?{" "}
          <span style={{ textDecoration: "underline" }}>Registrate</span>
        </h2>
      </Link>
      {camposVacios && (
        <h2
          style={{
            fontFamily: "Marcellus",
            fontWeight: "300",
            fontSize: "12px",
            marginBottom: "10px",
            color: mainColors.primaryColor,
            textAlign: "center",
          }}
        >
          Favor de llenar todos los campos
        </h2>
      )}
      {loginFail && (
        <h2
          style={{
            fontFamily: "Marcellus",
            fontWeight: "300",
            fontSize: "12px",
            marginBottom: "10px",
            color: mainColors.primaryColor,
            textAlign: "center",
          }}
        >
          Usuario o contraseña incorrecta.
          <br /> Por favor, inténtelo de nuevo
        </h2>
      )}
      <InputMail mail={mail} setMail={setMail}></InputMail>
      <InputPass pass={pass} setPass={setPass}></InputPass>
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
        text={
          loading ? (
            <Spinner
              size={11.2}
              color={mainColors.textColor}
              style={{ textAlign: "center" }}
            />
          ) : (
            "INICIAR SESIÓN"
          )
        }
        click={() => checkHandleLogin()}
      ></Button>
    </div>
  );
}

export default Login;
