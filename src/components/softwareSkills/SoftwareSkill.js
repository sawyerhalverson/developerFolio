import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skill, i) => (
            <li key={i} className="software-skill-inline" name={skill.skillName}>
              {skill.fontAwesomeClassname ? (
                <i className={skill.fontAwesomeClassname}></i>
              ) : (
                <img
                  src={process.env.PUBLIC_URL + "/" + skill.customIconUrl}
                  alt={skill.skillName}
                  className="custom-icon"
                />
              )}
              <p>{skill.skillName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
