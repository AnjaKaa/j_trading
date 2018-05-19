import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';
import Background from '../Background';
import Wallet from '../Wallet';
import { LineChart } from 'react-easy-chart';
import moment from 'moment';
import {
  Main,
  WrapMain,
  TradePageContainer,
  TradePageOperations,
  TradeOperationsContainer,
  TradeOperationsInputWrapper,
  TradeOperationsInput,
  TradeOperationsCurrency,
  TradeOperationsButton,
  TradeChartContainer,
  TradeChartTableSection,
  TradeChartButtons,
  TradeChartButton,
  TransactionsTableWrap,
  TransactionsTable,
  TransactionsTableHead,
  TransactionsTh,
  TransactionsTr,
  TransactionsTd,
} from '../StyledComponents';

import {
  buyCurrencyRequest,
  sellCurrencyRequest,
  getCurrentBtcPurchase,
  getCurrentBtcSell,
  getCurrentEthPurchase,
  getCurrentEthSell,
  getSelected,
  sellBtc,
  purchaseBtc,
  sellEth,
  purchaseEth,
  getOffset,
  selectOffset,
} from '../../ducks/currency';

import { getWalletBtc, getWalletEth, getWalletUsd, getWalletError } from '../../ducks/wallet';
import { fetchTransactionsRequest, getRecords } from '../../ducks/transactions';

class Trade extends Component {
  state = {
    inputFiat: 0,
    inputSell: 0,
    inputPurchase: 0,
    currentOffset: '4h',
  };

  componentDidMount() {
    this.props.fetchTransactionsRequest();
  }

  componentWillReceiveProps(nextProps) {
    const { sell, purchase } = nextProps;
    this.changeInputs('inputFiat', sell, purchase);
    this.changeInputs('inputSell', sell, purchase);
    this.changeInputs('inputPurchase', sell, purchase);
  }

  handleChange = event => {
    const { name, value } = event.target;
    const { sell, purchase } = this.props;

    this.setState(state => ({ [name]: value.replace(/^\.|[^\d\.]|\.(?=.*\.)|^0+(?=\d)/g, '') }));
    if (isNaN(event.target.value) || event.target.value === '') return;
    else this.changeInputs(event.target.name, sell, purchase);
  };
  changeInputs(name, sell, purchase) {
    switch (name) {
      case 'inputFiat': {
        this.setState(({ inputFiat }) => {
          const parsed = isNaN(inputFiat) ? 0 : parseFloat(inputFiat);
          return {
            inputSell: parsed * sell,
            inputPurchase: parsed * purchase,
          };
        });
        break;
      }
      case 'inputSell':
        this.setState(({ inputSell }) => {
          const parsedSell = isNaN(inputSell) ? 0 : parseFloat(inputSell);
          const nextItem = parsedSell / sell;
          return {
            inputFiat: nextItem,
            inputPurchase: nextItem * purchase,
          };
        });
        break;
      case 'inputPurchase':
        this.setState(({ inputPurchase }) => {
          const parsedPurchase = isNaN(inputPurchase) ? 0 : parseFloat(inputPurchase);
          const nextFiat = parsedPurchase / purchase;
          return {
            inputFiat: nextFiat,
            inputSell: nextFiat * sell,
          };
        });
        break;
      default:
        break;
    }
  }

  handleBuy = () => {
    const { currencyName } = this.props;
    const { inputFiat } = this.state;
    this.props.buyCurrencyRequest({ currencyName, value: inputFiat });
  };

  handleSell = () => {
    const { currencyName } = this.props;
    const { inputFiat } = this.state;
    this.props.sellCurrencyRequest({ currencyName, value: inputFiat });
  };

  handleOffsetBtn = event => {
    const { selectOffset } = this.props;
    selectOffset(event.target.name);
  };

