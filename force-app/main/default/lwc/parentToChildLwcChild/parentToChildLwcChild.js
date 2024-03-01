import { LightningElement, api } from 'lwc';

export default class ParentToChildLwcChild extends LightningElement {
    //if we want to get this properties from parent, then we MUST use @api decorator to make it public
    @api fullName;
    @api hobbies;
    @api vacationPlaces;
}