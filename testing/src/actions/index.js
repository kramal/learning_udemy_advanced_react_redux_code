import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';
import axios from 'axios';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}

export function fetchComments() {
  const responsePromise = axios.get(
    'http://jsonplaceholder.typicode.com/comments'
  );

  return {
    type: FETCH_COMMENTS,
    payload: responsePromise
      .then(response => response.json())
      .then(json => ({ type: SAVE_COMMENT, payload: json }))
  };
}
