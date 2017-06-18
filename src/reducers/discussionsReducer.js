import initialState from './initialState';
import { TRENDING_DISCUSSIONS } from '../actions/discussion';

export default (state = initialState.discussions, action) => {
  switch (action.type) {
    case TRENDING_DISCUSSIONS:
      return Object.assign({}, state, {
        trendingDiscussions: action.trendingDiscussions,
      });
    default:
      return state;
  }
};
