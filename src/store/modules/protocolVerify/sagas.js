import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "~/services/api";

import { sendFormSuccess, sendFormFailure } from "./actions";

export function* sendProtocolForm({ payload }) {
  try {
    // TODO: Mount Payload, change path
    const {} = payload;

    const response = yield call(api.get, "WS/Triagem");

    yield put(sendFormSuccess(response.data));
  } catch (err) {
    toast.error("Erro ao enviar o formulario, confira seus dados!");
    yield put(sendFormFailure());
  }
}

export default all([
  takeLatest("@protocolVerify/SEND_REQUEST", sendProtocolForm),
]);
