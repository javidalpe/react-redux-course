import React from "react";
import { Heading, Text } from "spectacle";
import CodePane from "spectacle/es/components/code-pane";

export class Styleguidist extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Styleguidist
        </Heading>
        <Text>
          Isolated React component development environment with a living style
          guide
        </Text>

        <a href="https://github.com/styleguidist/react-styleguidist">
          Oficial website
        </a>
      </React.Fragment>
    );
  }
}
