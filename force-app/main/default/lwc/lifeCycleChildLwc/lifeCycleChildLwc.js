import { LightningElement, api } from 'lwc';

export default class LifeCycleChildLwc extends LightningElement {
    msg;
    @api testMsg;
    renderedCallbackCalled = false;

    handleInputChange(event) {
        this.msg = event.detail.value;
    }

    constructor() {
        super();
        console.log('$$CHILD: constructor called.');
        const p = this.template.querySelector('p');
        console.log('$$CHILD: p tag in constructor: ' + p);
        this.msg = 'some default value from constructor';
        //testMsg is NOT PRESENT in constructor.
        //console.log('$$CHILD: constructor: api testMsg: ' + this.testMsg);
    }
    connectedCallback() {
        console.log('$$CHILD: connectedCallback called.');
        const p = this.template.querySelector('p');
        console.log('$$CHILD: p tag in connectedCallback: ' + p);
        console.log('$$CHILD: connectedCallback: api testMsg: ' + this.testMsg);
        this.msg = 'some default value from connectedCallback. + testMsg: ' + this.testMsg;

        //if we want to do some imperative call to apex we do it here. 
    }
    renderedCallback() {
        if (this.renderedCallbackCalled == false) {
            console.log('-----$$CHILD: start-----');
            console.log('$$CHILD: renderedCallback called.');
            const p = this.template.querySelector('p');
            console.log('$$CHILD: p tag in renderedCallback: ' + p);
            console.log('-----$$CHILD: end-----');
            this.renderedCallbackCalled = true;
        } 
    }
    disconnectedCallback() {
        console.log('$$CHILD: disconnectedcallback called.');
    }
}