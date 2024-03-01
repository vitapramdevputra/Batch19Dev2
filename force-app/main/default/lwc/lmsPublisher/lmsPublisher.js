import { LightningElement, wire } from 'lwc';
import SI_CHANNEL from '@salesforce/messageChannel/SoftInnovas__c';
import { MessageContext, publish } from 'lightning/messageService';

export default class LmsPublisher extends LightningElement {
    message;
    handleMessageChange(event) {
        this.message = event.detail.value;
    }

    @wire(MessageContext)
    context;

    handleClick() {

        const msg = {
            someData: this.message
        }

        //publish message from here.
        //messageContext --> this.context
        //channel --> SI_CHANNEL
        //message --> msg

       
        publish(
            this.context,
            SI_CHANNEL,
            msg
        );
        console.log('message is published. enjoy.');

    }

}