import React, {
  Component
} from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  HeaderWrap,
  Logo,
  HeaderTitle,
  HeaderStatisticsBlock,
  UserBlock,
  UserBlockItem,
  CountNewFeeds
} from '../StyledComponents';

import imgLogo from '../../assets/Logo-white.svg';

class Header extends Component {
  
  render() {
    const {title} = this.props;
    return ( 
      <HeaderWrap>
        <Container>
          <Logo src = { imgLogo } alt = "logo-header" / >
      <HeaderTitle> {title} </HeaderTitle>  
      <HeaderStatisticsBlock> 
        454654654 <br/> 
        <b> 1 BTH </b> 
      </HeaderStatisticsBlock>
      <HeaderStatisticsBlock>
        56546 <br/>
        <b> 1 ETH </b> 
      </HeaderStatisticsBlock>
      <UserBlock>
        <UserBlockItem>
          <span> Лента </span> 
          <CountNewFeeds>9+</CountNewFeeds>
        </UserBlockItem>        
        <UserBlockItem>  
             
          <span><Link to={`/stats`}> место </Link> </span> 
          
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

export default Header;