import * as types from './types'
const initialState = {
  loading: null,
  movies: [],
  error: null
}

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_SEARCH:
      return { ...state, loading: action.loading }
    case types.CANCELLED_SEARCH:
      return { ...state, loading: action.loading }
    case types.SEARCH_SUCCESS:
      return { ...state, movies: action.data, error: null }
    case types.SEARCH_FAILURE:
      return { ...state, movies: [], error: action.error }
    default:
      return state
  }
}