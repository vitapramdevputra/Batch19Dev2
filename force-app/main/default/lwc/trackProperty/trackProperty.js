import { LightningElement, track } from 'lwc';

export default class TrackProperty extends LightningElement {
    @track address = {
        street: 'area 51',
        city: 'NYC',
        country: 'US'
    };

    handleStreetChange(event) {
        this.address.street = event.detail.value;
    }
}