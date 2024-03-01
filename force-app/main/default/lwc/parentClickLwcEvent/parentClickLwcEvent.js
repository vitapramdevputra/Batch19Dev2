import { LightningElement } from 'lwc';

export default class ParentClickLwcEvent extends LightningElement {
    count = 0;
    handleChildButtonClick() {
        this.count++;
    }
}