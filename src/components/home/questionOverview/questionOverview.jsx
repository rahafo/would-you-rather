import React from 'react'
import "./questionOverview.scss"
import Button from "@material-ui/core/Button";
import {Avatar} from "../../avatar/avatar";
import {Link} from "react-router-dom";

export const QuestionOverview = (props) => {
    return (
        <div className="question-overview d-flex flex-column">
            <div className="form-header">
                <h4>{`${props.questionAuthor?.name} asks:`}</h4>
            </div>
            <div className="d-flex h-100">
                <div className="user-avatar">
                    <Avatar image={props.questionAuthor?.avatarURL} size={"large"}/>
                </div>
                <div className="form-body d-flex flex-column">
                    <h3>Would you rather ...</h3>
                    <span>{`...${props.question.optionOne.text}..`}</span>
                    <Link to={`../questions/${props.question.id}`}><Button variant="contained" color="primary">View
                        Poll</Button></Link>
                </div>
            </div>
        </div>
    )
};


