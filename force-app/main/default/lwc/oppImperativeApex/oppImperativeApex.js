import { LightningElement } from 'lwc';
import getAllOpps from '@salesforce/apex/OpportunityController.getAllOpps'

export default class OppImperativeApex extends LightningElement {
    showAllOpps = false;
    showTotalAmount = false;
    allOpps;
    totalAmount;

    oppsColumns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Amount', fieldName: 'Amount', type:'currency'},
        { label: 'Close Date', fieldName: 'CloseDate', type:'date' },
        { label: 'Stage', fieldName: 'StageName' },
    ]

    handleGetAllOppsClick() {
        this.showAllOpps = true;
        this.showTotalAmount = false;
        //get all opportunity detail from apex method
        getAllOpps()
            .then((result) => {
                console.log('$$$$ all opps retrieved')
                console.log(result);
                this.allOpps = result;
            })
            .catch((error) => {
                console.log(error);
        })
    }

    handleTotalAmountClick() {
        this.showAllOpps = false;
        this.showTotalAmount = true;

        //assuming allOpps is present, calculate total amount in JS directly
        if (this.allOpps) {
            let total = 0;
            this.allOpps.forEach(opp => {
                total += opp.Amount;
            });
            this.totalAmount = total;
        }
    }

}