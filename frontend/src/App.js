import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Signup from './Pages/Signup.jsx'
import Login  from './Pages/Login.jsx'


function App() {
  return (
    <Router>
      <div className="App">
          <Route exact path="/" component={Signup} />
          <Route exact path="/login" component={Login} />
      </div>
    </Router>
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
