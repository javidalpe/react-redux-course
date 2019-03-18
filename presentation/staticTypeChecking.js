import React from "react";
import { CodePane, Heading, List, ListItem, Text } from "spectacle";

export class StaticTypeChecking extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Static Type Checking
        </Heading>
        <Text>
          Static type checkers like Flow and TypeScript identify certain types
          of problems before you even run your code. They can also improve
          developer workflow by adding features like auto-completion.
        </Text>
        <List>
          <ListItem>
            Flow. It lets you annotate the variables, functions, and React
            components with a special type syntax
          </ListItem>
          <ListItem>
            TypeScript. It is a typed superset of JavaScript, and includes its
            own compiler.
          </ListItem>
        </List>
      </React.Fragment>
    );
  }
}
