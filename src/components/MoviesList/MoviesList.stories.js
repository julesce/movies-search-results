import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import MoviesList from './MoviesList'
import { movies } from '../../data/movies'
import { Container } from 'semantic-ui-react';

const actions = {
  onLoadMore: action('onLoadMore')
}

storiesOf('MoviesList', module)
  .addDecorator(story => <Container>{story()}</Container>)
  .add('loading', () => <MoviesList />)
  .add('without results', () => <MoviesList movies={[]} loading={false} {...actions} />)
  .add('with results', () => <MoviesList movies={movies} loading={false} {...actions} />)