import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'

export default class GetObjectInfoAccount extends LightningElement {

    accDefaultRtId;
    accKeyPrefix;
    accLabelPlural;


    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    accountRecordInfo( { data, error } ) {
        if (data) {
            console.log('*** data retreived successfully.');
            console.log(data);
            console.log('default recordTypeId is ===> ' + data.defaultRecordTypeId);
            console.log('keyprefix ==> ' + data.keyPrefix);
            console.log('plural label ==> ' + data.labelPlural);
            this.accDefaultRtId = data.defaultRecordTypeId;
            this.accKeyPrefix = data.keyPrefix;
            this.accLabelPlural = data.labelPlural;
        }
        if (error) {
            console.log('*** something went wrong buddy.');
            console.log(error);
        }
    }
}