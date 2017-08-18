import React, { Component } from 'react';
import Input from '../container/inputContainer';
import ShowList from '../container/showListContainer';
import ShowControl from '../container/showControlContainer'

class App extends Component {
  render() {
    return (
      <div>
          <Input />
          <ShowList />
          <ShowControl/>
      </div>
    );
  }
}

export default App;
