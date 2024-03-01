import { LightningElement } from 'lwc';

export default class ParentAccountLwc extends LightningElement {
    accName;
    handleAccNameChange(event) {
        this.accName = event.detail.value;
    }

    handleSaveClick() {
        alert('account name ==> ' + this.accName);
        //call fetchDetails method of  `childContactLwc`
        const con = this.template.querySelector('c-child-contact-lwc').fetchDetails();
        alert('contact name: ' + con.lastName + ', email: ' + con.email);
    }
    handleResetClick() {
        this.accName = undefined;
        this.template.querySelector('c-child-contact-lwc').resetDetails();
    }
}