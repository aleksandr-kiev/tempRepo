import { NgModule } from '@angular/core';
import {MatAutocompleteModule, MatButtonModule, MatIconModule, MatIconRegistry, MatRadioModule, MatToolbarModule} from '@angular/material';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule ,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    MatSelectModule,
    MatRadioModule,
    MatAutocompleteModule,
    ReactiveFormsModule],
  exports: [MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    MatSelectModule,
    MatRadioModule,
    MatAutocompleteModule,
    ReactiveFormsModule]
})
export class MaterialAppModule {
  public constructor (
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry) {
    matIconRegistry.addSvgIcon('left-arrow', domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icons/left-arrow.svg'));
    matIconRegistry.addSvgIcon('search-icon', domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icons/search-icon.svg'));
    matIconRegistry.addSvgIcon('close-icon', domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icons/close-icon.svg'));
    matIconRegistry.addSvgIcon('block', domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icons/block.svg'));
    matIconRegistry.addSvgIcon('map', domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icons/map.svg'));
    matIconRegistry.addSvgIcon('document', domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icons/document.svg'));
    matIconRegistry.addSvgIcon('upload', domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icons/upload.svg'));
    matIconRegistry.addSvgIcon('pending-icon', domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icons/load.svg'));
    matIconRegistry.addSvgIcon('paper-plane', domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icons/paper-plane.svg'));
  }
}
