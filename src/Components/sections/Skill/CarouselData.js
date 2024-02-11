// CarouselData.js
import React from "react";
import skillsData from "../../../data/skillsData";

const getCarouselData = () => {
  const sortedSkills = [...skillsData].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const firstSkill = sortedSkills.slice(0, 9);
  const lastSkill = sortedSkills.slice(9);

  const renderSkillItem = (skill, index) => {
    if (skill.devi) {
      return (
        <i
          key={index}
          title={skill.name}
          className={`${skill.devi} colored text-6xl h-auto`}
        ></i>
      );
    } else if (skill.source) {
      return (
        <img
          loading="lazy"
          key={index}
          src={skill.source}
          className="w-16 h-auto  text-center"
          alt={`logo ${skill.name}`}
          height="80"
          title={skill.name}
        />
      );
    }
    return null;
  };

  const renderSkillsList = (skills) => {
    return skills.map((skill, index) => (
      <li
        className="px-5 min-w-[45.5%] lg:min-w-[22.5%]  text-center"
        key={index}
      >
        <div>{renderSkillItem(skill, index)}</div>
      </li>
    ));
  };

  return {
    firstSkill: renderSkillsList(firstSkill),
    lastSkill: renderSkillsList(lastSkill),
  };
};

export default getCarouselData;
