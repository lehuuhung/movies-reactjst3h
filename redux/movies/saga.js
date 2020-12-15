import { call, put, takeLatest } from 'redux-saga/effects'
import * as actions from './actions'
import * as types from './types'
import * as api from '../api/movies'

function* searchMovieSaga({ name }) {
  try {
    yield put(actions.startSearchMovie(true))
    const response = yield call(api.searchMovieByKeywords, name)
    if(response){
      yield put(actions.searchMoviesSuccess(response))
    } else {
      yield put(actions.searchMoviesFailure({
        code: 404,
        message: 'Not found'
      }))
    }
  } catch (e) {
    yield put(actions.searchMoviesFailure(e))
  } finally {
    yield put(actions.cancelSearchMovie(false))
  }
}

export function* followSearchMovie(){
  yield takeLatest(types.SEARCH_MOVIES, searchMovieSaga)
}