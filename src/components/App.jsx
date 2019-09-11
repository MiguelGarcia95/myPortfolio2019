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

          </div>
          <div className="project">
            <div className="images">
              <img className="back" src="https://files.yande.re/sample/3f68443ebd80ed91d6cc080cf9a26f16/yande.re%20286316%20sample%20arisato_minato%20headphones%20male%20megaten%20persona%20persona_3%20sogabe_shuuji.jpg" alt="" />
              <img className="front" src="https://files.yande.re/sample/3f68443ebd80ed91d6cc080cf9a26f16/yande.re%20286316%20sample%20arisato_minato%20headphones%20male%20megaten%20persona%20persona_3%20sogabe_shuuji.jpg" alt="" />
            </div>
            <div className="info">
              <h1 className="title"></h1>
              <p className="description"></p>
            </div>
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