import React, {Component} from 'react'
import "./home.scss"
import {connect} from "react-redux";
import {Nav} from "../nav/nav";
import {QuestionOverview} from "./questionOverview/questionOverview";


class Home extends Component {

    state = {
        selectedTab: "unanswered"
    };


    setSelectedTab = (selectedTab) => {
        this.setState({selectedTab})
    };

    render() {
        const answeredQuestionsIds = Object.keys(this.props.users[this.props.authedUser].answers);
        const unansweredQuestionsIds = Object.keys(this.props.questions).filter((question) => !answeredQuestionsIds.includes(question));
        const answeredQuestions = answeredQuestionsIds.map((id) => this.props.questions[id]).sort((a, b) => b.timestamp - a.timestamp);
        const unansweredQuestions = unansweredQuestionsIds.map((id) => this.props.questions[id]).sort((a, b) => b.timestamp - a.timestamp);

        return (
            <div className="home">
                <Nav history={this.props.history}/>
                <div className="questions">
                    <div className="tabs d-flex">
                        <div onClick={() => this.setSelectedTab("unanswered")}
                             className={`tab ${this.state.selectedTab === 'unanswered' ? "selected" : ""}`}>
                            Unanswered Questions
                        </div>
                        <div onClick={() => this.setSelectedTab("answered")}
                             className={`tab ${this.state.selectedTab === 'answered' ? "selected" : ""}`}>
                            Answered Questions
                        </div>
                    </div>
                    <div className="tab-content">
                        {this.state.selectedTab === "unanswered" ? unansweredQuestions.map((question) => {
                                let questionAuthor = this.props.users[question.author];

                                return (
                                    <QuestionOverview
                                        key={question.id}
                                        question={question}
                                        questionAuthor={questionAuthor}
                                    />
                                )

                            }) :
                            answeredQuestions.map((question) => {
                                let questionAuthor = this.props.users[question.author];

                                return (
                                    <QuestionOverview
                                        key={question.id}
                                        question={question}
                                        questionAuthor={questionAuthor}
                                    />
                                )

                            })}

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users, authedUser, questions}) {
    return {
        users,
        authedUser,
        questions
    }
}

export default connect(mapStateToProps)(Home)