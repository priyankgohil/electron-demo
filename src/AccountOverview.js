import React, {Component} from 'react';

const Store = window.require('electron-store');
const store = new Store();

class AccountOverview extends Component {


    render() {
        let passCode = store.get('passCode');
        console.log("passCode----->  ", passCode);
        if (passCode !== undefined) {

        }

        // let authData = store.get('authData');
        return (
            <div>
                <h1 style={{color: '#000'}}>Account Overview</h1>
            </div>
        );
    }
}

export default AccountOverview;
