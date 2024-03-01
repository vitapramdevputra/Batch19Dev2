import { LightningElement, wire } from 'lwc';
import getCasesByStage from '@salesforce/apex/CaseController.getCasesByStage';

export default class GetCaseWiredApex2 extends LightningElement {
    status = 'Closed';
    myCases;
    error;

    caseColumns = [
        { label: 'Case Number', fieldName: 'CaseNumber' },
        { label: 'Case Subject', fieldName: 'Subject' },
        { label: 'Email Number', fieldName: 'ContactEmail', type: 'email' },
        { label: 'Case Opened Date', fieldName: 'CreatedDate', type: 'date' },
        { label: 'Status', fieldName: 'Status' },
        { label: 'Acc Name', fieldName: 'Account.Name' }

    ];

    @wire(getCasesByStage, { status: '$status' })
    getCases({ data, error }) {
        if (data) {
            console.log('** getting Cases..');
            this.myCases = data;
            console.log(this.myCases);
        }
        if (error) {
            this.error = error;
            console.log(this.error);
        }
    }

}