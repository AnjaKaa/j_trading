import React, { Component, Fragment } from 'react';
import moment from 'moment';
import {
  FeedContainer,
  FeedHeader,
  FeedUserName,
  FeedDate,
  FeedContent,
  FeedContentRow,
  FeedTitle,
} from '../StyledComponents';

import { Comments, CommentBtn } from './Comment';

class Feed extends Component {
  state = {
    visibleComments: false,
  };
  toggleVisibleComments = () => {
    console.log('toggleVisibleComments');
    this.setState({ visibleComments: this.state.visibleComments ? false : true });
  };
  render() {
    const { record } = this.props;
    const { visibleComments } = this.state;
    return (
      <Fragment>
        <FeedContainer>
          <FeedHeader>
            <FeedUserName>user_id: {record.user_id}</FeedUserName>
            <FeedDate>{moment(record.create_at).format('DD.mm.YY HH:MM')}</FeedDate>
          </FeedHeader>
          <FeedContent>
            {record.imgTopPath ? (
              <FeedContentRow>
                <img src={record.imgTopPath} alt="" />
              </FeedContentRow>
            ) : (
              ''
            )}

            <FeedContentRow>
              <FeedTitle>{record.text}</FeedTitle>
              <CommentBtn cntComments="1" onClick={this.toggleVisibleComments} />
            </FeedContentRow>
            {record.content ? <FeedContentRow> {record.content}</FeedContentRow> : ''}
            {record.imgBottiomPath ? (
              <FeedContentRow>
                <img src={record.imgBottomPath} alt="" />
              </FeedContentRow>
            ) : (
              ''
            )}
          </FeedContent>
        </FeedContainer>
        {visibleComments ? <Comments /> : ''}
      </Fragment>
    );
  }
}
export default Feed;
