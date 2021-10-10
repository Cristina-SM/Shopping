(self["webpackChunkshopping"] = self["webpackChunkshopping"] || []).push([["src_app_list_list_module_ts"],{

/***/ 6671:
/*!*********************************************!*\
  !*** ./src/app/list/list-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPageRoutingModule": () => (/* binding */ ListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.page */ 8787);




const routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_0__.ListPage
    }
];
let ListPageRoutingModule = class ListPageRoutingModule {
};
ListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListPageRoutingModule);



/***/ }),

/***/ 2708:
/*!*************************************!*\
  !*** ./src/app/list/list.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPageModule": () => (/* binding */ ListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-routing.module */ 6671);
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.page */ 8787);







let ListPageModule = class ListPageModule {
};
ListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListPageRoutingModule
        ],
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_1__.ListPage]
    })
], ListPageModule);



/***/ }),

/***/ 8787:
/*!***********************************!*\
  !*** ./src/app/list/list.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPage": () => (/* binding */ ListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./list.page.html */ 4875);
/* harmony import */ var _list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.page.scss */ 1678);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _service_product_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../service/product-crud.service */ 1369);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);






let ListPage = class ListPage {
    constructor(productCrudService, router) {
        this.productCrudService = productCrudService;
        this.router = router;
        this.Products = [];
    }
    ngOnInit() { }
    ionViewDidEnter() {
        this.productCrudService.getProducts().subscribe((response) => {
            this.Products = response;
        });
    }
    removeProduct(product, i) {
        if (window.confirm('Are you sure')) {
            this.productCrudService.deleteProducts(product.id)
                .subscribe(() => {
                this.ionViewDidEnter();
                console.log('Products deleted!');
            });
        }
    }
};
ListPage.ctorParameters = () => [
    { type: _service_product_crud_service__WEBPACK_IMPORTED_MODULE_2__.ProductsCrudService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-list',
        template: _raw_loader_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ListPage);



/***/ }),

/***/ 1678:
/*!*************************************!*\
  !*** ./src/app/list/list.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#infoList {\n  margin: 10px;\n}\n\n#list {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: url(https://estaticos-cdn.elperiodico.com/clip/a326cb91-52a8-42d2-b3d0-58b99074f848_alta-libre-aspect-ratio_default_0.jpg) no-repeat center #efeff1;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwrSkFBQTtFQUNBLHNCQUFBO0FBRUoiLCJmaWxlIjoibGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW5mb0xpc3R7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuI2xpc3R7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9lc3RhdGljb3MtY2RuLmVscGVyaW9kaWNvLmNvbS9jbGlwL2EzMjZjYjkxLTUyYTgtNDJkMi1iM2QwLTU4Yjk5MDc0Zjg0OF9hbHRhLWxpYnJlLWFzcGVjdC1yYXRpb19kZWZhdWx0XzAuanBnKSBuby1yZXBlYXQgY2VudGVyICNlZmVmZjE7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59Il19 */");

/***/ }),

/***/ 4875:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"list\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Nevera Online</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <div id=\"infoList\">\n    <p>Productos que tienes en tu nevera:</p>\n  </div>\n  <ion-content>\n    <ion-list>\n      <ion-item *ngFor=\"let product of Products\">\n        <ion-label>\n          <h3>Nombre: {{product.name}}</h3>\n          <h3>Cantidad: {{product.lot}}</h3>\n        </ion-label>\n  \n        <div class=\"item-note\" item-end>\n          <button ion-button clear [routerLink]=\"['/update/', product.id]\">\n            <ion-icon name=\"create\" style=\"zoom:1.5\"></ion-icon>\n          </button>\n          <button ion-button clear (click)=\"removeProduct(product)\">\n            <ion-icon name=\"trash\" style=\"zoom:1.5\"></ion-icon>\n          </button>\n        </div>\n      </ion-item>\n    </ion-list>\n  \n  </ion-content>\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_list_list_module_ts.js.map