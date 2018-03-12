import { ServicePopupComponent } from './servicePopup.component';
import { ServiceModel, ServicesList } from './servicesList';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent {
  public services: Array<ServiceModel>;

  config: SwiperOptions = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
  };

  constructor(servicesList: ServicesList, public dialog: MatDialog, private router: Router) {
    this.services = servicesList.services;
  }

  public openDialog(id : number) {
    let dialogRef = this.dialog.open(ServicePopupComponent, {
        width: 'auto',
        data: { id: id} 
      });
  
      dialogRef.afterClosed().subscribe(result => { });
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }
}
