import React, { Component } from 'react';
import { Menu } from './cctv-components/menu/menu.component';
import { Asset } from './cctv-components/asset/asset.component';
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
          <Asset/>
        </div>
    </div>
    )
  }
}

export default App;
