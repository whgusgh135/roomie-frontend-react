import React from "react";
import { connect } from "react-redux";
import { setError } from '../../redux/actions/status';

export function withAuth(ComponentToBeRendered) {
    class Authenticate extends React.Component {
        componentWillMount() {
            if(this.props.auth.isAuthenticated === false) {
                this.props.history.push("/userregister");
                this.props.dispatch(setError("Unauthorized. Please log in first."));
            }
        }
        componentWillUpdate(nextProps) {
            if(nextProps.auth.isAuthenticated === false) {
                this.props.history.push("/userregister");
            }
        }
        render() {
            return <ComponentToBeRendered {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return {
            auth: state.authReducer
        }
    }
    return connect(mapStateToProps)(Authenticate);
}