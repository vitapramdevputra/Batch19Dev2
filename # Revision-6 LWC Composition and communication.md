# Revision-6 LWC Composition and communication

## querySelector or querySelectorAll

- used to select any tag or element from HTML in JS
- can we update text after selecting the element? 
    - yes. we can update text.
- we can also update style (border colors, colors, etc)
- can we add other attributes in any tag?
    - yes
    - `element.setAttribute('name', 'value');`
- How can we get combobox element in JS?
    - we have to set `data-id` attribute in combobox
        ~~~
        HTML
        
        <lightning-combobox name="Type" label="Account Type" options={myTypeOptions}
              onchange={handleOnChange} data-id="AccountType"></lightning-combobox>
        ~~~

        ~~~
        JS

        const element = this.template.querySelector('[data-id="AccountType"]')
        ~~~

- We create Re-usable component (often called child lwc), and we use that multiple time in different component (called parent lwc)
    - how to impelement child lwc inside parent?
        - `<c-child-kebab-case-lwc></c-child-kebab-case-lwc>` ==> child lwc name is `childKebabCaseLwc` 
            - if we have exposed child lwc (meta file `isExposed`), can we implement it inside parent?
                - yes
            - or it is mandatory to NOT expose child lwc if we want to impement in parent?
                - it is NOT mandatory. 
    - We have to expose parent ONLY. 
- We need parent component to send details to child component. [Parent to Child]
    - what are the steps?
        - childLwc 
            - write public properties ==> `@api name` for example. [data type doesn't matter here]
        - parentLwc
            - `<c-child-lwc name={name}></c-child-lwc>`
    - How to call method of child component from parent?
        - create public method in child using `@api`
            `@api fetchDetails(){}`
        - from parent js
            - `this.querySelector('c-child').fetchDetails();`


- Child to Parent -- we want to send data from child to parent.
    - how? 
        - In child: create customEvent and dispatch.
            ~~~
            const ce = new CustomEvent('greet', {detail: this.name});
            this.dispatchEvent(ce);
            ~~~
        - In parent: we handle like any other event. `oncustomevent={handleCustomEvent}`
            Parent HTML: `<c-child-hello ongreet={handleGreet}></c-child-hello>`
            Parent js: 
                ~~~
                handleGreet(event){
                    console.log(event.detail);
                }
                ~~~

- Modal
    - how can we create a new modal?
        - we create a separate LWC for modal
            - `import LightningModal from 'lightning/modal`
            - `extend LightningModal`
            - in html
                - lightning-header, body (mandatory), footer
                    - totally configurable. Fully custom modal
            - we have to specify what we want to return when we close modal
                - `this.close('accept')`;
        - we create a LWC in which we want to use modal.
            - first we import the lwcModal we created.
                - `import customModal from 'c/lwcModal'`
                - on button click we open modal
                    ~~~
                    async handleTermsClick() {
                        //open modal
                        const result = await termsModal.open({
                            size: 'large',
                            description: 'show terms and conditions modal',
                            content: '© Copyright 2024 Salesforce, Inc. All rights reserved. Various trademarks held by their respective owners.  Salesforce, Inc. Salesforce Tower, 415 Mission Street, 3rd Floor, San Francisco, CA 94105, United States'
                        });
                        console.log('***** result is ==> ' + result);
                    }
                    ~~~
- lightning promp
    - how to open lightning propmt?
        - `import LightningPrompt from 'lightning/prompt';`
        ~~~
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
        ~~~
 `
- Bubble and Composed: Child - parent - grandparents 
    - how to send data from Child to parent?
        - we create `CustomEvent`
        - `const ce = new CustomEvent('last', {detail: 'enjoying?'})`
        - `const ce = new CustomEvent('last', {detail: 'enjoying?', bubble: false, composed: false})`
            - bubble: false, and composed:false
                - this is most restrictive, it JUST travels to one layer up - i.e till parent.
         - `const ce = new CustomEvent('last', {detail: 'enjoying?', bubble: true, composed: false})`
            - bubble: true, and composed:false
                - this will go one layer up in parent. 
                - it will go to parent wrapper which is holding child element.
        - `const ce = new CustomEvent('last', {detail: 'enjoying?', bubble: true, composed: true})`
            - bubble: true, and composed:true
                - will go till grandparents now.
                - not recommended, unless absolutely needed.
            
- messageChannel
    - why we use this?
        - Communication between two unrelated LWC. Communication between lwc friends and colleagues(not immediate family)
    - we have one publisher which publishes data in LMS (lightning messaging channel)
        - there can be multiple subscribers who can listen to the publisher.
    - first step is to create a lightning messaging channel
        - `messageChannels` folder
            - we create messageChannel xml meta file
                ~~~
                <?xml version="1.0" encoding="UTF-8"?>
                <LightningMessageChannel xmlns="http://soap.sforce.com/2006/04/metadata">
                    <masterLabel>SoftInnovas</masterLabel>
                    <isExposed>true</isExposed>
                    <description>This is a sample Lightning Message Channel.</description>
                    <lightningMessageFields>
                        <fieldName>someData</fieldName>
                        <description>This is the some data that we want to send</description>
                    </lightningMessageFields>
                </LightningMessageChannel>
                ~~~
