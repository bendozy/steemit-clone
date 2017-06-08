import steem from 'steem';

const TRENDING_POSTS = 'TRENDING_POSTS';
export default TRENDING_POSTS;

function receiveTrendingPosts(trendingPosts) {
  return {
    type: TRENDING_POSTS,
    trendingPosts,
  };
}

function fetchTrendingPosts(limit) {
  return (dispatch) => {
    const query = { limit };

    return steem.api.getDiscussionsByTrending(query, (err, trendingPosts) => {
      if (err) {
        throw err;
      }
      dispatch(receiveTrendingPosts(trendingPosts));
    });
  };
}
