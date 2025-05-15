import { useState, useEffect } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import "../styles/Projects.css";

const images = [img1, img2, img3, img4];

const Projects = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <>
      <div className="carousel">
        <button className="nav left" onClick={prevSlide}>
          ‹
        </button>
        <img
          src={images[index]}
          alt="slide"
          className="carousel-image"
        />
        <button className="nav right" onClick={nextSlide}>
          ›
        </button>
      </div>
      <ul className="pList">
        <li className="projects">
          <p>1.REST Countries API with color theme switcher</p>
          <a
            href="https://github.com/kyoujing/React-projects/tree/main/REST-Countries-API-with-color-theme-switcher"
            className="gLink"
          >
            Code
          </a>
          <a href="https://kyoujing.github.io/REST-Countries-API/" className="demo-link">
            Demo
          </a>
        </li>
        <li className="projects">
          <p>2.Todo app</p>
          <a
            href="https://github.com/kyoujing/JavaScript-projects/tree/main/todo-app-main"
            className="gLink"
          >
            Code
          </a>
          <a
            href="https://kyoujing.github.io/JavaScript-projects/todo-app-main/index.html"
            className="demo-link"
          >
            Demo
          </a>
        </li>
        <li className="projects">
          <p>3.Rock, Paper, Scissors game</p>
          <a
            href="https://github.com/kyoujing/React-projects/tree/main/rock-paper-scissors-main"
            className="gLink"
          >
            Code
          </a>
          <a href="https://kyoujing.github.io/Rock-paper-scissors/" className="demo-link">
            Demo
          </a>
        </li>
        <li className="projects">
          <p>4.E-commerce product page</p>
          <a
            href="https://github.com/kyoujing/JavaScript-projects/tree/main/ecommerce-product-page-main"
            className="gLink"
          >
            Code
          </a>
          <a
            href="https://kyoujing.github.io/JavaScript-projects/ecommerce-product-page-main/index.html"
            className="demo-link"
          >
            Demo
          </a>
        </li>
      </ul>
    </>
  );
};

export default Projects;
