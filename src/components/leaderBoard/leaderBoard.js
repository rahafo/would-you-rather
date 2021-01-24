import React from 'react'
import "./leaderBoard.scss"
import {connect} from "react-redux";
import {Nav} from "../nav/nav";
import {UserScore} from "./userScore/userScore";


const LeaderBoard = ({users}) => {
    return (
        <div className="leader-board">
            <Nav/>
            <div className="users-list">
                {users.sort((a, b) => (b.questions.length + Object.keys(b.answers).length) - (a.questions.length + Object.keys(a.answers).length)).map((user) =>
                    <UserScore user={user} key={user.id}/>
                )}
            </div>
        </div>
    )

};

function mapStateToProps({users}) {
    return {
        users: Object.keys(users).map((id) => users[id]),
    }
}

export default connect(mapStateToProps)(LeaderBoard)