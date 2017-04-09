import React from "react";

const Showcase = () => (
  <div className="showcase">
    <div className="project">
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
    </div>
    <div className="project">
      <div className="project-infos" />
    </div>
    <div className="project">
      <div className="project-infos" />
    </div>
  </div>
);

export default Showcase;
