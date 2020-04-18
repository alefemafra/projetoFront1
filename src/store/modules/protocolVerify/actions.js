export function sendFormRequest(data) {
  return {
    type: "@protocolVerify/SEND_REQUEST",
    payload: { data },
  };
}

export function sendFormSuccess(data) {
  return {
    type: "@protocolVerify/SEND_SUCCESS",
    payload: { data },
  };
}

export function sendFormFailure() {
  return {
    type: "@protocolVerify/SEND_FAILURE",
  };
}
