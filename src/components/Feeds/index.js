import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';
import Background from '../Background';
import { Main, WrapMain, FeedsList__Container } from '../StyledComponents';

import Feed from './Feed';

import { fetchFeedRequest, getUserFeed } from '../../ducks/feed';

class Feeds extends Component {
  state = {
    feedsList: [],
  };

  componentDidMount() {
    this.props.fetchFeedRequest();
  }

  componentWillReceiveProps(nextProps) {
    const { listFeed } = this.props;
    console.log('listFeed', listFeed);
  }

  render() {
    const { records } = this.props;
    return (
      <Fragment>
        <Background />
        <Main>
          <WrapMain>
            <Header title="Лента" />
            <FeedsList__Container>
              {records.map(record => <Feed key={record.id} record={record} />)}
            </FeedsList__Container>
            <Footer />
          </WrapMain>
        </Main>
      </Fragment>
    );
  }
}

// Feeds.defaultProps = {
//   records: [
//     {
//       comments: [],
//       created_at: '2018-05-17T11:46:34.643Z',
//       id: 3913,
//       text: '+691.72785 USD, -1.0 ETH',
//       type: 'transaction',
//       user_id: 409,
//     },
//     {
//       comments: [],
//       created_at: '2018-05-16T06:21:39.459Z',
//       id: 3908,
//       text: '-8205.05 USD, +1.0 BTC',
//       type: 'transaction',
//       user_id: 483,
//     },
//     {
//       comments: [],
//       created_at: '2018-05-14T21:05:02.789Z',
//       id: 3894,
//       text: '+731.907 USD, -1.0 ETH',
//       type: 'transaction',
//       user_id: 480,
//     },
//   ],
// };

export default connect(
  state => ({
    records: getUserFeed(state) || [],
  }),
  { fetchFeedRequest },
)(Feeds);
