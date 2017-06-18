import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Discussion from '../components/Discussion';
import { fetchTrendingDiscussions } from '../actions/discussion';

class Discussions extends Component {
  componentDidMount() {
    const limit = 10;
    const { dispatch } = this.props;

    dispatch(fetchTrendingDiscussions(limit));
  }
  render() {
    const { trendingDiscussions } = this.props;
    const discussionItems = trendingDiscussions.map(discussion =>
      <li key={discussion.id}><Discussion {...discussion} /></li>,
    );

    return (
      <ul>
        {discussionItems}
      </ul>
    );
  }
}

Discussions.propTypes = {
  trendingDiscussions: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { trendingDiscussions } = state.discussions;

  return {
    trendingDiscussions,
  };
};

export default connect(mapStateToProps)(Discussions);
