import React from 'react'
import notFoundImage from "../../asset/images/404.jpg"
import "./notfound.scss"
import {Nav} from "../nav/nav";

export const notFound = () => {
    return (
        <div className="not-found d-flex">
            <Nav/>
            <div className="d-flex flex-column">
                <img src={notFoundImage} alt={"404 not found"}/>
            </div>
        </div>
    )
};