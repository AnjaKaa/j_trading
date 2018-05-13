import React, {
  Component,
  Fragment
} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Background from '../Background';
import {
  Main,
  WrapMain
} from '../StyledComponents';

class Feeds extends Component {
  render() {
    return ( <Fragment >
      <Background / >
      <Main >
        <WrapMain >
          <Header title="Лента"/ >
          <div> Fiids 
          </div>
          <Footer/>
        </WrapMain> 
      </Main >
      </Fragment>
    );
  }
}

export default Feeds;