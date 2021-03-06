import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GlobalMessageComponentModule } from '../../../global-message/global-message.module';
import { CmsModule } from '../../../cms/cms.module';
import { LoginModule } from '../../../user/login/login.module';

import { UiFrameworkModule } from '../../ui-framework/ui-framework.module';

import { StorefrontComponent } from './storefront.component';
import { HeaderModule } from './../header/header.module';
import { FooterComponent } from '../footer/footer.component';
import { OutletRefModule } from '../../../outlet/outlet-ref/outlet-ref.module';
import { PwaModule } from './../../../pwa/pwa.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    GlobalMessageComponentModule,
    CmsModule,
    LoginModule,
    HeaderModule,
    UiFrameworkModule,
    OutletRefModule,
    PwaModule
  ],
  declarations: [StorefrontComponent, FooterComponent],
  exports: [StorefrontComponent]
})
export class MainModule {}
