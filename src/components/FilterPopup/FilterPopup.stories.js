import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import FilterPopup from './FilterPopup'
import { Container } from 'semantic-ui-react';
import { yearFilters } from '../../data/filters';

const actions = {
  onChange: action('onChange')
}

storiesOf('FilterPopup', module)
  .addDecorator(story => <Container>{story()}</Container>)
  .add('Release Year', () => <FilterPopup title='Release Year' items={yearFilters} identifier='yearItems' {...actions} />)