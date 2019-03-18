import React from "react";
import { Heading, Text } from "spectacle";
import List from "spectacle/es/components/list";
import ListItem from "spectacle/es/components/list-item";
import CodePane from "spectacle/es/components/code-pane";

export class Refs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={4} caps textColor="quaternary">
          Refs and the DOM
        </Heading>
        <Text>
          Refs provide a way to access DOM nodes or React elements created in
          the render method.
        </Text>

        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/refs.example")}
          margin="20px auto"
          overflow="overflow"
        />

        <Text>When to Use Refs:</Text>
        <List>
          <ListItem>
            Managing focus, text selection, or media playback.
          </ListItem>
          <ListItem>Triggering imperative animations.</ListItem>
          <ListItem>Integrating with third-party DOM libraries.</ListItem>
        </List>
      </React.Fragment>
    );
  }
}
