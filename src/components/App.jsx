import React from 'react';
import Sidebar from './Sidebar';
import Project from './Project';
import './styles/style.css';

function App() {
  return (
    <div className="body-wrapper">
      <Sidebar />

      <div className="content">
        <div className="section projects">
          <div className="row">
            <Project 
              classes='project pf flex-1' 
              img='https://www.cssauthor.com/wp-content/uploads/2014/08/Boarding-pass-app-ui-psd.jpg' 
              title='Title Here'
            />
            <Project 
              classes='project flex-1' 
              img='https://appsamurai.com/wp-content/uploads/2017/08/2-2.png' 
              title='Title Here'
            />
            <Project 
              classes='project pl flex-2' 
              img='https://appsamurai.com/wp-content/uploads/2017/08/2-2.png' 
              title='Title Here'
            />
          </div>
          <div className="row">
            <Project 
              classes='project pf flex-3' 
              img='https://www.cssauthor.com/wp-content/uploads/2014/08/Boarding-pass-app-ui-psd.jpg' 
              title='Title Here'
            />
            <Project 
              classes='project pl flex-1' 
              img='https://files.yande.re/image/3f68443ebd80ed91d6cc080cf9a26f16/yande.re%20286316%20arisato_minato%20headphones%20male%20megaten%20persona%20persona_3%20sogabe_shuuji.jpg' 
              title='Title Here'
            />
          </div>
        </div>
        <div className="section skills"></div>
        <div className="section about"></div>
        <div className="section contact"></div>
      </div>
    </div>
  );
}

export default App;
