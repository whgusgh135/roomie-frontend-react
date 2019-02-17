import React from 'react';
import { connect } from 'react-redux'
import { RentBox } from './RentBox';
import RentSearch from './RentSearch';
import * as actions from '../../redux/actions/rent';

class Rent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: 6
        };
    }
    
    
    componentDidMount() {
        this.props.dispatch(actions.selectRent(this.state.items));
    }

    renderRentBox() {
        if(this.props.rent.rents.length) {
            return (
                this.props.rent.rents.map(rent => {
                    return (
                        <RentBox rent={rent} />
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
                <RentSearch />
                
                <div className="home-list">
                    {this.renderRentBox()}
                </div>

                <div className="home-list__page-number">
                    1 2 3
                </div>

            </main>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.authReducer,
        rent: state.rentReducer
    }
}

export default connect(mapStateToProps)(Rent);