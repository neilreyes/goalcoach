import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Redux Reducers
import reducer from './reducers';

// Redux Action
import { logUser } from './actions';

// React Router
import { Router, Route, browserHistory } from 'react-router';

// Google Firebase
import { firebaseApp } from './firebase';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user=>{
    if(user){
        console.log('User has sign in or up', user);
        const { email } = user;
        store.dispatch(logUser(email))
        browserHistory.push('/app');
    } else {
        console.log('User has signed out or still need to sign in.: ');
        browserHistory.replace('/signin');
    }
});

ReactDOM.render(
    <Provider store={store}>
        <Router path="/" history={browserHistory}>
            <Route path="/app" component={App} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
        </Router>
    </Provider>,
    document.getElementById('root')
)