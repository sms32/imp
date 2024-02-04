import React from 'react';
import PropTypes from 'prop-types';
import "./SkillsAndExperience.css";
const ProgressBar = ({ title, percent }) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-title">{title}</div>
      <div className="progress-bar-container">
        <div className="progress-bar-fill" style={{ width: `${percent}%` }}></div>
      </div>
      <div className="progress-bar-percent">{`${percent}%`}</div>
    </div>
  );
};

ProgressBar.propTypes = {
  title: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
};

const SkillsAndExperience = () => {
  return (
    <div className="skills-and-experience">
      
      <ProgressBar title="HTML/CSS" percent={75} />
      <ProgressBar title="REACT JS/ JAVASCRIPT" percent={50} />
      <ProgressBar title="C/C++" percent={80} />
      <ProgressBar title="PYTHON" percent={50} />
      <ProgressBar title="SQL" percent={40} />
      <ProgressBar title="DJANGO" percent={30} />
      <ProgressBar title="FRAMER-MOTION/GIT/GITHUB" percent={45} />
      
     



      {/* Add more skills and experiences as needed */}
    </div>
    
  );
};

export default SkillsAndExperience;
