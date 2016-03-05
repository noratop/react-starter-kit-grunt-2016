import {combineReducers} from 'redux';

function repos(state={},action){
  switch (action.type) {
    case 'REQUEST_REPOS':
      return {
        isFetching: true
      };
      break;
    case 'SUCCESS_REPOS':
      return {
        result:action.result
      };
      break;
    case 'FAILURE_REPOS':
      return {
        error: action.error
      };
      break;
    default:
      return state;
  }
}

function followers(state={},action){
  switch (action.type) {
    case 'REQUEST_FOLLOWERS':
      return {
        isFetching: true
      };
      break;
    case 'SUCCESS_FOLLOWERS':
      return {
        result:action.result
      };
      break;
    case 'FAILURE_FOLLOWERS':
      return {
        error: action.error
      };
      break;
    default:
      return state;
  }
}

//combine reducers
const reducer = combineReducers({repos,followers});

export default reducer;
