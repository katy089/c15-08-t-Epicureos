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
function Signup() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [nom, setNom] = useState("");
  const [tel, setTel] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    console.log(mail, pass, nom, tel);
    setLoading(true);
    await fetch(`https://restaurant-c2gx.onrender.com/api/v1/auth/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: mail,
        password: pass,
        phone: tel,
        firstname: nom,
        lastname: nom,
      }),
    })
      .then((response) => {
        if (response.status === 201) {
          console.log("User Logged");
          setLoading(false);
        }
        if (response.status === 400) {
          console.log("User already exists");
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
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: mainColors.secondaryColorO,
        gap: "10px",
        overflow: "hidden",
      }}
    >
      <img
        src={Icon}
        style={{
          paddingTop: "30px",
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
      <InputNom nom={nom} setNom={setNom}></InputNom>
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
        click={() => handleSignup()}
      ></Button>
    </div>
  );
}

export default Signup;
