export function sendFormRequest(data) {
  return {
    type: "@screeningForm/SEND_REQUEST",
    payload: { data }
  };
}

export function sendFormSuccess(data) {
  return {
    type: "@screeningForm/SEND_SUCCESS",
    payload: { data }
  };
}

export function sendFormFailure() {
  return {
    type: "@screeningForm/SEND_FAILURE"
  };
}
