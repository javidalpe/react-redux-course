import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class TimeHistory extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={4} caps textColor="quaternary">
          Storing a History of Moves
        </Heading>
        <Text>We’ll store the past squares arrays in another array.</Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/time-history.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
