import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class TimeJump extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Implementing Time Travel
        </Heading>
        <Text>
          First, add stepNumber: 0 to the initial state in Game’s constructor:
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/time-jump.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
