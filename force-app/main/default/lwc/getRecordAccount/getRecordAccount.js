import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';

export default class GetRecordAccount extends LightningElement {
    recordId = '001Hu000033YurKIAS';
    accDetails;
    
    @wire(getRecord, { recordId: '$recordId', layoutTypes: ['Full'], modes: ['View'] })
    accountInfo({ data, error }) {
        if (data) {
            this.accDetails = data;
            console.log('$$$$ get record account $$$');
            console.log(this.accDetails);
        }
        if (error) {
            console.log(error);
        }
        
    }
}