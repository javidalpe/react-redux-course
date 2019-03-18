import React from "react";
import { Heading, Text } from "spectacle";
import List from "spectacle/es/components/list";
import ListItem from "spectacle/es/components/list-item";

export class Extensions extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Extending React:
        </Heading>
        <Text>
          <List>
            <ListItem>
              Mobile:
              <a href="https://facebook.github.io/react-native/">
                React Native
              </a>
            </ListItem>
            <ListItem>
              Server Side Rendering: <a href="https://nextjs.org/">Next</a>
            </ListItem>
            <ListItem>
              Static PWA: <a href="https://www.gatsbyjs.org/">Gatsby</a>
            </ListItem>
          </List>
        </Text>
      </React.Fragment>
    );
  }
}
