import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import '../../assets/styles/App.scss';

import Layout from '../components/Layout';
import Home from '../containers/Home';


const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;