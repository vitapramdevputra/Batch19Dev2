import { LightningElement } from 'lwc';

export default class ConditionalRendering2 extends LightningElement {
    showData = true;

    handleClick() {
        this.showData = !this.showData;
    }
}