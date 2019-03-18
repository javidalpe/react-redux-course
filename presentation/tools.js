import React from "react";
import { Heading, Text } from "spectacle";

export class Tools extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Developers tools
        </Heading>
        <Text>
          The React Devtools extension for
          <a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es">
            Chrome
          </a>
          and
          <a href="https://addons.mozilla.org/en-US/firefox/addon/react-devtools/">
            Firefox
          </a>
          lets you inspect a React component tree with your browser’s developer
          tools.
        </Text>
        <Text>There are a few extra steps to get it working with CodePen.</Text>
      </React.Fragment>
    );
  }
}
