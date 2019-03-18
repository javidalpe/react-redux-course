import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class Portals extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={4} caps textColor="quaternary">
          Portals
        </Heading>
        <Text>
          Portals provide a first-class way to render children into a DOM node
          that exists outside the DOM hierarchy of the parent component.
        </Text>

        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/portals.example")}
          margin="20px auto"
          overflow="overflow"
        />

        <a href="https://codepen.io/gaearon/pen/yzMaBd">Example</a>
      </React.Fragment>
    );
  }
}
