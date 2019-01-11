import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div class="container">
        <nav class="navbar">
            <img src="img/logo-color.png" alt="Roomie logo" class="nav-items__logo" />
            <form>
                <input class="nav-items__search-bar" type="text" placeholder="Search" />
            </form>
            <a href="#" class="nav-items__profile">
                <img src="img/profile.jpg" alt="profile" class="nav-items__profile--img" />
                <p class="nav-items__profile--name">Kevin Cho</p>
            </a>
        </nav>

        <nav class="sidebar">
            <p class="side-items side-items__profile-info">Kevin Cho</p>
            <img src="img/profile.jpg" alt="profile" class="side-items side-items__profile-img" />
            <ul class="side-items">
                <li class="side-items__item">
                    <a href="#" class="side-items__link">My Account</a>
                </li>
                <li class="side-items__item">
                    <a href="#" class="side-items__link">Home</a>
                </li>
                <li class="side-items__item">
                    <a href="#" class="side-items__link">Roomie</a>
                </li>
                <li class="side-items__item">
                    <a href="#" class="side-items__link">Flat</a>
                </li>
            </ul>
        </nav>

            <main class="home">
                <div class="home-list">
                    <h3 class="home-list__title">Your potential roommates</h3>
                    <a href="#" class="home-list__link">Find out more</a>
                </div>
                <div class="home-list">
                    <a href="#" class="roomie-box">
                        <img src="img/person-1.jpg" alt="person" class="roomie-box__img" />
                        <p class="roomie-box__name">Ellie-May Finch</p>
                        <p class="roomie-box__address">Auckland CBD</p>
                        <button class="button--primary">More</button>
                    </a>
                    <a href="#" class="roomie-box">
                        <img src="img/person-2.jpg" alt="person" class="roomie-box__img" />
                        <p class="roomie-box__name">Isaiah Rodriguez</p>
                        <p class="roomie-box__address">Wellington</p>
                        <button class="button--primary">More</button>
                    </a>
                    <a href="#" class="roomie-box">
                        <img src="img/person-3.jpg" alt="person" class="roomie-box__img" />
                        <p class="roomie-box__name">Shannon Rodgers</p>
                        <p class="roomie-box__address">North Shore</p>
                        <button class="button--primary">More</button>
                    </a>
                </div>

                <div class="home-list">
                    <h3 class="home-list__title">Browse flats</h3>
                </div>
                <div class="home-list">
                    <a href="#" class="flat-box">
                        <img src="img/flat-1.jpg" alt="flat" class="flat-box__img" />
                    </a>
                    <a href="#" class="flat-box">
                        <img src="img/flat-2.jpg" alt="flat" class="flat-box__img" />
                    </a>
                    <a href="#" class="flat-box">
                        <img src="img/flat-3.jpg" alt="flat" class="flat-box__img" />
                    </a>
                </div>
                <div class="home-list">
                    <a href="#" class="flat-box">
                        <img src="img/flat-4.jpg" alt="flat" class="flat-box__img" />
                    </a>
                    <a href="#" class="flat-box">
                        <img src="img/flat-5.jpg" alt="flat" class="flat-box__img" />
                    </a>
                    <a href="#" class="flat-box">
                        <img src="img/flat-6.jpg" alt="flat" class="flat-box__img" />
                    </a>
                </div>
            </main>
        </div>
    );
  }
}

export default App;
