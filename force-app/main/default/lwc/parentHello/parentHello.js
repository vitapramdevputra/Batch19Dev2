import { LightningElement } from 'lwc';

export default class ParentHello extends LightningElement {
    greetName;

    handleGreet(event) {
        this.greetName = event.detail;
    }
}