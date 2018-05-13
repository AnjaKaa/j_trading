import React, {
  Component,
  Fragment
} from 'react';
import Modal from './Modal';

import {
  ProfileCol, ProfileName, ProfileNameWrap
} from '../StyledComponents'

import imgAvatar from '../../assets/avatar.jpg'

const ModalItem = (props)=>{
  return <Modal domNode={document.querySelector('#modal')}>
  <div className="modal">
    <div className="modal__fog">
      <div className="modal__body">
        <h1>Модальное окно!</h1>
        <button
          onClick={() => {
          this.hideModal()
        }}>Close</button>
      </div>
    </div>
  </div>
</Modal>
}

class NameProfile extends Component {
  state = {
    isModalFirstNameShow: false,    
    isModalLastNameShow: false
  }
  hideModal = () => {
    this.setState({isModalFirstNameShow: false,    
      isModalLastNameShow: false});
  }

  showModal = () => {
    this.setState({isModalAvatarShow: true});
  }
  render() {
    const {user} = this.props;
    const {isModalFirstNameShow,    
      isModalLastNameShow} = this.state;
    return <Fragment>
      <ProfileCol textAlign="left" width="210">
        <ProfileNameWrap>
          <div>
            <ProfileName>{user.first_name}</ProfileName>
            <a name = "first_name" href="#" onClick={() => {this.showModal()}}>Изменить</a>
            {isModalFirstNameShow
              ? ModalItem
              : null}
          </div>
          <div>        
            <ProfileName>{user.last_name}</ProfileName>
            <a name = "last_name" href="#" onClick={() => {this.showModal()}}>Изменить</a>
            {isModalLastNameShow
              ? ModalItem
              : null}    
              </div><div>      

          <ProfileName>{user.login}</ProfileName></div>
        </ProfileNameWrap>
      </ProfileCol>
    </Fragment>
  }
}

NameProfile.defaultProps={
  user:{
    avatar_url: imgAvatar,
    login: 'anja_kaa@mail.ru',
    first_name: 'Анна',
    last_name: 'Контарева',
  }
}

export default NameProfile;