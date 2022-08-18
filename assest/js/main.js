import { hamburgetMenu } from "./hamburget.js";
import {  newScroll, scrollup } from "./scrollup.js";
import { slider } from "./slider.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgetMenu(".panelBtn", ".panel", ".menu a");
  slider();
  scrollup();
  newScroll();
});


