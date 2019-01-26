import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './redux/reducer';

import { Home } from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Auth from './components/Register/Auth';
import RoomieRegister from './components/Register/RoomieRegister';

import * as actions from './redux/actions/auth';

const store = configureStore();

class App extends Component {

  componentWillMount() {
    store.dispatch(actions.checkAuthState());
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="container">
              <Navbar />
              
              <Sidebar />

              <Route exact path="/" component={Home} />
              <Route exact path="/auth" component={Auth} />
              <Route exact path="/roomieregister" component={RoomieRegister} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
