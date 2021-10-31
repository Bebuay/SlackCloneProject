import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
import firebase from "./firebase/firebase";
import { combinedReducers } from "./store/reducer";
import { setUser } from "./store/actioncreator";


import "semantic-ui-css/semantic.min.css";

const store = createStore(combinedReducers)

const Index = (props) => {

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        props.setUser(user);
        props.history.push("/");
      } else {
        props.setUser(null);
        props.history.push("/login");
      }
    })
  }, []);

  console.log("Debug", props.currentUser);

  return (<>
    
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/" component={App} />
    </Switch></>)
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    loading: state.channel.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => { dispatch(setUser(user)) }
  }
}

const IndexWithRouter = withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <IndexWithRouter />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);