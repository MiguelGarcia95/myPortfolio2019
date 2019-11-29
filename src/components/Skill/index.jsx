import React from 'react'

function Skill({icon, name}) {
  return (
    <div className="skill">
      <div className="skill-icon">
        <img src={icon} alt={name} />
      </div>
      <div className="skill-name">
        <p>{name}</p>
      </div>
    </div>
  )
}

export default Skill;