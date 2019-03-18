import React from "react";
import { Heading, Text } from "spectacle";
import CodePane from "spectacle/es/components/code-pane";

export class Props extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Props
        </Heading>
        <Text>
          Components accept arbitrary inputs (called “props”) and return React
          elements describing what should appear on the screen.
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/props.example")}
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
