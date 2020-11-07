import React from 'react';
import Main from './components/MainComponent';
import './App.css';

//this component is the parent of the menu component as it uses its data
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
