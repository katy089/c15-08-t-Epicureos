import React from "react";
import Button from "../Components/Button/Button";
import { mainColors } from "../assets/colors.js";
function Login() {
  return (
    <div
      style={{
        flex: 1,
        height: "100%",
        paddingTop: "50px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: mainColors.secondaryColor,
      }}
    >
      <h1 style={{ fontFamily: "Marcellus", fontWeight: "300" }}>
        Lorem Ipsum
      </h1>
      <a href="#2">
        <h2
          style={{
            fontFamily: "Marcellus",
            fontWeight: "300",
            fontSize: "16px",
          }}
        >
          ¿YA TENÉS UNA CUENTA? INGRESÁ
        </h2>
      </a>
      <Button
        bColor={mainColors.primaryColor}
        tColor={mainColors.textColor}
        text={"INICIAR SESIÓN"}
      ></Button>
    </div>
  );
}

export default Login;
