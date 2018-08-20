import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AppRoutingModule } from './/app-routing.module';
import { AuthenticationService } from './services/authentication.service';
import { MaterialAppModule } from './ngmaterial/ngmaterial.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RequestAccessComponent } from './request-access/request-access.component';
import { ForgotPasswordConfirmComponent } from './forgot-password/forgot-password-confirm/forgot-password-confirm.component';
import { RequestThankComponent } from './request-access/request-thank/request-thank.component';
import { SearchEmptyBoxComponent } from './search-empty-box/search-empty-box.component';
import { CompanyBelfiusComponent } from './search-empty-box/company-belfius/company-belfius.component';
import { CompanyProximusComponent } from './search-empty-box/company-proximus/company-proximus.component';
import { BlocksListComponent} from './search-result-box/blocks-list/blocks-list.component';
import { FormsModule} from '@angular/forms';
import { MapsListComponent} from './search-result-box/maps-list/maps-list.component';
import { DocumentsListComponent } from './search-result-box/documents-list/documents-list.component';
import { SearchComponent } from './search/search.component';
import { SearchResultBoxComponent} from './search-result-box/search-result-box.component';
import { SearchResultItemBoxComponent } from './search-result-item-box/search-result-item-box.component';
import { BlockComponent } from './search-result-item-box/block/block.component';
import { MapComponent } from './search-result-item-box/map/map.component';
import { DocumentComponent } from './search-result-item-box/document/document.component';
import { ShareDocumentComponent } from './share-document/share-document.component';
import { AllListComponent } from './search-result-box/all-list/all-list.component';
import { AutocompleteService} from './services/autocomplete.service';
import { HttpClientModule} from '@angular/common/http';
import { SearchService} from './services/search.service';
import { CanActivateSearchResultService} from './canActivateServices/can-activate-sersh-result.service';
import { ScrollBottomDirective } from './directives/scroll-bottom.directive';
import { BlockService } from './services/block.service';
import { MapService } from './services/map.service';
import { PublicationService } from './services/publication.service';
import { CanActivateBlockService } from './canActivateServices/can-activate-block.service';
import { CanActivateMapService } from './canActivateServices/can-activate-map.service';
import { CanActivatePublicationService } from './canActivateServices/can-activate-publication.service';
import { CookieService } from './services/cookie.service';
import { CanActivateAuthService } from './canActivateServices/can-activate-auth.service';
import { AccountService } from './services/account.service';
import { CanActivateAccountService } from './canActivateServices/can-activate-account.service';
import {BrandingService} from './services/branding.service';
import {CanActivateBrandingService} from './canActivateServices/can-activate-branding.service';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ForgotPasswordComponent,
    RequestAccessComponent,
    ForgotPasswordConfirmComponent,
    RequestThankComponent,
    SearchEmptyBoxComponent,
    CompanyBelfiusComponent,
    CompanyProximusComponent,
    BlocksListComponent,
    MapsListComponent,
    DocumentsListComponent,
    SearchResultBoxComponent,
    SearchComponent,
    SearchResultItemBoxComponent,
    BlockComponent,
    MapComponent,
    DocumentComponent,
    ShareDocumentComponent,
    AllListComponent,
    ScrollBottomDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    MaterialAppModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService,
    AutocompleteService,
    SearchService,
    CanActivateSearchResultService,
    BlockService,
    MapService,
    PublicationService,
    CanActivateBlockService,
    CanActivateMapService,
    CanActivatePublicationService,
    CookieService,
    CanActivateAuthService,
    AccountService,
    CanActivateAccountService,
    BrandingService,
  CanActivateBrandingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
