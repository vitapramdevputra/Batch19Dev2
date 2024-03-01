import { LightningElement } from 'lwc';

export default class QuerySelectorsDemo extends LightningElement {
    handleClick() {
        //get h1 tag here

        const h1Element = this.template.querySelector('h1');
        h1Element.innerText = 'Welcome to Salesforce Developer Life everybody';


        //get all h1 tags here
        const allH1Elements = this.template.querySelectorAll('h1');
        allH1Elements.forEach(eachElement => {
            eachElement.style.color = 'azure';
            eachElement.style.backgroundColor = "black";
            eachElement.style.fontSize = '21px';
            eachElement.style.border = '1px solid red';
            eachElement.setAttribute('class', 'slds-align_absolute-center');
        });
        

    }
}