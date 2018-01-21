import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Steph', age: 25 }
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked');
    this.setState({persons: [
      { name: newName, age: 28 },
      { name: 'Manuel', age: 29 },
      { name: 'Stephanie', age: 25 }
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      { name: 'Max', age: 28 },
      { name: event.target.value, age: 29 },
      { name: 'Stephanie', age: 25 }
    ]})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>I'm a react app! YAS</h1>
        <p>dis be working hehe</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Skywalker')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          method={this.switchNameHandler.bind(this, 'Vader')} 
          changed={this.nameChangedHandler}>My Hobbies: Climbing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
