import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './redux/reducer';

import { Home } from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import UserRegister from './components/User/UserRegister';
import UserPasswordChange from './components/User/UserPasswordChange';
import RoomieRegister from './components/Roomie/RoomieRegister';
import Roomie from './components/Roomie/Roomie';

import * as authAction from './redux/actions/auth';
import * as roomieAction from './redux/actions/roomie';

const store = configureStore();

class App extends Component {

  componentWillMount() {
    store.dispatch(authAction.checkAuthState());
    store.dispatch(roomieAction.selectRoomies());
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="container">
              <Navbar />
              
              <Sidebar />

              <Route exact path="/" render={() => <Redirect to="/home" />} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/userregister" component={UserRegister} />
              <Route exact path="/userchangepassword" component={UserPasswordChange} />
              <Route exact path="/roomieregister" component={RoomieRegister} />
              <Route exact path="/roomie" component={Roomie} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
