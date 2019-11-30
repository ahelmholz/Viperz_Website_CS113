import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import { 
    Home, 
    Store,
    OverView,
    Media,
    AboutUs
} from './pages';
import * as serviceWorker from './serviceWorker';


const routing = (
    <Router>
        <div>
            <Route exact path={"/"} component={Home} />
            <Route path={"/store"} component={Store} />
            <Route path={"/overview"} component={OverView} />
            <Route path={"/media"} component={Media} />
            <Route path={"/aboutus"} component={AboutUs} />
        </div>
    </Router>
);


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
