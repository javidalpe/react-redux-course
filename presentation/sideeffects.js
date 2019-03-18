import React from "react";
import { Heading, Text } from "spectacle";

export class Sideeffects extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={4} caps textColor="quaternary">
          Async Actions and Side effects
        </Heading>
        <Text>
          Most used libraries:
          <a href="https://github.com/reduxjs/redux-thunk">Redux Thunk</a> or
          <a href="https://github.com/redux-observable/redux-observable">
            Redux Observable
          </a>
          .
        </Text>
      </React.Fragment>
    );
  }
}
