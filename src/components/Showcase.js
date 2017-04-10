import React from "react";

const Showcase = () => (
  <div className="showcase">
    <a className="project" href="https://github.com/hihuz/meny">
      <div className="project-infos">
        <h2 className="project-name">Meny</h2>
        <p className="project-desc">
          A recipe sharing / editing app, work in progress
        </p>
        <div className="project-logos">
          <div className="project-tech">
            <img src="../public/react.png" alt="react" />React
          </div>
          <div className="project-tech">
            <img src="../public/redux.png" alt="redux" />Redux
          </div>
          <div className="project-tech">
            <img src="../public/firebase.png" alt="firebase" />Firebase
          </div>
        </div>
      </div>
    </a>
    <a className="project" href="https://github.com/hihuz/bomb-cleaner">
      <div className="project-infos">
        <h2 className="project-name">Bomb-Cleaner</h2>
        <p className="project-desc">
          A Mine-Sweeper game clone
        </p>
        <div className="project-logos">
          <div className="project-tech">
            <img src="../public/react.png" alt="react" />React
          </div>
          <div className="project-tech">
            <img src="../public/redux.png" alt="redux" />Redux
          </div>
        </div>
      </div>
    </a>
    <a className="project" href="https://github.com/hihuz/sb">
      <div className="project-infos">
        <h2 className="project-name">sb</h2>
        <p className="project-desc">
          The code for this very web site
        </p>
        <div className="project-logos">
          <div className="project-tech">
            <img src="../public/react.png" alt="react" />React
          </div>
          <div className="project-tech">
            <img src="../public/preact.png" alt="preact" />Preact
          </div>
        </div>
      </div>
    </a>
  </div>
);

export default Showcase;
