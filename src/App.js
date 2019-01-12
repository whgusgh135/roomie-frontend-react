import React, { Component } from 'react';

import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Sidebar } from './components/Sidebar/Sidebar';

class App extends Component {
  render() {
    return (
        <div class="container">
            <Navbar />
            
            <Sidebar />

            <Home />
        </div>
    );
  }
}

export default App;
