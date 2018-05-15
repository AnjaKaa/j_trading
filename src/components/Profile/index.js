import React, { Component, Fragment } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Background from '../Background';
import AvatarProfile from './AvatarProfile';
import NameProfile from './NameProfile';
import Wallet from '../Wallet';

import { Main, WrapMain, ProfileMainContainer, ProfileCol, ProfileSum } from '../StyledComponents';

class Profile extends Component {
  render() {
    const { wallet } = this.props;
    return (
      <Fragment>
        <Background />
        <Main>
          <WrapMain>
            <Header title="Профиль" />
            <ProfileMainContainer>
              <div>
                <h2>Личный профиль</h2>
                <ProfileCol>
                  <AvatarProfile />
                </ProfileCol>
              </div>
              <div>
                <ProfileCol>
                  <NameProfile />
                </ProfileCol>
              </div>
              <div>
                <h2>Ваш счёт</h2>
                <ProfileCol>
                  <Wallet />
                  <h3> Сумма накоплений</h3>
                  <ProfileSum>{wallet.usd} $</ProfileSum>
                </ProfileCol>
              </div>
            </ProfileMainContainer>
            <Footer />
          </WrapMain>
        </Main>
      </Fragment>
    );
  }
}

Profile.defaultProps = {
  wallet: {
    eth: 12.12332,
    bth: 1.232322,
    usd: 1125.25,
  },
};

export default Profile;
