import React from "react";
import { Heading, Text } from "spectacle";
import CodePane from "spectacle/es/components/code-pane";

export class Context extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Context
        </Heading>
        <Text>
          Context provides a way to pass data through the component tree without
          having to pass props down manually at every level.
        </Text>
        <Text>Warning! Use Redux.</Text>

        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/context.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
