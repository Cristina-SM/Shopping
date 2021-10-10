(self["webpackChunkshopping"] = self["webpackChunkshopping"] || []).push([["src_app_update_update_module_ts"],{

/***/ 627:
/*!*************************************************!*\
  !*** ./src/app/update/update-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdatePageRoutingModule": () => (/* binding */ UpdatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _update_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update.page */ 9628);




const routes = [
    {
        path: '',
        component: _update_page__WEBPACK_IMPORTED_MODULE_0__.UpdatePage
    }
];
let UpdatePageRoutingModule = class UpdatePageRoutingModule {
};
UpdatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpdatePageRoutingModule);



/***/ }),

/***/ 479:
/*!*****************************************!*\
  !*** ./src/app/update/update.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdatePageModule": () => (/* binding */ UpdatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _update_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-routing.module */ 627);
/* harmony import */ var _update_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update.page */ 9628);







let UpdatePageModule = class UpdatePageModule {
};
UpdatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _update_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdatePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_update_page__WEBPACK_IMPORTED_MODULE_1__.UpdatePage]
    })
], UpdatePageModule);



/***/ }),

/***/ 9628:
/*!***************************************!*\
  !*** ./src/app/update/update.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdatePage": () => (/* binding */ UpdatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_update_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./update.page.html */ 4696);
/* harmony import */ var _update_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update.page.scss */ 3475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _service_product_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/product-crud.service */ 1369);







let UpdatePage = class UpdatePage {
    constructor(userCrudService, activatedRoute, formBuilder, router) {
        this.userCrudService = userCrudService;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.router = router;
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.fetchUser(this.id);
        this.updateProductFg = this.formBuilder.group({
            name: [''],
            lot: ['']
        });
    }
    fetchUser(id) {
        this.userCrudService.getProduct(id).subscribe((data) => {
            this.updateProductFg.setValue({
                name: data['name'],
                lot: data['lot']
            });
        });
    }
    onSubmit() {
        if (!this.updateProductFg.valid) {
            return false;
        }
        else {
            this.userCrudService.updateProducts(this.id, this.updateProductFg.value)
                .subscribe(() => {
                this.updateProductFg.reset();
                this.router.navigate(['/list']);
            });
        }
    }
};
UpdatePage.ctorParameters = () => [
    { type: _service_product_crud_service__WEBPACK_IMPORTED_MODULE_2__.ProductsCrudService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
UpdatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-update',
        template: _raw_loader_update_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_update_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UpdatePage);



/***/ }),

/***/ 3475:
/*!*****************************************!*\
  !*** ./src/app/update/update.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 4696:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update/update.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Update Products</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list lines=\"full\">\n    <form [formGroup]=\"updateProductFg\" (ngSubmit)=\"onSubmit()\">\n      <ion-item>\n        <ion-label position=\"floating\">Name</ion-label>\n        <ion-input formControlName=\"name\" type=\"text\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">lot</ion-label>\n        <ion-input formControlName=\"lot\" type=\"text\" required>\n        </ion-input>\n      </ion-item>\n      \n      <ion-row>\n        <ion-col>\n          <ion-button type=\"submit\" color=\"success\" expand=\"block\">Update</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_update_update_module_ts.js.map