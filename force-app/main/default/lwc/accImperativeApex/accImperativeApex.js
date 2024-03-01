import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import getAccountsByIndustry from '@salesforce/apex/AccountController.getAccountsByIndustry';


export default class AccImperativeApex extends LightningElement {
    //write code to get industy picklist options.
    industryOptions;
    accounts;
    showDatatable = false
    accColumns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Type', fieldName: 'Type' },
        { label: 'Industry', fieldName: 'Industry' },
        { label: 'Website', fieldName: 'Website', type: 'url' },
        { label: 'AnnualRevenue', fieldName: 'AnnualRevenue', type: 'currency' }
        
    ];

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    accountInfo;

    @wire(getPicklistValues, { fieldApiName: INDUSTRY_FIELD, recordTypeId: '$accountInfo.data.defaultRecordTypeId' })
    industryInfo({ data, error }){
        if(data){
            this.industryOptions = data.values;
        }
        if (error) {
            console.log(error);
        }
    }

    handleIndustryChange(event) {
        this.accounts = undefined;
        //get account record on industry change
        const selectedIndustry = event.target.value;
        getAccountsByIndustry({ industry: selectedIndustry })
            .then((result) => {
                this.accounts = result;
                //if accounts has more than 0 data then show datatable
                if (this.accounts.length > 0) {
                    this.showDatatable = true;
                } else {
                    this.showDatatable = false;
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }


}