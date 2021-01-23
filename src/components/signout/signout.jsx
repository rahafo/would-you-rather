import React, {Component} from 'react'
import {connect} from "react-redux";
import {setAuthedUser} from "../../actions/authedUser";
import {Redirect} from "react-router";

class Signout extends Component {


    componentDidMount() {
        this.signOut()
    }

    signOut = () => {
        this.props.dispatch(setAuthedUser(null));
    };

    render() {
        return (
            <Redirect to={"../login"}/>
        )
    }
}

export default connect()(Signout)