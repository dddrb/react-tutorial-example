import * as ActionTypes from '../constants/ActionTypes';
import io from 'socket.io-client';
export const socket = io('http://localhost:3000');

export function recieveComments(comments) {
  return {
    type: ActionTypes.RECEIVE_COMMENTS,
    comments
  };
}

export function addComment(comment) {
  return {
    type: ActionTypes.ADD_COMMENT,
    comment
  };
}

export function searchComments() {
  return dispatch => {
    socket.emit('search comments');
  };
}

export function createComment(comment) {
  return dispatch => {
    socket.emit('create comment', comment);
  };
}
