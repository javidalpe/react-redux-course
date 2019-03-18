import React from "react";
import { CodePane, Heading, List, ListItem, Text } from "spectacle";

export class Jsx extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Introducing JSX
        </Heading>
        <Text>Is a syntax extension (sugar) to JavaScript.</Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/jsx.example")}
          margin="20px auto"
          overflow="overflow"
        />
        <Text>
          <List>
            <ListItem>Specifying Attributes with JSX</ListItem>
            <ListItem>Specifying Children with JSX</ListItem>
            <ListItem>JSX Prevents Injection Attacks</ListItem>
            <ListItem>
              JSX Represents Objects:
              <a href="https://babeljs.io/repl/#?presets=react&code_lz=DwEwlgbgBAxgNgQwM5IHIILYFMC8AiJACwHsAHUsAOwHMBaOMJAFzwD4AoKKYQgRlYDKJclWpQAMoyZQAZsQBOUAN6l5ZJADpKmLAF9gAej4cuwAK5wTXbg1YBJSswTV5mQ7c7XgtgOqEETEgAguTuYFamtgDyMBZmSGFWhhYchuAQrADc7EA">
                Example
              </a>
            </ListItem>
          </List>
        </Text>
      </React.Fragment>
    );
  }
}
