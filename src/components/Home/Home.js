import React from 'react';
import { RoomieBox } from '../Roomie/RoomieBox';
import { FlatBox } from '../Flat/FlatBox';

export class Home extends React.Component {

    renderRoomieBox() {
        // replace this with api call (state) to get data
        const roomies = [
            {"name": "Ellie-May Finch", "address": "Auckland CBD", "id": "1"},
            {"name": "Isaiah Rodriguez", "address": "Wellington", "id": "2"},
            {"name": "Shannon Rodgers", "address": "North Shore", "id": "3"}
        ];

        return (
            roomies.map(roomie => {
                return (
                    <RoomieBox roomie={roomie}/>
                )
            })
        )
    }

    renderFlatBox() {
        // replace this with api call to get flat data
        const flats = [{"id": "1"}, {"id": "2"}, {"id": "3"}, {"id": "4"}, {"id": "5"}, {"id": "6"}];

        return (
            flats.map(flat => {
                return (
                    <FlatBox flat={flat} />
                )
            })
        )
    }

    render() {
        return (
            <main class="home">
                <div class="home-list">
                    <h3 class="home-list__title">Your potential roommates</h3>
                    <a href="#" class="home-list__link">Find out more</a>
                </div>
                <div class="home-list">
                    {this.renderRoomieBox()}
                </div>

                <div class="home-list">
                    <h3 class="home-list__title">Browse flats</h3>
                </div>
                <div class="home-list">
                    {this.renderFlatBox()}
                </div>
            </main>
        )
    }
}