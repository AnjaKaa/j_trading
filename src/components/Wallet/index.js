import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  CoinInput__Container,
  CoinInput__Input,
  CoinInput__Integer,
  CoinInput__Fraction,
  CoinInput__Currency,
} from '../StyledComponents';

import {
  fetchWalletRequest,
  getWalletBtc,
  getWalletEth,
  getWalletUsd,
  getWalletError,
} from '../../ducks/wallet';
import {
  buyCurrencyRequest,
  sellCurrencyRequest,
  getCurrentBtcPurchase,
  getCurrentBtcSell,
  getCurrentEthPurchase,
  getCurrentEthSell,
  getSelected,
} from '../../ducks/currency';

class Wallet extends Component {
  state = {
    btc: 0,
    eth: 0,
    usd: 0,
  };
  componentDidMount() {
    this.props.fetchWalletRequest();
    const { walletUsd, walletBtc, walletEth, sell, purchase } = this.props;
    this.setState({
      btc: walletBtc,
      eth: walletEth,
      usd: walletUsd,
    });
  }

  componentWillReceiveProps(nextProps) {
    const { walletUsd, walletBtc, walletEth, sell, purchase } = nextProps;
    const { currentInput } = this.state;
    this.setState({
      btc: walletBtc,
      eth: walletEth,
      usd: walletUsd,
    });
  }

  render() {
    const { btc, eth, usd } = this.state;
    //console.log('wallet', this.props);
    return (
      <Fragment>
        <span>{this.props.btc}</span>
        <CoinInput__Container>
          <CoinInput__Input>
            <CoinInput__Integer textAlign="right">{Math.round(Math.floor(eth))}</CoinInput__Integer>.
            <CoinInput__Fraction>
              {String(eth - Math.floor(eth))
                .replace('0.', '')
                .slice(0, 8)}
            </CoinInput__Fraction>
          </CoinInput__Input>
          <CoinInput__Currency>ETH</CoinInput__Currency>
        </CoinInput__Container>
        <CoinInput__Container>
          <CoinInput__Input>
            <CoinInput__Integer textAlign="right">{Math.round(Math.floor(btc))}</CoinInput__Integer>.
            <CoinInput__Fraction>
              {String(btc - Math.floor(btc))
                .replace('0.', '')
                .slice(0, 8)}
            </CoinInput__Fraction>
          </CoinInput__Input>
          <CoinInput__Currency>BTC</CoinInput__Currency>
        </CoinInput__Container>
        <CoinInput__Container>
          <CoinInput__Input>
            <CoinInput__Integer textAlign="right">
              {Math.round(Math.floor(usd))}.
            </CoinInput__Integer>
            <CoinInput__Fraction>
              {String(usd - Math.floor(usd))
                .replace('0.', '')
                .slice(0, 8)}
            </CoinInput__Fraction>
          </CoinInput__Input>
          <CoinInput__Currency>$</CoinInput__Currency>
        </CoinInput__Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  walletBtc: getWalletBtc(state),
  walletEth: getWalletEth(state),
  walletUsd: getWalletUsd(state),
  walletError: getWalletError(state),
  // sell: getSelected(state) === 'btc' ? getCurrentBtcSell(state) : getCurrentEthSell(state),
  // purchase:
  //   getSelected(state) === 'btc' ? getCurrentBtcPurchase(state) : getCurrentEthPurchase(state),
  // currencyName: getSelected(state),
});

const mapDispatchToProps = {
  fetchWalletRequest,
  buyCurrencyRequest,
  sellCurrencyRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
