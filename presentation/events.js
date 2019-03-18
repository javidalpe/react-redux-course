import React from "react";
import { Heading, Text } from "spectacle";
import List from "spectacle/es/components/list";
import ListItem from "spectacle/es/components/list-item";
import CodePane from "spectacle/es/components/code-pane";

export class Events extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Handling Events
        </Heading>
        <Text>
          Handling events with React elements is very similar to handling events
          on DOM elements:
        </Text>

        <List>
          <ListItem>Camelcase</ListItem>
          <ListItem>
            You pass a function as the event handler, rather than strings
          </ListItem>
        </List>

        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/events.example")}
          margin="20px auto"
          overflow="overflow"
        />

        <a href="http://codepen.io/gaearon/pen/xEmzGg?editors=0010">Example</a>
      </React.Fragment>
    );
  }
}
