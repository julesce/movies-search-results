import React, { Component, Fragment } from 'react';
import { Grid, Icon, Dropdown, List, ListItem, Label } from 'semantic-ui-react';

import FilterPanel from '../../components/FilterPanel/FilterPanel';
import { sortOptions } from '../../data/filters';

class Filters extends Component {
  state = { panelOpen: true }

  constructor(props) {
    super()
  }

  togglePanel = () => {
    this.setState((prevState) => ({
      panelOpen: !prevState.panelOpen
    }))
  }

  render() {
    const { panelOpen } = this.state
    const { yearItems, genreItems, ratingItems, sortBy, onChange, onClearFilters, onApplyFilters, onChangeSortBy } = this.props

    const panel = <FilterPanel 
                    yearItems={yearItems}
                    genreItems={genreItems}
                    ratingItems={ratingItems}
                    onChange={onChange}
                    onClearFilters={onClearFilters} 
                    onApplyFilters={onApplyFilters}  />

    return (
      <Fragment>
        <Grid className='filterGrid'>
          <Grid.Column textAlign='right'>
            <List horizontal>
              <ListItem>
                <Label onClick={this.togglePanel} as='a' size='large' style={{background:'none'}}>Filter <Icon name='dropdown' /></Label>
              </ListItem>
              <ListItem>Sorted By: <Dropdown inline onChange={onChangeSortBy} options={sortOptions} defaultValue={sortBy} /></ListItem>
            </List>          
          </Grid.Column>
        </Grid>
        { panelOpen ? panel : null }
      </Fragment>
    );
  }
}

export default Filters;