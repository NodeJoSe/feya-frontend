import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { LOCALE_ID } from '@angular/core';

/*
 * Platform and Environment providers/directives/pipes
 */
import { routing } from './app.routing';

// App is our top level component
import {App} from './app.component';
import {AppState, InternalStateType} from './app.service';
import {GlobalState} from './global.state';
import {NgaModule} from './theme/nga.module';
import {PagesModule} from './pages/pages.module';

import { Ng2UiAuthModule, CustomConfig } from 'ng2-ui-auth';
import { AuthService } from 'ng2-ui-auth';
import { AuthGuard } from './auth.guard';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { ModalConfirmComponent } from './modal-confirm.component';
import { NotAuthGuard } from './not-auth.guard';
import { Constants } from './app.constants';

import { NgxLocalStorageModule } from 'ngx-localstorage';
import { ToastrModule } from 'ngx-toastr';
import { Uploader } from 'angular2-http-file-upload';

export class MyAuthConfig extends CustomConfig {
  defaultHeaders = { 'Content-Type': 'application/json' };
  baseUrl = Constants.API_URL;
  loginUrl = '/login/';
  signupUrl = '';
}

// Application wide providers
const APP_PROVIDERS = [
  { provide: LOCALE_ID, useValue: "es-US" },
  AppState,
  GlobalState,
  AuthService,
  AuthGuard,
  NotAuthGuard,
  CanDeactivateGuard,
];

export type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void,
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [App],
  declarations: [
    App,
    ModalConfirmComponent,
  ],
  entryComponents: [ModalConfirmComponent],
  imports: [ // import Angular's modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule.forRoot(),
    NgbModule.forRoot(),
    ToastrModule.forRoot(),
    Ng2UiAuthModule.forRoot(MyAuthConfig),
    PagesModule,
    routing,
    NgxLocalStorageModule.forRoot({
      allowNull: true,
      prefix: 'feya',
    }),
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    APP_PROVIDERS, Uploader,
  ],
})

export class AppModule {

  constructor(public appState: AppState) {
  }
}
