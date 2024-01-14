import {ActionType} from './action';

function isPreloadReducer(isPreload = true, {type, payload} = {}) {
  switch (type) {
    case ActionType.SET_IS_PRELOAD:
      return payload.isPreload;
    default:
      return isPreload;
  }
}

export default isPreloadReducer;
