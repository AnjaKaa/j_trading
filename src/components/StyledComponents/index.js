import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  font-family: 'Roboto', 'Arial', sans-serif;
  background-color: #f5f5f6;
`;

export const WrapMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width:100%;
  height:100%
  position: absolute;
  align-items: center;
`;
export const WrapCenter = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: absolute;
  width: 440px;
  z-index: 1;
`;

export const CentrerPanel = styled.div`
  background-color: #fff;
  border-radius: 7px;
  padding: 9px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 11px 0;
  position: relative;
  border: 1px solid #c3c3c3;

  &:before {
    border-radius: 7px;
    background: transparent;
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    box-shadow: 0px 0px 68px 4px rgba(0, 0, 0, 0.23);
  }
`;

export const LoginLogo = styled.img`
  width: 300px;
  height: 144px;
`;
export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 20px;
`;

export const InputWrap = styled.div`
  position: relative;

  input {
    margin: 10px 0;
    padding: 16px 6px 16px 53px;
    border: 1px solid #dfdfdf;
    border-radius: 7px;
    width: calc(100% - 62px);
  }
`;

export const InputLoginIcon = styled.span`
  background-image: url(${props => props.url});
  width: 19px;
  height: 19px;
  opacity: 0.4;
  background-size: cover;
  position: absolute;
  top: 25px;
  left: 21px;
`;

export const Button = styled.button`
  width: 100%;
  margin: 10px 0;
  background-color: #4db6e2;
  color: #fff;
  border: none;
  font-size: 22px;
  padding: 12px 0;
  font-weight: 300;
  letter-spacing: 1.1px;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1240px;
`;

export const Logo = styled.img`
  width: 140px;
  height: 80px;
`;
export const HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-height: 80px;
  background-color: #2a2c2e;
`;
export const HeaderTitle = styled.div`
  width: 250px;
  max-height: 28px;
  padding: 32px 20px;
  font-size: 28px;
  font-weight: bold;
  color: #61dafb;
`;

export const HeaderStatisticsBlock = styled.div`
  width: 140px;
  height: 80px;
  margin: 20px 10px;
  color: #ffffff;
`;

export const CurrencyLink = styled(Link)`
  width: 140px;
  height: 80px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  margin-right: 20px;
  background-color: #404243;
  color: ${props => (props.className === 'active' ? '#fff' : '#c3c3c3')};
  transition: color 0.6s;
  &:hover {
    color: #fff;
  }
`;

export const UserBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  height: 80px;
  padding: 20px 0;
`;

export const UserBlockItem = styled.div`
  position: relative;
  color: #ffffff;
  padding: 0 20px;
  min-width: 65px;
  height: 32px;
  text-align: center;

  span {
    position: relative;
    line-height: 32px;
    z-index: 100;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 32px;
    background-color: ${props => (props.active ? '#468597' : '#ffffff')};
    border-radius: 15px;
    opacity: ${props => (props.active ? 1 : 0.2)};
  }

  a {
    text-decoration: none;
    color: #ffffff;
  }
`;

export const CountNewFeeds = styled.div`
  position: absolute;
  top:-10px;
  right: -10px;
  min-width: 15px;
  height: 15px;
  padding: 5px
  background-color: #9f3232;
  border-radius: 50%;
`;

export const FooterWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-height: 100px;
  background-color: #1e2021;

  nav {
    ul {
      display: flex;
      justify-content: center;
      min-width: 800px;
      list-style: none;
      font-size: 18px;
      color: #ffffff;

      li {
        position: relative;
        display: block;
        margin-right: 20px;
        float: left;

        a {
          text-decoration: none;
          color: #ffffff;
        }
      }
    }
  }
`;

export const FooterTitle = styled.div`
  width: 250px;
  padding: 20px;
  font-size: 14px;
  color: #ffffff;
  a {
    text-decoration: none;
    color: #ffffff;
  }
`;

export const ProfileMainContainer = styled(Container)`
  flex-grow: 1;
  width: 100%;
  background-color: #ffffff;
`;

export const ProfileFeedsContainer = styled(Container)`
  width: 600px;
  flex-grow: 1;
  background-color: #ffffff;
  margin: 50px 0 100px;
`;

export const ProfileCol = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  text-align: ${props => props.textAlign};
  img {
    width: 185px;
    height: 185px;
    object-fit: contain;
    margin: 0 25px 25px 0;
  }

  a {
    cursor: pointer;
    color: #b3b3b3;
    text-decoration: line;
    &:visit {
      color: #b3b3b3;
    }
  }
`;

