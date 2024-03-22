import React from 'react'


const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>

            <div>
                <h3 className="about__title">5+</h3>
                <span className="about__subtitle">Project completed</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-cup"></i>

            <div>
                <h3 className="about__title">1082</h3>
                <span className="about__subtitle">Cup of coffee</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-people"></i>

            <div>
                <h3 className="about__title">99%</h3>
                <span className="about__subtitle">Satisfaction</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-badge"></i>

            <div>
                <h3 className="about__title">2+</h3>
                <span className="about__subtitle">Years of Experience</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox