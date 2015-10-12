import * as ActionTypes from '../constants/ActionTypes';

const initialState = {comments: []};

export default function(state = initialState, action) {
  switch (action.type) {
  case ActionTypes.RECEIVE_COMMENTS:
    return {comments: action.comments};
  case ActionTypes.ADD_COMMENT:
    return {comments: state.comments.concat([action.comment])};
  default:
    return state;
  }
}
