import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import Home from './components/Home';
import Add from './components/Add'
import Sub from './components/Subtract'
import Mul from './components/Multiply'
import Divi from './components/Divide'


const App = () => {
    return (
        <>
        <BrowserRouter>
        
        <Helmet>
            <title>Calculator Using React</title>
            <meta name='description'
            content='Basic Calculator Using React' />
        </Helmet>
        
        <Navbar />
        <Switch>
            
            <Route exact path="/" component={Home}/>
            <Route path="/add" component={Add}/>
            <Route path="/subtract" component={Sub}/>
            <Route path="/multiply" component={Mul}/>
            <Route path="/divide" component={Divi}/>
            <Redirect to="/add" />

        </Switch>
        </BrowserRouter>
       </>
       
    );
};

export default App;