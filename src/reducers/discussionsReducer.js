import initialState from './initialState';
import TRENDING_POSTS from '../actions/discussion';

export default (state = initialState, action) => {
  switch (action.type) {
    case TRENDING_POSTS:
      return Object.assign({}, state, {
        trendingPosts: action.trendingPosts,
      });
    default:
      return state;
  }
};
