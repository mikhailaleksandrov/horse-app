import { Component } from '@angular/core';
import { ServiceModel, ServicesList } from './servicesList';

@Component({
  selector: 'app-services-list',
  templateUrl: './servicesList.component.html'
})
export class ServicesListComponent {
    public model: Array<Array<ServiceModel>>;

    constructor(services: ServicesList) {
        var all = services.services;
        this.model = new Array<Array<ServiceModel>>();
        while (all.length > 0) {
            this.model.push(all.splice(0, 3));
        }
    }
}