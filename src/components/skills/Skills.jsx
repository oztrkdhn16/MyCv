import React, { useEffect } from 'react';
import "./skills.css";
import SkillsData from './SkillsData';

const Skills = () => {
  useEffect(() => {
    const buttonContainer = document.getElementById('buttonContainer');

    // Mevcut butonları temizle
    buttonContainer.innerHTML = '';

    SkillsData.forEach(skill => {
      const button = document.createElement('button');
      button.classList.add('button');
      button.textContent = skill.title;

      if (skill.category === 'Backend' || skill.category === 'Frontend' || skill.category === 'Database' || skill.category === 'Others') {
        button.classList.add('button-shadow');
      }

      buttonContainer.appendChild(button);
    });
  }, [SkillsData]); // SkillsData'ya bağımlı hale getirildi

  return (
    <section className='skills container section' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <div className="button-container" id="buttonContainer"></div>
    </section>
  );
};

export default Skills;