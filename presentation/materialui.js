import React from "react";
import { Heading, Text } from "spectacle";

export class MaterialUi extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Material UI
        </Heading>
        <Text>A library based on the famous Material Design.</Text>

        <a href="https://material-ui.com/">Oficial Website</a>
      </React.Fragment>
    );
  }
}
