import React from "react";
import { Heading, Text } from "spectacle";
import CodePane from "spectacle/es/components/code-pane";

export class ErrorBoundaries extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Error boundaries
        </Heading>
        <Text>
          Error boundaries are React components that catch JavaScript errors
          anywhere in their child component tree, log those errors, and display
          a fallback UI instead of the component tree that crashed.
        </Text>
        <Text>
          <a href="https://codepen.io/gaearon/pen/wqvxGa?editors=0010">
            Example
          </a>
        </Text>
      </React.Fragment>
    );
  }
}
