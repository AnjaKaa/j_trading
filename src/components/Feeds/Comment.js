import React, { Component } from 'react';

import { CommentButton } from '../StyledComponents';

import imgCommet from '../../assets/message-bubble.svg';

export const CommentBtn = props => (
  <CommentButton onClick={props.onClick}>
    <img src={imgCommet} alt="{imgCommet}" width="15" height="15" />
    {props.cntComments}
  </CommentButton>
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
