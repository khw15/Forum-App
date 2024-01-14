import {ActionType} from './action';

function authUserReducer(authUser = null, action) {
  const {type, payload} = action;

  switch (type) {
    case ActionType.SET_AUTH_USER:
      return payload?.authUser || null;
    case ActionType.UNSET_AUTH_USER:
      return null;
    default:
      return authUser;
  }
}

export default authUserReducer;
