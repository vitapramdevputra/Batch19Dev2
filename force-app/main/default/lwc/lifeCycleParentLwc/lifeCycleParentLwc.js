import { LightningElement } from 'lwc';

export default class LifeCycleParentLwc extends LightningElement {
    constructor() {
        super();
        console.log('**PARENT: constructor called.');
        const d = this.template.querySelector('div');
        console.log('**PARENT: Div tag in constructor: ' + d);
    }
    
    connectedCallback() {
        //called when component is inserted in DOM (only once)
        console.log('**PARENT: connectedCallback called.');
        const d = this.template.querySelector('div');
        console.log('**PARENT: Div tag in connectedCallback: ' + d);
    }
    renderedCallback() {
        console.log('-----**PARENT: start-----');
        console.log('**PARENT: renderedCallback called.');
        const d = this.template.querySelector('div');
        console.log('**PARENT: div tag in renderedCallback: ' + d);
        console.log('-----**PARENT: end-----');
    }
    disconnectedCallback() {
        console.log('**PARENT: disconnectedcallback called.');
    }
}