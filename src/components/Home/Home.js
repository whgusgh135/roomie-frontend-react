import React from 'react';

export class Home extends React.Component {

    render() {
        return (
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
        )
    }
}