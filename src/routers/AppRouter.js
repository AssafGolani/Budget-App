import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../component/ExpanseDashboardPage';
import AddExpensePage from '../component/AddExpensePage';
import EditExpensePage from '../component/EditExpensePage';
import HelpPage from '../component/HelpPage';
import NotFoundPage from '../component/NotFoundPage';
import Header from '../component/Header';


const AppRouter = () => (
    <Router>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
    </Router>
);

export default AppRouter;

