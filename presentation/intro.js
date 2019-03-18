import React from "react";
import { Heading, List, ListItem, Text } from "spectacle";

export class Intro extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} caps textColor="quaternary">
          Index
        </Heading>
        <List>
          <ListItem>Chapter I: Tutorial 'tic tac toe'</ListItem>
          <ListItem>Chapter II: Basic concepts</ListItem>
          <ListItem>Chapter III: Redux</ListItem>
          <ListItem>Chapter IV: Advanced concepts</ListItem>
          <ListItem>Chapter V: Most used libraries</ListItem>
          <ListItem>Chapter VI: Extending React</ListItem>
        </List>
      </React.Fragment>
    );
  }
}
