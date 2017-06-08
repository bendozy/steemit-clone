import { combineReducers } from 'redux';
import TRENDING_POSTS from '../actions/discussion';

const initialState = {
  trendingPosts: [],
};

const trendingPosts = (state = initialState, action) => {
  switch (action.type) {
    case TRENDING_POSTS:
      return Object.assign({}, state, {
        trendingPosts: action.trendingPosts,
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  trendingPosts,
});

export default rootReducer;