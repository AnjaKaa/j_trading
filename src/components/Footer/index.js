import React, {
  Component
} from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  FooterWrap,
  FooterTitle,
  Logo,
} from '../StyledComponents';

import imgLogo from '../../assets/Logo-white.svg';

class Footer extends Component {
  render() {
    return <FooterWrap>
      <Container>
        <FooterTitle>
          Сделано с любовью и старанием <br/>
          на курсе «React.js» в <a href="https://loftschool.com"><b>LoftSchool</b></a>.<br/>
          Автор работы: <b>Контарева Анна</b>
        </FooterTitle>
        <nav>
          <ul>
            <li><Link to={`/`}>Главная</Link></li>
            <li><Link to={`/feeds`}>Лента</Link></li>
            <li><Link to={`/trade`}>Торги</Link></li>
            <li><Link to={`/profile`}>Профиль</Link></li>
          </ul>
        </nav>
        <Logo src = {imgLogo} alt = "logo-footer" / >
        </Container>
    </FooterWrap>;
  }
}

export default Footer;