import { LightningElement } from 'lwc';

export default class PicklistDemo extends LightningElement {

    selectedCity = '';

    get cityOptions() {
        //creating array of object
            //object with 'label' and 'value' property
        const options = [
            { label: '---NONE---', value: '', description: ''},
            { label: 'Tokyo', value: 'tokyo' },
            { label: 'Osaka', value: 'osaka' },
            { label: 'New York', value: 'newyork' },
            { label: 'Bengaluru', value: 'bengaluru' }
        ];

        return options;
    }

    handleCityChange(event) {
        this.selectedCity = event.detail.value;
    }

}