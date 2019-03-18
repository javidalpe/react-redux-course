import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class OverviewData extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Passing Data Through Props
        </Heading>
        <Text>
          To get our feet wet, let’s try passing some data from our Board
          component to our Square component.
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/overview-data.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
