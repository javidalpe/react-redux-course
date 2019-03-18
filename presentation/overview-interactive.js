import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class OverviewInteractive extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Making an Interactive Component
        </Heading>
        <Text>
          Let’s fill the Square component with an “X” when we click it.
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/overview-interactive.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
