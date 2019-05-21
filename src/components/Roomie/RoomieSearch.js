import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/roomie';

class RoomieSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBy: "Region",
            searching: ""
        }
    }

    handleChange = event => {
        this.setState({searching: event.target.value});
        if(this.state.searchBy === "Region") {
            this.props.dispatch(actions.searchRoomiesByRegion(event.target.value.toLowerCase()));
        } else {
            this.props.dispatch(actions.searchRoomiesByBudget(event.target.value.toLowerCase()));
        }
    }

    handleClick = event => {
        event.preventDefault();
        this.setState({searchBy: event.target.value})
    }

    renderSearching = () => {
        if(this.state.searching) {
            return(
                <h3 className="search-container__heading">Searching by {this.state.searchBy} "{this.state.searching}"</h3>
            )
        } else {
            return (
                <h3 className="search-container__heading">All Roommates</h3>
            )
        }
    }
    renderSearchBox = () => {
        if(this.state.searchBy === "Region") {
            return (
                <input 
                    className="search-bar" 
                    type="text" 
                    placeholder={`Search by ${this.state.searchBy}`}
                    onChange={this.handleChange}
                />
            )
        } else {
            return (
                <select 
                    className="search-bar"
                    name="budget"
                    onChange={this.handleChange}
                    required
                >
                    <option value="" disabled defaultValue>Select the budget</option>
                    <option value="100">$100 per week</option>
                    <option value="150">$150 per week</option>
                    <option value="200">$200 per week</option>
                    <option value="250">$250 per week</option>
                    <option value="300">$300 per week</option>
                    <option value="350">$350 per week</option>
                    <option value="400">Over $400 per week</option>
                </select>
            )
        }
    }

    render() {
        return (
            <div className="search-container">
                <div className="search-container__setting">
                    <button 
                        onClick={this.handleClick} 
                        className={this.state.searchBy === "Region" ? "button--search--active" : "button--search"}
                        value="Region"
                        >Region
                    </button>
                    <button 
                        onClick={this.handleClick} 
                        className={this.state.searchBy === "Budget" ? "button--search--active" : "button--search"}
                        value="Budget"
                        >Budget
                    </button>
                </div>
                {this.renderSearchBox()}
                {this.renderSearching()}
            </div> 
        )
    }
}

function mapStateToProps(state) {
    return {
        roomie: state.roomieReducer
    }
}

export default connect(mapStateToProps)(RoomieSearch);