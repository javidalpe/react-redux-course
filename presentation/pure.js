import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class Pure extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Pure functions
        </Heading>
        <Text>Deterministic, with no side effect.</Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/pure.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
