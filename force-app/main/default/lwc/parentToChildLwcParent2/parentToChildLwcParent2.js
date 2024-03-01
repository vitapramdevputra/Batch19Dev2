import { LightningElement, track } from 'lwc';

export default class ParentToChildLwcParent2 extends LightningElement {
    @track product = {
        name: 'vision pro',
        description: 'apple new headset',
        url: 'https://c.tenor.com/YGsWEl5Vt1gAAAAC/tenor.gif'
    };
    handleChange(event) {
        let name = event.target.name;
        let value = event.detail.value; 
        this.product[name] = value;
    }
}