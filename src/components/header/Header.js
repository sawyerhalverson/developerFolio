import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import { HashLink as Link } from 'react-router-hash-link';

import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  bigProjects,
  educationInfo
} from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <Link to="#/" className="logo"> {/* Use HashLink for internal navigation */}
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <Link smooth to="#skills">Skills</Link>
            </li>
          )}

          {viewExperience && (
            <li>
              <Link smooth to="#experience">Work Experiences</Link>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <Link smooth to="#opensource">Open Source</Link>
            </li>
          )}
          {(
            <li>
              <Link smooth to="#projects">Projects</Link>
            </li>
          )}
          {(
            <li>
              <Link smooth to="#education">Education</Link>
            </li>
          )}
          {viewAchievement && (
            <li>
              <Link smooth to="#achievements">Achievements</Link>
            </li>
          )}
          {viewBlog && (
            <li>
              <Link smooth to="#blogs">Blogs</Link>
            </li>
          )}
          {viewTalks && (
            <li>
              <Link smooth to="#talks">Talks</Link>
            </li>
          )}
          <li>
            <Link smooth to="#contact">Contact Me</Link>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
