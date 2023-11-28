import React, { useState } from "react";
//Components
import "./input.css";

const Input = ({ type, label, value, onChange }) => {
  return (
    <div className="input-container">
      {/*<label htmlFor={type}>{label}</label>*/}
      <input
        type={type}
        id={type}
        value={value}
        onChange={onChange}
        placeholder={label}
      />
    </div>
  );
};

export const InputNom = () => {
  const [nom, setNom] = useState("");

  const onChangeNom = (event) => {
    setNom(event.target.value);
  };

  return (
    <Input type="text" label="Nombre" value={nom} onChange={onChangeNom} />
  );
};

export const InputTel = () => {
  const [tel, setTel] = useState("");

  const onChangeTel = (event) => {
    setTel(event.target.value);
  };

  return (
    <Input type="tel" label="Teléfono" value={tel} onChange={onChangeTel} />
  );
};

export const InputMail = () => {
  const [mail, setMail] = useState("");

  const onChangeMail = (event) => {
    setMail(event.target.value);
  };

  return (
    <Input type="email" label="MAIL" value={mail} onChange={onChangeMail} />
  );
};

export const InputPass = () => {
  const [pass, setPass] = useState("");

  const onChangePass = (event) => {
    setPass(event.target.value);
  };

  return (
    <Input
      type="password"
      label="Contraseña"
      value={pass}
      onChange={onChangePass}
    />
  );
};

const App = () => {
  return (
    <div className="app">
      <InputNom />
      <InputTel />
      <InputMail />
      <InputPass />
    </div>
  );
};

export default App;
