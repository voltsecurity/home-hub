import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import { Menu } from './components/menu/menu.component';
import { HeaderBar } from './components/header-bar/header-bar.component';
import './App.css';

const database = [
  {
    imageUrl: require('./images/ladder.jpg'),
    id: '',
    name: '7-Step',
    type: 'Ladder',
    model: 'Fibreglass'
  },
  {
    imageUrl: require('./images/drill.jpg'),
    id: '',
    name: 'Ramset Concrete Drill',
    type: 'Concrete Drill',
    model: 'Ramset'
  },
  {
    imageUrl: require('./images/generator.jpg'),
    id: '',
    name: 'Old Generator',
    type: 'Generator',
    model: 'Shit'
  },
  {
    imageUrl: require('./images/snake.jpg'),
    id: '',
    name: 'Large Fibre Snake',
    type: 'Snake',
    model: 'Snake Charmer'
  },
    {
    imageUrl: require('./images/ladder.jpg'),
    id: '',
    name: '7-Step',
    type: 'Ladder',
    model: 'Fibreglass'
  },
  {
    imageUrl: require('./images/drill.jpg'),
    id: '',
    name: 'Ramset Concrete Drill',
    type: 'Concrete Drill',
    model: 'Ramset'
  },
  {
    imageUrl: require('./images/generator.jpg'),
    id: '',
    name: 'Old Generator',
    type: 'Generator',
    model: 'Shit'
  },
  {
    imageUrl: require('./images/snake.jpg'),
    id: '',
    name: 'Large Fibre Snake',
    type: 'Snake',
    model: 'Snake Charmer'
  },
  {
    imageUrl: require('./images/ladder.jpg'),
    id: '',
    name: '7-Step',
    type: 'Ladder',
    model: 'Fibreglass'
  },
  {
    imageUrl: require('./images/drill.jpg'),
    id: '',
    name: 'Ramset Concrete Drill',
    type: 'Concrete Drill',
    model: 'Ramset'
  },
  {
    imageUrl: require('./images/generator.jpg'),
    id: '',
    name: 'Old Generator',
    type: 'Generator',
    model: 'Shit'
  },
  {
    imageUrl: require('./images/snake.jpg'),
    id: '',
    name: 'Large Fibre Snake',
    type: 'Snake',
    model: 'Snake Charmer'
  },
  {
    imageUrl: require('./images/ladder.jpg'),
    id: '',
    name: '7-Step',
    type: 'Ladder',
    model: 'Fibreglass'
  },
  {
    imageUrl: require('./images/drill.jpg'),
    id: '',
    name: 'Ramset Concrete Drill',
    type: 'Concrete Drill',
    model: 'Ramset'
  },
  {
    imageUrl: require('./images/generator.jpg'),
    id: '',
    name: 'Old Generator',
    type: 'Generator',
    model: 'Shit'
  },
  {
    imageUrl: require('./images/snake.jpg'),
    id: '',
    name: 'Large Fibre Snake',
    type: 'Snake',
    model: 'Snake Charmer'
  }
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      itemDB: database,
      searchField: ''
    }
  }

  render() {
    const { itemDB, searchField } = this.state;
    const filteredItems =
      itemDB.filter(item => (item.name.toLowerCase().includes(searchField)) 
      || (item.type.toLowerCase().includes(searchField)))

    return(
    <div className='App'>
        <Menu />
        <div className='main'>
          <HeaderBar>
            <SearchBox handleChange={e => this.setState({ searchField: e.target.value })}
            placeholder={'Search Assets'} />
          </HeaderBar>
          <CardList equipment={filteredItems} />
        </div>
    </div>
    )
  }
}

export default App;
