import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import FilterPopup from '../FilterPopup/FilterPopup';

const FilterPanel = ({yearItems = [], genreItems = [], ratingItems = [], onClearFilters, onApplyFilters, onChange}) => (
  <Grid className='filterGrid' stackable columns={2}>
    <Grid.Column>
      <FilterPopup title='Release Year' items={yearItems} identifier='yearItems' onChange={onChange} />
      <FilterPopup title='Genre' items={genreItems} identifier='genreItems' onChange={onChange} />
      <FilterPopup title='Rating' items={ratingItems} identifier='ratingItems' onChange={onChange} />
    </Grid.Column>
    <Grid.Column textAlign='right' >
      <Button basic color='black' className='filterButton' onClick={onClearFilters}>Clear Filters</Button>
      <Button basic color='black' className='filterButton' onClick={onApplyFilters}>Apply Filters</Button>
    </Grid.Column>
  </Grid>
);

export default FilterPanel;