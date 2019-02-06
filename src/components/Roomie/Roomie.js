import React from 'react';
import { connect } from 'react-redux'
import { RoomieBox } from './RoomieBox';

class Roomie extends React.Component {

    render() {
        return (
            <main className="home">
                <div className="home-list">
                    <h3 className="home-list__title">Your potential roommates</h3>
                    <a href="#" className="home-list__link">Find out more</a>
                </div>
                <div className="home-list">
                    <RoomieBox />
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