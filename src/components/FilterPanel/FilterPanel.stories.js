import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import FilterPanel from './FilterPanel'
import { Container } from 'semantic-ui-react';
import { yearFilters, genreFilters, ratingFilters } from '../../data/filters';

const actions = {
  onChange: action('onChange'),
  onClearFilters: action('onClearFilters'),
  onApplyFilters: action('onApplyFilters')
}

storiesOf('FilterPanel', module)
  .addDecorator(story => <Container>{story()}</Container>)
  .add('default', () => <FilterPanel yearItems={yearFilters} genreItems={genreFilters} ratingItems={ratingFilters} {...actions} />)