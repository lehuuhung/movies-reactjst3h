import { createSelector } from 'reselect'

const movieSelector = state => state.movie

export const loadingSearch = createSelector(
  movieSelector,
  item => item.loading
)

export const getDataMovies = createSelector(
  movieSelector,
  item => item.movies.results
)