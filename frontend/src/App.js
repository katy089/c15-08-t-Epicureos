import React from 'react';
import './App.css';

import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./Pages/Signup.jsx";
import Login from "./Pages/Login.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />
      <Route exact path="/signup" component={Signup} element={<Signup />} />
      <Route exact path="/login" component={Login} element={<Login />} />
    </Routes>
  );
}

export default App;



// import "./App.css";
// // import Login from "./Pages/Login";
// import Signup from "./Pages/Signup";

// function App() {
//   return (
//     <div className="App">
//       <Signup></Signup>
//     </div>
//   );
// }

// export default App;
