import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { fetchQuizzes } from "../../services/backend";
import {
  FETCH_QUESTIONS,
  DONE_QUESTIONS,
  SUCCESS_QUESTIONS,
  ERROR_QUESTIONS,
  SET_QUESTIONS
} from "../constants";

function* quizzesSaga() {
  yield takeLatest(FETCH_QUESTIONS, function*() {
    try {
      const result = yield call(fetchQuizzes);
      // console.log('resultresult', result)
      yield put({
        type: SUCCESS_QUESTIONS,
        payload: result.results
      });
      yield put({
        type: DONE_QUESTIONS
      });
    } catch (e) {
      console.log('ee', e)
      yield put({
        type: ERROR_QUESTIONS
      });
    }
  });
}

export default function* rootSaga() {
  yield all([
    quizzesSaga()
    // fork(quizzesSaga())
  ]);
}