export const ProfileNameWrap = styled.div`
  min-width: 450px;
  padding: 100px 30px;
  verticat-align: middle;
`;

export const ProfileName = styled.span`
  font-size: 36px;
`;

export const ProfileSum = styled.span`
  font-size: 40px;
`;

export const CoinInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 298px;
`;

export const CoinInputInput = styled.div`
  background-color: #414244;
  border: 1px solid #000;
  color: #ffffff;
  border-radius: 4px;
  padding: 6px 0;
  flex: 1 1 150px;
  margin: 5px 0;
`;

export const CoinInputInteger = styled.span`
  width: 55%;
  display: inline-block;
  text-align: right;
`;

export const CoinInputFraction = styled.span`
  color: #8a8a8a;
  max-width: 78px;
  display: inline-block;
  vertical-align: bottom;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const CoinInputCurrency = styled.p`
  flex: 1 1;
  text-align: left;
  margin: 15px 0 0 15px;
`;

export const TradePageContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: start;
  background-color: #ffffff;
  padding: 20px 10px 10px 20px;
`;

export const TradePageOperations = styled.section`
  width: 450px;
`;

export const TradeOperationsContainer = styled.article`
  padding-top: 40px;
`;

export const TradeOperationsInputWrapper = styled.div`
  background-color: #f2f2f2;
  border-radius: 4px;
  display: inline-block;
  position: relative;
  margin: 5px 0;
  width: 218px;
`;

export const TradeOperationsInput = styled.input`
  background-color: transparent;
  border: none;
  text-align: right;
  width: 100%;
  padding: 5px 0 3px;
  padding-right: 50px;
  box-sizing: border-box;
`;

export const TradeOperationsCurrency = styled.span`
  position: absolute;
  right: 8px;
  width: 38px;
  text-align: left;
  color: #adadad;
  top: 5px;
`;

export const TradeChartButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: #edf0f1;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const TradeOperationsButton = styled.button`
  width: 100px;
  margin-left: 20px;
  border: 0;
  color: #fff;
  padding: 5px 0 3px;
  border-radius: 3px;
  background-color: ${props => (props.className === 'redBtn' ? '#ba564f' : '#69b3dc')};
`;

export const TradeChartContainer = styled.article`
  width: 750px;
`;

export const TradeChartTableSection = styled.div`
  border: 1px solid #edf0f1;
  height: 448px;
  margin-top: 15px;
  border-radius: 3px;
`;

export const TradeChartButton = styled.button`
  margin: 0 4px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  background-color: ${props => (props.active ? '#4db6e2' : 'transparent')};
  color: ${props => (props.active ? '#ffffff' : '#9998a1')};
  padding: 2px 16px;
`;

export const TransactionsTableWrap = styled.div`
  max-height: 160px;
  overflow: auto;
`;

export const TransactionsTable = styled.table`
  margin: 0;
  width: 100%;
  text-align: right;
  border: 1px solid #edf0f1;
  border-collapse: collapse;
  border-radius: 3px;
`;

export const TransactionsTableHead = styled.tr`
  background-color: #edf0f1;
  border: 1px solid #edf0f1;
`;

export const TransactionsTh = styled.th`
  background-color: #edf0f1;
  border: 1px solid #edf0f1;
`;

export const TransactionsTr = styled.tr`
  border: 1px solid #edf0f1;
`;

export const TransactionsTd = styled.td`
  border: 1px solid #edf0f1;
  padding: 5px 10px;
`;
export const FeedsListContainer = styled.div`
  overflow: auto;
  max-height: calc(100% - 220px);
  padding: 20px 0;
`;

export const FeedsMainContainer = styled(Container)`
  flex-grow: 1;
  width: 100%;
  background-color: #ffffff;
`;

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  padding: 50px 30px;
  background-color: #ffffff;
  min-width: 530px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const FeedHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 45px;
  font-size: 18px;
`;

export const FeedUserName = styled.div`
  font-weigth: bold;
`;
export const FeedDate = styled.div`
  color: #adaeb0;
`;
export const FeedContent = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }
`;

export const FeedContentRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const FeedTitle = styled.div`
  font-size: 22px;
  font-weigth: bold;
`;

export const CommentButton = styled.a`
  display: inline-block;
  max-height: 15px;
  padding: 10px;
  color: #adaeb0;
  background-color: #f2f3f5;
  cursor: pointer;
  img {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
`;
