// Import React
import React from "react";

// Import Spectacle Core tags
import { BlockQuote, Cite, Deck, Heading, Quote, Slide, Text } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import { What } from "./what";
import { Welcome } from "./welcome";
import { Setup } from "./setup";
import { OverviewReact } from "./overview-react";
import { OverviewCode } from "./overview-code";
import { OverviewData } from "./overview-data";
import { OverviewInteractive } from "./overview-interactive";
import { OverviewState } from "./overview-state";
import { Tools } from "./tools";
import { CompletingLifting } from "./completing-lifting";
import { CompletingFunctional } from "./completing-functional";
import { CompletingImmutability } from "./completing-immutability";
import { CompletingTurns } from "./completing-turns";
import { CompletingWinner } from "./completing-winner";
import { TimeHistory } from "./time-history";
import { TimeLifting } from "./time-lifting";
import { TimePast } from "./time-past";
import { TimeKey } from "./time-key";
import { TimeJump } from "./time-jump";
import { TimeCurrent } from "./time-current";
import { Extra } from "./extra";
import { Intro } from "./intro";
import { Jsx } from "./jsx";
import { Element } from "./element";
import { Component } from "./component";
import { Props } from "./props";
import { State } from "./state";
import { Lifecicle } from "./lifecicle";
import { Events } from "./events";
import { Conditionals } from "./conditionals";
import { Lists } from "./lists";
import { Forms } from "./forms";
import { Lifting } from "./lifting";
import { Composition } from "./composition";
import { Fragments } from "./fragments";
import { Accesibility } from "./accesibility";
import { Context } from "./context";
import { ErrorBoundaries } from "./errorBoundaries";
import { HighOrderComponent } from "./highOrderComponent";
import { OtherLibraries } from "./otherLibraries";
import { WebComponents } from "./webComponents";
import { Reconciliation } from "./reconciliation";
import { Optimizing } from "./optimizing";
import { Portals } from "./portals";
import { Refs } from "./refs";
import { ForwardingRefs } from "./forwardingRefs";
import { RenderProps } from "./renderProps";
import { StaticTypeChecking } from "./staticTypeChecking";
import { PropTypes } from "./propTypes";
import { Principle1 } from "./principle1";
import { Principle2 } from "./principle2";
import { Pure } from "./pure";
import { Principle3 } from "./principle3";
import { Middlewares } from "./middlewares";
import { Sideeffects } from "./sideeffects";
import { ReactRouter } from "./reactRouter";
import { MaterialUi } from "./materialui";
import { Styleguidist } from "./styleguidist";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#e7eaeb",
    secondary: "#1b2123",
    tertiary: "#00b5ac",
    quaternary: "#cc325b"
  },
  {
    primary:
      "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Fira Sans,Helvetica Neue,sans-serif",
    secondary:
      "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Fira Sans,Helvetica Neue,sans-serif"
  }
);

