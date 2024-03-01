import { api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class LwcModal extends LightningModal {
    @api content = 'some serious terms and conditions.';
    handleAccept() {
        this.close('accepted. welcome.');
    }
    handleReject() {
        this.close('rejected. go away.');
    }
}