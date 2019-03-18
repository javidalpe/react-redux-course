import React from "react";
import { Heading, Text } from "spectacle";

export class Composition extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Composition
        </Heading>
        <Text>
          React has a powerful composition model, and they recommend using
          composition instead of inheritance.
        </Text>
        <Text>
          Props and prop <i>children</i>.
          <a href="https://codepen.io/gaearon/pen/ozqNOV?editors=0010">
            Example
          </a>
          .
        </Text>
      </React.Fragment>
    );
  }
}
