import produce from "immer";

const INITIAL_STATE = {
  formInformation: null
};

export default function screeningForm(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@screeningForm/SEND_REQUEST": {
        draft.formInformation = action.payload.data;
        break;
      }

      default:
    }
  });
}
