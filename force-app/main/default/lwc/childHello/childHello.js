import { LightningElement } from 'lwc';

export default class ChildHello extends LightningElement {
    name;
    handleNameChange(event) {
        this.name = event.detail.value;
    }
    handleClick() {
        //we want to create and dispatch a custom event called 'greet'
        const ce = new CustomEvent('greet', {detail: this.name}); //this is recommended.
        this.dispatchEvent(ce);
    }
}