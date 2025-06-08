console.log("OK");

import "./style.css";

import Home from "./home";
import Showcase from "./showcase";

Home();

const homeButton = document.querySelector("#home-btn");
const showcaseButton = document.querySelector("#showcase-btn");

// Set initial active state
homeButton.classList.add("active");

homeButton.addEventListener("click", () => {
  Home();
  homeButton.classList.add("active");
  showcaseButton.classList.remove("active");
});

showcaseButton.addEventListener("click", () => {
  Showcase();
  showcaseButton.classList.add("active");
  homeButton.classList.remove("active");
});
