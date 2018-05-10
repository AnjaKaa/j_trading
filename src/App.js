import React, { Component } from 'react';
import AppRouter from './components/AppRouter';
import Background from './components/Background';
import { Main, WrapMain } from './components/StyledComponents';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main>
          <WrapMain>
            <Background />
            <AppRouter />
          </WrapMain>
        </Main>
      </div>
    );
  }
}

export default App;
