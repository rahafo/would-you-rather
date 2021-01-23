import {saveAnswer, saveQuestion} from "../service/API"

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';


export function getQuestions(questions) {
    return {
        type: GET_QUESTIONS,
        questions,
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function handleAddQuestion(question) {
    return (dispatch, getState) => {
        const {authedUser} = getState();
        question.author = authedUser;
        return saveQuestion(question)
            .then((question) => dispatch(addQuestion(question)))
    }
}

function answerQuestion(questionId, answer, userId) {
    return {
        type: ANSWER_QUESTION,
        questionId,
        answer,
        userId,
    }
}

export function handleAnswerQuestion(questionId, answer) {
    return (dispatch, getState) => {
        const {authedUser} = getState()
        return saveAnswer(authedUser, questionId, answer)
            .then((question) => dispatch(answerQuestion(questionId, answer, authedUser)))
    }
}
