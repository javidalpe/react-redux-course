import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class Fragments extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={4} textColor="quaternary">
          Fragments
        </Heading>
        <Text>
          A common pattern in React is for a component to return multiple
          elements. Fragments let you group a list of children without adding
          extra nodes to the DOM.
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/fragments.example")}
          margin="20px auto"
          overflow="overflow"
        />
        <Text>
          <a href="https://codepen.io/reactjs/pen/VrEbjE?editors=1000">
            Example
          </a>
        </Text>
      </React.Fragment>
    );
  }
}
