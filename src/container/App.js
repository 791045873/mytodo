import React, { Component } from 'react';
import InputContainer from '../container/inputContainer';
import ShowList from '../container/showListContainer';
import ShowControl from '../container/showControlContainer'

class App extends Component {
  render() {
    return (
      <div>
          <InputContainer />
          <ShowList />
          <ShowControl/>
      </div>
    );
  }
}

export default App;
