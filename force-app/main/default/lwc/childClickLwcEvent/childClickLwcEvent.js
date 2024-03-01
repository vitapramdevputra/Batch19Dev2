import { LightningElement } from 'lwc';

export default class ChildClickLwcEvent extends LightningElement {
    handleClick() {
        //dispatch a custom event
        const ce = new CustomEvent('childbuttonclick');
        this.dispatchEvent(ce);
    }
}