import React from 'react';
import { connect } from 'react-redux'
import { RoomieBox } from './RoomieBox';
import RoomieSearch from './RoomieSearch';
import { RoomieDetail } from './RoomieDetail';
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
                <p className="search-container__message">No result</p>
            )
        }
    }

    render() {       
        return (
            <main className="home">
                <RoomieDetail auth={this.props.auth} />

                <RoomieSearch />
                
                <div className="home-list">
                    {this.renderRoomieBox()}
                </div>

                <div className="home-list--more">
                    <button className="button button--more">+ Find more</button>
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