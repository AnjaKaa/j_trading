import React, {
  Component,
  Fragment
} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Background from '../Background';
import Wallet from '../Wallet';
import {
  Main,
  WrapMain,
  TradePage__Container,
  TradePage__Operations,
  TradeOperations__Container,
  TradeOperations__InputWrapper,
  TradeOperations__Input,
  TradeOperations__Currency,
  TradeOperations__Button,
  TradeChart__Container,
  TradeChart__Buttons,
} from '../StyledComponents';

class Trade extends Component {
  state = {
    currentCoinName:'ETH'
  }
  render() {
    const {currentCoinName} = this.state;
    return ( <Fragment >
      <Background / >
      <Main >
        <WrapMain >
          <Header  title="Торги"/>
          <TradePage__Container> 
            <TradePage__Operations>
              <h2>Ваш счёт</h2>            
                <Wallet />
            
            <TradeOperations__Container>
              <h2>Покупка/продажа</h2>
              <TradeOperations__InputWrapper>
                <TradeOperations__Input/>
                <TradeOperations__Currency>{currentCoinName}</TradeOperations__Currency>
              </TradeOperations__InputWrapper>
              
            </TradeOperations__Container>
            <div>
              <TradeOperations__InputWrapper>
                <TradeOperations__Input/>
                <TradeOperations__Currency>$</TradeOperations__Currency>
                <TradeOperations__Button fill='#ba564f'>Продать</TradeOperations__Button>
              </TradeOperations__InputWrapper>
            </div>
            <div>
              <TradeOperations__InputWrapper>
                <TradeOperations__Input/>
                <TradeOperations__Currency>$</TradeOperations__Currency>
                <TradeOperations__Button fill='#69b3dc'>Купить</TradeOperations__Button>
              </TradeOperations__InputWrapper>
            </div>
            </TradePage__Operations> 
            <section>
              <TradeChart__Container>
                <h2>Окно графика</h2>
                  <TradeChart__Buttons></TradeChart__Buttons>
              </TradeChart__Container>
            </section>
          </TradePage__Container>
          <Footer/>
        </WrapMain> 
      </Main >
      </Fragment>
    );
  }
}

export default Trade;