import * as ActionTypes from '../constants/ActionTypes';
import $ from 'jquery';

export function recieveComments(comments) {
  return {
    type: ActionTypes.RECEIVE_COMMENTS,
    comments
  };
}

export function searchComments() {
  return dispatch => {
    let promise = new Promise((resolve, reject) => {
      $.ajax({
        url: '/api/comments',
        dataType: 'json',
        cache: false,
        success(data) {
          resolve(data);
        },
        error(xhr, status, err) {
          reject(err);
        }
      });
    });

    promise.then((data) => {
      dispatch(recieveComments(data));
    }).catch((err) => {
      console.error(err);
    });
  };
}