export const PRIMARY = "primary";
export const SECONDARY = "secondary";
export const TERTIARY = "tertiary";
export const QUATERNARY = "quaternary";

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        progress="bar"
        bgColor="quaternary"
      >
        <Slide transition={["zoom"]}>
          <Welcome />
        </Slide>

        <Slide transition={["slide"]}>
          <Intro />
        </Slide>

        <Slide bgColor={SECONDARY} transition={["slide"]}>
          <What />
        </Slide>

        <Slide transition={["slide"]}>
          <Setup />
        </Slide>

        <Slide transition={["slide"]}>
          <OverviewReact />
        </Slide>
        <Slide bgColor={TERTIARY} transition={["slide"]}>
          <OverviewCode />
        </Slide>
        <Slide transition={["slide"]}>
          <OverviewData />
        </Slide>
        <Slide transition={["slide"]}>
          <OverviewInteractive />
        </Slide>
        <Slide transition={["slide"]}>
          <OverviewState />
        </Slide>
        <Slide transition={["slide"]}>
          <Tools />
        </Slide>

        <Slide transition={["slide"]}>
          <CompletingLifting />
        </Slide>
        <Slide transition={["slide"]}>
          <CompletingImmutability />
        </Slide>
        <Slide transition={["slide"]}>
          <CompletingFunctional />
        </Slide>
        <Slide transition={["slide"]}>
          <CompletingTurns />
        </Slide>
        <Slide transition={["slide"]}>
          <CompletingWinner />
        </Slide>

        <Slide transition={["slide"]}>
          <TimeHistory />
        </Slide>
        <Slide transition={["slide"]}>
          <TimeLifting />
        </Slide>
        <Slide transition={["slide"]}>
          <TimePast />
        </Slide>
        <Slide transition={["slide"]}>
          <TimeKey />
        </Slide>
        <Slide transition={["slide"]}>
          <TimeJump />
        </Slide>
        <Slide transition={["slide"]}>
          <TimeCurrent />
        </Slide>

        <Slide transition={["zoom"]}>
          <Extra />
        </Slide>

        <Slide transition={["zoom"]}>
          <Heading fit caps>
            React Course
          </Heading>
          <Heading fit caps textColor="secondary">
            Chapter II: Main concepts
          </Heading>
          <Text margin="20px 0 0" textColor={TERTIARY}>
            Javier Vidal. 2019
          </Text>
        </Slide>

        <Slide transition={["slide"]}>
          <Jsx />
        </Slide>

        <Slide transition={["slide"]}>
          <Element />
        </Slide>

        <Slide transition={["slide"]}>
          <Component />
        </Slide>

        <Slide transition={["slide"]}>
          <Props />
        </Slide>

        <Slide bgColor={QUATERNARY}>
          <BlockQuote>
            <Quote>Make your CV with React</Quote>
            <Cite>Exercise</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["slide"]}>
          <State />
        </Slide>

        <Slide transition={["slide"]}>
          <Lifecicle />
        </Slide>

        <Slide transition={["slide"]}>
          <Events />
        </Slide>

        <Slide transition={["slide"]}>
          <Conditionals />
        </Slide>

        <Slide bgColor={QUATERNARY}>
          <BlockQuote>
            <Quote>Club counter</Quote>
            <Cite>Exercise</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["slide"]}>
          <Lists />
        </Slide>

        <Slide transition={["slide"]}>
          <Forms />
        </Slide>

        <Slide transition={["slide"]}>
          <Lifting />
        </Slide>

        <Slide transition={["slide"]}>
          <Composition />
        </Slide>

        <Slide bgColor={QUATERNARY}>
          <BlockQuote>
            <Quote>Calculator</Quote>
            <Cite>Exercise</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["zoom"]}>
          <Heading fit caps>
            React Course
          </Heading>
          <Heading fit caps textColor="secondary">
            Chapter III: Redux
          </Heading>
          <Text margin="20px 0 0" textColor={TERTIARY}>
            Javier Vidal. 2019
          </Text>
        </Slide>

        <Slide transition={["slide"]}>
          <Principle1 />
        </Slide>

        <Slide transition={["slide"]}>
          <Principle2 />
        </Slide>

        <Slide transition={["slide"]}>
          <Pure />
        </Slide>

        <Slide transition={["slide"]}>
          <Principle3 />
        </Slide>

        <Slide bgColor={QUATERNARY}>
          <BlockQuote>
            <Quote>Add Redux to the Club Counter app</Quote>
            <Cite>Exercise</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["slide"]}>
          <Middlewares />
        </Slide>

        <Slide bgColor={QUATERNARY}>
          <BlockQuote>
            <Quote>Create these middlewares: delay, throttling</Quote>
            <Cite>Exercise</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["slide"]}>
          <Sideeffects />
        </Slide>

        <Slide bgColor={QUATERNARY}>
          <BlockQuote>
            <Quote>Fetch data from a weather API</Quote>
            <Cite>Exercise</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["zoom"]}>
          <Heading fit caps>
            React Course
          </Heading>
          <Heading fit caps textColor="secondary">
            Chapter IV: advanced concepts
          </Heading>
          <Text margin="20px 0 0" textColor={TERTIARY}>
            Javier Vidal. 2019
          </Text>
        </Slide>

        <Slide transition={["slide"]}>
          <Fragments />
        </Slide>

        <Slide transition={["slide"]}>
          <Accesibility />
        </Slide>

        <Slide transition={["slide"]}>
          <WebComponents />
        </Slide>

        <Slide transition={["slide"]}>
          <Reconciliation />
        </Slide>

        <Slide transition={["slide"]}>
          <Optimizing />
        </Slide>

        <Slide bgColor={QUATERNARY}>
          <BlockQuote>
            <Quote>A simple clock</Quote>
            <Cite>Exercise</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["slide"]}>
          <Context />
        </Slide>

        <Slide transition={["slide"]}>
          <ErrorBoundaries />
        </Slide>

        <Slide transition={["slide"]}>
          <Refs />
        </Slide>

        <Slide bgColor={QUATERNARY}>
          <BlockQuote>
            <Quote>Audio player</Quote>
            <Cite>Exercise</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["slide"]}>
          <ForwardingRefs />
        </Slide>

        <Slide transition={["slide"]}>
          <OtherLibraries />
        </Slide>

        <Slide transition={["slide"]}>
          <Portals />
        </Slide>

        <Slide transition={["slide"]}>
          <HighOrderComponent />
        </Slide>

        <Slide transition={["slide"]}>
          <RenderProps />
        </Slide>

        <Slide bgColor={QUATERNARY}>
          <BlockQuote>
            <Quote>Timezones clocks</Quote>
            <Cite>Exercise</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["slide"]}>
          <StaticTypeChecking />
        </Slide>

        <Slide transition={["slide"]}>
          <PropTypes />
        </Slide>

        <Slide transition={["zoom"]}>
          <Heading fit caps>
            React Course
          </Heading>
          <Heading fit caps textColor="secondary">
            Chapter V: most used libraries
          </Heading>
          <Text margin="20px 0 0" textColor={TERTIARY}>
            Javier Vidal. 2019
          </Text>
        </Slide>

        <Slide transition={["slide"]}>
          <ReactRouter />
        </Slide>

        <Slide bgColor={QUATERNARY}>
          <BlockQuote>
            <Quote>Company landing pages</Quote>
            <Cite>Exercise</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["slide"]}>
          <MaterialUi />
        </Slide>

        <Slide bgColor={QUATERNARY}>
          <BlockQuote>
            <Quote>Clone a Google UI</Quote>
            <Cite>Exercise</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["slide"]}>
          <Styleguidist />
        </Slide>

        <Slide bgColor={QUATERNARY}>
          <BlockQuote>
            <Quote>Publish your own components library guide</Quote>
            <Cite>Exercise</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["zoom"]}>
          <Heading fit caps>
            React Course
          </Heading>
          <Heading fit caps textColor="secondary">
            Chapter VI: Extending React
          </Heading>
          <Text margin="20px 0 0" textColor={TERTIARY}>
            Javier Vidal. 2019
          </Text>
        </Slide>
      </Deck>
    );
  }
}

