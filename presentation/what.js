import React from "react";
import { Fill, Fit, Heading, Layout, Slide, Text } from "spectacle";
import { PRIMARY, TERTIARY } from "./index";

export class What extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Text textColor={TERTIARY}>
          This tutorial is designed for people who prefer to learn by doing
        </Text>
        <Heading fit caps>
          What Are We Building?
        </Heading>
        <Text margin="10px 0 0" textColor={TERTIARY} bold>
          <a
            href="https://codepen.io/gaearon/pen/gWWZgR?editors=0010"
            target="_blank"
          >
            Tic-tac-toe game
          </a>
        </Text>
      </React.Fragment>
    );
  }
}
