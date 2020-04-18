import { all } from "redux-saga/effects";

import sendScreeningForm from "./screeningForm/sagas";

export default function* rootSaga() {
  return yield all([sendScreeningForm]);
}
