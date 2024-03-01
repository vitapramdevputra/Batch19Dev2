import { deleteRecord } from 'lightning/uiRecordApi';
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'

export default class DeleteRecordAll extends LightningElement {
    recId;
    handleChange(event) {
        this.recId = event.detail.value;
    }

    handleDeleteClick() {
        const recordId = this.recId;

        deleteRecord(recordId)
            .then(result => {
                //show success
                this.showToast('Deleted Record', 'warning', 'Record id deleted and moved to recycle bin.');
            }).catch(error => {
                //show error
                this.showToast('Not deleted', 'error', 'something went wrong buddy');
        })
    }

    showToast(title, variant, message) {
        const toast = new ShowToastEvent({
            title: title,
            variant: variant,
            message: message
        });
        this.dispatchEvent(toast);
    }

}