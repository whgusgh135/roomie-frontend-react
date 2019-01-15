import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './redux/reducer';

import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Sidebar } from './components/Sidebar/Sidebar';
import { LoginForm } from './components/Auth/LoginForm';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div class="container">
              <Navbar />
              
              <Sidebar />

              <Route exact path="/" component={Home} />
              <Route exact path="/auth" component={LoginForm} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
