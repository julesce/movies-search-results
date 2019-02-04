# Movies Search Results - React Playground

A simple little React app that hits a local JSON file and displays a list of movies.

## Setup

In the project directory:

### `yarn install`

## Available Scripts

In the project directory:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to take a peek.

### `yarn run storybook`

Fires up the [Storybook UI](https://storybook.js.org), so that one can look at each of the relevant components in isolation. Open [http://localhost:9009/](http://localhost:9009/) to have a look.

### `yarn run test:e2e:dev`

Runs the end-to-end tests using [Cypress](https://www.cypress.io). Wait for the Cypress app to spin up (and the local server), and then click on the `Run all specs` button.

### `yarn test`

Launches the test runner in the interactive watch mode, and runs the snapshot tests driven by Storybook.

### `yarn run build`

Builds the app for production to the `build` folder.<br>

## Design Decisions and Considerations

### Architecture

Movies are retrieved via a `GET` request to a local JSON file. It is assumed that all filtering and sorting would happen on the server side. Thus you'll notice that I send through these relevant filter parameters as part of the request to the "server" (they're logged in the `console`).

The categories listed as part of the top navigation (`All`, `Movies`, `Games & Apps`, etc.) are assumed to route off to their relevant component for showing search results for that type of category. In our case, we're only interested in showing what the results for a movie based search would look like.

There is a one second delay in retrieving the movies. This is to simulate a real world network request, and illustrate how we handle this loading time.

Network request errors are simply logged to the `console`.

### State Management

I've opted to keep things simple, and shy away from Redux / MobX. In this case I'd consider these to be adding unnecessary complexity, with little value.

You’ll notice that I split up components into two categories:
* `Containers` - These are designed to manage local state, and propagate that state down into child components as props.
* `Components` - These do not manage local state, and render based on their props.

### Styling

I chose to go with the base theme of [Semantic UI](https://react.semantic-ui.com/). It felt like a good foundation upon which to build, given that it provides a relatively un-opinionated set of styles and components, unlike Google's Material Design. 

The `container` that we use to wrap our content doesn't quite match up to the design mock-up (in terms of dimensions), so I've made various approximations about sizing things.

I've kept things simple by just importing individual stylesheets into the components themselves. Going the JSS route felt like a bit of overkill.

### Responsiveness

The relevant components and elements do start stacking as the browser width drops. The alignment of the images to the container size isn't quite perfect as we scale down though, so there is room for improvement here.

### Testing

I'm a believer of what Kent C Dodds talks about [here](https://blog.kentcdodds.com/write-tests-not-too-many-mostly-integration-5e8c7fff591c), and specifically [this](https://twitter.com/kentcdodds/status/977018512689455106): 

`The more your tests resemble the way your software is used, the more confidence they can give you.`

Thus, I've gone the route of using [Storybook](https://storybook.js.org) for snapshot testing (ensuring that our components render correctly), and [Cypress](https://www.cypress.io) for end-to-end tests (ensuring that we're testing things from the user's perspective).

That's not to say that I believe there is no place for unit tests. It's just that in this case, our integration style tests deliver more value to us.

### Future Considerations

* `Accessibility` - The app should be tested properly under a screenreader. Unfortunately time constraints have gotten the better of me here.

### Code Comments

I'm a big believer in writing self-documenting code, and take pride in doing so. Thus, you won't find many comments in my work, with the exception of when it is truly deserving.

More often than not, comments end up being out-of-date distractions, seldom offering any real insight into the working of things. 