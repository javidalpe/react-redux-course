import React from "react";
import { Heading, Text } from "spectacle";

export class Lists extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Lists and Keys
        </Heading>
        <Text>To render and array of elements use the map function (es6).</Text>

        <Text>
          Keys help React identify which items have changed, are added, or are
          removed. Keys should be given to the elements inside the array to give
          the elements a stable identity.
        </Text>

        <a href="https://codepen.io/gaearon/pen/BLvYrB?editors=0010">Example</a>
      </React.Fragment>
    );
  }
}
