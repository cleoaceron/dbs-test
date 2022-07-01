import {GET_POSTS_SUCCESS, GET_POSTS_FAILED} from './types';

export const INITIAL_STATE = {
  loading: true,
  data: [],
  error: false,
  errorMessage: null,
};
// Multiply to 30 counts the response data
const multiplyData = data => {
  let arr = data;
  const count = data.length;

  for (let i = 0; i <= 30; i++) {
    for (let x = 0; x <= count; x++) {
      arr.push(data[x]);
    }
  }

  return arr;
};

const posts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: multiplyData(action.payload),
      };

    case GET_POSTS_FAILED:
      return {
        ...state,
        loading: false,
        data: [],
        error: true,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default posts;
