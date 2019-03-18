import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class TimeLifting extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={5} caps textColor="quaternary">
          Lifting State Up, Again
        </Heading>
        <Text>
          We’ll want the top-level Game component to display a list of past
          moves. It will need access to the history to do that, so we will place
          the history state in the top-level Game component.
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/time-lifting.example")}
          margin="20px auto"
          overflow="overflow"
        />
        <a href="https://codepen.io/gaearon/pen/EmmOqJ?editors=0010">Code</a>
      </React.Fragment>
    );
  }
}
