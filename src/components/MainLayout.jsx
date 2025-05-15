import { useState, useEffect } from "react";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import JobExperiences from "./JobExperiences";
import usePersistentTab from "../hooks/usePersistentTab";
import "../styles/MainLayout.css";
import homeIcon from "../assets/home_30dp.svg";
import appIcon from "../assets/apps_30dp.svg";
import skillIcon from "../assets/cognition_30dp.svg";
import workIcon from "../assets/work_30dp.svg";

const MainLayout = () => {
  const [currentTab, setCurrentTab] = usePersistentTab("about");

  const renderContent = () => {
    switch (currentTab) {
      case "about":
        return <AboutMe />;
      case "projects":
        return <Projects />;
      case "skills":
        return <Skills />;
      case "jobs":
        return <JobExperiences />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <main className="main-layout">
      <section className="sidebar">
        <div className="button-div">
          <button
            onClick={() => setCurrentTab("about")}
            className={
              currentTab === "about" ? "tab-button active" : "tab-button"
            }
          >
            <img src={homeIcon} className="icons" alt="home icon" />
            <span className="buttonText">About Me</span>
          </button>
          <button
            onClick={() => setCurrentTab("projects")}
            className={
              currentTab === "projects" ? "tab-button active" : "tab-button"
            }
          >
            <img src={appIcon} className="icons" alt="app icon" />
            <span className="buttonText">Projects</span>
          </button>
          <button
            onClick={() => setCurrentTab("skills")}
            className={
              currentTab === "skills" ? "tab-button active" : "tab-button"
            }
          >
            <img src={skillIcon} className="icons" alt="skill icon" />
            <span className="buttonText">Skills</span>
          </button>
          <button
            onClick={() => setCurrentTab("jobs")}
            className={
              currentTab === "jobs" ? "tab-button active" : "tab-button"
            }
          >
            <img src={workIcon} className="icons" alt="work icon" />
            <span className="buttonText">Job Experiences</span>
          </button>
        </div>
        <div className="contact-info">
          <h3>Jingwang Jiang</h3>
          <span>dawn10413@hotmail.com</span>
          <a href="https://github.com/kyoujing" className="links">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jingwang-jiang"
            className="links"
          >
            LinkedIn
          </a>
        </div>
      </section>
      <section className="content">{renderContent()}</section>
    </main>
  );
};

export default MainLayout;
