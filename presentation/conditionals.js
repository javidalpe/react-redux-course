import React from "react";
import { Heading, Text } from "spectacle";
import List from "spectacle/es/components/list";
import ListItem from "spectacle/es/components/list-item";

export class Conditionals extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Conditional Rendering
        </Heading>
        <Text>4 types:</Text>

        <List>
          <ListItem>Element Variables</ListItem>
          <ListItem>Inline If with Logical && Operator</ListItem>
          <ListItem>Inline If-Else with Conditional Operator</ListItem>
          <ListItem>Preventing Component from Rendering</ListItem>
        </List>

        <a href="https://codepen.io/gaearon/pen/Xjoqwm?editors=0010">Example</a>
      </React.Fragment>
    );
  }
}
