import { useState, useEffect } from "react";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import JobExperiences from "./JobExperiences";
import usePersistentTab from "../hooks/usePersistentTab";
import "../styles/MainLayout.css";

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
            About Me
          </button>
          <button
            onClick={() => setCurrentTab("projects")}
            className={
              currentTab === "projects" ? "tab-button active" : "tab-button"
            }
          >
            Projects
          </button>
          <button
            onClick={() => setCurrentTab("skills")}
            className={
              currentTab === "skills" ? "tab-button active" : "tab-button"
            }
          >
            Skills
          </button>
          <button
            onClick={() => setCurrentTab("jobs")}
            className={
              currentTab === "jobs" ? "tab-button active" : "tab-button"
            }
          >
            Job Experiences
          </button>
        </div>
        <div className="contact-info">
          <h3>Jingwang Jiang</h3>
          <span>dawn10413@hotmail.com</span>
          <a href="https://github.com/kyoujing" className="github-link">
            github.com/kyoujing
          </a>
        </div>
      </section>
      <section className="content">{renderContent()}</section>
    </main>
  );
};

export default MainLayout;
