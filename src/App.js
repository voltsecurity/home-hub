import React, { Component } from 'react';
import { Menu } from './cctv-components/menu/menu.component';
import { AssetsContainer } from './cctv-components/assets-container/assets-container.component';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
    <div className='App'>
        <Menu />
        <div className='main'>
          <AssetsContainer/>
        </div>
    </div>
    )
  }
}

export default App;
