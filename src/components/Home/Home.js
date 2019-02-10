import React from 'react';
import { RoomieBox } from '../Roomie/RoomieBox';
import { FlatBox } from '../Flat/FlatBox';
import { connect } from 'react-redux';
import * as roomieAction from '../../redux/actions/roomie';

export class Home extends React.Component {
    componentDidMount() {
        this.props.dispatch(roomieAction.selectRoomies(3))
    }

    renderRoomieBox() {
        // replace this with api call (state) to get data
        // const roomies = [
        //     {"name": "Ellie-May Finch", "address": "Auckland CBD", "id": "1"},
        //     {"name": "Isaiah Rodriguez", "address": "Wellington", "id": "2"},
        //     {"name": "Shannon Rodgers", "address": "North Shore", "id": "3"}
        // ];
        if(this.props.roomie.roomies.length) {
            return ( 
                this.props.roomie.roomies.map(roomie => {
                    return (
                        <RoomieBox roomie={roomie} />
                    )
                })
            )
        } else {
            return (
                <div>Loading...</div>
            )
        }
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
            <main className="home">
                <div className="home-list">
                    <h3 className="home-list__title">Your potential roommates</h3>
                    <a href="#" className="home-list__link">Find out more</a>
                </div>
                <div className="home-list">
                    {this.renderRoomieBox()}
                </div>

                <div className="home-list">
                    <h3 className="home-list__title">Browse flats</h3>
                </div>
                <div className="home-list">
                    {this.renderFlatBox()}
                </div>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return {
        roomie: state.roomieReducer
    }
}

export default connect(mapStateToProps)(Home);