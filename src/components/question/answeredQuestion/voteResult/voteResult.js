import React from 'react'
import "./voteResult.scss"

export const VoteResult = (props) => {
    const percentage = (props.numOfVotes / props.totalVotes) * 100;
    return (
        <div className={`vote ${props.selected ? "selected" : ""}`}>
            <div className="content d-flex flex-column">
            <span className="option">
                {`Would you rather ${props.text}?`}
            </span>
                <div className="percentage-container">
                    <div className="percentage" style={{width: `${percentage}%`}}>{`${percentage.toFixed(2)}%`}</div>
                </div>
                <span className="num-of-votes">{`${props.numOfVotes} out of ${props.totalVotes} votes`}</span>
            </div>
        </div>
    )
};