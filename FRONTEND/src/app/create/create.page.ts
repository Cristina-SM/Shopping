import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ProductsCrudService } from '../service/product-crud.service';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { UserPhoto, PhotoService } from '../service/photo.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  ProductsForm: FormGroup;


  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private userCrudService: ProductsCrudService,
    public photoService: PhotoService,
    public actionSheetController: ActionSheetController,
    private alertCtrl: AlertController

  ) {
    this.ProductsForm = this.formBuilder.group({
      lot: [''],
      name: ['']
    })
  }

  async ngOnInit() {
  }
  async alert() {
    const alert = await this.alertCtrl.create({
      cssClass: "basic-alert",
      header: "Error!",
      message: "Debes introducir los datos bien",
      buttons: [{
        text: "close"
      }]
    });
    await alert.present();
  }

  onSubmit() {
    if (!this.ProductsForm.valid) {
      this.alert();
    } else {
      this.userCrudService.createProducts(this.ProductsForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.ProductsForm.reset();
            this.router.navigate(['/list']);
            window.location.reload();
          })
        });
    }
  }
}

