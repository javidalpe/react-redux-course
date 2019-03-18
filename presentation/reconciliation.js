import React from "react";
import { Heading, Text } from "spectacle";
import ListItem from "spectacle/es/components/list-item";
import List from "spectacle/es/components/list";

export class Reconciliation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Reconciliation
        </Heading>
        <Text>
          You don’t have to worry about exactly what changes on every update ;)
        </Text>
        <Text>But, between two nodes...</Text>
        <List>
          <ListItem>
            have different types, React will tear down the old tree and build
            the new tree from scratch.
          </ListItem>
          <ListItem>
            of the same type, React looks at the attributes of both, keeps the
            same underlying DOM node, and only updates the changed attributes.
          </ListItem>
        </List>
      </React.Fragment>
    );
  }
}
