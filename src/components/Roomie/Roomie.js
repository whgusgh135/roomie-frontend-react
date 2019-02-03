import React from 'react';
import { connect } from 'react-redux'

class Roomie extends React.Component {

    render() {
        return (
            <div className="home">Hello</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.authReducer
    }
}

export default connect(mapStateToProps)(Roomie);