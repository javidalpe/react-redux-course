import React from "react";
import { Heading, Markdown, Text } from "spectacle";
import { PRIMARY } from "./index";

export class OverviewCode extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Markdown>
          {`
  Inspecting the Starter Code [initial code](https://codepen.io/gaearon/pen/oWWQNa?editors=0010).
  * No css
  * 3 components
  * Placeholders
  * No interactive components
            `}
        </Markdown>
      </React.Fragment>
    );
  }
}
