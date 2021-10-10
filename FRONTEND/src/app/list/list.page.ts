import { Component, OnInit } from '@angular/core';
import { ProductsCrudService } from './../service/product-crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

export class ListPage implements OnInit {
  public webviewPath: string;
  Products: any = [];

  constructor(
    private productCrudService: ProductsCrudService,
  ) { }

  ngOnInit() {
   }

  ionViewDidEnter() {
    this.productCrudService.getProducts().subscribe((response) => {
      this.Products = response;
    })
  }
  async StringToBase64(cameraPhoto: string) {
    console.log(cameraPhoto);
  }

  removeProduct(product, i) {
    if (window.confirm('Are you sure')) {
      this.productCrudService.deleteProducts(product.id)
        .subscribe(() => {
          this.ionViewDidEnter();
          console.log('Products deleted!')
        }
        )
    }
  }

}
