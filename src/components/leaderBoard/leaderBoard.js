import React, {Component} from 'react'
import "./leaderBoard.scss"
import {connect} from "react-redux";
import {Nav} from "../nav/nav";
import {UserScore} from "./userScore/userScore";


class LeaderBoard extends Component {
    render() {
        return (
            <div className="leader-board">
                <Nav history={this.props.history}/>
                <div className="users-list">
                    {this.props.users.sort((a, b) => (b.questions.length + Object.keys(b.answers).length) - (a.questions.length + Object.keys(a.answers).length)).map((user) =>
                        <UserScore user={user} key={user.id}/>
                    )}
                </div>
            </div>
        )
    }
}

function mapStateToProps({users, authedUser}) {
    return {
        users: Object.keys(users).map((id) => users[id]),
        authedUser: authedUser
    }
}

export default connect(mapStateToProps)(LeaderBoard)