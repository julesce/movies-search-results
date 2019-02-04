import React from 'react'
import { storiesOf } from '@storybook/react'

import SearchResults from './SearchResults';
import { Container } from 'semantic-ui-react'

storiesOf('SearchResults', module)
  .addDecorator(story => <Container>{story()}</Container>)
  .add('default', () => <SearchResults />)