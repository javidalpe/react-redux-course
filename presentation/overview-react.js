import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class OverviewReact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          What Is React?
        </Heading>
        <Text>
          React is a declarative, efficient, and flexible JavaScript library for
          building user interfaces. It lets you compose complex UIs from small
          and isolated pieces of code called “components”.
        </Text>
        <CodePane
          lang="javascript"
          source={require("raw-loader!../assets/react-component.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
