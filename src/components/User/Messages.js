import React from 'react';
import { connect } from 'react-redux';
import RoomieDetail from '../Roomie/RoomieDetail';
import * as actions from '../../redux/actions/roomie';
import * as messageActions from '../../redux/actions/message';

class Messages extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            popup: false
        }
    }

    deleteMessage = (id) => {
        this.props.dispatch(messageActions.deleteMessage(this.props.auth.user.userId, id));
    }

    renderPopup = (id) => {
        this.props.dispatch(actions.selectRoomie(id));
        this.setState({popup: !this.state.popup});
    }
    
    renderRoomieDetail = () => {
        if(this.state.popup && this.props.roomie.selectedRoomie.roomie){
            return (
                <RoomieDetail 
                    roomie={this.props.roomie.selectedRoomie.roomie}
                    auth={this.props.auth}
                    renderPopup={this.renderPopup}
                />
            )
        }
    }

    renderMessages = () => {
        const month =["Jan", "Febr", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        return(
            this.props.message.messages.map(msg => {
                let date = new Date(msg.date).getDate() + " " + month[new Date(msg.date).getMonth()] + " " + new Date(msg.date).getFullYear();
                
                return (
                    <div className="message">
                        <div className="message__content">
                            <div className="message__text">{msg.message}</div>
                        </div>
                        <div className="message__content">
                            <div className="message__reply" onClick={() => this.renderPopup(msg.from)}>Reply</div>
                            <div className="message__delete" onClick={() => this.deleteMessage(msg._id)}>Delete</div>
                            <div className="message__date">{date}</div>
                        </div>
                        {this.renderRoomieDetail()}                       
                    </div> 
                )
            })
        )
    }

    render() {
        return (
            <div>{this.renderMessages()}</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        message: state.messageReducer,
        roomie: state.roomieReducer,
        auth: state.authReducer
    }
}

export default connect(mapStateToProps)(Messages);