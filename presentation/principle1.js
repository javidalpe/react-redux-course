import React from "react";
import { Heading, Text } from "spectacle";

export class Principle1 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          I Principle
        </Heading>
        <Text>
          Single source of truth. The state of your whole application is stored
          in an object tree within a single store.
        </Text>

        <div>
          <a href="https://jsbin.com/bugares/edit?console,output">Example 1</a>
        </div>
        <div>
          <a href="https://jsbin.com/gamaxeb/edit?console,output">Example 2</a>
        </div>
      </React.Fragment>
    );
  }
}
