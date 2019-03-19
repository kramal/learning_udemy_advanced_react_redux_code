import { saveComment, fetchComments } from 'actions';
import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

describe('saveComment', () => {
  it('has the correct type', () => {
    const action = saveComment();

    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('has the correct payload', () => {
    const action = saveComment('New Comment');

    expect(action.payload).toEqual('New Comment');
  });
});

describe('fetchComments', () => {
  it('has an right type', () => {
    const action = fetchComments();
    expect(action.type).toEqual(FETCH_COMMENTS);
  });

  it('non empty payload', () => {
    const action = fetchComments();
    expect(action.payload.length).not.toBeNull();
  });
});
