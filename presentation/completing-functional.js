import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class CompletingFunctional extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Function Components
        </Heading>
        <Text>We’ll now change the Square to be a function component.</Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/completing-functional.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
