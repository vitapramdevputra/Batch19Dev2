import { LightningElement } from 'lwc';
import ASSET_OBJECT from '@salesforce/schema/Asset__c'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AssetRecordForm extends LightningElement {
    objectName = ASSET_OBJECT;
    recordId = 'a00Hu000013ro5DIAQ';
    
    handleOnSuccess() {
        //show toast message0
        const toastMessage = new ShowToastEvent({
            variant: 'success',
            title: 'Successfully Updated',
            message: 'Asset record id updated successfully. Enjoy.'
        });
        this.dispatchEvent(toastMessage);
    }
}