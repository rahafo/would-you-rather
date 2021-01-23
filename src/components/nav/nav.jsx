import React from 'react'
import "./nav.scss"
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux'
import {Avatar} from "../avatar/avatar";

export const Nav = (props) => {
    const authedUser = useSelector(store => store.authedUser);
    const users = useSelector(store => store.users);
    const authedUserInfo = users[authedUser]
    return (
        <nav className="Nav">
            <div className="d-flex justify-content-center">
                <ul className="d-flex h-100">
                    <li><Link
                        className={`link ${props.history?.location.pathname.includes("questions") ? "active" : ""}`}
                        to="../questions">Home</Link></li>
                    <li><Link className={`link ${props.history?.location.pathname.includes("add") ? "active" : ""}`}
                              to="../add">New Question</Link></li>
                    <li><Link
                        className={`link ${props.history?.location.pathname.includes("leaderboard") ? "active" : ""}`}
                        to="../leaderboard">Leader Board</Link></li>
                </ul>
                <ul className="d-flex h-100">
                    <li className="d-flex">
                        <Avatar image={authedUserInfo.avatarURL} size="small"/>
                        <span>{` Hello, ${authedUserInfo.name}`}</span>
                    </li>
                    <li>
                        <Link to="../signout">
                            <span className="logout">Log out</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}