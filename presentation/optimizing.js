import React from "react";
import { BlockQuote, Cite, Heading, Quote, Text } from "spectacle";
import List from "spectacle/es/components/list";
import ListItem from "spectacle/es/components/list-item";

export class Optimizing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={4} fit caps textColor="quaternary">
          Optimizing Performance
        </Heading>
        <Text>Use the Production Build</Text>
        <Text>
          You can overridethe lifecycle function <i>shouldComponentUpdate</i>.
        </Text>
        <Text>
          In most cases, instead of writing <i>shouldComponentUpdate()</i> by hand, you
          can inherit from <i>React.PureComponent</i>.
        </Text>
      </React.Fragment>
    );
  }
}
