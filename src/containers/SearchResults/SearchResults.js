import React, { Component, Fragment } from 'react';

import HeaderNav from '../HeaderNav/HeaderNav';
import Filters from '../Filters/Filters';
import { yearFilters, genreFilters, ratingFilters } from '../../data/filters';
import MoviesList from '../../components/MoviesList/MoviesList';
import { loadMovies, cancelSource } from '../../api/moviesApi'

const defaultState = { 
  yearItems: yearFilters,
  genreItems: genreFilters,
  ratingItems: ratingFilters,
  loading: true,
  sortBy: 'name',
  movies: []
}

class SearchResults extends Component {
  state = defaultState

  componentDidMount() {
    this.getMoviesWithLoadingTime()
  }

  getMoviesWithLoadingTime = () => {
    this.setState({loading: true})

    setTimeout(() => {
      this.getMovies()
    }, 1000)
  }

  getMovies = async () => {
    const params = this.buildParams()
    console.log('About to ask API for movies with the following params: ', params)
    
    try {
      const data = await loadMovies(params, cancelSource.token)    // We pass the cancelSource.token through so that we can cancel the request if the component unmounts before the request completes.
      this.setState({ movies: data, loading: false });
    } catch (error) {
      console.log('Error getting movies: ', error);
      this.setState({ loading: false });
    }
  }

  buildParams = () => {
    return {
      sortBy: this.state.sortBy,
      years: this.getSelectedNames(this.state.yearItems),
      genres: this.getSelectedNames(this.state.genreItems),
      ratings: this.getSelectedNames(this.state.ratingItems)
    }
  }

  getSelectedNames = (items) => {
    return items.filter(i => i.selected).map(i => i.name)
  }

  handleClearFilters = () => {
    this.setState(defaultState, () => this.getMoviesWithLoadingTime()) 
  }

  handleApplyFilters = () => {
    this.getMoviesWithLoadingTime()
  }

  handleChange = (_, data, identifier) => {
    this.setState(state => {
      return {
        [identifier]: this.updateFilter(state[identifier], data.label, data.checked)
      }
    })
  }

  handleChangeSortBy = (_, data) => {
    this.setState({sortBy: data.value}, () => this.getMoviesWithLoadingTime())
  }

  handleLoadMore = () => {
    this.getMoviesWithLoadingTime()
  }

  updateFilter = (array, name, selected) => {
    return array.map((item) => {
      if (item.name !== name) {
        return item
      }
  
      return {...item, selected }
    })
  }

  render() {
    return (
      <Fragment>
        <HeaderNav />

        <Filters
          yearItems={this.state.yearItems}
          genreItems={this.state.genreItems}
          ratingItems={this.state.ratingItems}
          sortBy={this.state.sortBy}
          onChange={this.handleChange}
          onClearFilters={this.handleClearFilters} 
          onApplyFilters={this.handleApplyFilters}
          onChangeSortBy={this.handleChangeSortBy} />
          
        <MoviesList 
          movies={this.state.movies} 
          loading={this.state.loading} 
          onLoadMore={this.handleLoadMore} />
      </Fragment>
    );
  }

  componentWillUnmount() {
    cancelSource.cancel()
  }
}

export default SearchResults;