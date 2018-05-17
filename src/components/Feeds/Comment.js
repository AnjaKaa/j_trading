import React, { Component } from 'react';

import { Comment__Btn } from '../StyledComponents';

import imgCommet from '../../assets/message-bubble.svg';

export const CommentBtn = props => (
  <Comment__Btn onClick={props.onClick}>
    <img src={imgCommet} width="15" height="15" />
    {props.cntComments}
  </Comment__Btn>
);

export class Comments extends Component {
  state = {
    commentText: '',
  };
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        Comments
        <h4>Ваш коментарий</h4>
        <textArea placeholder="Начните писать" />
      </div>
    );
  }
}
