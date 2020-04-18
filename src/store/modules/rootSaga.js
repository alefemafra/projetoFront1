import { all } from "redux-saga/effects";

import sendScreeningForm from "./screeningForm/sagas";
import sendProtocolForm from "./protocolVerify/sagas";

export default function* rootSaga() {
  return yield all([sendScreeningForm, sendProtocolForm]);
}