/*return (
		  <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
			<Slide transition={["zoom"]} bgColor="primary">
			  <Heading size={3} caps lineHeight={1} textColor="secondary">
				Spectacle Boilerplate
			  </Heading>
			  <Text margin="10px 0 0" textColor="tertiary" size={3} bold>
				open the presentation/index.js file to get started
			  </Text>
			</Slide>
			<Slide transition={["fade"]} bgColor="tertiary">
			  <Heading size={6} textColor="primary" caps>Typography</Heading>
			  <Heading size={1} textColor="secondary">Heading 1</Heading>
			  <Heading size={2} textColor="secondary">Heading 2</Heading>
			  <Heading size={3} textColor="secondary">Heading 3</Heading>
			  <Heading size={4} textColor="secondary">Heading 4</Heading>
			  <Heading size={5} textColor="secondary">Heading 5</Heading>
			  <Text size={6} textColor="secondary">Standard text</Text>
			</Slide>
			<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
			  <Heading size={6} textColor="secondary" caps>Standard List</Heading>
			  <List>
				<ListItem>Item 1</ListItem>
				<ListItem>Item 2</ListItem>
				<ListItem>Item 3</ListItem>
				<ListItem>Item 4</ListItem>
			  </List>
			</Slide>
			<Slide transition={["fade"]} bgColor="secondary" textColor="primary">
			  <BlockQuote>
				<Quote>Example Quote</Quote>
				<Cite>Author</Cite>
			  </BlockQuote>
			</Slide>
		  </Deck>
		);*/
