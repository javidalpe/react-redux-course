import React from "react";
import { Heading, Text } from "spectacle";
import CodePane from "spectacle/es/components/code-pane";

export class RenderProps extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Render Props
        </Heading>
        <Text>
          The term “render prop” refers to a technique for sharing code between
          React components using a prop whose value is a function.
        </Text>

        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/renderprops.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
