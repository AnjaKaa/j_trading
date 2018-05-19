import React, { Component, Fragment } from 'react';
import Modal from './Modal';

import { ProfileCol } from '../StyledComponents';

import imgAvatar from '../../assets/avatar.jpg';

const ModalItem = props => {
  return (
    <Modal domNode={document.querySelector('#modal')}>
      <div className="modal">
        <div className="modalfog">
          <div className="modalbody">
            <h1>Модальное окно!</h1>
            <button
              onClick={() => {
                this.hideModal();
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

class AvatarProfile extends Component {
  state = {
    isModalAvatarShow: false,
  };
  hideModal = () => {
    this.setState({ isModalAvatarShow: false });
  };

  showModal = () => {
    this.setState({ isModalAvatarShow: true });
  };
  render() {
    const { user } = this.props;
    const { isModalAvatarShow } = this.state;
    return (
      <Fragment>
        <ProfileCol textAlign="center">
          <img src={user.avatar_url} alt={user.login} />
          <a
            name="avatar"
            href=""
            onClick={() => {
              this.showModal();
            }}
          >
            Изменить аватар
          </a>
          {isModalAvatarShow ? ModalItem : null}
        </ProfileCol>
      </Fragment>
    );
  }
}

AvatarProfile.defaultProps = {
  user: {
    avatar_url: imgAvatar,
    login: 'anja_kaa@mail.ru',
  },
};

export default AvatarProfile;
