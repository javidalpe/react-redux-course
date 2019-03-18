import React from "react";
import { Heading, Text } from "spectacle";

export class Principle2 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          II Principle
        </Heading>
        <Text>
          State is read-only. The only way to change the state is to emit an
          action, an object describing what happened.
        </Text>

        <div>
          <a href="https://jsbin.com/paruwi/edit?console,output">Example 1</a>
        </div>
        <div>
          <a href="https://jsbin.com/jurexir/edit?console,output">Example 2</a>
        </div>
      </React.Fragment>
    );
  }
}
