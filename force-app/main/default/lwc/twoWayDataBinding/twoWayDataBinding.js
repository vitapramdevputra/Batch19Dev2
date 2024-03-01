import { LightningElement } from 'lwc';

export default class TwoWayDataBinding extends LightningElement {
    fullName = 'John John';
    country = 'USA';
    
    handleNameChange(event) {
        //event.detail.value will give us VALUE of input component
        console.log('** ==> ' + event.detail.value);
        //whenever we want to access any class level property or method we use this.
        //this. is mandatory for class properties or methods
            //if we do not use `this.` it will consider as local variable(inside method)
        this.fullName = event.detail.value;
    }
    handleCountryChange(event) {
        this.country = event.detail.value;
    }
}