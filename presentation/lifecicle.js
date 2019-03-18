import React from "react";
import { Heading, Text } from "spectacle";
import List from "spectacle/es/components/list";
import ListItem from "spectacle/es/components/list-item";

export class Lifecicle extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Lifecycle
        </Heading>
        <Text>
          Each component is a state machine. Some available methods inside
          components:
        </Text>
        <List>
          <ListItem>constructor</ListItem>
          <ListItem>componentDidMount</ListItem>
          <ListItem>componentDidUpdate</ListItem>
          <ListItem>componentWillUnmount</ListItem>
        </List>
        <Text>
          <a href="http://codepen.io/gaearon/pen/amqdNA?editors=0010">
            Example
          </a>
        </Text>
      </React.Fragment>
    );
  }
}
