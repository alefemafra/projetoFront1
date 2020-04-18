import { combineReducers } from "redux";

import screeningForm from "./screeningForm/reducer";
import protocolVerify from "./protocolVerify/reducer";

export default combineReducers({ screeningForm, protocolVerify });
