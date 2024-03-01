import { LightningElement } from 'lwc';

export default class TemplateLoopingDemo2 extends LightningElement {
    accs = [
        {
            Id: '1',
            Name: 'Burlington Guy',
            AccountNumber: '1511',
            Phone: '+1336270000',
            Status: 'Inactive'
        },
        {
            Id: '2',
            Name: 'Edge Communication Guy',
            AccountNumber: '987654',
            Phone: '+13362799999',
            Status: 'Active'
        },
        {
            Id: '3',
            Name: 'Target store Guy',
            AccountNumber: 'TG550055',
            Phone: '+15555570000',
            Status: 'Active'
        },
        {
            Id: '4',
            Name: 'Million Dollar',
            AccountNumber: 'MD88997',
            Phone: '+1511199999',
            Status: 'Inactive'
        }
    ];
}