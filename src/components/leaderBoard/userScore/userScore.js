import React from 'react'
import "./userScore.scss"
import {Avatar} from "../../avatar/avatar";

export const UserScore = (props) => {
    const numOfQuestions = props.user.questions.length;
    const numOfAnswers = Object.keys(props.user.answers).length;
    const score = numOfQuestions + numOfAnswers;
    return (
        <div className="user">
            <div className="user-content d-flex">
                <div className="d-flex h-100 w-100">
                    <div className="user-avatar">
                        <Avatar image={props.user?.avatarURL} size={"large"}/>
                    </div>
                    <div className="body d-flex">
                        <div className="d-flex flex-column w-50">
                            <h3>{props.user?.name}</h3>
                            <div className="d-flex flex-column">
                                <div className="d-flex stat">
                                    <span>Answered Questions</span>
                                    <span>{numOfAnswers}</span>
                                </div>
                                <hr/>
                                <div className="d-flex stat">
                                    <span>Created Questions</span>
                                    <span>{numOfQuestions}</span>
                                </div>
                            </div>
                        </div>
                        <div className="score d-flex flex-column">
                            <div className="score-header">Score</div>
                            <div className="circle"><span>{score}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

};


