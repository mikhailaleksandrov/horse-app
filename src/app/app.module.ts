import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { ServicesList } from './servicesList';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts.component';
import { DefaultComponent} from './default.component';
import { StaffComponent } from './staff.component';
import { ServicePopupComponent } from './servicePopup.component';
import { ServicesListComponent } from './servicesList.component';
import { ArticlesComponent } from './articles.component';
import { GalleryComponent } from './gallery.component';

import { ArticleKushnirPonyComponent } from './articles/articleKushnirPony.component';
import { ArticleKushnirFailsComponent } from './articles/articleKushnirFails.component';
import { ArticleKushnirHowToTalkComponent } from './articles/articleKushnirHowToTalk.component';
import { ArticleKushnirFears }  from './articles/articleKushnirFears.component';
import { ArticleKushnirDiet } from './articles/articleKushnirDiet.component';
import { ArticleQuotesComponent } from './articles/articleQuotes.component';
import { ArticleExersizesComponent } from './articles/articleExersizes.component';
import { ArticleWhyComponent } from './articles/articleWhy.component';
import { ArticleSafetyComponent } from './articles/articleSafety.component';
import { ArticleBalanceComponent } from './articles/articleBalance.component';

import { ImagesGalleryComponent } from './controls/imagesGallery.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from "@angular/flex-layout";

import { SwiperModule } from 'angular2-useful-swiper';

// Angular material
import { MatInputModule, MatChipsModule, MatProgressBarModule } from '@angular/material';
import { MatButtonModule, MatSlideToggleModule, MatToolbarModule, MatExpansionModule } from '@angular/material';
import { MatCardModule, MatMenuModule, MatIconModule, MatSnackBarModule, MatListModule } from '@angular/material';
import { MatTableModule, MatPaginatorModule, MatSelectModule, MatDialogModule } from '@angular/material';
import { MatRadioModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';

const appRoutes: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'services', component: ServicesListComponent },
  { path: 'articles', component: ArticlesComponent, children: [
    { path: '', redirectTo: 'why', pathMatch: 'full' },
    { path: 'why', component: ArticleWhyComponent },
    { path: 'exersizes', component: ArticleExersizesComponent },
    { path: 'safety', component: ArticleSafetyComponent },
    { path: 'quotes', component: ArticleQuotesComponent },
    { path: 'balance', component: ArticleBalanceComponent },
    { path: 'kushnir-pony', component: ArticleKushnirPonyComponent },
    { path: 'kushnir-fails', component: ArticleKushnirFailsComponent },
    { path: 'kushnir-how-to-talk', component: ArticleKushnirHowToTalkComponent },
    { path: 'kushnir-fears', component: ArticleKushnirFears },
    { path: 'kushnir-diet', component: ArticleKushnirDiet }
  ] },
  { path: 'gallery', component: GalleryComponent },
  { path: '', component: DefaultComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    ContactsComponent,
    StaffComponent,
    ServicePopupComponent,
    ServicesListComponent,
    ArticlesComponent,
    GalleryComponent,
    ImagesGalleryComponent,
    ArticleKushnirPonyComponent,
    ArticleKushnirFailsComponent,
    ArticleQuotesComponent,
    ArticleExersizesComponent,
    ArticleWhyComponent,
    ArticleSafetyComponent,
    ArticleKushnirHowToTalkComponent,
    ArticleKushnirFears,
    ArticleKushnirDiet,
    ArticleBalanceComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes, { enableTracing: false } 
    ),
		MatInputModule, MatButtonModule, MatCardModule, MatToolbarModule,
		MatMenuModule, MatIconModule, MatSnackBarModule, MatSlideToggleModule,
		MatChipsModule, MatListModule, MatExpansionModule, MatTableModule,
		MatPaginatorModule, MatSelectModule, MatDialogModule, MatRadioModule,
    MatDatepickerModule, MatNativeDateModule, MatProgressBarModule,
    MatTabsModule, MatSidenavModule, MatGridListModule,
    FlexLayoutModule, SwiperModule
	],
  providers: [
    ServicesList
  ],
  bootstrap: [AppComponent],
  entryComponents: [ServicePopupComponent]
})
export class AppModule { 
}
