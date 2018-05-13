import React, {
  Component,
  Fragment
} from 'react';

import {
  CoinInput__Container,
  CoinInput__Input,
  CoinInput__Integer,
  CoinInput__Fraction,
  CoinInput__Currency
} from '../StyledComponents'

class Wallet extends Component {
  render() {
    const {wallet} = this.props;
    return  <Fragment> 
      <CoinInput__Container>
        <CoinInput__Input>
          <CoinInput__Integer textAlign="right">{Math.round(Math.floor(wallet.eth))}</CoinInput__Integer>.
          <CoinInput__Fraction>{String(wallet.eth - Math.floor(wallet.eth)).replace('0.','').slice(0,8)}</CoinInput__Fraction>
        </CoinInput__Input>
        <CoinInput__Currency>ETH</CoinInput__Currency>
      </CoinInput__Container>
      <CoinInput__Container>
        <CoinInput__Input>
          <CoinInput__Integer textAlign="right">{Math.round(Math.floor(wallet.bth))}</CoinInput__Integer>.
          <CoinInput__Fraction>{String(wallet.bth - Math.floor(wallet.bth)).replace('0.','').slice(0,8)}</CoinInput__Fraction>
        </CoinInput__Input>
        <CoinInput__Currency>BTH</CoinInput__Currency>
      </CoinInput__Container>
      <CoinInput__Container>
        <CoinInput__Input>
          <CoinInput__Integer textAlign="right">{Math.round(Math.floor(wallet.usd))}.</CoinInput__Integer>
          <CoinInput__Fraction>{String(wallet.usd - Math.floor(wallet.usd)).replace('0.','').slice(0,8)}</CoinInput__Fraction>
        </CoinInput__Input>
        <CoinInput__Currency>$</CoinInput__Currency>
      </CoinInput__Container>
    </Fragment>
  }
}


Wallet.defaultProps = {
  wallet : {
    eth: 12.12332,
    bth: 1.232322,
    usd: 1125.25
  }
}

export default Wallet;