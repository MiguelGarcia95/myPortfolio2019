import React from 'react'

export default function Skill({icon, name}) {
  return (
    <div className="skill">
      <div className="skill-icon"></div>
      <div className="skill-name">
        <p>{name}</p>
      </div>
    </div>
  )
}
