import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import * as serviceWorker from './serviceWorker';


const routing = (
    <Router>
        <div>
            <Route path={"/"} component={Home} />
            <Route path={"/store"} component={Home} />
            <Route path={"/overview"} component={Home} />
            <Route path={"/media"} component={Home} />
            <Route path={"/aboutus"} component={Home} />
        </div>
    </Router>
);


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
