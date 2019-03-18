import React from "react";
import { Heading, Text } from "spectacle";
import List from "spectacle/es/components/list";
import ListItem from "spectacle/es/components/list-item";

export class State extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          The state
        </Heading>
        <Text>Each component has a internal state.</Text>

        <List>
          <ListItem>Is read only. Use setState instead.</ListItem>
          <ListItem>Is private.</ListItem>
        </List>
        <Text>
          <a href="https://codepen.io/gaearon/pen/KgQpJd?editors=0010">
            Example
          </a>
        </Text>
      </React.Fragment>
    );
  }
}
