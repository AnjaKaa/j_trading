import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { logout } from '../../ducks/auth';
import { selectBtc, selectEth, getCurrentBtcSell, getCurrentEthSell } from '../../ducks/currency';
import { fetchUserInfoRequest, getUserEmail } from '../../ducks/user';

import {
  Container,
  HeaderWrap,
  Logo,
  HeaderTitle,
  HeaderStatisticsBlock,
  UserBlock,
  UserBlockItem,
  CountNewFeeds,
} from '../StyledComponents';

import { CurrencyLink } from '../StyledComponents';
import imgLogo from '../../assets/Logo-white.svg';

class Header extends Component {
  state = {
    btc: 0,
    eth: 0,
  };

  componentDidMount() {
    const link = this.props.match.params.currency;
    this.setCurrency(link);
    this.props.fetchUserInfoRequest();
  }

  componentWillReceiveProps(nextProps) {
    const link = this.props.match.params.currency;
    const nextLink = nextProps.match.params.currency;
    if (link && link !== nextLink) {
      this.setCurrency(nextLink);
    }
    this.getCurrencyValue(nextProps);
  }

  getCurrencyValue = props => {
    const { btc, eth } = props;
    this.setState({ btc: Math.round(btc) });
    this.setState({ eth: Math.round(eth) });
  };

  setCurrency = link => {
    const { selectBtc, selectEth } = this.props;
    if (link === 'btc') {
      selectBtc();
    } else {
      selectEth();
    }
  };

  handleLogout = () => {
    this.props.logout();
  };

  render() {
    console.log('HEADER', this.props);
    const { currency } = this.props.match.params;
    const { title } = this.props;
    const { btc, eth } = this.state;
    return (
      <HeaderWrap>
        <Container>
          <Logo src={imgLogo} alt="logo-header" />
          <HeaderTitle> {title} </HeaderTitle>

          <CurrencyLink className={currency === 'btc' ? 'active' : null} to="/trade/btc">
            <span>{this.state.btc}</span>
            <b>1 BTC </b>
          </CurrencyLink>

          <CurrencyLink className={currency === 'eth' ? 'active' : null} to="/trade/eth">
            <span>{this.state.eth}</span>
            <b>1 ETH </b>
          </CurrencyLink>

          <UserBlock>
            <UserBlockItem>
              <span> Лента </span>
              <CountNewFeeds>9+</CountNewFeeds>
            </UserBlockItem>
            <UserBlockItem>
              <span>
                <Link to={`/stats`}> место </Link>{' '}
              </span>
            </UserBlockItem>
            <UserBlockItem>
              <span> useruseruseruser </span>
            </UserBlockItem>
          </UserBlock>
        </Container>
      </HeaderWrap>
    );
  }
}

export default withRouter(
  connect(
    state => ({
      btc: getCurrentBtcSell(state),
      eth: getCurrentEthSell(state),
      userEmail: getUserEmail(state),
    }),

    {
      selectBtc,
      selectEth,
      fetchUserInfoRequest,
      logout,
    },
  )(Header),
);
