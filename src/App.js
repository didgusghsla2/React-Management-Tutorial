import React, { Component } from 'react';
import Customer from './component/Customer';
import './App.css';

const customers = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name': 'kevin De Bruyne',
    'birthday' : '910628',
    'gender' : 'MF',
    'job' : 'Manchester City'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name': 'Son Heung Min',
    'birthday' : '920708',
    'gender' : 'FW',
    'job' : 'Tottenham Hotspur'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name': 'Lionel Messi',
    'birthday' : '870624',
    'gender' : 'FW',
    'job' : 'Fc Barcelona'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />)
          })
        }
      </div>
    )
  }
}

export default App;