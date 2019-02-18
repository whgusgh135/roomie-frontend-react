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
        this.props.dispatch(actions.searchRents(event.target.value.toLowerCase()));
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

    render() {
        return (
            <div className="search-container">
                <div className="search-container__setting">
                    <button 
                        onClick={this.handleClick} 
                        className={this.state.searchBy == "Region" ? "button--search--active" : "button--search"}
                        value="Region"
                        >Region
                    </button>
                    <button 
                        onClick={this.handleClick} 
                        className={this.state.searchBy == "No. of Rooms" ? "button--search--active" : "button--search"}
                        value="No. of Rooms"
                        >No. of Rooms
                    </button>
                </div>
                <input 
                    className="search-bar" 
                    type="text" 
                    placeholder={`Search by ${this.state.searchBy}`}
                    onChange={this.handleChange}
                />
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