import React from 'react'
import "./avatar.scss"

export const Avatar = (props) => {
    return <img alt={"user profile image"} className={`Avatar ${props.size}`} src={props.image}/>
};