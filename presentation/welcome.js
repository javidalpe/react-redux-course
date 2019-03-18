import React from "react";
import { Heading, Text } from "spectacle";
import { TERTIARY } from "./index";

export class Welcome extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading fit caps>
          React Course
        </Heading>
        <Heading fit caps textColor="secondary">
          Chapter I: Tutorial
        </Heading>
        <Text margin="20px 0 0" textColor={TERTIARY}>
          Javier Vidal. 2019.
        </Text>
      </React.Fragment>
    );
  }
}
