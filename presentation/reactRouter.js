import React from "react";
import { CodePane, Heading, List, ListItem, Text } from "spectacle";

export class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          React Router
        </Heading>
        <Text>To handle single page application navigation.</Text>

        <a href="https://reacttraining.com/react-router/web/guides/philosophy">
          Oficial website
        </a>
      </React.Fragment>
    );
  }
}
