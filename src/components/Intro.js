import React from "react";
import LinkBar from "./LinkBar";
import { loadState, saveState } from "../utils/localStorage";

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
          <h1>{title}</h1>
          {text.map(para => {
            const markup = { __html: para };
            return <h4 key={para} dangerouslySetInnerHTML={markup} />;
          })}
          <h4>{greetings[this.state.visited]}</h4>
          <LinkBar />
        </article>
      </section>
    );
  }
}

export default Intro;
