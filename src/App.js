// //HORA 1

// //import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import Counter1 from "./Counter1";

// function Home() {
//   return <h2>Home</h2>;
// }

// function App() {
//   return (
//     <Router>
//       <nav>
//         <Link to="/">Home</Link>

//         <Link to="/counter">Counter</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />

//         <Route path="/counter" element={<Counter1 />} />
//       </Routes>
//     </Router>
//   );
// }
// // export  default App;

//HORA 2

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home2 from "./componentes/Home2";
import Counter2 from "./componentes/Counter2";
import UserProfile from "./componentes/UserProfile";
import "./index.css";

function App1() {
  return (
    <Router>
      <div className="navbar">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Profile
        </NavLink>
        <NavLink
          to="/counter"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Counter
        </NavLink>
      </div>

      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/counter" element={<Counter2 />} />
      </Routes>
    </Router>
  );
}

export default App1;
