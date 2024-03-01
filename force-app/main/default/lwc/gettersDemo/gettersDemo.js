import { LightningElement } from 'lwc';

export default class GettersDemo extends LightningElement {
    num1 = 10;
    num2 = 15;

    //array starts with square brackets
    movies = ['argo', 'family plan', 'man named otto'];

    get product() {
        return this.num1 * this.num2;
    }
    get sumOfNum() {
        return this.num1 + this.num2;
    }
    get firstMovie() {
        return this.movies[0];
    }
}