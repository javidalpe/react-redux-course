import React from "react";
import { Heading, Text } from "spectacle";
import CodePane from "spectacle/es/components/code-pane";

export class ForwardingRefs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Forwarding Refs
        </Heading>
        <Text>
          Ref forwarding is a technique for automatically passing a ref through
          a component to one of its children.
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/forwarding.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
