import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';
import Background from '../Background';
import AvatarProfile from './AvatarProfile';
import NameProfile from './NameProfile';
import Wallet from '../Wallet';

import {
  Main,
  WrapMain,
  ProfileMainContainer,
  ProfileCol,
  ProfileSum,
  ProfileFeedsContainer,
} from '../StyledComponents';

import {
  fetchWalletRequest,
  getWalletBtc,
  getWalletEth,
  getWalletUsd,
  getWalletError,
} from '../../ducks/wallet';
import { getCurrentBtcPurchase, getCurrentEthPurchase } from '../../ducks/currency';

class Profile extends Component {
  state = {
    walletSum: 0,
  };
  componentDidMount() {
    this.props.fetchWalletRequest();
    this.getwalletSum(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.getwalletSum(nextProps);
  }

  getwalletSum = props => {
    const { walletUsd, walletBtc, walletEth, purchaseBTC, purchaseETH } = props;
    this.setState({
      walletSum: walletUsd + purchaseBTC * walletBtc + purchaseETH * walletEth,
    });
  };

  render() {
    const { walletSum } = this.state;
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
                  <ProfileSum>~ {Math.round(walletSum * 100) / 100} $</ProfileSum>
                </ProfileCol>
              </div>
            </ProfileMainContainer>
            <ProfileFeedsContainer>
              <h3>Ваша последняя активность</h3>
            </ProfileFeedsContainer>
            <Footer />
          </WrapMain>
        </Main>
      </Fragment>
    );
  }
}

Profile.defaultProps = {};

const mapStateToProps = state => ({
  walletBtc: getWalletBtc(state),
  walletEth: getWalletEth(state),
  walletUsd: getWalletUsd(state),
  walletError: getWalletError(state),
  purchaseBTC: getCurrentBtcPurchase(state),
  purchaseETH: getCurrentEthPurchase(state),
});

const mapDispatchToProps = {
  fetchWalletRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
