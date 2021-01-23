import React, {Component} from 'react'
import "./signIn.scss"
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import wrf from "../../asset/images/wyr.png"
import {connect} from "react-redux";
import {setAuthedUser} from "../../actions/authedUser";
import Button from "@material-ui/core/Button";

class SignIn extends Component {

    state = {
        selectedUser: this.props.authedUser
    };

    setAuthodUser = (e) => {
        this.setState({selectedUser: e.target.value})
    };

    signIn = () => {
        this.props.dispatch(setAuthedUser(this.state.selectedUser));
        this.props.history.push("../")
    };

    render() {
        return (
            <div className="signIn">
                <div className="signIn-form d-flex flex-column">
                    <div className="form-header">
                        <h3>Welcome To Would You Rather App!</h3>
                        <span>Please sign in to continue.</span>
                    </div>
                    <div className="form-body d-flex flex-column">
                        <img src={wrf} alt={"logo"}/>
                        <FormControl variant="outlined">
                            <InputLabel>User</InputLabel>
                            <Select
                                id="user"
                                name="user"
                                value={this.state.selectedUser ?? ""}
                                onChange={(e) => {
                                    this.setAuthodUser(e)
                                }}
                            >
                                {this.props.users.map((user) =>
                                    <MenuItem value={user.id} key={user.id}>{user.name}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                        <Button variant="contained" color="primary" onClick={() => this.signIn()}
                                disabled={!this.state.selectedUser}>Sign In</Button>
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps({users, authedUser}) {
    return {
        users: Object.keys(users).map((id) => {
            return {id: users[id].id, name: users[id].name}
        }),
        authedUser
    }
}

export default connect(mapStateToProps)(SignIn)