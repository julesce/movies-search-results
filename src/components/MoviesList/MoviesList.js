import React from 'react'
import Movie from '../Movie/Movie';

import './MoviesList.css';
import { Grid, Button, Loader } from 'semantic-ui-react';

const MoviesList = ({movies = [], loading = true, onLoadMore}) => {

  const loadingPanel = (
    <Grid>
      <Grid.Column>
        <Loader active inline='centered' />
      </Grid.Column>
    </Grid>
  )

  const emptyPanel = (
    <Grid>
      <Grid.Column textAlign='center'>
        Sorry, no movies found.
      </Grid.Column>
    </Grid>
  )
  
  if(loading) {
    return loadingPanel
  } else if(movies.length === 0) {
    return emptyPanel
  } else {
    return (
      <React.Fragment>
        <ul className='moviesList'>
          { movies.map(movie => (
            <li key={movie.id}><Movie movie={movie} /></li>
          )) }
        </ul>
        <Grid>
          <Grid.Column textAlign='center'>
            <Button basic color='black' onClick={onLoadMore} className='loadMoreButton'>Load More</Button>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    )
  }
}

export default MoviesList