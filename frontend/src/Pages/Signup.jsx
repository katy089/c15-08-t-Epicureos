import React, { useState } from "react";
import Button from "../Components/Button/Button.jsx";
import { mainColors } from "../assets/colors.js";
import {
  InputNom,
  InputTel,
  InputMail,
  InputPass,
} from "../Components/Input/Input.jsx";
import { Link } from "react-router-dom";
import BImage from "../assets/images/backgroundimage.png";
import Icon from "../assets/images/icon.png";

import { Spinner } from "react-activity";
import "react-activity/dist/library.css";

import validator from "validator";
function Signup() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [lastNom, setLastNom] = useState("");
  const [firstNom, setFirstNom] = useState("");
  const [tel, setTel] = useState("");
  const [loading, setLoading] = useState(false);
  const [camposVacios, setCamposVacios] = useState(false);

  const checkHandleSignup = () => {
    if (
      validator.isEmail(mail) &&
      validator.isStrongPassword(pass, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      }) &&
      validator.isMobilePhone(tel.trim(), ["es-AR", "es-MX"]) &&
      firstNom.length > 0 &&
      lastNom.length >= 0
    ) {
      handleSignup();
      setCamposVacios(false);
    } else {
      setCamposVacios(true);
    }
  };

  const handleSignup = async () => {
    console.log(mail, pass, firstNom, tel, lastNom);
    setLoading(true);
    await fetch(`https://restaurant-c2gx.onrender.com/api/v1/auth/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: mail.toLowerCase(),
        password: pass,
        phone: tel.trim(),
        firstname: firstNom.toUpperCase(),
        lastname: lastNom.toUpperCase(),
      }),
    })
      .then((response) => {
        if (response.status === 201) {
          console.log("User Created");
          setLoading(false);
        }
        if (response.status === 400) {
          console.log("User already exists");
          setLoading(false);
        } else {
          console.log("Error creating user");
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
        src={Icon}
        style={{
          paddingTop: "0px",
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
            fontSize: "16px",
            marginBottom: "20px",
            color: mainColors.primaryColor,
          }}
        >
          ¿Ya tenés una cuenta?{" "}
          <span style={{ textDecoration: "underline" }}>Ingresa</span>
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
          }}
        >
          Favor de llenar todos los campos
        </h2>
      )}
      <div
        style={{
          display: "flex",
          padding: "0",
          gap: "10px",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <InputNom
          label={"Nombre"}
          nom={firstNom}
          setNom={setFirstNom}
        ></InputNom>
        <InputNom
          label={"Apellido"}
          nom={lastNom}
          setNom={setLastNom}
        ></InputNom>
      </div>

      <InputTel tel={tel} setTel={setTel}></InputTel>
      <InputMail mail={mail} setMail={setMail}></InputMail>
      <InputPass pass={pass} setPass={setPass}></InputPass>

      <div style={{ paddingTop: "27px" }}></div>

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
            "REGISTRATE"
          )
        }
        click={() => checkHandleSignup()}
      ></Button>
    </div>
  );
}

export default Signup;
