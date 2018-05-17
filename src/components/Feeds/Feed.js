import React, { Component, Fragment } from 'react';
import moment from 'moment';
import {
  Feed__Container,
  Feed__Header,
  Feed__UserName,
  Feed__Date,
  Feed__Content,
  Feed__ContentRow,
  Feed__Title,
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
        <Feed__Container>
          <Feed__Header>
            <Feed__UserName>user_id: {record.user_id}</Feed__UserName>
            <Feed__Date>{moment(record.create_at).format('DD.mm.YY HH:MM')}</Feed__Date>
          </Feed__Header>
          <Feed__Content>
            {record.imgTopPath ? (
              <Feed__ContentRow>
                <img src={record.imgTopPath} />
              </Feed__ContentRow>
            ) : (
              ''
            )}

            <Feed__ContentRow>
              <Feed__Title>{record.text}</Feed__Title>
              <CommentBtn cntComments="1" onClick={this.toggleVisibleComments} />
            </Feed__ContentRow>
            {record.content ? <Feed__ContentRow> {record.content}</Feed__ContentRow> : ''}
            {record.imgBottiomPath ? (
              <Feed__ContentRow>
                <img src={record.imgBottomPath} />
              </Feed__ContentRow>
            ) : (
              ''
            )}
          </Feed__Content>
        </Feed__Container>
        {visibleComments ? <Comments /> : ''}
      </Fragment>
    );
  }
}
export default Feed;
