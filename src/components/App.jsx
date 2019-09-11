import React from 'react';
import Sidebar from './Sidebar';
import './styles/style.css';

function App() {
  return (
    <div className="body-wrapper">
      <Sidebar />

      <div className="content">
        <div className="section projects">
          <div className="row">
            <div className="project pf flex-1">
              <img className="background" src="https://www.cssauthor.com/wp-content/uploads/2014/08/Boarding-pass-app-ui-psd.jpg" alt=""/>
            </div>
            <div className="project flex-1">
              <img className='background' src="https://cssauthor.com/wp-content/uploads/2014/08/App-News-iPhone-6-PSD-1-289x576.jpg" alt=""/>
            </div>
            <div className="project pl flex-2">
              <img className='background' src="https://appsamurai.com/wp-content/uploads/2017/08/2-2.png" alt=""/>
            </div>
          </div>
          <div className="row">
            <div className="project pf flex-3"></div>
            {/* <div className="project flex-2"></div> */}
            <div className="project pl flex-1"></div>
          </div>
          {/* <div className="project">
            <div className="images">
              <img className="back" src="https://files.yande.re/sample/3f68443ebd80ed91d6cc080cf9a26f16/yande.re%20286316%20sample%20arisato_minato%20headphones%20male%20megaten%20persona%20persona_3%20sogabe_shuuji.jpg" alt="" />
              <img className="front" src="https://files.yande.re/sample/3f68443ebd80ed91d6cc080cf9a26f16/yande.re%20286316%20sample%20arisato_minato%20headphones%20male%20megaten%20persona%20persona_3%20sogabe_shuuji.jpg" alt="" />
            </div>
            <div className="info">
              <h1 className="title"></h1>
              <p className="description"></p>
            </div>
          </div> */}
        </div>
        <div className="section skills"></div>
        <div className="section about"></div>
        <div className="section contact"></div>
      </div>
    </div>
  );
}

export default App;
