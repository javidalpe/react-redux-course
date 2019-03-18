import React from "react";
import { Heading, List, ListItem, Text } from "spectacle";

export class Extra extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} caps fit textColor="">
          Ideas for improvements
        </Heading>
        <Text>
          <List>
            <ListItem>
              Display the location for each move in the format (col, row) in the
              move history list.
            </ListItem>
            <ListItem>
              Bold the currently selected item in the move list.
            </ListItem>
            <ListItem>
              Rewrite Board to use two loops to make the squares instead of
              hardcoding them.
            </ListItem>
            <ListItem>
              Add a toggle button that lets you sort the moves in either
              ascending or descending order.
            </ListItem>
            <ListItem>
              When someone wins, highlight the three squares that caused the
              win.
            </ListItem>
            <ListItem>
              When no one wins, display a message about the result being a draw.
            </ListItem>
          </List>
        </Text>
      </React.Fragment>
    );
  }
}
