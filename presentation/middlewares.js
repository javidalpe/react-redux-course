import React from "react";
import { Heading, Text } from "spectacle";

export class Middlewares extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Middlewares
        </Heading>
        <Text>They let you incercept and modify each action.</Text>

        <div>
          <a href="https://jsbin.com/runuya/edit?js,console,output">Example</a>
        </div>
      </React.Fragment>
    );
  }
}
