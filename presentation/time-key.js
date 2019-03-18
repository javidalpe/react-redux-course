import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class TimeKey extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={4} caps textColor="quaternary">
          Picking a Key
        </Heading>
        <Text>Imagine transitioning from</Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/time-key-1.example")}
          margin="20px auto"
          overflow="overflow"
        />
        <Text>to.</Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/time-key-2.example")}
          margin="20px auto"
          overflow="overflow"
        />

        <Text>Use the move index as a key.</Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/time-key-3.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
