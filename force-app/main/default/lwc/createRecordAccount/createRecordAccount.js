import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import { LightningElement, track, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'

export default class CreateRecordAccount extends LightningElement {
    myIndustryOptions;
    myTypeOptions;
    @track myFormData = {};//object

    
    //getObjectInfo is used to get detailed information of an object. (fields, default record type, recordTypeInfos, fields, keyprefix, plurallabel)
    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    myAccountInfo; //is this correct? Yes. the wire services returned value will be assigned to myAccountInfo


    //getPicklistValues --> to get picklist values for 1 field
    //getPicklistValuesByRecordType -> to get all picklists of a record type (for more than 1 we use this)
    @wire(getPicklistValuesByRecordType, { objectApiName: ACCOUNT_OBJECT, recordTypeId: '$myAccountInfo.data.defaultRecordTypeId' })
    myPicklistValues({ data, error }) {
        if (data) {
            this.myIndustryOptions = data.picklistFieldValues.Industry.values
            this.myTypeOptions = data.picklistFieldValues.Type.values
        }
        if (error) {
            
        }
    }

    handleOnChange(event) {
        const name = event.target.name; 
        const value = event.detail.value;//event.target.value;
        //console.log('name => ' + name + ', value ==> ' + value);
        this.myFormData[name] = value;
        console.log(JSON.stringify(this.myFormData));
    }
    handleSaveClick() {
        const recordInput = {
            "apiName": "Account",
            "fields": this.myFormData
        };

        //how to do imperative call (call backapex async and return success/failure).
        console.log('LOG 1: Before calling create Record');
        createRecord(recordInput)
            .then(result => {
                //handle success 
                console.log('LOG 2: then method called. returns success.');
                console.log('DONE. CREATED RECORD.');
                console.log(result);
                this.showToast('Created record', 'success', 'Successfully created account record');
            })
            .catch(error => {
                //handle error
                console.log('LOG 2: or error occured.');
                console.log('ERROROROR');
                console.log(error);

                this.showToast('Error', 'error', 'Failed to create record');
            })
        
        console.log('LOG 3: Done Deal.');

    }

    showToast(title, variant, message) {
        const toast = new ShowToastEvent({
            title: title,
            variant: variant,
            message: message
        });
        this.dispatchEvent(toast);
    }
    handleCancelClick() {
        this.template.querySelector('form.accountform').reset();
        this.template.querySelector('[data-id="AccountType"]').value = '';
        this.template.querySelector('[data-id="AccountIndustry"]').value = '';
    }
}