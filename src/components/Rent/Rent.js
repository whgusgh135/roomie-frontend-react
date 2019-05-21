import React from 'react';
import { connect } from 'react-redux'
import { RentBox } from './RentBox';
import RentSearch from './RentSearch';
import * as actions from '../../redux/actions/rent';
import { setPage, setError } from '../../redux/actions/status';

class Rent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: 6
        };
    }
    
    
    componentDidMount() {
        this.props.dispatch(setError(""));
        this.props.dispatch(actions.selectRent(this.state.items));
        this.props.dispatch(setPage("rent"));
    }

    renderRentBox() {
        if(this.props.rent.rents && this.props.rent.rents.length) {
            return (
                this.props.rent.rents.map((rent, index) => {
                    return (
                        <RentBox rent={rent} key={index} />
                    )
                })
            )
        } else {
            return (
                <p className="search-container__message">No result</p>
            )
        }
    }

    getMoreRent = () => {
        let newNum = this.state.items + 6;
        this.setState({items: newNum});
        this.props.dispatch(actions.selectRent(newNum));
    }

    render() {       
        return (
            <main className="home">
                <RentSearch />
                
                <div className="home-list">
                    {this.renderRentBox()}
                </div>

                <div className="home-list--more">
                    <button className="button button--more" onClick={this.getMoreRent}>+ Find more</button>
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