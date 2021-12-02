import { combineReducers } from "redux";

import loginReducer from "./login";
import pessoasReducer from "./pessoas";
import enderecoReducer from "./endereco";

export default combineReducers({
  loginReducer,
  pessoasReducer,
  enderecoReducer
})