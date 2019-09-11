import React from 'react';
import './App.css';

function App() {
  return (
    <div class="body-wrapper">
      {/* <!-- Sidebar --> */}
      <header class="sidebar">
        <nav>
          <p>Projects</p>
          <p>Skills</p>
          <p>About</p>
          <p>Contact</p>
        </nav>
        <div class="name">
          <h1>Miguel Garcia</h1>
          <h2>Web Developer</h2>
        </div>
      </header>
      <div class="content">
        <div class="section projects">
          <div class="project">
            <div class="images">
              <img class="back" src="https://files.yande.re/sample/3f68443ebd80ed91d6cc080cf9a26f16/yande.re%20286316%20sample%20arisato_minato%20headphones%20male%20megaten%20persona%20persona_3%20sogabe_shuuji.jpg" alt="" />
              <img class="front" src="https://files.yande.re/sample/3f68443ebd80ed91d6cc080cf9a26f16/yande.re%20286316%20sample%20arisato_minato%20headphones%20male%20megaten%20persona%20persona_3%20sogabe_shuuji.jpg" alt="" />
            </div>
            <div class="info">
              <h1 class="title"></h1>
              <p class="description"></p>
            </div>
          </div>
        </div>
        <div class="section skills"></div>
        <div class="section about"></div>
        <div class="section contact"></div>
      </div>
    </div>
  );
}

export default App;
