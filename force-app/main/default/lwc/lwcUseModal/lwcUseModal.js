import { LightningElement } from 'lwc';
import termsModal from 'c/lwcModal'
import LightningPrompt from 'lightning/prompt';


export default class LwcUseModal extends LightningElement {
    async handleTermsClick() {
        //open modal
        const result = await termsModal.open({
            size: 'large',
            description: 'show terms and conditions modal',
            content: '© Copyright 2024 Salesforce, Inc. All rights reserved. Various trademarks held by their respective owners.  Salesforce, Inc. Salesforce Tower, 415 Mission Street, 3rd Floor, San Francisco, CA 94105, United States'
        });
        console.log('***** result is ==> ' + result);
    }
    handlePromptClick() {
        LightningPrompt.open({
            message: 'this is the prompt message',
            //theme defaults to "default"
            label: 'Please Respond', // this is the header text
            defaultValue: 'initial input value', //this is optional
        }).then((result) => {
            //Prompt has been closed
            //result is input text if OK clicked
            //and null if cancel was clicked
            console.log('====> prompt result: ' + result);
        });
    }
}