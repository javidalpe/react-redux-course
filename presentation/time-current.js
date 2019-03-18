import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class TimeCurrent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Rendering selected move
        </Heading>
        <Text>
          Finally, we will modify the Game component’s render method from always
          rendering the last move to rendering the currently selected move
          according to stepNumber:
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/time-current.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
