import { LightningElement, wire } from 'lwc';
import { APPLICATION_SCOPE, MessageContext, subscribe } from 'lightning/messageService';
import SI_CHANNEL from '@salesforce/messageChannel/SoftInnovas__c';

export default class LmsSubscriber1 extends LightningElement {
    msg;

    //it is called even before the HTML tags are loaded.
    connectedCallback() {
        this.subscribeToChannel();
    }

    @wire(MessageContext)
    context;

    subscribeToChannel() {
        //subscribe to SI channel

        subscribe(
            this.context,
            SI_CHANNEL,
            (message) => {
                this.subscribeHandler(message)
            },
            {scope: APPLICATION_SCOPE}
        )

    }

    //to handle message
    subscribeHandler(message) {
        this.msg = message.someData;
    }
}