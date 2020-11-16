import React from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore(); // inside the App component, Provider takes
//one parameter which is store and which in this case is equal to this variable store

//this component is the parent of the menu component as it uses its data
class App extends React.Component {

  render() {
    return (
      <Provider store={store}> 
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
