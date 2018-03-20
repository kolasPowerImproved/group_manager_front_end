import React, {Component} from 'react';
import GroupList from './GroupList'
import GroupDetail from './GroupDetail'
import { Switch, Route } from 'react-router-dom'

export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={GroupList}/>
                <Route path='/group_detail/:group_name' component={GroupDetail}/>
            </Switch>
        );
    }
}
