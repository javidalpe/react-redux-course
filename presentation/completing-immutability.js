import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class CompletingImmutability extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={4} caps textColor="quaternary">
          Why Immutability Is Important
        </Heading>
        <Text>
          Immutability makes complex features much easier to implement.
        </Text>
        <Text>Data Change with Mutation</Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/completing-immutability-1.example")}
          margin="20px auto"
          overflow="overflow"
        />
        <Text>Data Change without Mutation</Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/completing-immutability-2.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
