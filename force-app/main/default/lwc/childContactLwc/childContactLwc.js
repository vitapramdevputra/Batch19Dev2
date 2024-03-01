import { LightningElement, api } from 'lwc';

export default class ChildContactLwc extends LightningElement {
    lastName;
    email;
    handleNameChange(event) {
        this.lastName = event.detail.value;
    }
    handleEmailChange(event) {
        this.email = event.detail.value;
    }

    //call below method from parent lwc
    @api fetchDetails() {
        const contact = { lastName: this.lastName, email: this.email };
        return contact;
    }

    @api resetDetails() {
        this.lastName = undefined;
        this.email = undefined;
    }

}