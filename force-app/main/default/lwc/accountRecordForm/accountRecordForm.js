import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account' //import account sObject to show depencies
import Name from '@salesforce/schema/Account.Name';
import Industry from '@salesforce/schema/Account.Industry';
import AnnualRevenue from '@salesforce/schema/Account.AnnualRevenue';
import Type from '@salesforce/schema/Account.Type';
import Website from '@salesforce/schema/Account.Website';
import Phone from '@salesforce/schema/Account.Phone';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AccountRecordForm extends LightningElement {
    objectName = ACCOUNT_OBJECT;//this is a string. 
    recordId = '001Hu000033YurKIAS';
    fields = [Name, Industry, AnnualRevenue, Type, Website, Phone]
    handleOnSuccess() {
        const toast = new ShowToastEvent({
            title: 'Successss',
            variant: 'success',
            message: 'Successfully update account record'
        });
        this.dispatchEvent(toast);
    }
}