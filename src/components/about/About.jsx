import React from 'react'
import "./about.css";
import aboutImg from "../../assets/avatar-2.svg";
import AboutBox from './AboutBox';

const About = () => {
  return (
   <section className="about container section" id='about'>
    <h2 className="section__title">About Me</h2>

    <div className="about__container grid">
      <img src={aboutImg} alt="" className="about__img" />

      <div className="about__data grid">
        <div className="about__info">
          <p className="about__description">
            I am Duhan Ozturk, Full Stack Developer from Bursa, Turkey. 
            I have rich experience in website design, creation and customization. 
            You won't regret working with me.
          </p>
          <a href="" className="btn">Download CV</a>
        </div>
        <div className="about__skills grid">
          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">Backend - Java</h3>
              <span className="skills__number">90%</span>
            </div>
            
            <div className="skills__bar">
              <span className="skills__percentage development"></span>
            </div>

          </div>
          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">Frontend - React</h3>
              <span className="skills__number">80%</span>
            </div>
            
            <div className="skills__bar">
              <span className="skills__percentage ui__design"></span>
            </div>

          </div>
          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">Database - PostgreSQL</h3>
              <span className="skills__number ">75%</span>
            </div>
            
            <div className="skills__bar">
              <span className="skills__percentage photography"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <AboutBox />
   </section>
  )
};

export default About 