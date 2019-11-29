import React from 'react';
import './styles/css/style.min.css';

function SectionTitle({title, float}) {
  return (
    <div className="title-content">
      <h1 className={`background-title ${float}`} >{title}</h1>
      <h1 className={`title ${float}`}>{title}</h1>
    </div>
  )
}

export default SectionTitle;