import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class CompletingLifting extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Lifting State Up
        </Heading>
        <Text>
          To collect data from multiple children, or to have two child
          components communicate with each other, you need to declare the shared
          state in their parent component instead.
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/completing-lifting.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
