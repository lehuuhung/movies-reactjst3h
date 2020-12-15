import { all, call } from 'redux-saga/effects'
import { followSearchMovie as movieSaga } from './movies/saga'

export default function* rootSaga(){
  yield all([
    call(movieSaga)
  ])
}