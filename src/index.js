import React from "react";
import ReactDOM from "react-dom";
import GifExpertApp from "./components/GifexpertApp";
import "./css/index.css";

const devRoot = document.getElementById("root");

const component = <GifExpertApp />;

ReactDOM.render(component, devRoot);
