import { LightningElement, wire } from 'lwc';
import { getPicklistValues, getObjectInfo } from 'lightning/uiObjectInfoApi';
import Industry from '@salesforce/schema/Account.Industry';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'

export default class GetPicklistValuesIndustry extends LightningElement {

    accRecordTypeId;
    industryOptions; //undefined

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    accountObjectInfoHandle({ data, error }) {
        if (data) {
            this.accRecordTypeId = data.defaultRecordTypeId;
        }
    }    

    @wire(getPicklistValues, { recordTypeId: '$accRecordTypeId', fieldApiName: Industry })
    picklistValueHandler({ data, error }) {
        if (data) {
            console.log('======== picklist values retrieved =====');
            console.log(data);
            //array of object is in data.values
            this.industryOptions = data.values; //we can directly pass this options because this data.values is array of object, and that object has value, and label fields.
        }
        if (error) {
            console.log(error);
        }
    }


}