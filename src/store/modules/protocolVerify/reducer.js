import produce from "immer";

const INITIAL_STATE = {
  formInformation: null,
};

export default function protocolVerify(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@protocolVerify/SEND_REQUEST": {
        draft.formInformation = action.payload.data;
        break;
      }

      default:
    }
  });
}
