import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ProductsCrudService } from '../service/product-crud.service';
import { AlertController } from '@ionic/angular';
import { PhotoService } from '../service/photo.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})

export class UpdatePage implements OnInit {

  updateProductFg: FormGroup;
  id: any;

  constructor(
    private userCrudService:ProductsCrudService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    public photoService: PhotoService, 
    private router: Router,
    private alertCtrl: AlertController
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.fetchProducts(this.id);
    this.updateProductFg = this.formBuilder.group({
      lot: [''],
      name: ['']
    })
  }

  fetchProducts(id) {
    this.userCrudService.getProduct(id).subscribe((data) => {
      this.updateProductFg.setValue({
        name: data['name'],
        lot: data['lot']
      });
      
    });
  }
  async alert(){
    const alert = await this.alertCtrl.create({
      cssClass: 'basic-alert',
      header: "Error!",
      message: "Debes introducir los datos bien",
      buttons: [{
        text:"close"
      }],
    });
    await alert.present();
  }

  onSubmit() {
    if (!this.updateProductFg.valid) {
      this.alert();
    } else {
      this.userCrudService.updateProducts(this.id, this.updateProductFg.value)
        .subscribe(() => {
          this.updateProductFg.reset();
          this.router.navigate(['/list']);
        })
        window.location.reload()
    }
  }

}
