import './App.css';
import React, {Component} from 'react'
import SignIn from "./components/signin/signIn";
import Signout from "./components/signout/signout";
import Home from "./components/home/home";
import NewQuestion from "./components/newQuestion/newQuestion";
import LeaderBoard from "./components/leaderBoard/leaderBoard";
import {handleInitialData} from "./actions/shared";
import {connect} from 'react-redux'
import {BrowserRouter, Route} from "react-router-dom";
import {Redirect, Switch} from "react-router";
import {notFound} from "./components/notFound/notFound";
import Question from "./components/question/question";

const SecureRoute = ({component: Component, auth: auth, ...rest}) => {
    return (
        <Route {...rest} render={(props) => (
            auth
                ? <Component {...props} />
                : <Redirect to='/login'/>
        )}/>)
};

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route exact path="/login" component={SignIn}/>
                        <SecureRoute exact path="/" component={Home} auth={this.props.authedUser}/>
                        <SecureRoute exact path="/questions" component={Home} auth={this.props.authedUser}/>
                        <SecureRoute exact path="/questions/:id" component={Question} auth={this.props.authedUser}/>
                        <SecureRoute exact path="/add" component={NewQuestion} auth={this.props.authedUser}/>
                        <SecureRoute exact path="/leaderboard" component={LeaderBoard} auth={this.props.authedUser}/>
                        <SecureRoute exact path="/signout" component={Signout} auth={this.props.authedUser}/>
                        <Route component={notFound}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser: authedUser
    }
}

export default connect(mapStateToProps)(App)