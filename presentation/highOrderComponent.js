import React from "react";
import { Heading, Text } from "spectacle";
import List from "spectacle/es/components/list";
import ListItem from "spectacle/es/components/list-item";
import CodePane from "spectacle/es/components/code-pane";

export class HighOrderComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading caps size={5} textColor="quaternary">
          Higher-Order Components
        </Heading>
        <Text>
          A higher-order component (HOC) is an advanced technique in React for
          reusing component logic.
        </Text>
        <Text>
          Concretely, a higher-order component is a function that takes a
          component and returns a new component.
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/hoc.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
