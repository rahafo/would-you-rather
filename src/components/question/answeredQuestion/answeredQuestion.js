import React from 'react'
import "./answeredQuestion.scss"
import {Avatar} from "../../avatar/avatar";
import {VoteResult} from "./voteResult/voteResult";

export const AnsweredQuestion = (props) => {
    const optionOneVotes = props.question.optionOne.votes.length;
    const optionTwoVotes = props.question.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;

    return (
        <div className="answered-question">
            {props.question &&
            <div className="answered-question-content d-flex flex-column">
                <div className="header">
                    <h4>{`Asked by ${props.questionAuthor?.name}:`}</h4>
                </div>
                <div className="d-flex h-100">
                    <div className="user-avatar">
                        <Avatar image={props.questionAuthor?.avatarURL} size={"large"}/>
                    </div>
                    <div className="body d-flex flex-column">
                        <h2>Results:</h2>
                        <VoteResult
                            text={props.question.optionOne.text}
                            selected={props.selectedValue === "optionOne"}
                            totalVotes={totalVotes}
                            numOfVotes={optionOneVotes}
                        />
                        <VoteResult
                            text={props.question.optionTwo.text}
                            selected={props.selectedValue === "optionTwo"}
                            totalVotes={totalVotes}
                            numOfVotes={optionTwoVotes}
                        />
                    </div>
                </div>
            </div>
            }
        </div>

    )

};


