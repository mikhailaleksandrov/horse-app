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

import { AllStaffComponent } from './staff/all.component';
import { PastyComponent } from './staff/pasty.component';
import { CometComponent } from './staff/comet.component';
import { BanditComponent } from './staff/bandit.component';
import { ValensiaComponent } from './staff/valensia.component';
import { BohemaComponent } from './staff/bohema.component';

import { ArticleKushnirPonyComponent } from './articles/articleKushnirPony.component';
import { ArticleKushnirFailsComponent } from './articles/articleKushnirFails.component';
import { ArticleKushnirHowToTalkComponent } from './articles/articleKushnirHowToTalk.component';
import { ArticleKushnirFears }  from './articles/articleKushnirFears.component';
import { ArticleKushnirDiet } from './articles/articleKushnirDiet.component';
import { ArticleKushnirOwnerComponent } from './articles/articleKushnirOwner.component';
import { ArticleKushnirSingleFearComponent } from './articles/articleKushnirSingleFear.component';
import { ArticleQuotesComponent } from './articles/articleQuotes.component';
import { ArticleExersizesComponent } from './articles/articleExersizes.component';
import { ArticleWhyComponent } from './articles/articleWhy.component';
import { ArticleSafetyComponent } from './articles/articleSafety.component';
import { ArticleBalanceComponent } from './articles/articleBalance.component';
import { ArticlePessoaComponent } from './articles/articlePessoa.component';
import { ArticleRemoveTensionComponent } from './articles/articleRemoveTension.component';
import { ArticleRidingExersizesComponent } from './articles/articleRidingExersizes.component';
import { ArticleImpulseComponent } from './articles/articleImpulse.component';
import { ArticleThrowStapelsComponent } from './articles/articleThrowStapels.component';
import { ArticleMakeNerviousComponent } from './articles/articleMakeNervious.component';
import { ArticleGetReinComponent } from './articles/articleGetRein.component';
import { ArticleHandMistakesComponent } from './articles/articleHandMistakes.component';
import { ArticleWhySingleFingerComponent } from './articles/articleWhySingleFInger.component';

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
  { path: 'contacts', component: ContactsComponent, data: { title: 'Конный Клуб "Сказка" | Контакты' } },
  { path: 'staff', component: StaffComponent, data: { title: 'Конный Клуб "Сказка" | Лошади' }, children: [
    { path: 'pasty', component: PastyComponent, data: { title: 'Конный Клуб "Сказка" | Лошади | Каприз' } },
    { path: 'comet', component: CometComponent, data: { title: 'Конный Клуб "Сказка" | Лошади | Фрося' } },
    { path: 'bandit', component: BanditComponent, data: { title: 'Конный Клуб "Сказка" | Лошади | Бандит' } },
    { path: 'valensia', component: ValensiaComponent, data: { title: 'Конный Клуб "Сказка" | Лошади | Ляля' } },
    { path: 'bohema', component: BohemaComponent, data: { title: 'Конный Клуб "Сказка" | Лошади | Гуля' } },
    { path: '', component: AllStaffComponent, data: { title: 'Конный Клуб "Сказка" | Лошади' } },
    { path: '**', redirectTo: '' }
  ]},
  { path: 'services', component: ServicesListComponent, data: { title: 'Конный Клуб "Сказка" | Услуги' } },
  { path: 'articles', component: ArticlesComponent, children: [
    { path: '', redirectTo: 'why', pathMatch: 'full' },
    { path: 'why', component: ArticleWhyComponent, data: { title: 'Конный Клуб "Сказка" | Пять причин заняться верховой ездой' } },
    { path: 'exersizes', component: ArticleExersizesComponent, data: { title: 'Конный Клуб "Сказка" | Упражнения на корде' } },
    { path: 'safety', component: ArticleSafetyComponent, data: { title: 'Конный Клуб "Сказка" | Техника безопасности' } },
    { path: 'quotes', component: ArticleQuotesComponent, data: { title: 'Конный Клуб "Сказка" | Говорит тренер' } },
    { path: 'balance', component: ArticleBalanceComponent, data: { title: 'Конный Клуб "Сказка" | Равновесие для всадника' } },
    { path: 'kushnir-pony', component: ArticleKushnirPonyComponent, data: { title: 'Конный Клуб "Сказка" | История о двух пони' } },
    { path: 'kushnir-fails', component: ArticleKushnirFailsComponent, data: { title: 'Конный Клуб "Сказка" | Падения с лошадей' } },
    { path: 'kushnir-how-to-talk', component: ArticleKushnirHowToTalkComponent, data: { title: 'Конный Клуб "Сказка" | Памятка при общении с лошадью' } },
    { path: 'kushnir-fears', component: ArticleKushnirFears, data: { title: 'Конный Клуб "Сказка" | Лошадиные страхи' } },
    { path: 'kushnir-diet', component: ArticleKushnirDiet, data: { title: 'Конный Клуб "Сказка" | Как правильно худеть' } },
    { path: 'kushnir-owner', component: ArticleKushnirOwnerComponent, data: { title: 'Конный Клуб "Сказка" | Симптомы коневладения' } },
    { path: 'kushnir-single-fear', component: ArticleKushnirSingleFearComponent, data: { title: 'Конный Клуб "Сказка" | Страхи отдельно взятой лошади' } },
    { path: 'pessoa', component: ArticlePessoaComponent, data: { title: 'Конный Клуб "Сказка" | Тренинговая система Пессоа' } },
    { path: 'remove-tension', component: ArticleRemoveTensionComponent, data: { title: 'Конный Клуб "Сказка" | Как убрать сопротивление челюсти' } },
    { path: 'riding-exersizes', component: ArticleRidingExersizesComponent, data: { title: 'Конный Клуб "Сказка" | Упражнения на разминку' } },
    { path: 'impulse', component: ArticleImpulseComponent, data: { title: 'Конный Клуб "Сказка" | Развиваем импульс конкурной лошади' } },
    { path: 'throw-stapels', component: ArticleThrowStapelsComponent, data: { title: 'Конный Клуб "Сказка" | Бросаем стремена' } },
    { path: 'make-nervious', component: ArticleMakeNerviousComponent, data: { title: 'Конный Клуб "Сказка" | Что делать, если лошадь заставляет вас понервничать' } },
    { path: 'get-rein', component: ArticleGetReinComponent, data: { title: 'Конный Клуб "Сказка" | Подберите повод! А как?' } },
    { path: 'hand-mistakes', component: ArticleHandMistakesComponent, data: { title: 'Конный Клуб "Сказка" | Ошибки всадника: руки' } },
    { path: 'why-single-finger', component: ArticleWhySingleFingerComponent, data: { title: 'Конный Клуб "Сказка" | Пальцы у лошадей' } }
  ] },
  { path: 'gallery', component: GalleryComponent, data: { title: 'Конный Клуб "Сказка" | Галерея' } },
  { path: '', component: DefaultComponent, data: { title: 'Конный Клуб "Сказка"' } },
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
    ArticleKushnirOwnerComponent,
    ArticleKushnirSingleFearComponent,
    ArticleBalanceComponent,
    ArticlePessoaComponent,
    ArticleRemoveTensionComponent,
    ArticleRidingExersizesComponent,
    ArticleImpulseComponent,
    ArticleThrowStapelsComponent,
    ArticleMakeNerviousComponent,
    ArticleGetReinComponent,
    ArticleHandMistakesComponent,
    ArticleWhySingleFingerComponent,
    PastyComponent,
    AllStaffComponent,
    CometComponent,
    BanditComponent,
    ValensiaComponent,
    BohemaComponent
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
