import React, { useState } from "react";
import VerificationInput from "react-verification-input";
import "./verificationInputC.css";
import Button from "../Button/Button";
import { mainColors } from "../../assets/colors";

import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
function VerificationInputC(props) {
  const { setLoading, loading } = props;
  const [valNumber, setValNumber] = useState("");
  const [error, setError] = useState(false);

  const handleVerification = async () => {
    console.log(valNumber);

    if (valNumber.length < 6) {
      setError(true);
      return;
    }
    setLoading(true);
    console.log(localStorage.getItem("useremail"));
    await fetch(`https://restaurant-c2gx.onrender.com/api/v1/auth/validate/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: JSON.parse(localStorage.getItem("useremail")),
        code: valNumber,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("User Verified");
          alert("User Verified");
          setLoading(false);
          setError(false);
        } else if (response.status === 400) {
          console.log("Error");
          setLoading(false);
          setError(false);
        } else {
          setLoading(false);
          setError(false);
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <VerificationInput
        value={valNumber}
        autoFocus={true}
        onChange={setValNumber}
        classNames={{
          character: "character",
          characterSelected: "character--selected",
        }}
      />
      {error && (
        <h2
          style={{
            fontFamily: "Marcellus",
            fontWeight: "300",
            fontSize: "12px",
            margin: "0",
            color: mainColors.primaryColor,
            textAlign: "center",
          }}
        >
          Favor de introducir código
        </h2>
      )}
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
            "VALIDAR"
          )
        }
        click={() => handleVerification()}
      ></Button>
    </>
  );
}

export default VerificationInputC;
