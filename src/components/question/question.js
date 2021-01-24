import React, {Component} from 'react'
import {Nav} from "../nav/nav";
import {handleAnswerQuestion} from "../../actions/questions";
import {connect} from "react-redux";
import {AnswerQuestion} from "./answerQuestion/answerQuestion";
import {AnsweredQuestion} from "./answeredQuestion/answeredQuestion";
import {Redirect} from "react-router";

class Question extends Component {
    state = {
        question: null,
        questionAuthor: null,
        selectedValue: "",
        didAnswer: false,
        questionNotFound: false,
    };

    componentDidMount() {
        this.setQuestionInfo()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            this.setQuestionInfo()
        }
    }

    setQuestionInfo = () => {
        let id = this.props.match.params.id;
        let question = this.props.questions[id];
        if(question) {
            this.setState({
                question: question,
                questionAuthor: this.props.users[question.author],
                selectedValue: question.optionOne.votes.includes(this.props.authedUser) ? "optionOne" :
                    question.optionTwo.votes.includes(this.props.authedUser) ? "optionTwo" : "",
                didAnswer: question.optionOne.votes.includes(this.props.authedUser) || question.optionTwo.votes.includes(this.props.authedUser)
            })
        }
        else{
            this.setState({questionNotFound:true})
        }
    };

    onValueChange = (e) => {
        this.setState({selectedValue: e.target.value})
    };

    answerQuestion = () => {
        this.props.dispatch(handleAnswerQuestion(this.state.question.id, this.state.selectedValue));
        this.setState({
            didAnswer: true
        })
    };

    isButtonDisabled = () => {
        return !this.state.selectedValue
    };


    render() {
        if(this.state.questionNotFound)
            return <Redirect to={"../404"}/>;
        return (
            <div className="answer-question">
                <Nav/>
                {this.state.question &&
                this.state.didAnswer ?
                    <AnsweredQuestion
                        question={this.state.question}
                        questionAuthor={this.state.questionAuthor}
                        selectedValue={this.state.selectedValue}
                    /> :
                    <AnswerQuestion
                        question={this.state.question}
                        questionAuthor={this.state.questionAuthor}
                        selectedValue={this.state.selectedValue}
                        onValueChange={this.onValueChange}
                        answerQuestion={this.answerQuestion}
                        isButtonDisabled={this.isButtonDisabled}
                    />
                }
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

export default connect(mapStateToProps)(Question)