import { all } from 'redux-saga/effects';
import questionsSaga from './questions/saga';

export default function* rootSaga () {
  return yield all([
    questionsSaga()
  ])
}
