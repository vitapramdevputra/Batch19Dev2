import { LightningElement } from 'lwc';

export default class GrandParentCmp extends LightningElement {
    handleBubble3(event) {
        console.log('@@@@@ handleBubble3 @@@@@');
        console.log('Grandparent handleBubble3 method called.');
        console.log('Grandparent CMP: handleBubble3: node: ' + event.target.nodeName);
        console.log('Grandparent CMP: handleBubble3: currentTarget: ' + event.currentTarget); //event listener
        console.log('Grandparent CMP: handleBubble3: target: ' + event.target);//the element that triggered the event.

    }
}