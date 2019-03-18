import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class CompletingTurns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={4} caps textColor="quaternary">
          Taking Turns
        </Heading>
        <Text>
          We now need to fix an obvious defect in our tic-tac-toe game: the “O”s
          cannot be marked on the board. We’ll set the first move to be “X” by
          default. We can set this default by modifying the initial state in our
          Board constructor:
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/completing-turns.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
