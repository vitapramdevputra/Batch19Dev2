import { LightningElement } from 'lwc';
import searchContacts from '@salesforce/apex/ContactController.searchContacts';

export default class ContactSearch extends LightningElement {
    searchTerm;
    contacts;
    error;

    columns = [
        { label: 'First Name', fieldName: 'FirstName' },
        { label: 'Last Name', fieldName: 'LastName' },
        { label: 'Department', fieldName: 'Department' },
        { label: 'Title', fieldName: 'Title' },
        { label: 'Phone', fieldName: 'Phone', type: 'phone' }
    ]

    handleSearchChange(event) {
        this.searchTerm = event.detail.value;

        //imperative call to apex
        searchContacts({ searchText: this.searchTerm })
            .then(result => {
                if (result.length > 0) {
                    this.contacts = result;
                    this.error = undefined;
            }
            })
            .catch(error => {
                this.error = 'Something went wrong buddy';
                this.contacts = undefined;
        })
    }
}