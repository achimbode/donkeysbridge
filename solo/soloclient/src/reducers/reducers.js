import { combineReducers } from 'redux';

const defaultAppState = {
  langs: {
    local: 'de',
    foreign: 'es'
  }
}
const app = (state = defaultAppState, action) => {
  return state;
}

const defaultVocState = {
  local: 'Knochen',
  foreign: 'hueso'
}
const voc = (state = defaultVocState, action) => {
  if(action.type == 'ADD_VOC' && action.newVoc) return action.newVoc;
  return state;
}

const reducers = combineReducers({
  app,
  voc
});

export default reducers;
