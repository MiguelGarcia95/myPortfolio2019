import React from 'react';
import Skill from '../Skill';
import './styles/style.css';

const ICON_PATH = './assets/icons';

export default function Skills() {
  return (
    <div className="section skills startPos">
      <div className="skill-row">
        <div className="skill-column">
          <h1 className='column-title'>Front End</h1>
          <Skill name='html' icon={`${ICON_PATH}/html.png`} />
          <Skill name='css' icon={`${ICON_PATH}/css.png`} />
          <Skill name='less' icon={`${ICON_PATH}/less.png`} />
          <Skill name='sass' icon={`${ICON_PATH}/sass.png`} />
          <Skill name='JS' icon={`${ICON_PATH}/js.png`} />
          <Skill name='jQuery' icon={`${ICON_PATH}/jquery.png`} />
          <Skill name='React' icon={`${ICON_PATH}/react.png`} />
          <Skill name='Redux' icon={`${ICON_PATH}/redux.png`} />
        </div>
        <div className="skill-column">
          <h1 className='column-title'>Back End</h1>
          <Skill name='php' icon={`${ICON_PATH}/php.png`} />
          <Skill name='laravel' icon={`${ICON_PATH}/laravel.png`} />
          <Skill name='wordpress' icon={`${ICON_PATH}/wordpress.png`} />
          <Skill name='nodejs' icon={`${ICON_PATH}/nodejs.png`} />
          <Skill name='mysql' icon={`${ICON_PATH}/mysql.png`} />
          <Skill name='mongodb' icon={`${ICON_PATH}/mongodb.png`} />
        </div>
      </div>
      <div className="skill-row">
        <div className="skill-column full">
          <h1 className='column-title'>Currently Learning</h1>        
          <Skill name='C#' icon={`${ICON_PATH}/csharp.png`} />
          <Skill name='React Native' icon={`${ICON_PATH}/react-native.png`} />
          <Skill name='.NET' icon={`${ICON_PATH}/aspnet.png`} />
          <Skill name='WordPress theme development' classes='lg' icon={`${ICON_PATH}/wordpress.png`} />
        </div>
      </div>
    </div>
  )
}