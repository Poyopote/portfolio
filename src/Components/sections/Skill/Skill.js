import React, { useRef, useEffect } from "react";
import skillsData from "../../../data/skillsData";
import "./Skill.css"; // Fichier CSS pour les styles

const Skill = () => {
  const sortedSkills = [...skillsData].sort((a, b) => a.name.localeCompare(b.name));
  const firstSkill = sortedSkills.slice(0, 9);
  const lastSkill = sortedSkills.slice(9);

  const firstContainerRef = useRef(null);
  const lastContainerRef = useRef(null);

  useEffect(() => {
    const firstContainer = firstContainerRef.current;
    const lastContainer = lastContainerRef.current;
    let firstAnimationFrame;
    let lastAnimationFrame;

    const animateFirstSkills = () => {
      const containerWidth = firstContainer.offsetWidth;
      const scrollAmount = 2; // Vitesse de défilement en pixels par frame
      firstContainer.scrollLeft += scrollAmount;

      if (firstContainer.scrollLeft >= containerWidth) {
        firstContainer.scrollLeft = 0;
      }

      firstAnimationFrame = requestAnimationFrame(animateFirstSkills);
    };

    const animateLastSkills = () => {
      const containerWidth = lastContainer.offsetWidth;
      const scrollAmount = 2; // Vitesse de défilement en pixels par frame
      lastContainer.scrollLeft -= scrollAmount;

      if (lastContainer.scrollLeft <= 0) {
        lastContainer.scrollLeft = containerWidth;
      }

      lastAnimationFrame = requestAnimationFrame(animateLastSkills);
    };

    firstAnimationFrame = requestAnimationFrame(animateFirstSkills);
    lastAnimationFrame = requestAnimationFrame(animateLastSkills);

    return () => {
      cancelAnimationFrame(firstAnimationFrame);
      cancelAnimationFrame(lastAnimationFrame);
    };
  }, []);

  const renderSkillItem = (skill, index) => {
    if (skill.devi) {
      return (
        <i key={index} className={`${skill.devi} text-6xl skill-item`}></i>
      );
    } else if (skill.source) {
      return (
        <img
        
          key={index}
          src={skill.source}
          className="h-16 w-16 skill-item"
          alt={skill.name}
        />
      );
    }
    return null;
  };

  const renderSkillsList = (skills, reverse = false) => {
    const listClassName = reverse ? 'skills-list-reverse' : 'skills-list';
    return (
      <ul className={`grid grid-flow-col auto-cols-max items-center mb-9 text-lg ${listClassName}`}>
        {skills.map((skill, index) => (
          <li key={index}>{renderSkillItem(skill, index)}</li>
        ))}
      </ul>
    );
  };
  

  return (
    <section id="skills-section" className="in-the-light">
      <div className="flex flex-col relative w-full in-the-light justify-evenly ">
        <div ref={firstContainerRef} className="skills-list">
        {renderSkillsList(firstSkill)}
        </div>
        <div ref={lastContainerRef} className="skills-list skills-list-reverse">
        {renderSkillsList(lastSkill)}
        </div>

      </div>
    </section>
  );
};

export default Skill;

// import React from "react";
// import skillsData from "../../../data/skillsData";

// const Skill = () => {
//   const sortedSkills = [...skillsData].sort((a, b) => a.name.localeCompare(b.name));
//   const firstSkill = sortedSkills.slice(0, 9);
//   const lastSkill = sortedSkills.slice(9);

//   const renderSkillItem = (skill, index) => {
//     console.log(skill.devi);
//     if (skill.devi) {
//       return (<i key={index} className={`${skill.devi} text-6xl`}></i>);
//     } else if (skill.source) {
//       return (
//         <img key={index} src={skill.source} className="h-16 w-16" alt={skill.name} />
//       );
//     }
//     return null;
//   };

//   const renderSkillsList = (skills) => {
//     return (
//       <ul className="grid grid-flow-col auto-cols-max items-center mb-9 text-lg">
//         {skills.map((skill, index) => (
//           <li key={index}>{renderSkillItem(skill, index)}</li>
//         ))}
//       </ul>
//     );
//   };

//   return (
//     <section id="skills-section" className="in-the-light">
//       <div className="flex overflow-x-hidden flex-col relative w-full in-the-light">
//         <div>{renderSkillsList(firstSkill)}</div>
//         <div>{renderSkillsList(lastSkill)}</div>          
//       </div>
//     </section>
//   );
// };

// export default Skill;

