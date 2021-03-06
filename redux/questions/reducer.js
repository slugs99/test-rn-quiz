import {
  FETCH_QUESTIONS,
  DONE_QUESTIONS,
  SUCCESS_QUESTIONS,
  ERROR_QUESTIONS,
  SET_QUESTIONS,
  START_TIME,
  END_TIME
} from "../constants";
const initialState = { questionsList: [], startTime: null, endTime: null, loading: false, error: false };

export default function QuestionsList(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_QUESTIONS:
      return { ...initialState, loading: true };
    case DONE_QUESTIONS:
      return { ...state, loading: false };
    case SUCCESS_QUESTIONS:
      return { ...state, questionsList: payload, error: false };
    case ERROR_QUESTIONS:
      return { ...state, error: true };
    case START_TIME:
      return { ...state, startTime: new Date().toISOString() };
    default:
      return state;
  }
}
