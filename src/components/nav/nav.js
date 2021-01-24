import React from 'react'
import "./nav.scss"
import {Link, NavLink} from "react-router-dom";
import {useSelector} from 'react-redux'
import {Avatar} from "../avatar/avatar";

export const Nav = () => {
    const authedUser = useSelector(store => store.authedUser);
    const users = useSelector(store => store.users);
    const authedUserInfo = users[authedUser];
    return (
        <nav className="Nav">
            <div className="d-flex justify-content-center">
                <ul className="d-flex h-100">
                    <li>
                        <NavLink activeClassName='active' to='../questions'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='../add'>New Question</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='../leaderboard'>Leader Board</NavLink>
                    </li>
                </ul>
                <ul className="d-flex h-100">
                    <li className="d-flex">
                        <Avatar image={authedUserInfo?.avatarURL} size="small"/>
                        <span>{` Hello, ${authedUserInfo?.name}`}</span>
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
};