import React from "react";
import { CodePane, Heading, List, ListItem, Text } from "spectacle";

export class Accesibility extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Accessibility
        </Heading>
        <Text>
          React fully supports building accessible websites, often by using
          standard HTML techniques.
        </Text>

        <Text>aria-* supported.</Text>
      </React.Fragment>
    );
  }
}
