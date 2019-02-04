import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Filters from './Filters';
import { yearFilters, genreFilters, ratingFilters } from '../../data/filters';
import { Container } from 'semantic-ui-react';

const actions = {
  onChange: action('onChange'),
  onClearFilters: action('onClearFilters'),
  onApplyFilters: action('onApplyFilters'),
  onChangeSortBy: action('onChangeSortBy'),
};

storiesOf('Filters', module)
  .addDecorator(story => <Container>{story()}</Container>)
  .add('default', () => <Filters yearItems={yearFilters} genreItems={genreFilters} ratingItems={ratingFilters} sortBy='name' {...actions} />)
