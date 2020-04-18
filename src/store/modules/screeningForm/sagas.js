import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "~/services/api";

import { sendFormSuccess, sendFormFailure } from "./actions";

export function* sendScreeningForm({ payload }) {
  try {
    const {} = payload;

    const mountPayloadToSend = {
      anoVaiculo: "A",
      seDocumentoNomeUsuario: "S",
      situacaoVeiculo: "Q",
      triagemArquivo: []
    };

    const response = yield call(api.get, "WS/Triagem", { mountPayloadToSend });

    yield put(sendFormSuccess(response.data));
  } catch (err) {
    toast.error("Erro ao enviar o formulario, confira seus dados!");
    yield put(sendFormFailure());
  }
}

export default all([
  takeLatest("@screeningForm/SEND_REQUEST", sendScreeningForm)
]);
