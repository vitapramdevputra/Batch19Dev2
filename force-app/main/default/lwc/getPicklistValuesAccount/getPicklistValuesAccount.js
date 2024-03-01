import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class GetPicklistValuesAccount extends LightningElement {

    industryOptions;
    typeOptions;
    ratingOptions;
    selectedIndustry;
    selectedRating;
    selectedType;

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    accObjectInfo;

    
    @wire(getPicklistValuesByRecordType, { objectApiName: ACCOUNT_OBJECT, recordTypeId: '$accObjectInfo.data.defaultRecordTypeId' })
    picklistValues({ data, error }) {
        if (data) {
            console.log('====== all picklists retrieved =====');
            console.log(data);
            console.log(data.picklistFieldValues.Industry.values);
            this.industryOptions = data.picklistFieldValues.Industry.values;
            this.typeOptions = data.picklistFieldValues.Type.values;
            this.ratingOptions = data.picklistFieldValues.Rating.values;
        }
        if (error) {
            console.log(error);
        }
    }
    handleChange(event) {
        console.log(event.target);//this is components details.
        if (event.target.label === "Industry") {
            this.selectedIndustry = event.detail.value;
        } else if (event.target.label === 'Type') {
            this.selectedType = event.detail.value;
        } else if (event.target.label === 'Rating') {
            this.selectedRating = event.detail.value;
        }
        console.log(event.detail);//this is event's detail
    }
    
}