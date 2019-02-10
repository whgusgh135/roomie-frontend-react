import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/roomie';

class RoomieSearch extends React.Component {

    handleChange = event => {
        this.props.dispatch(actions.searchRoomies(event.target.value));
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
        roomie: state.roomieReducer
    }
}

export default connect(mapStateToProps)(RoomieSearch);