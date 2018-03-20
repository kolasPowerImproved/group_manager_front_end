import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import { Route } from 'react-router';
import GroupDetail from './GroupDetail';

ReactDOM.render((
        <div>
            <Router>
            <Switch>
                <Route exact={true} path='/' component={App} />
                <Route exact={true} path='/group_detail/:group_name' component={GroupDetail} />
                )}/>
            </Switch>
            </Router>
        </div>),
    document.getElementById('root'));
registerServiceWorker();
