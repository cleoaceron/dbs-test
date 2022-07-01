import {put, takeLatest, call} from 'redux-saga/effects';
import {GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILED} from './types';

import postsServices from 'api/services/posts';

export function* fnGetPosts() {
  try {
    const response = yield call(postsServices.api.fnGetPosts);

    yield put({type: GET_POSTS_SUCCESS, payload: response.data});
  } catch (error) {
    yield put({type: GET_POSTS_FAILED, payload: error});
  }
}

export default function* watcher() {
  yield takeLatest(GET_POSTS, fnGetPosts);
}
