import React, {Component} from 'react';
import {Link} from "react-router-dom";

const Store = require('electron-store');
const store = new Store();

class SetUpPassCode extends Component {

    render() {
        let passCode = store.get('passCode');
        console.log("passCode----->  ", passCode);
        if (passCode !== undefined) {

        }

        // let authData = store.get('authData');
        return (
            <div>
                <h1 style={{color: '#000'}}>Set up Passcode</h1>
                <Link to="/">Skip</Link>
            </div>
        );
    }
}

export default SetUpPassCode;
