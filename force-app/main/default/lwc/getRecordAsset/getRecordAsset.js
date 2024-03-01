import { LightningElement, wire } from 'lwc';
import ASSET_OBJECT from '@salesforce/schema/Asset__c';
import NAME_FIELD from '@salesforce/schema/Asset__c.Name';
import ACCOUNT_FIELD from '@salesforce/schema/Asset__c.Account__c';
import AVAILABLE_FIELD from '@salesforce/schema/Asset__c.Available__c';
import PRICE_FIELD from '@salesforce/schema/Asset__c.Price__c';
import { getFieldDisplayValue, getFieldValue, getRecord } from 'lightning/uiRecordApi';

const FIELDS = [NAME_FIELD, ACCOUNT_FIELD, AVAILABLE_FIELD, PRICE_FIELD];

export default class GetRecordAsset extends LightningElement {
    recordId = 'a00Hu000013ro5DIAQ';
    assetName;
    accountId;

    price;
    available;
    
    assetInfo;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    assetRecord({ data, error }) {
        if (data) {
            // console.log('====retrieve asset record information ====');
            // console.log(data);
            // this.assetInfo = data;

            // //1st way
            // // this.accountId = data.fields.Account__c.value;
            // // this.assetName = data.fields.Name.value;

            //2nd way
            //built in method to get value from field using getFieldValue(data, fieldId)
            this.assetName = getFieldValue(data, NAME_FIELD);
            this.accountId = getFieldValue(data, ACCOUNT_FIELD);
            this.available = getFieldValue(data, AVAILABLE_FIELD);
            this.price = getFieldDisplayValue(data, PRICE_FIELD);

        }
        if (error) {
            console.log(error);
        }
    }
    
}