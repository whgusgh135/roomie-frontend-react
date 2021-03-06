import React from 'react';
import { RoomieBox } from '../Roomie/RoomieBox';
import { RentBox } from '../Rent/RentBox';
import { connect } from 'react-redux';
import * as roomieAction from '../../redux/actions/roomie';
import * as rentAction from '../../redux/actions/rent';
import * as statusAction from '../../redux/actions/status';
import { Link } from 'react-router-dom';

export class Home extends React.Component {
    componentDidMount() {
        this.props.dispatch(roomieAction.selectRoomies(3));
        this.props.dispatch(rentAction.selectRent(6));
        this.props.dispatch(statusAction.setPage("home"));
        this.props.dispatch(statusAction.setError(""));
        if(this.props.status.redirect === "home") {
            window.location.reload();
            this.props.dispatch(statusAction.setRedirect(""));
        }
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
                this.props.roomie.roomies.map((roomie, index) => {
                    return (
                        <RoomieBox roomie={roomie} auth={this.props.auth} key={index} />
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
        if(this.props.rent.rents.length) {
            return (
                this.props.rent.rents.map((rent, index) => {
                    return (
                        <RentBox rent={rent} key={index} />
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
                <div className="home-list home-list--space-between">
                    <h3 className="home-list__title">Your potential roommates</h3>
                    <Link to="/roomie" className="home-list__link">Find out more</Link>
                </div>
                <div className="home-list">
                    {this.renderRoomieBox()}
                </div>

                <div className="home-list home-list--space-between">
                    <h3 className="home-list__title">Browse rent</h3>
                    <Link to="/rent" className="home-list__link">Find out more</Link>
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
        roomie: state.roomieReducer,
        rent: state.rentReducer,
        status: state.statusReducer,
        auth: state.authReducer
    }
}

export default connect(mapStateToProps)(Home);