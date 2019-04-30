import React from 'react';
import { connect } from 'react-redux'
import { RoomieBox } from './RoomieBox';
import RoomieSearch from './RoomieSearch';
import { RoomieDetail } from './RoomieDetail';
import * as actions from '../../redux/actions/roomie';
import { setPage } from '../../redux/actions/status';

class Roomie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: 6
        };
    }
    
    
    componentDidMount() {
        this.props.dispatch(actions.selectRoomies(this.state.items));
        this.props.dispatch(setPage("roomie"));
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

    getMoreRoomie = () => {
        let newNum = this.state.items + 6;
        this.setState({items: newNum});
        this.props.dispatch(actions.selectRoomies(newNum));
    }

    render() {       
        return (
            <main className="home">

                <RoomieSearch />
                
                <div className="home-list">
                    {this.renderRoomieBox()}
                </div>

                <div className="home-list--more">
                    <button className="button button--more" onClick={this.getMoreRoomie}>+ Find more</button>
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