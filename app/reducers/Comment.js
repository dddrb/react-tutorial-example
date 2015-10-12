import * as ActionTypes from '../constants/ActionTypes';

const initialState = {comments: []};

export default function(state = initialState, action) {
  switch (action.type) {
  case ActionTypes.RECEIVE_COMMENTS:
    return {comments: action.comments};
  default:
    return state;
  }
}
