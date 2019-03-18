import React from "react";
import { Heading, Text } from "spectacle";
import CodePane from "spectacle/es/components/code-pane";

export class Component extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Components
        </Heading>
        <Text>
          Components let you split the UI into independent, reusable pieces, and
          think about each piece in isolation.
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/component.example")}
          margin="20px auto"
          overflow="overflow"
        />
        <Text>
          <a href="https://reactjs.org/redirect-to-codepen/components-and-props/rendering-a-component">
            Example
          </a>
        </Text>
      </React.Fragment>
    );
  }
}
