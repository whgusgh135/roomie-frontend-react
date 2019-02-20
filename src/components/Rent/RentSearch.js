import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/rent';

class RentSearch extends React.Component {
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
            this.props.dispatch(actions.searchRentsByRegion(event.target.value.toLowerCase()));
        } else if(this.state.searchBy === "No. of Residents") {
            this.props.dispatch(actions.searchRentsByNumResidents(event.target.value));
        } else {
            this.props.dispatch(actions.searchRentsByRent(event.target.value));
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
                <h3 className="search-container__heading">All Rent</h3>
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
        } 
        if(this.state.searchBy === "No. of Residents") {
            return (
                <select 
                    className="search-bar"
                    onChange={this.handleChange}
                    required
                >
                    <option value="" disabled selected>Select the No. of Residents</option>
                    <option value="1">1 resident allowed</option>
                    <option value="2">2 resident allowed</option>
                    <option value="3">3 resident allowed</option>
                    <option value="4">4 resident allowed</option>
                    <option value="5">5+ resident allowed</option>
                </select>
            )
        }
        return (
            <select 
                className="search-bar"
                onChange={this.handleChange}
                required
            >
                <option value="" disabled selected>Select Rent Per Week</option>
                <option value="100">Up to $100 per week</option>
                <option value="200">Up to $200 per week</option>
                <option value="300">Up to $300 per week</option>
                <option value="400">Up to $400 per week</option>
                <option value="500">Up to $500 per week</option>
                <option value="600">Up to $600 per week</option>
                <option value="700">Up to $700 per week</option>
                <option value="800">Up to $800 per week</option>
                <option value="900">Up to $900 per week</option>
                <option value="1000">Up to $1000 per week</option>
                <option value="1100">Over $1000 per week</option>
                
            </select>
        )
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
                        className={this.state.searchBy === "No. of Residents" ? "button--search--active" : "button--search"}
                        value="No. of Residents"
                        >No. of Residents Allowed
                    </button>
                    <button 
                        onClick={this.handleClick} 
                        className={this.state.searchBy === "Rent Per Week" ? "button--search--active" : "button--search"}
                        value="Rent Per Week"
                        >Rent Per Week
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
        rent: state.rentReducer
    }
}

export default connect(mapStateToProps)(RentSearch);