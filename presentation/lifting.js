import React from "react";
import { Heading, Text } from "spectacle";

export class Lifting extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Lifting State Up
        </Heading>
        <Text>
          Often, several components need to reflect the same changing data. We
          recommend lifting the shared state up to
          <a href="https://codepen.io/gaearon/pen/ZXeOBm?editors=0010">
            their closest common ancestor
          </a>
          .
        </Text>
        <Text>Psss! Redux rocks.</Text>
      </React.Fragment>
    );
  }
}
