import commentsReducers from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handler actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  };

  const newState = commentsReducers([], action);

  expect(newState).toEqual(['New Comment']);
});
