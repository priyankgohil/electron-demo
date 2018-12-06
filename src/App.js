import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import {
//     Route,
//     Switch,
//     Redirect,
//     Link
// } from "react-router-dom";
import SetUpPassCode from "./SetUpPassCode";
import Home from "./Home";
// import SetUpPassCode from "./SetUpPassCode";
import ApiCredentialForm from "./component/ApiCredentialForm";
// import AccountOverview from "./AccountOverview";
// // import {Switch, Route} from 'react-router-dom'
// // import Home from "./pages/Home";
// // import SetUpPassCode from "./pages/SetUpPassCode";
// // import ApiCredentialForm from "./component/ApiCredentialForm";
// // import AccountOverview from "./pages/AccountOverview";
//
// const Main = () => (
//     <main>
//         <Switch>
//             <Route exact path='/' component={Home}/>
//             <Route exact path='/setPassCode' component={SetUpPassCode}/>
//             <Route exact path='/apiCredentialForm' component={ApiCredentialForm}/>
//             <Route exact path='/accountOverview' component={AccountOverview}/>
//         </Switch>
//     </main>
// );

class App extends Component {
    render() {
        return (<Home></Home>)
    }
}

export default App;
