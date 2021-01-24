import React, {Component} from 'react'
import "./newQuestion.scss"
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import {Nav} from "../nav/nav";
import TextField from "@material-ui/core/TextField";
import {handleAddQuestion} from "../../actions/questions";


class NewQuestion extends Component {
    state = {
        optionOneText: "",
        optionTwoText: ""
    };

    onValueChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    };


    addQuestion = () => {
        this.props.dispatch(handleAddQuestion(this.state));
        this.setState({
            optionOneText: "",
            optionTwoText: ""
        });
        this.props.history.push("../")
    };

    isButtonDisabled = () => {
        return !(this.state.optionOneText && this.state.optionTwoText)
    };

    render() {
        return (
            <div className="new-question">
                <Nav/>
                <div className="new-question-form d-flex flex-column">
                    <div className="form-header">
                        <h2>Create New Question</h2>
                    </div>
                    <div className="form-body d-flex flex-column">
                        <h3>Would you rather ...</h3>
                        <TextField id="optionOneText" name="optionOneText" label="Option#1" variant="outlined"
                                   value={this.state.optionOneText} onChange={(e) => this.onValueChange(e)}/>
                        <div className="or"><span>OR</span></div>
                        <TextField id="optionTwoText" name="optionTwoText" label="Option#2" variant="outlined"
                                   value={this.state.optionTwoText} onChange={(e) => this.onValueChange(e)}/>
                        <Button variant="contained" color="primary" onClick={() => this.addQuestion()}
                                disabled={this.isButtonDisabled()}>Submit</Button>
                    </div>
                </div>

            </div>
        )
    }
}


export default connect()(NewQuestion)