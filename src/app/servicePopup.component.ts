import { Component, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServiceModel, ServicesList } from './servicesList';

@Component({
  selector: 'app-service-popup',
  templateUrl: './servicePopup.component.html'
})
export class ServicePopupComponent {
    public id: number;
    public model : ServiceModel;

    constructor(
        public dialogRef: MatDialogRef<ServicePopupComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private servicesList: ServicesList) {
        this.model = this.servicesList.services.find((x) => x.id == data.id);
    }

    onOkClick(): void {
        this.dialogRef.close();
    }    
}