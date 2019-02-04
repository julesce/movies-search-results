import React from 'react'
import { storiesOf } from '@storybook/react'

import Movie from './Movie'
import { movies } from '../../data/movies'
import { Container } from 'semantic-ui-react';

storiesOf('Movie', module)
  .addDecorator(story => <Container>{story()}</Container>)
  .add('default', () => <Movie movie={movies[0]} />)