  render() {
    const { currency } = this.props.match.params;
    const {
      currencyName,
      sellBtc,
      purchaseBtc,
      sellEth,
      purchaseEth,
      offset,
      transactions,
    } = this.props;
    const { inputFiat, inputSell, inputPurchase } = this.state;
    const sellArr = currencyName ? (currencyName === 'btc' ? sellBtc : sellEth) : [];
    const purchaseArr = currencyName ? (currencyName === 'btc' ? purchaseBtc : purchaseEth) : [];
    const offsets = {
      '1h': '1час',
      '4h': '4часа',
      '8h': '8часов',
      '1d': 'день',
      '7d': 'неделя',
    };

    return (
      <Fragment>
        <Background />
        <Main>
          <WrapMain>
            <Header title="Торги" />
            <TradePageContainer>
              <TradePageOperations>
                <h2>Ваш счёт</h2>
                <Wallet />

                <TradeOperationsContainer>
                  <h4>Покупка/продажа</h4>
                  <TradeOperationsInputWrapper>
                    <TradeOperationsInput
                      onChange={this.handleChange}
                      onFocus={this.handleFocus}
                      onBlur={this.handleBlur}
                      name="inputFiat"
                      value={inputFiat}
                    />
                    <TradeOperationsCurrency>{currency.toUpperCase()}</TradeOperationsCurrency>
                  </TradeOperationsInputWrapper>
                </TradeOperationsContainer>
                <div>
                  <TradeOperationsInputWrapper>
                    <TradeOperationsInput
                      onChange={this.handleChange}
                      onFocus={this.handleFocus}
                      onBlur={this.handleBlur}
                      name="inputPurchase"
                      value={inputPurchase}
                    />
                    <TradeOperationsCurrency>$</TradeOperationsCurrency>
                  </TradeOperationsInputWrapper>
                  <TradeOperationsButton className="redBtn" onClick={this.handleSell}>
                    Продать
                  </TradeOperationsButton>
                </div>
                <div>
                  <TradeOperationsInputWrapper>
                    <TradeOperationsInput
                      onChange={this.handleChange}
                      onFocus={this.handleFocus}
                      onBlur={this.handleBlur}
                      name="inputSell"
                      value={inputSell}
                    />
                    <TradeOperationsCurrency>$</TradeOperationsCurrency>
                  </TradeOperationsInputWrapper>
                  <TradeOperationsButton onClick={this.handleBuy}>Купить</TradeOperationsButton>
                </div>
              </TradePageOperations>
              <section>
                <TradeChartContainer>
                  <h4>Окно графика</h4>
                  <TradeChartTableSection>
                    <TradeChartButtons>
                      {Object.keys(offsets).map(item => (
                        <TradeChartButton
                          onClick={this.handleOffsetBtn}
                          key={item}
                          name={item}
                          active={offset === item ? true : false}
                        >
                          {offsets[item]}
                        </TradeChartButton>
                      ))}
                    </TradeChartButtons>
                    <LineChart
                      lineColors={['blue', 'red']}
                      axes
                      grid
                      verticalGrid
                      interpolate={'cardinal'}
                      xType={'time'}
                      datePattern={'%d-%m %H:%M'}
                      width={750}
                      height={400}
                      style={{
                        '.axis path': {
                          stroke: '#EDF0F1',
                        },
                      }}
                      data={[
                        sellArr.map(([date, value]) => ({
                          x: moment(date).format('DD-MM HH:mm'),
                          y: value,
                        })),
                        purchaseArr.map(([date, value]) => ({
                          x: moment(date).format('DD-MM HH:mm'),
                          y: value,
                        })),
                      ]}
                    />
                  </TradeChartTableSection>
                </TradeChartContainer>

                <h4>История операций</h4>
                <TransactionsTableWrap>
                  <TransactionsTable>
                    <thead>
                      <TransactionsTableHead>
                        <TransactionsTh>Операция</TransactionsTh>

                        <TransactionsTh>Дата</TransactionsTh>

                        <TransactionsTh>{currencyName.toUpperCase()}</TransactionsTh>

                        <TransactionsTh>USD</TransactionsTh>
                      </TransactionsTableHead>
                    </thead>
                    <tbody>
                      {transactions
                        ? transactions.data.result.map(transaction => {
                            let key_delta = currencyName + '_delta';
                            return transaction && transaction.hasOwnProperty(key_delta) ? (
                              <TransactionsTr>
                                <TransactionsTd>
                                  {transaction.usd_delta > 0 ? 'Продажа' : 'Покупка'}
                                </TransactionsTd>
                                <TransactionsTd>
                                  {moment(
                                    transaction.created_at,
                                    'YYYY-MM-DDTHH:mm:ss.SSSZ',
                                  ).format('DD.MM.YY HH:mm')}
                                </TransactionsTd>
                                <TransactionsTd>{transaction[key_delta]}</TransactionsTd>
                                <TransactionsTd>{transaction['usd_delta']}</TransactionsTd>
                              </TransactionsTr>
                            ) : null;
                          })
                        : ''}
                    </tbody>
                  </TransactionsTable>
                </TransactionsTableWrap>
              </section>
            </TradePageContainer>
            <Footer />
          </WrapMain>
        </Main>
      </Fragment>
    );
  }
}

// Trade.defaultProps = {
//   transactions: [
//     {
//       id: 3905,
//       usd_delta: 1185.2578238501976,
//       candle_state: {
//         id: 220131,
//         mts: 1526410560000,
//         high: 712.81,
//         low: 712.31,
//         sell: 712.56,
//         purchase: 705.4344,
//         created_at: '2018-05-15T18:56:34.918Z',
//         updated_at: '2018-05-15T18:57:05.316Z',
//       },
//       created_at: '2018-05-15T18:57:06.496Z',
//       eth_delta: -1.6801814936303043,
//     },

//     {
//       id: 3726,
//       usd_delta: -8347.2,
//       candle_state: {
//         id: 212151,
//         mts: 1526152140000,
//         high: 8347.2,
//         low: 8347.2,
//         sell: 8347.2,
//         purchase: 8263.728,
//         created_at: '2018-05-12T19:09:27.679Z',
//         updated_at: '2018-05-12T19:09:27.679Z',
//       },
//       created_at: '2018-05-12T19:09:55.317Z',
//       btc_delta: 1,
//     },
//   ],
// };

const mapStateToProps = state => ({
  walletBtc: getWalletBtc(state),
  walletEth: getWalletEth(state),
  walletUsd: getWalletUsd(state),
  walletError: getWalletError(state),
  sell: getSelected(state) === 'btc' ? getCurrentBtcSell(state) : getCurrentEthSell(state),
  purchase:
    getSelected(state) === 'btc' ? getCurrentBtcPurchase(state) : getCurrentEthPurchase(state),
  sellBtc: sellBtc(state),
  sellEth: sellEth(state),
  purchaseBtc: purchaseBtc(state),
  purchaseEth: purchaseEth(state),
  currencyName: getSelected(state),
  offset: getOffset(state),
  transactions: getRecords(state),
});

const mapDispatchToProps = {
  buyCurrencyRequest,
  sellCurrencyRequest,
  selectOffset,
  fetchTransactionsRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Trade);
