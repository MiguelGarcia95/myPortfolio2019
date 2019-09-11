import React from 'react'
import './styles/style.css';

export default function Sidebar() {
  return (
    <header className="sidebar">
      <nav>
        <p>Projects</p>
        <p>Skills</p>
        <p>About</p>
        <p>Contact</p>
      </nav>
      <div className="name">
        <h1>Miguel Garcia</h1>
        <h2>Web Developer</h2>
      </div>
    </header>
  )
}
