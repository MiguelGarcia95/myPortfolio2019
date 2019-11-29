import React from 'react';
import SectionTitle from '../SectionTitle';
import Skill from '../Skill';
import './styles/css/style.min.css';

const ICON_PATH = './assets/icons';

function Skills({scrollTo}) {
  return (
    <div className='section skills' id='skills'>
      <div className="page-container">
        <div className="content">
          <SectionTitle title='Skills' float='right' />
          <div className="description">
            <p>I have worked with both the Front End & Back End development</p>

            <p>HTML, CSS, JS, ReactJS, ReduxJS for Front End websites and applications.</p>
            <p>NodeJS, Express, PHP, Laravel, MongoDB, MySQL for the Back End</p>

            <p>Also have some working knowledge of Photoshop, and Illustrator.</p>
            <p>I also have an interest in character design, story telling and game design/development.</p>

            <p>
              Visit my <a className='link' href="https://github.com/MiguelGarcia95" target='_blank'>Github</a> or <span onClick={() => scrollTo('#contact')} className='link' >Contact</span> me.
            </p>
          </div>
          <div className="skills-container">

            <h2 className='skill-title'>Front End</h2>

            <Skill name='HTML' icon={`${ICON_PATH}/html.png`} />
            <Skill name='css' icon={`${ICON_PATH}/css.png`} />
            <Skill name='less' icon={`${ICON_PATH}/less.png`} />
            <Skill name='sass' icon={`${ICON_PATH}/sass.png`} />
            <Skill name='JS' icon={`${ICON_PATH}/js.png`} />
            <Skill name='jQuery' icon={`${ICON_PATH}/jquery.png`} />
            <Skill name='React' icon={`${ICON_PATH}/react.png`} />
            <Skill name='Redux' icon={`${ICON_PATH}/redux.png`} />

            <h2 className='skill-title'>Back End</h2>
            <Skill name='php' icon={`${ICON_PATH}/php.png`} />
            <Skill name='laravel' icon={`${ICON_PATH}/laravel.png`} />
            <Skill name='wordpress' icon={`${ICON_PATH}/wordpress.png`} />
            <Skill name='nodejs' icon={`${ICON_PATH}/nodejs.png`} />
            <Skill name='mysql' icon={`${ICON_PATH}/mysql.png`} />
            <Skill name='mongodb' icon={`${ICON_PATH}/mongodb.png`} />

            <h2 className='skill-title'>Learning</h2>

            {/* <Skill name='C#' icon={`${ICON_PATH}/csharp.png`} /> */}
            <Skill name='React Native' icon={`${ICON_PATH}/react-native.png`} />
            {/* <Skill name='.NET' icon={`${ICON_PATH}/aspnet.png`} /> */}
            <Skill name='WordPress theme development' classes='lg' icon={`${ICON_PATH}/wordpress.png`} />
          </div> 
        </div>       
      </div>
    </div>
  )
}

export default Skills