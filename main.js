import "./style.css";
import { tns } from "tiny-slider";

const clientsSlider = tns({
  container: ".mySlider",
  items: 3,
  slideBy: "page",
  autoplay: true,
  loop: false,
  rewind: true,
  mouseDrag: true,
  autoplayButtonOutput: false,
  nav: false,
  lazyload: true,
  controlsContainer: ".controlsContainer",
  prevButton: ".prevBtn",
  nextButton: ".nextBtn",
  responsive: {
    300: {
      items: 2,
      controls: true,
      edgePadding: 30,
    },
    568: {
      items: 3,
    },
    768: {
      items: 4,
    },
    1024: {
      items: 5,
    },
  },
});

const projectsSlider = tns({
  container: ".projectsSlider",
  items: 6,
  // gutter: 10,
  mouseDrag: true,
  swipeAngle: false,
  slideBy: "page",
  autoplay: true,
  loop: false,
  rewind: true,
  autoplayButtonOutput: false,
  nav: false,
  lazyload: true,
  controlsContainer: ".controlsContainerProjects",
  prevButton: ".prevBtnProjects",
  nextButton: ".nextBtnProjects",
  responsive: {
    300: {
      items: 1.3,
    },
    468: {
      items: 2.3,
    },
    640: {
      items: 3.3,
    },
    968: {
      items: 4.3,
    },
    1280: {
      items: 5.3,
    },
  },
});

document
  .querySelectorAll(".tns-liveregion.tns-visually-hidden")
  .forEach((element) => element.remove());
