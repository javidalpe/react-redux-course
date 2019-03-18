import React from "react";
import { Heading, Text } from "spectacle";
import List from "spectacle/es/components/list";
import ListItem from "spectacle/es/components/list-item";
import CodePane from "spectacle/es/components/code-pane";

export class WebComponents extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Web Components
        </Heading>
        <Text>
          React and Web Components are built to solve different problems. As a
          developer, you are free to use React in your Web Components, or to use
          Web Components in React, or both.
        </Text>

        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/webcomponents.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
