import { LightningElement, wire } from 'lwc';
import PRODUCT_OBJECT from '@salesforce/schema/Product__c';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import TYPE_FIELD from '@salesforce/schema/Product__c.Type__c';
import { getRecord, updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'



export default class UpdateRecordProduct extends LightningElement {
    //how to get fieldApiName --> we import. ✅
    //how to get recordTypeId
    myTypeOptions;
    myProductid = 'a02Hu00000i9OttIAE';
    myProduct;
    formData = {};

    //getting object info to get defaultRecordTypeId
    @wire(getObjectInfo, { objectApiName: PRODUCT_OBJECT })
    myProductInfo;


    //get picklist info
    @wire(getPicklistValues, {
        fieldApiName: TYPE_FIELD, recordTypeId: '$myProductInfo.data.defaultRecordTypeId'
    })
    myTypePicklistInfo({ data, error }) {
        if (data) {
            this.myTypeOptions = data.values;
        }
        if (error) {
            console.log('no such picklist exists. ');
        }
    }

    //how to get data for one of the existing product record?
    @wire(getRecord, { recordId: '$myProductid', layoutTypes: ['Full'], modes: ['View'] })
    myProductRecord({ data, error }) {
        if (data) {
            console.log(data);
            this.myProduct = data;
        }
        if (error) {
            console.log('Error in fetching product record');
        }
    }

    handleChange(event) {
        const name = event.target.name; //Brand__c
        const value = event.detail.value; //event.target.value
        this.formData[name] = value;
        console.log(JSON.stringify(this.formData));
    }
    handleSaveClick() {
        
        const name = 'Id';
        const value = this.myProductid;
        this.formData[name] = value; //create one new field for Id and its value in form data

        const recordInput = {
            "fields": this.formData
        }

        //can we do wire service call here?
            //why? wire is used to retrieve data only. No Create/update/delete
        updateRecord(recordInput)
            .then(result => {
                //show toast
                this.showToast('Updated Product', 'success', 'update product successfully.');
            })
            .catch(error => {
                //show toast
                this.showToast('ERORR', 'error', 'error error error');
        })
        
    }

    showToast(title, variant, message) {
        const toast = new ShowToastEvent({
            title: title,
            variant: variant,
            message: message
        });
        this.dispatchEvent(toast);
    }

}