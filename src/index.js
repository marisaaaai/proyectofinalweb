import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./App/Navbar/navbar.js";
import About from "./App/About/About";
import Work from "./App/Proyectos/Proyectos";
import Portada from "./App/Home/Portada";
import Footer from "./App/Footer/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App/app.css";

ReactDOM.render(
  <React.Fragment>
    <Navbar />
    <Portada />
    <About />
    <Work />
    <Footer />
  </React.Fragment>,
  document.getElementById("root")
);
