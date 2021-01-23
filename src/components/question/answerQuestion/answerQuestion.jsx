import React from 'react'
import "./answerQuestion.scss"
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import {Avatar} from "../../avatar/avatar";

export const AnswerQuestion = (props) => {
    return (
        <div className="answer-question">
            {props.question &&
            <div className="answer-question-form d-flex flex-column">
                <div className="form-header">
                    <h4>{`${props.questionAuthor?.name} asks:`}</h4>
                </div>
                <div className="d-flex h-100">
                    <div className="user-avatar">
                        <Avatar image={props.questionAuthor?.avatarURL} size={"large"}/>
                    </div>
                    <div className="form-body d-flex flex-column">
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Would you rather ...</FormLabel>
                            <RadioGroup aria-label="gender" name="question" value={props.selectedValue}
                                        onChange={(e) => {
                                            props.onValueChange(e)
                                        }}>
                                <FormControlLabel value={"optionOne"} control={<Radio/>}
                                                  label={props.question.optionOne.text}/>
                                <FormControlLabel value={"optionTwo"} control={<Radio/>}
                                                  label={props.question.optionTwo.text}/>
                            </RadioGroup>
                        </FormControl>

                        <Button variant="contained" color="primary" onClick={() => props.answerQuestion()}
                                disabled={props.isButtonDisabled()}>Submit</Button>

                    </div>
                </div>
            </div>
            }
        </div>

    )
};


