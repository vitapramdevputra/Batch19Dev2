import { LightningElement } from 'lwc';

export default class LocalPropertiesLwc extends LightningElement {
    //variables (we call it properties also)
    //local properties are usable ONLY in this LWC
    name; //undefined
    phone = null;
    fullName = 'Will Hunting';
    //address is javascript object
    address = {
        street: 'area 51',
        city: 'NYC',
        country: 'US'
    };
    //array starts with square brackets
    movies = ['argo', 'family plan', 'man named otto'];
    age = 20;
}