import { LightningElement, api } from 'lwc';

export default class DisplayResults extends LightningElement {
    @api records;//make it public so parent can pass details.
    @api columns;
    @api errors;

    renderedCallback() {
        let styles = document.createElement('style');
        styles.innerText = '.custom-datatable-style tbody tr:nth-child(even) { background-color: #FFCF81; } .custom-datatable-style tbody tr:nth-child(odd) { background-color: #FFB996; }';
        if (this.template.querySelector('.custom-datatable-style')) {
            this.template.querySelector('.custom-datatable-style').appendChild(styles);
        }
        
    }
}