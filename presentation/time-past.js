import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class TimePast extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={4} caps textColor="quaternary">
          Showing the Past Moves
        </Heading>
        <Text>
          Using the map method, we can map our history of moves to React
          elements.
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/time-past.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
