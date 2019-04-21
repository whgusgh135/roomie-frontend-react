import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './redux/reducer';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

import UserRegister from './components/User/UserRegister';
import UserPasswordChange from './components/User/UserPasswordChange';
import MyAccount from './components/User/MyAccount';

import Roomie from './components/Roomie/Roomie';
import RoomieEdit from './components/Roomie/RoomieEdit'
import RoomieRegister from './components/Roomie/RoomieRegister';

import Rent from './components/Rent/Rent';
import RentRegister from './components/Rent/RentRegister';

import { withAuth } from './components/HOC/withAuth';

import * as authAction from './redux/actions/auth';

const store = configureStore();

class App extends Component {

  componentWillMount() {
    store.dispatch(authAction.checkAuthState());
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
              <Route exact path="/userchangepassword" component={withAuth(UserPasswordChange)} />
              <Route exact path="/roomieregister" component={withAuth(RoomieRegister)} />
              <Route exact path="/roomieedit" component={withAuth(RoomieEdit)} />
              <Route exact path="/roomie" component={Roomie} />
              <Route exact path="/rentregister" component={RentRegister} />
              <Route exact path="/rent" component={Rent} />
              <Route exact path="/my account" component={withAuth(MyAccount)} />

          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
