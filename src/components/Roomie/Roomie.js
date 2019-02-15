import React from 'react';
import { connect } from 'react-redux'
import { RoomieBox } from './RoomieBox';
import RoomieSearch from './RoomieSearch';
import * as actions from '../../redux/actions/roomie';

class Roomie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: 6
        };
    }
    
    
    componentDidMount() {
        this.props.dispatch(actions.selectRoomies(this.state.items));
    }

    renderRoomieBox() {
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

    render() {       
        return (
            <main className="home">
                <RoomieSearch />
                <div className="home-list">
                    <h3 className="home-list__title">Your potential roommates</h3>
                    <a href="#" className="home-list__link">Find out more</a>
                </div>
                <div className="home-list">
                    {this.renderRoomieBox()}
                </div>

            </main>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.authReducer,
        roomie: state.roomieReducer
    }
}

export default connect(mapStateToProps)(Roomie);