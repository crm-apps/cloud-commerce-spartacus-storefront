import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { CartService, CmsMiniCartComponent } from '@spartacus/core';
import { Cart } from '@spartacus/core';
import { CmsComponentData } from './../../cms/components/cms-component-data';

@Component({
  selector: 'cx-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.scss']
})
export class MiniCartComponent {
  cart$: Observable<Cart>;

  constructor(
    protected component: CmsComponentData<CmsMiniCartComponent>,
    protected cartService: CartService
  ) {
    this.cart$ = this.cartService.getActive();
  }
}
