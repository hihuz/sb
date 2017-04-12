import React from "react";
import LinkBar from "./LinkBar";
import { loadState, saveState } from "../utils/localStorage";

// The updated greeting on revisits is disabled for now but i'm keeping the logic here for later
class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visited: loadState()
    };
  }
  componentDidMount() {
    saveState(1);
  }
  render() {
    const { title, text, greetings } = this.props;
    return (
      <section className="sb-intro">
        <article className="intro">
          <h1 className="intro-title">{title}</h1>
          <div className="logo-container">
            <img src="../public/hihuz.jpg" alt="hihuz" />
          </div>
          {text.map(para => {
            const markup = { __html: para };
            return <h4 className="intro-text" key={para} dangerouslySetInnerHTML={markup} />;
          })}
          <h4 className="intro-text">{greetings[0]}</h4>
          <LinkBar />
        </article>
      </section>
    );
  }
}

export default Intro;
