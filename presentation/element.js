import React from "react";
import { Heading, Text } from "spectacle";
import CodePane from "spectacle/es/components/code-pane";

export class Element extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Rendering Elements
        </Heading>
        <Text>Elements are the smallest building blocks of React apps.</Text>
        <Text>React elements are immutable.</Text>

        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/element.example")}
          margin="20px auto"
          overflow="overflow"
        />
        <Text>
          <a href="https://reactjs.org/redirect-to-codepen/rendering-elements/update-rendered-element">
            Example
          </a>
        </Text>
      </React.Fragment>
    );
  }
}
