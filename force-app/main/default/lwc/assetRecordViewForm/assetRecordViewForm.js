import { LightningElement } from 'lwc';
import ASSET_OBJECT from '@salesforce/schema/Asset__c';
import NAME_FIELD from '@salesforce/schema/Asset__c.Name';
import PRICE_FIELD from '@salesforce/schema/Asset__c.Price__c';
import ACC_FIELD from '@salesforce/schema/Asset__c.Account__c';
import AVAIL_FIELD from '@salesforce/schema/Asset__c.Available__c'


export default class AssetRecordViewForm extends LightningElement {
    objectName = ASSET_OBJECT;
    recordId = 'a00Hu000013ro5DIAQ';

    fields = {
        name: NAME_FIELD,
        price: PRICE_FIELD,
        account: ACC_FIELD,
        available: AVAIL_FIELD
    };
}