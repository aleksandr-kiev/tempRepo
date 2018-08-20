import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent} from './sign-in/sign-in.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {RequestAccessComponent} from './request-access/request-access.component';
import {ForgotPasswordConfirmComponent} from './forgot-password/forgot-password-confirm/forgot-password-confirm.component';
import {RequestThankComponent} from './request-access/request-thank/request-thank.component';
import {SearchEmptyBoxComponent} from './search-empty-box/search-empty-box.component';
import {CompanyBelfiusComponent} from './search-empty-box/company-belfius/company-belfius.component';
import {CompanyProximusComponent} from './search-empty-box/company-proximus/company-proximus.component';
import {BlocksListComponent} from './search-result-box/blocks-list/blocks-list.component';
import {MapsListComponent} from './search-result-box/maps-list/maps-list.component';
import {DocumentsListComponent} from './search-result-box/documents-list/documents-list.component';
import {SearchResultBoxComponent} from './search-result-box/search-result-box.component';
import {BlockComponent} from './search-result-item-box/block/block.component';
import {MapComponent} from './search-result-item-box/map/map.component';
import {DocumentComponent} from './search-result-item-box/document/document.component';
import {SearchResultItemBoxComponent} from './search-result-item-box/search-result-item-box.component';
import {ShareDocumentComponent} from './share-document/share-document.component';
import {AllListComponent} from './search-result-box/all-list/all-list.component';
import {CanActivateSearchResultService} from './canActivateServices/can-activate-sersh-result.service';
import {CanActivateBlockService} from './canActivateServices/can-activate-block.service';
import {CanActivateAuthService} from './canActivateServices/can-activate-auth.service';
import {CanActivateMapService} from './canActivateServices/can-activate-map.service';
import {CanActivatePublicationService} from './canActivateServices/can-activate-publication.service';
import {CanActivateAccountService} from './canActivateServices/can-activate-account.service';
import {CanActivateBrandingService} from './canActivateServices/can-activate-branding.service';

const routes: Routes = [
  { path: '', redirectTo: '/search-empty/belfius', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'forgot-password-confirm', component: ForgotPasswordConfirmComponent},
  { path: 'request-access', component: RequestAccessComponent},
  { path: 'request-thank', component: RequestThankComponent},
  { path: 'search-empty', component: SearchEmptyBoxComponent,
    canActivate: [CanActivateAuthService, CanActivateAccountService, CanActivateBrandingService],
    children: [
    {path: '', redirectTo: 'belfius', pathMatch: 'full'},
    {path: 'belfius', component: CompanyBelfiusComponent},
    {path: 'proximus', component: CompanyProximusComponent}
    ]},
  {path: 'search-result', component: SearchResultBoxComponent, canActivate: [CanActivateAuthService, CanActivateSearchResultService],
  children: [
    {path: '', redirectTo: 'all', pathMatch: 'full'},
    {path: 'all', component: AllListComponent},
    {path: 'blocks', component: BlocksListComponent},
    {path: 'maps', component: MapsListComponent},
    {path: 'documents', component: DocumentsListComponent}
  ]},
  {path: 'search-result-item-box', component: SearchResultItemBoxComponent, canActivate: [CanActivateAuthService],
  children: [
    {path: '', redirectTo: 'block', pathMatch: 'full'},
    {path: 'block', component: BlockComponent, canActivate: [CanActivateBlockService]},
    {path : 'map', component: MapComponent, canActivate: [CanActivateMapService]},
    {path: 'document', component: DocumentComponent, canActivate: [CanActivatePublicationService]}
  ]},
  { path: 'share-document', component: ShareDocumentComponent, canActivate: [CanActivateAuthService] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  constructor() {}
}
