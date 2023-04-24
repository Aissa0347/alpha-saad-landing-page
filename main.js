import "./style.css";
import { tns } from "tiny-slider";

const slider = tns({
  container: ".mySlider",
  items: 3,
  slideBy: "page",
  autoplay: true,
});
