import { LightningElement, wire } from 'lwc';
//import methodName from '@salesforce/apex/ClassName.methodName';
import getTopAccount from '@salesforce/apex/AccountController.getTopAccount';

export default class WiredApex1 extends LightningElement {
    accounts;
    error;

    @wire(getTopAccount)
    getAccounts({ data, error }) {
        if (data) {
            console.log('** getgting accounts..');
            this.accounts = data;
            console.log(this.accounts);
        }
        if (error) {
            this.error = error;
            console.log(this.error);
        }
    }
}