import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import SearchResults from './containers/SearchResults';

import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <SearchResults />
      </Container>
    );
  }
}

export default App;
