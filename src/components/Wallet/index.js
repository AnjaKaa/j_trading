import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  CoinInputContainer,
  CoinInputInput,
  CoinInputInteger,
  CoinInputFraction,
  CoinInputCurrency,
} from '../StyledComponents';

import {
  fetchWalletRequest,
  getWalletBtc,
  getWalletEth,
  getWalletUsd,
  getWalletError,
} from '../../ducks/wallet';
import { sellCurrencyRequest } from '../../ducks/currency';

class Wallet extends Component {
  state = {
    btc: 0,
    eth: 0,
    usd: 0,
  };
  componentDidMount() {
    this.props.fetchWalletRequest();
    const { walletUsd, walletBtc, walletEth } = this.props;
    this.setState({
      btc: walletBtc,
      eth: walletEth,
      usd: walletUsd,
    });
  }

  componentWillReceiveProps(nextProps) {
    const { walletUsd, walletBtc, walletEth } = nextProps;

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
        <CoinInputContainer>
          <CoinInputInput>
            <CoinInputInteger textAlign="right">{Math.round(Math.floor(eth))}</CoinInputInteger>.
            <CoinInputFraction>
              {String(eth - Math.floor(eth))
                .replace('0.', '')
                .slice(0, 8)}
            </CoinInputFraction>
          </CoinInputInput>
          <CoinInputCurrency>ETH</CoinInputCurrency>
        </CoinInputContainer>
        <CoinInputContainer>
          <CoinInputInput>
            <CoinInputInteger textAlign="right">{Math.round(Math.floor(btc))}</CoinInputInteger>.
            <CoinInputFraction>
              {String(btc - Math.floor(btc))
                .replace('0.', '')
                .slice(0, 8)}
            </CoinInputFraction>
          </CoinInputInput>
          <CoinInputCurrency>BTC</CoinInputCurrency>
        </CoinInputContainer>
        <CoinInputContainer>
          <CoinInputInput>
            <CoinInputInteger textAlign="right">{Math.round(Math.floor(usd))}.</CoinInputInteger>
            <CoinInputFraction>
              {String(usd - Math.floor(usd))
                .replace('0.', '')
                .slice(0, 8)}
            </CoinInputFraction>
          </CoinInputInput>
          <CoinInputCurrency>$</CoinInputCurrency>
        </CoinInputContainer>
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
  sellCurrencyRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
