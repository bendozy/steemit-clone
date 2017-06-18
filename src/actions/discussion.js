import steem from 'steem';

const TRENDING_DISCUSSIONS = 'TRENDING_DISCUSSIONS';

const receiveTrendingDiscussions = trendingDiscussions => ({
  type: TRENDING_DISCUSSIONS,
  trendingDiscussions,
});

const fetchTrendingDiscussions = limit =>
  (dispatch) => {
    const query = { limit };

    return steem.api.getDiscussionsByTrending(query, (err, trendingDiscussions) => {
      if (err) {
        throw err;
      }

      dispatch(receiveTrendingDiscussions(trendingDiscussions));
    });
  };

export { fetchTrendingDiscussions, TRENDING_DISCUSSIONS };
