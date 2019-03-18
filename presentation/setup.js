import React from "react";
import { Heading, Markdown, Text } from "spectacle";

export class Setup extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading>Prerequisites</Heading>
        <Text>The browser :)</Text>
        <a
          href="https://codepen.io/gaearon/pen/oWWQNa?editors=0010"
          target="_blank"
        >
          Link to initial code
        </a>
      </React.Fragment>
    );
  }
}
