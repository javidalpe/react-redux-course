import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class CompletingWinner extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Declaring a Winner
        </Heading>
        <Text>
          Change Board’s render function to check if a player has won.
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/completing-winner.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
