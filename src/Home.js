import React, {Component} from 'react';
import PassCode from "./component/PassCode";
import AccountOverview from "./AccountOverview";
import {
    Link,
} from "react-router-dom";


const Store = window.require('electron-store');
const store = new Store();

class Home extends Component {


    render() {
        let passCode = store.get('passCode');
        console.log("passCode----->  ", passCode);
        if (passCode !== undefined) {
            return (<PassCode/>);
        }

        let authData = store.get('authData');
        if (authData !== undefined && authData.hasOwnProperty('authKey') && authData.hasOwnProperty('testNet')) {
            return (<AccountOverview/>);
        }
        return (
            <div>
                <h1 style={{color: '#000'}}>Deribit Desktop App : Dashboard</h1>
                <Link to="/setPassCode">Set Up Passcode</Link><br/><br/>
                <Link to="/accountOverview">Skip</Link>
            </div>
        );
    }
}

export default Home;
