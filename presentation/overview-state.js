import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class OverviewState extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          The state
        </Heading>
        <Text>
          As a next step, we want the Square component to “remember” that it got
          clicked, and fill it with an “X” mark. To “remember” things,
          components use state.
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/overview-state.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
