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
          className={`${skill.devi} colored text-6xl h-auto `}
        ></i>
      );
    } else if (skill.source) {
      return (
        <img
          loading="lazy"
          key={index}
          src={skill.source}
          className="min-w-[60px] w-[60px] h-auto"
          alt={`logo ${skill.name}`}
          title={skill.name}
        />
      );
    }
    return null;
  };

  const renderSkillsList = (skills) => {
    return skills.map((skill, index) => (
      <li
        className="px-5 min-w-[45.5%] lg:min-w-[22.5%] p-10 flex flex-col items-center text-center md:border-r hover:bg-slate-50 cursor-pointer "
        key={index}
      >
        <div className="p-5 rounded-full shadow-lg shadow-secondary ">
          {renderSkillItem(skill, index)}
        </div>
      </li>
    ));
  };

  return {
    firstSkill: renderSkillsList(firstSkill),
    lastSkill: renderSkillsList(lastSkill),
  };
};

export default getCarouselData;
