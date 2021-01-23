import {ADD_QUESTION, ANSWER_QUESTION, GET_QUESTIONS} from '../actions/questions'

export default function questions(state = {}, action) {
    switch (action.type) {
        case GET_QUESTIONS :
            return {
                ...state,
                ...action.questions
            };
        case ANSWER_QUESTION :
            return {
                ...state,
                [action.questionId]: {
                    ...state[action.questionId],
                    [action.answer]: {
                        ...state[action.questionId][action.answer],
                        votes: state[action.questionId][action.answer].votes.concat(action.userId)
                    }
                }
            };
        case ADD_QUESTION :
            return {
                ...state,
                [action.question.id]: action.question,
            };
        default :
            return state
    }
}