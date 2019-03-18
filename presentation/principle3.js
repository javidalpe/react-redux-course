import React from "react";
import { Heading, Text } from "spectacle";

export class Principle3 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          III Principle
        </Heading>
        <Text>
          Changes are made with pure functions. To specify how the state tree is
          transformed by actions, you write pure reducers.
        </Text>

        <a href="https://jsbin.com/yifufaz/edit?console,output">
          Example reducer
        </a>

        <div>
          <a href="https://jsbin.com/kawayiq/edit?js,console,output">
            Example app
          </a>
        </div>
      </React.Fragment>
    );
  }
}
