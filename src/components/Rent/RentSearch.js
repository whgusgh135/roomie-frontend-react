import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/rent';

class RentSearch extends React.Component {

    handleChange = event => {
        this.props.dispatch(actions.searchRents(event.target.value));
    }

    render() {
        return (
            <form>
                <input 
                    className="nav-items__search-bar" 
                    type="text" 
                    placeholder="Search Region"
                    onChange={this.handleChange}
                />
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        rent: state.rentReducer
    }
}

export default connect(mapStateToProps)(RentSearch);