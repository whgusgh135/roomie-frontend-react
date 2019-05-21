import React from 'react';
import { connect } from 'react-redux';

class Status extends React.Component {

    render() {
        
        if(this.props.status.status) {
            return (
                <div className="status-box">
                    <div className="status-box__container">
                        {this.props.status.status}
                    </div>
                </div>
            )

        } else if(this.props.status.error) {
            return (
                <div className="status-box">
                    <div className="status-box__container status-box__container--error">
                        {this.props.status.error.message}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="status-box">
                    
                </div>
            )
        }
        
    }
}

function mapStateToProps(state) {
    return {
        status: state.statusReducer
    }
}

export default connect(mapStateToProps)(Status);