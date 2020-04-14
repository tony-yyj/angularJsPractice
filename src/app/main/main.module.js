import mainComponent from "./main.component";
import ngRoute from 'angular-route';
export default angular
    .module('mainModule', [ngRoute])
    .component('mainComponent', mainComponent())
    .name;