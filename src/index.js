import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Jokes from './components/Jokes';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
import SimpleSlider from './components/CenterMode';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' component={App} />               
            <Route path='/jokes' component={Jokes}/>
            <Route path='/projects' component={SimpleSlider}/>
        </Switch>
    </Router>
    , document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));

// class Animal{
//     constructor(name,age)
//     {
//         this.name = name;
//         this.age = age;
//     }

//     speak()
//     {
//         console.log("my name is",this.name,"and i am",this.age);
//     }
// }

// const ani1 = new Animal("hulla",5);
// ani1.speak();