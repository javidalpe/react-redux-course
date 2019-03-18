import React from "react";
import { Heading, Text } from "spectacle";

export class Forms extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Forms, Controlled or not
        </Heading>
        <Text>
          HTML form elements work a little bit differently from other DOM
          elements in React, because form elements naturally keep some internal
          state.
        </Text>
        <Text>
          If we want to handle the internal state of the form, I'll use
          <a href="https://codepen.io/gaearon/pen/VmmPgp?editors=0010">
            <i>controlled components</i>
          </a>
          .
        </Text>
      </React.Fragment>
    );
  }
}
