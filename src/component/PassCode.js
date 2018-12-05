import React, {Component} from 'react';
const Store = require('electron-store');
const store = new Store();

class PassCode extends Component {


    render() {
        let passCode = store.get('passCode');
        console.log("passCode----->  ", passCode);
        if (passCode !== undefined) {

        }

        // let authData = store.get('authData');
        return (
            <div>
                <h1 style={{color: '#000'}}>Home</h1>
            </div>
        );
    }
}

export default PassCode;
