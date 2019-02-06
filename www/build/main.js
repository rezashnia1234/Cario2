webpackJsonp([17],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CashOutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CashOutPage = /** @class */ (function () {
    function CashOutPage(navCtrl, navParams, viewCtrl, toastCtrl, carioApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.carioApi = carioApi;
        this.myPurse = 0;
        this.selected = false;
        this.userId = localStorage.getItem('userId');
        this.userSession = localStorage.getItem('session');
    }
    CashOutPage.prototype.ionViewDidLoad = function () {
        this.purse = this.navParams.data.purse;
        console.log(this.purse);
    };
    CashOutPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    CashOutPage.prototype.getRadio = function (e) {
        console.log('purse:', e);
        this.selected = true;
    };
    CashOutPage.prototype.checkData = function (e) {
        this.myPurse = e;
        this.cash = this.myPurse;
        this.selected = true;
    };
    CashOutPage.prototype.cashOut = function () {
        var _this = this;
        console.log(this.cash);
        if (parseInt(this.cash) > parseInt(this.purse)) {
            var toast = this.toastCtrl.create({
                message: 'مبلغ انتخابی بیشتر از موجودی شماست',
                duration: 3000,
                position: 'top',
                cssClass: 'failed-toast',
                showCloseButton: true,
                closeButtonText: 'X'
            });
            toast.present();
        }
        else {
            this.carioApi.getApi('?shop=1&ROUTE=ROUTE_SHOP&ACTION=CASHOUT&USER_ID=' + this.userId + '&SESSION=' + this.userSession + '&AMOUNT=' + this.cash).then(function (data) {
                console.log(data);
                var toast = _this.toastCtrl.create({
                    message: 'درخواست شما با موفقیت ارسال شد',
                    duration: 3000,
                    position: 'top',
                    cssClass: 'success-toast',
                    showCloseButton: true,
                    closeButtonText: 'X'
                });
                toast.present();
            }).catch(function (error) {
                console.log('error: ', error);
                var toast = _this.toastCtrl.create({
                    message: 'بروز مشکل',
                    duration: 3000,
                    position: 'top',
                    cssClass: 'failed-toast',
                    showCloseButton: true,
                    closeButtonText: 'X'
                });
                toast.present();
            });
        }
    };
    CashOutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cash-out',template:/*ion-inline-start:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/cash-out/cash-out.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>برداشت از حساب</ion-title>\n	<ion-icon name="md-close" class="close" color="white" (click)="closeModal()"></ion-icon>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h6>مبلغ مورد نظر را انتخاب یا وارد کنید و با انتخاب گزینه‌ی “برداشت از حساب” درخواست خود را ثبت کنید.</h6>\n	<ion-list radio-group [(ngModel)]="cash">\n		<ion-item>\n		    <ion-label>کل موجودی ({{purse | number}} تومان)</ion-label>\n		    <ion-radio [value]="purse" (ionSelect)="getRadio($event)"></ion-radio>			\n		</ion-item>\n		<ion-item>\n		    <ion-radio [value]="myPurse" (ionSelect)="getRadio($event)">\n		    	<ion-item></ion-item>\n		    </ion-radio>			\n		</ion-item>\n		<ion-item class="input-box">\n			<ion-input type="tel" [(ngModel)]="myPurse" (ngModelChange)="checkData($event)"></ion-input>\n		</ion-item>\n	</ion-list>\n</ion-content>\n\n<ion-footer>\n	<button ion-button full outline color="red" [disabled]="!selected || cash == 0" (click)="cashOut()">\n		<!-- <ion-icon name="bag"></ion-icon> -->\n		برداشت از حساب\n	</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/cash-out/cash-out.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared__["a" /* CarioApi */]])
    ], CashOutPage);
    return CashOutPage;
}());

//# sourceMappingURL=cash-out.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_category__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryListPage = /** @class */ (function () {
    function CategoryListPage(navCtrl, navParams, carioApi, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.carioApi = carioApi;
        this.viewCtrl = viewCtrl;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }
    CategoryListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.catId = this.navParams.data.id;
        console.log(this.catId);
        this.carioApi.getApi('?shop=1&ROUTE=ROUTE_SHOP&ACTION=GET_ALL_CATEGORIES').then(function (data) {
            console.log(data);
            var c = [];
            c.push(data);
            //console.log('c::::',c[0]);
            for (var i = 0; i < c[0].length; i++) {
                var id = c[0][i].CategoryID;
                if (id == _this.catId) {
                    var cat = c[0][i];
                    _this.cats = cat.SubCategories;
                }
            }
            //console.log('this val',this.cats);
        }).catch(function (error) {
            console.log('error: ', error);
        });
    };
    CategoryListPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    CategoryListPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    //  	closeModal() { 
    //     this.viewCtrl.dismiss();
    // }
    CategoryListPage.prototype.goToCatPage = function (c) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__category_category__["a" /* CategoryPage */], { 'id': c.CategoryID, 'name': c.CategoryName });
    };
    CategoryListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category-list',template:/*ion-inline-start:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/category-list/category-list.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>انتخاب دسته بندی</ion-title>\n	<!-- <ion-icon name="md-close" class="close" color="white" (click)="closeModal()"></ion-icon> -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<ul>\n		<li *ngFor="let cat of cats">\n			<span (click)="goToCatPage(cat,1)">{{cat.CategoryName}}</span>\n			<ul *ngIf="cat.SubCategories?.length > 0">\n				<li *ngFor="let cat2 of cat.SubCategories">\n					<span (click)="goToCatPage(cat2)">{{cat2.CategoryName}}</span>\n					<ul *ngIf="cat2.SubCategories?.length > 0">\n						<li *ngFor="let cat3 of cat2.SubCategories">\n							<span (click)="goToCatPage(cat3)">{{cat3.CategoryName}}</span>\n						</li>\n					</ul>\n				</li>\n			</ul>\n		</li>\n	</ul>\n</ion-content>\n'/*ion-inline-end:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/category-list/category-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared__["a" /* CarioApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], CategoryListPage);
    return CategoryListPage;
}());

//# sourceMappingURL=category-list.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConfirmCodePage = /** @class */ (function () {
    function ConfirmCodePage(navCtrl, navParams, storage, carioApi, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.carioApi = carioApi;
        this.toastCtrl = toastCtrl;
        this.codeValid = false;
        this.loading = false;
    }
    ConfirmCodePage.prototype.ionViewDidLoad = function () {
        this.phoneNumber = this.navParams.data;
        console.log(this.phoneNumber);
    };
    ConfirmCodePage.prototype.checkLength = function (e) {
        if (e.length == 4) {
            this.codeValid = true;
        }
        else {
            this.codeValid = false;
        }
    };
    ConfirmCodePage.prototype.checkCode = function () {
        var _this = this;
        this.loading = true;
        var params = '?ROUTE=LOGIN&ACTION=ACTIVATION&TEL=' + this.phoneNumber + '&APP=6&CODE=' + this.code + '&REFERRER=-1';
        console.log(params);
        this.carioApi.postApi(params).then(function (data) {
            var msg = data['MESSAGE'];
            console.log(data);
            _this.loading = false;
            if (msg == 'ACTIVATION_FAILED') {
                var toast = _this.toastCtrl.create({
                    message: 'کد وارد شده صحیح نمی باشد',
                    duration: 3000,
                    position: 'top',
                    cssClass: 'failed-toast',
                    showCloseButton: true,
                    closeButtonText: 'X'
                });
                toast.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'به کاریو خوش آمدید :)',
                    duration: 3000,
                    position: 'top',
                    cssClass: 'success-toast',
                    showCloseButton: true,
                    closeButtonText: 'X'
                });
                toast.present();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                localStorage.setItem('userId', data['USER_ID']);
                localStorage.setItem('session', data['SESSION']);
                localStorage.setItem('userName', data['USER_NAME']);
                localStorage.setItem('userEmail', data['USER_EMAIL']);
                localStorage.setItem('gender', data['USER_SEX']);
                localStorage.setItem('userRTtoken', data['USER_REFERRER_TOKEN']);
                localStorage.setItem('userRate', data['USER_RATING']);
                localStorage.setItem('userType', data['USER_TYPE']);
            }
        }).catch(function (error) {
            console.log('error: ', error);
            _this.loading = false;
        });
    };
    ConfirmCodePage.prototype.getCode = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    ConfirmCodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirm-code',template:/*ion-inline-start:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/confirm-code/confirm-code.html"*/'<ion-content padding center>\n	<img class="logo" src="assets/imgs/logo.png">\n	<h3>ورود به حساب</h3>\n	<p>کد چهار رقمی ارسال شده به <strong>{{phoneNumber}}</strong> را وارد کنید</p>\n	<ion-item>\n		<ion-label>\n			<ion-icon name="phone-portrait"></ion-icon>\n		</ion-label>\n		<ion-input type="tel" [(ngModel)]="code" (ngModelChange)="checkLength($event)" placeholder="کد تایید"></ion-input>\n	</ion-item>\n	<div class="has-btn">\n		<button ion-button color="green" [disabled]="!codeValid">\n			<span *ngIf="!loading" (click)="checkCode()">بررسی کد تأیید</span>\n			<ion-spinner *ngIf="loading" color="white" name="bubbles"></ion-spinner>\n		</button>		\n	</div>\n	<a href="#" ion-text color="secondary" (click)="getCode()">پیامکی دریافت نکردید؟</a>\n</ion-content>\n'/*ion-inline-end:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/confirm-code/confirm-code.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__shared_shared__["a" /* CarioApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], ConfirmCodePage);
    return ConfirmCodePage;
}());

//# sourceMappingURL=confirm-code.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highcharts__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jalali_moment__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jalali_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jalali_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__factor_detail_factor_detail__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cash_out_cash_out__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__increase_credit_increase_credit__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__product_detail_product_detail__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__category_category__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__basket_basket__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_basket_data_basket_data__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams, modalCtrl, carioApi, loadingCtrl, toastCtrl, basketPro, storage, barcodeScanner) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.carioApi = carioApi;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.basketPro = basketPro;
        this.storage = storage;
        this.barcodeScanner = barcodeScanner;
        this.searchTerm = '';
        this.factorNo = 1111;
        // codeBox1;
        // codeBox2;
        // codeBox3;
        // codeBox4;
        // codeBox5;
        this.mounth = [];
        this.priceSummary = [];
        this.profitSummary = [];
        this.loadingPage = this.loadingCtrl.create({
            spinner: 'circles',
        });
        this.loadingPage.present();
        //console.log(this.basketPro._cart);
        //this.basketCount = parseInt(localStorage.getItem('bCount'));
        this.storage.get('cartItem').then(function (val) {
            if (val) {
                _this.basketCount = val.length;
            }
        });
        this.userName = localStorage.getItem('userName');
        this.userId = localStorage.getItem('userId');
        this.userSession = localStorage.getItem('session');
        this.userType = localStorage.getItem('userType');
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]();
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //SHOP_INIT
        this.carioApi.getApi('?shop=1&ROUTE=ROUTE_SHOP&ACTION=SHOP_INIT&USER_ID=' + this.userId + '&SESSION=' + this.userSession).then(function (data) {
            //this.carioApi.getApi('?shop=1&ROUTE=ROUTE_SHOP&ACTION=SHOP_INIT&USER_ID=1&SESSION=c63c7861a2671659e3a5a123f10be97ec0c3ac8941e9741a15e2b8f7c351654b').then( data => {
            _this.initData = data;
            console.log('dataaaa', _this.initData);
            _this.purse = _this.initData.PurseAndPrize.purse;
            _this.prize = _this.initData.PurseAndPrize.ShoppingPrizeWithPurse;
            _this.mounth = _this.toArray(_this.initData.Chart);
            for (var key in _this.initData.Chart) {
                if (_this.initData.Chart["" + key][0].PriceSummary == null) {
                    _this.priceSummary.push(0);
                }
                else {
                    _this.priceSummary.push(_this.initData.Chart["" + key][0].PriceSummary / 1000000);
                }
            }
            for (var key in _this.initData.Chart) {
                if (_this.initData.Chart["" + key][0].ProfitSummary == null) {
                    _this.profitSummary.push(0);
                }
                else {
                    _this.profitSummary.push(_this.initData.Chart["" + key][0].ProfitSummary / 1000000);
                }
            }
            var myChart = __WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"]('chartContainer', {
                chart: {
                    type: 'spline'
                },
                title: {
                    text: ''
                },
                xAxis: {
                    categories: _this.mounth
                },
                yAxis: {
                    title: {
                        text: 'میلیون تومان'
                    }
                },
                series: [{
                        name: 'سود ماهیانه',
                        data: _this.profitSummary,
                        color: '#606ab7'
                    }, {
                        name: 'خرید ماهیانه',
                        data: _this.priceSummary,
                        color: '#5faa35'
                    }],
                tooltip: {
                    direction: 'ltr'
                }
            });
            _this.invoices = _this.initData.Invoices;
            //console.log(this.invoices);
            _this.loadingPage.dismiss();
        }).catch(function (error) {
            console.log('error: ', error);
            _this.loadingPage.dismiss();
        });
        this.todayDate = __WEBPACK_IMPORTED_MODULE_6_jalali_moment__().locale('fa').format('dddd DD MMMM YYYY');
        this.searchControl.valueChanges.debounceTime(250).subscribe(function (search) {
            if (_this.searchTerm.length > 0) {
                _this.showList = true;
            }
            else {
                _this.showList = false;
            }
            //this.setFilteredItems(); 
            _this.carioApi.getApi('?shop=1&ROUTE=ROUTE_SHOP&ACTION=SHOP_SUGGESTION&QUERY=' + _this.searchTerm).then(function (data) {
                _this.searchItems = data;
                console.log(_this.searchItems);
            });
        });
    };
    DashboardPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('cartItem').then(function (val) {
            //console.log(val);
            if (val && val.length > 0) {
                _this.basketCount = val.length;
            }
            else {
                _this.basketCount = 0;
            }
        });
        // console.log(this.navParams.data); 
        // if(localStorage.getItem('pay') == 'true') {
        // 	console.log('pay',localStorage.getItem('pay'));
        // 	console.log('rrrrrrrrrrr');
        // 	let loading = this.loadingCtrl.create({
        // 		spinner: 'circles',
        //     });
        //     loading.present();
        // 	this.carioApi.getApi('?shop=1&ROUTE=ROUTE_SHOP&ACTION=SHOP_INIT&USER_ID='+this.userId+'&SESSION='+this.userSession).then( data => {
        //         this.invoices = data.Invoices;
        //        	loading.dismiss();
        //     	localStorage.removeItem('pay');
        //     	console.log('pay',localStorage.getItem('pay'));
        // 	}).catch((error: any) => {
        //         console.log('error: ',error);
        //        	loading.dismiss();
        //     });
        // }
    };
    DashboardPage.prototype.toArray = function (value) {
        if (!value) {
            return [];
        }
        var arr = [];
        for (var key in value) {
            switch (key) {
                case '1':
                    {
                        arr.push('فروردین');
                        break;
                    }
                case '2':
                    {
                        arr.push('اردیبهشت');
                        break;
                    }
                case '3':
                    {
                        arr.push('خرداد');
                        break;
                    }
                case '4':
                    {
                        arr.push('تیر');
                        break;
                    }
                case '5':
                    {
                        arr.push('مرداد');
                        break;
                    }
                case '6':
                    {
                        arr.push('شهریور');
                        break;
                    }
                case '7':
                    {
                        arr.push('مهر');
                        break;
                    }
                case '8':
                    {
                        arr.push('آبان');
                        break;
                    }
                case '9':
                    {
                        arr.push('آذر');
                        break;
                    }
                case '10':
                    {
                        arr.push('دی');
                        break;
                    }
                case '11':
                    {
                        arr.push('بهمن');
                        break;
                    }
                case '12':
                    {
                        arr.push('اسفند');
                        break;
                    }
            }
        }
        //console.log(arr);
        return arr;
    };
    DashboardPage.prototype.goToBasket = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__basket_basket__["a" /* BasketPage */]);
    };
    DashboardPage.prototype.goToResult = function ($event, item) {
        var typ = item.Type;
        switch (typ) {
            case 'Product': {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__product_detail_product_detail__["a" /* ProductDetailPage */], { id: item.id });
                break;
            }
            case 'Category': {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__category_category__["a" /* CategoryPage */], item);
                break;
            }
            default: {
                console.log('type of this item is undefined');
                break;
            }
        }
        ;
    };
    DashboardPage.prototype.goToProduct = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            console.log('Barcode data', barcodeData);
            if (!barcodeData.cancelled) {
                var str = barcodeData.text;
                var pos = str.indexOf('=');
                var qrStr = str.substring(pos + 1);
                //console.log(pos, '---' , qrStr);
                var loading_1 = _this.loadingCtrl.create({
                    spinner: 'circles',
                });
                loading_1.present();
                _this.carioApi.getApi('?shop=1&ROUTE=ROUTE_SHOP&ACTION=GET_PRODUCT_BY_UNIQUE_ID&UNIQUE_ID=' + qrStr).then(function (data) {
                    console.log(data);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__product_detail_product_detail__["a" /* ProductDetailPage */], { id: data[0]['ProductID'] });
                    loading_1.dismiss();
                }).catch(function (error) {
                    console.log('error: ', error);
                    loading_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: 'محصول موردنظر یافت نشد.',
                        duration: 3000,
                        position: 'top',
                        cssClass: 'failed-toast',
                        showCloseButton: true,
                        closeButtonText: 'X'
                    });
                    toast.present();
                });
            }
        }).catch(function (err) {
            console.log('Error', err);
            var toast = _this.toastCtrl.create({
                message: 'بروز مشکل، مجددا تلاش کنید',
                duration: 3000,
                position: 'top',
                cssClass: 'failed-toast',
                showCloseButton: true,
                closeButtonText: 'X'
            });
            toast.present();
        });
    };
    DashboardPage.prototype.getCredit = function (codeId) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'circles',
        });
        loading.present();
        // let codeId = this.codeBox;//this.codeBox1 + this.codeBox2 + this.codeBox3 + this.codeBox4 + this.codeBox5;
        console.log(codeId);
        this.carioApi.getApi('?shop=1&ROUTE=ROUTE_SHOP&ACTION=GET_PRIZE_BY_UNIQUE_ID&UNIQUE_ID=' + codeId + '&USER_ID=' + this.userId + '&SESSION=' + this.userSession).then(function (data) {
            console.log(data);
            loading.dismiss();
            if (data['error']) {
                switch (data['error']) {
                    case 'CODE WRONG OR ALREADY USED': {
                        var toast = _this.toastCtrl.create({
                            message: 'کد وارد شده اشتباه است یا قبلا استفاده شده',
                            duration: 3000,
                            position: 'top',
                            cssClass: 'failed-toast',
                            showCloseButton: true,
                            closeButtonText: 'X'
                        });
                        toast.present();
                        break;
                    }
                    case 'FAILED': {
                        var toast = _this.toastCtrl.create({
                            message: 'بروز مشکل از سمت سرور',
                            duration: 3000,
                            position: 'top',
                            cssClass: 'failed-toast',
                            showCloseButton: true,
                            closeButtonText: 'X'
                        });
                        toast.present();
                        break;
                    }
                }
            }
            else {
                _this.prize = data['ProductPrizeForRepairMan'];
                console.log(_this.prize);
                var toast = _this.toastCtrl.create({
                    message: 'کد اعتبار شما با موفقیت افزوده شد',
                    duration: 3000,
                    position: 'top',
                    cssClass: 'success-toast',
                    showCloseButton: true,
                    closeButtonText: 'X'
                });
                toast.present();
                _this.ionViewDidLoad();
                //loading.dismiss();
                //this.loadingPage.dismiss();
            }
        }).catch(function (error) {
            console.log('error: ', error);
            loading.dismiss();
            // let toast = this.toastCtrl.create({
            // 	message: 'اتصال شما به اینترنت قطع می باشد',
            // 	duration: 3000,
            // 	position: 'top',
            // 	cssClass: 'failed-toast'
            // }); 
            // toast.present();
        });
    };
    DashboardPage.prototype.getPrize = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            console.log('Barcode data', barcodeData);
            if (!barcodeData.cancelled) {
                var str = barcodeData.text;
                var pos = str.indexOf('=');
                var qrStr = str.substring(pos + 1);
                // 	let loading = this.loadingCtrl.create({
                // spinner: 'circles',
                //   });
                //   loading.present();
                var codeId = qrStr;
                //this.codeBox = codeId;
                console.log(codeId);
                _this.getCredit(codeId);
            }
        }).catch(function (err) {
            console.log('Error', err);
            var toast = _this.toastCtrl.create({
                message: 'بروز مشکل، مجددا تلاش کنید',
                duration: 3000,
                position: 'top',
                cssClass: 'failed-toast',
                showCloseButton: true,
                closeButtonText: 'X'
            });
            toast.present();
        });
    };
    DashboardPage.prototype.goToShopping = function () {
        this.navCtrl.parent.select(1); //.push(ShoppingPage);
    };
    DashboardPage.prototype.goToIncCredit = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__increase_credit_increase_credit__["a" /* IncreaseCreditPage */]);
        modal.present();
    };
    DashboardPage.prototype.goToCashOut = function (purse) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__cash_out_cash_out__["a" /* CashOutPage */], { 'purse': purse });
        modal.present();
    };
    DashboardPage.prototype.goToHistory = function () {
        this.navCtrl.parent.select(2);
    };
    DashboardPage.prototype.goToFactor = function (eId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__factor_detail_factor_detail__["a" /* FactorDetailPage */], { 'factorNo': eId });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Searchbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Searchbar */])
    ], DashboardPage.prototype, "searchbar", void 0);
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/dashboard/dashboard.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>کاریو</ion-title>\n    <span class="basket" (click)="goToBasket()">\n	  	<ion-icon name="cart">\n    		<ion-badge color="red" *ngIf="basketCount > 0">{{basketCount}}</ion-badge>\n    	</ion-icon>\n    </span>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content center>\n	<ion-card class="info">\n		<h6>\n			وقت بخیر <b>{{userName}}</b>!\n			<span class="date">{{todayDate}}</span>\n		</h6>\n		<img class="logo" src="assets/imgs/logo2.png">\n		<h1>فروشگاه آنلاین لوازم یدکی</h1>\n<!-- search -->\n		<div class="search-holder">\n		    <ion-searchbar\n		      [(ngModel)]="searchTerm"\n		      [formControl]="searchControl"\n\n		      showCancelButton="true"\n		      cancelButtonText="x"\n		      placeholder="جستجوی سریع کالا؛ مثلا لنت ترمز">\n		<!--       ngClass="{{searchActive ? \'is-active\' : \'\'}}"\n		    		      (ionFocus)="checkFocus()"\n		      (ionCancel)="cancelSearch($event)"\n	          [showCancelButton]="shouldShowCancel"\n		      (ionInput)="setFilteredItems()"\n		      (ionCancel)="onCancel($event)" -->\n		    </ion-searchbar>  \n		</div>\n		<ion-list *ngIf="showList" class="searchResult">\n		    <ion-item *ngFor="let item of searchItems" (click)="goToResult($event,item)">\n		    	<ion-icon [name]="item.Type == \'Product\' ? \'md-pricetag\' : \'md-albums\'"></ion-icon>\n		        <span [innerHTML]="item.name"></span>\n		    </ion-item>\n		</ion-list>\n<!-- search end -->\n		<div>\n<!-- 			<button ion-button outline color="gray">\n				<ion-icon name="mic"></ion-icon>\n				جستجوی صوتی\n			</button> -->\n			<button ion-button outline color="gray" full (click)="goToProduct()">\n				<ion-icon name="qr-scanner"></ion-icon>\n				اسکن بارکد\n			</button>\n		</div>\n		<div class="or">یا</div>\n		<button ion-button round color="brown" (click)="goToShopping()">\n			<ion-icon name="cart"></ion-icon>\n			ورود به فروشگاه\n		</button>\n		<p>سفارش کالا برای <strong>تعمیرگاه تخصصی سیتروئن (آشکاران)</strong></p>\n	</ion-card>\n	<h3>وضعیت حساب</h3>\n	<ion-row class="account-status">\n		<ion-col col-6>\n			<ion-card>\n				<img src="assets/imgs/cart.png">\n				<h6>اعتبار خرید</h6>\n				<h4>{{(purse * 1) + (prize * 1) | number}}</h4>\n				<p>تومان</p>\n				<button ion-button color="greenDark" (click)="goToIncCredit()">\n					<ion-icon name="add"></ion-icon>\n					افزایش اعتبار\n				</button>				\n			</ion-card>\n		</ion-col>\n		<ion-col col-6>\n			<ion-card class="wallet">\n				<img src="assets/imgs/wallet.png">\n				<h6>مقدار کیف پول</h6>\n				<h4>{{(purse ? purse : 0) | number}}</h4>\n				<p>تومان</p>\n				<button ion-button color="dark" (click)="goToCashOut(purse)">\n					<ion-icon name="calculator"></ion-icon>\n					برداشت از حساب\n				</button>				\n			</ion-card>\n		</ion-col>\n	</ion-row>\n	<ion-card class="credit-box" *ngIf="userType == \'repairman\'">\n		<img src="assets/imgs/gift.png">\n		<h6>“<b>کد اعتبار</b>” آخرین خریدتان را وارد کنید و اعتبار بگیرید:</h6>\n		<ion-item>\n			<ion-input type="text" [(ngModel)]="codeBox"></ion-input><!-- \n			<ion-input type="tel" [(ngModel)]="codeBox2"></ion-input>\n			<ion-input type="tel" [(ngModel)]="codeBox3"></ion-input>\n			<ion-input type="tel" [(ngModel)]="codeBox4"></ion-input>\n			<ion-input type="tel" [(ngModel)]="codeBox5"></ion-input> -->\n		</ion-item>\n		<button ion-button color="primary" [disabled]="!codeBox" (click)="getCredit(codeBox)">\n			<ion-icon name="add"></ion-icon>\n			دریافت اعتبار\n		</button>				\n		<div class="or">یا</div>\n		<button ion-button outline color="gray" (click)="getPrize()">\n			<ion-icon name="qr-scanner"></ion-icon>\n			اسکن کد QR و دریافت اعتبار\n		</button>	\n	</ion-card>\n	<h3>سوابق مالی</h3>\n	<ion-card class="chart-box">\n		<ion-row>\n			<ion-col col-4 class="count">\n				<strong>{{initData?.AllSummary.AllInvoicesCount}}</strong>\n				<b>فاکتور</b>\n				<h6>تعداد فاکتورها</h6>\n			</ion-col>\n			<ion-col col-4 class="sum">\n				<strong>{{initData?.AllSummary.FinalSummary.PriceSummary / 1000000 | number}}</strong>\n				<b>میلیون تومان</b>\n				<h6>مجموع فاکتورها</h6>\n			</ion-col>\n			<ion-col col-4 class="benefit">\n				<strong>{{initData?.AllSummary.FinalSummary.ProfitSummary / 1000 | number}}</strong>\n				<b>هزار تومان</b>\n				<h6>سود از مجموع</h6>\n			</ion-col>\n		</ion-row>\n		<div id="chartContainer"></div>\n	</ion-card>\n	<ion-card class="last-factors">\n		<h3>آخرین فاکتورها</h3>\n		<div class="factor-box" *ngFor="let invoice of invoices">\n			<span>{{invoice.OrderID}}</span>\n			<div class="top">\n				<h4>فاکتور شماره {{invoice.OrderID}}</h4>\n				<p>{{invoice.RegisterDate}}</p>\n			</div>\n			<div class="bottom">\n				<div>\n					<img src="assets/imgs/cart.png">\n					<b>{{invoice.FinalPrice | number}}</b> تومان\n				</div>\n				<div>\n					<img src="assets/imgs/wallet.png">\n					<b>{{invoice.UserProfit | number}}</b> تومان\n				</div>\n			</div>\n			<button ion-button full color="greenBlue" (click)="goToFactor(invoice.OrderID)">\n				<ion-icon name="eye"></ion-icon>\n				مشاهده فاکتور\n			</button>	\n		</div>			\n		<button ion-button outline color="gray" (click)="goToHistory()">\n			<ion-icon name="list"></ion-icon>\n			مشاهده همه فاکتورها ({{initData?.AllSummary.AllInvoicesCount}} فاکتور)\n		</button>				\n	</ion-card>\n	<h3>تماس با ما</h3>\n	<ion-card class="contact-us">\n		<h5>در صورت بروز هرگونه مشکل با پشتیبانی کاریو تماس بگیرید.</h5>\n		<a ion-button outline full color="gray" href="tel:+982128428855">\n			تماس فوری با کاریو\n		</a>						\n	</ion-card>\n</ion-content>\n<a ion-button class="contact-us-btn" href="tel:+982128428855">\n	<ion-icon name="call"></ion-icon>\n</a>		\n'/*ion-inline-end:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/dashboard/dashboard.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_15__providers_basket_data_basket_data__["a" /* BasketDataProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_14__shared_shared__["a" /* CarioApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_15__providers_basket_data_basket_data__["a" /* BasketDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FactorPaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jalali_moment__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jalali_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jalali_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FactorPaymentPage = /** @class */ (function () {
    function FactorPaymentPage(navCtrl, navParams, loadingCtrl, toastCtrl, viewCtrl, carioApi, iab) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.carioApi = carioApi;
        this.iab = iab;
        this.pMethod = 'online';
        this.chequeSelected = false;
        this.datePickerConfig = {
            format: 'jYYYY/jM/jD',
            disableKeypress: true,
            allowMultiSelect: false,
            min: __WEBPACK_IMPORTED_MODULE_2_jalali_moment__()
        };
        this.orderItemsArray = [];
        this.orderItems = '';
        this.fastDelivery = false;
        this.fDelivery = 0;
        this.userId = localStorage.getItem('userId');
        this.userSession = localStorage.getItem('session');
        this.loadingPage = this.loadingCtrl.create({
            spinner: 'circles',
        });
        this.loadingPage.present();
        this.carioApi.getApi('?shop=1&ROUTE=ROUTE_SHOP&ACTION=SHOP_INIT&USER_ID=' + this.userId + '&SESSION=' + this.userSession).then(function (data) {
            _this.shopInit = data;
            console.log('dataaaa', _this.shopInit);
            _this.loadingPage.dismiss();
            _this.datePickerConfig['max'] = __WEBPACK_IMPORTED_MODULE_2_jalali_moment__().add(parseInt(_this.shopInit.PaymentOptions.chequeDate), 'day');
            console.log(_this.datePickerConfig['max']);
        }).catch(function (error) {
            console.log('error: ', error);
            _this.loadingPage.dismiss();
        });
    }
    FactorPaymentPage.prototype.ionViewDidLoad = function () {
        this.factor = this.navParams.data.factor;
        console.log(this.factor);
        this.basketData = this.factor.Items;
        for (var i = 0; i < this.basketData.length; i++) {
            this.orderItemsArray.push(this.basketData[i].ProductID + '-' + this.basketData[i].Count);
        }
        console.log(this.basketData);
    };
    FactorPaymentPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    FactorPaymentPage.prototype.close = function (d) {
        d.api.close();
    };
    FactorPaymentPage.prototype.getRadio = function (e) {
        console.log('method:', e);
        if (e == "cheque") {
            this.chequeSelected = true;
        }
        else {
            this.chequeSelected = false;
            //this.chequeDate = '0000-00-00';
        }
    };
    FactorPaymentPage.prototype.goToBankPage = function () {
        var _this = this;
        console.log(this.chequeDate);
        var cDate;
        var finalAmount = this.factor.FinalPrice;
        if (this.pMethod == "cheque") {
            if (this.chequeDate == undefined) {
                var toast = this.toastCtrl.create({
                    message: 'درج تاریخ چک الزامی است',
                    duration: 3000,
                    position: 'top',
                    cssClass: 'failed-toast',
                    showCloseButton: true,
                    closeButtonText: 'X'
                });
                toast.present();
            }
            else {
                cDate = this.chequeDate.format('YYYY-MM-DD');
            }
        }
        else {
            cDate = '0000-00-00';
        }
        if (this.pMethod == "online") {
            finalAmount -= finalAmount * 0.02;
            console.log(finalAmount);
        }
        if (this.fastDelivery == true) {
            var fee = this.shopInit.FastDelivery.Fee;
            // console.log(fee , finalAmount);
            finalAmount += fee;
            // console.log(finalAmount);
            this.fDelivery = 1;
        }
        this.orderItems = this.orderItemsArray.join('_');
        console.log(this.orderItems);
        var url = '?shop=1&ROUTE=ROUTE_SHOP&ACTION=SHOP_REGISTER_ORDER&USER_ID=' + this.userId + '&SESSION=' + this.userSession + '&ADDRESS=address&COMMENT=comments&AMOUNT=' + this.factor.FinalPrice + '&FINAL_AMOUNT=' + finalAmount + '&ORDER_ITEMS=' + this.orderItems + '&PAYMENT_METHOD=' + this.pMethod + '&CHEQUE_DATE=' + cDate + '&APP=3&ONLINE_FIRST=' + this.shopInit.PaymentOptions.onlineFirst + '&FAST_DELIVERY=' + this.fDelivery + '&FAST_DELIVERY_FEE=' + this.shopInit.FastDelivery.Fee + '&FAST_DELIVERY_DATE=null';
        console.log(url);
        var loading = this.loadingCtrl.create({
            spinner: 'circles',
            content: '... در حال ارسال اطلاعات'
        });
        loading.present();
        this.carioApi.getApi(url).then(function (data) {
            console.log(data);
            if (data['STATE'] === 'SUCCESS') {
                if (_this.pMethod == 'online') {
                    var orderId = data['ORDER_ID'];
                    var url_1 = 'http://app.cario.ir/index.php?shop=1&ROUTE=ROUTE_SHOP&ACTION=SHOP_PAYMENT&USER_ID=' + _this.userId + '&SESSION=' + _this.userSession + '&ORDER_ID=' + _this.factor.OrderID;
                    var browser_1 = _this.iab.create(url_1, '_system', { location: 'yes' });
                    loading.dismiss();
                    _this.viewCtrl.dismiss(undefined);
                    setTimeout(function () {
                        window.location.reload();
                    }, 3000);
                    browser_1.on('loadstart').subscribe(function (event) {
                        var closeUrl = 'cario://payment';
                        if (event.url == closeUrl) {
                            browser_1.close(); //This will close InAppBrowser Automatically when closeUrl Started
                        }
                    });
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: 'ارسال موفق اطلاعات',
                        duration: 3000,
                        position: 'top',
                        cssClass: 'success-toast',
                        showCloseButton: true,
                        closeButtonText: 'X'
                    });
                    toast.present();
                    loading.dismiss();
                    _this.viewCtrl.dismiss(undefined);
                }
                ;
            }
            else {
                loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'بروز خطا هنگام ارسال اطلاعات',
                    duration: 3000,
                    position: 'top',
                    cssClass: 'failed-toast',
                    showCloseButton: true,
                    closeButtonText: 'X'
                });
                toast.present();
            }
        }).catch(function (error) {
            console.log('error: ', error);
            loading.dismiss();
        });
    };
    FactorPaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-factor-payment',template:/*ion-inline-start:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/factor-payment/factor-payment.html"*/'<ion-header>\n\n  <ion-navbar  color="primary">\n    <ion-title>انتخاب روش پرداخت</ion-title>\n	<ion-icon name="md-close" class="close" color="white" (click)="closeModal()"></ion-icon>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n		<div class="payment-box">\n			<div class="top">\n				<div>\n					<div class="img-wrapper">\n						<img src="assets/imgs/cart.png">\n					</div>\n					<h4><span>{{factor?.FinalPrice | number}}</span>تومان</h4>\n					<h5>مبلغ پرداختی</h5>\n				</div>\n				<div>\n					<div class="img-wrapper">\n						<img src="assets/imgs/wallet.png">\n					</div>\n					<h4><span>{{factor?.UserProfit | number}}</span>تومان</h4>\n					<h5>بازگشت به کیف پول</h5>\n				</div>\n			</div>\n			<h6>\n				<ion-icon name="alert-outline"></ion-icon>\n				بعد از صحت گزینه های انتخاب شده و انتخاب نحوه پرداخت، گزینه "ثبت نهایی" را انتخاب کنید\n			</h6>\n			<ion-list radio-group [(ngModel)]="pMethod">\n				<ion-item>\n				    <ion-label>پرداخت نقد آنلاین (۲ درصد سود بیشتر)</ion-label>\n				    <ion-radio [value]="\'online\'" (ionSelect)="getRadio($event)"></ion-radio>\n				</ion-item>\n				<ion-item *ngIf="shopInit?.PaymentOptions.cash">\n				    <ion-label>پرداخت نقد در محل</ion-label>\n				    <ion-radio [value]="\'cash\'" (ionSelect)="getRadio($event)"></ion-radio>\n				</ion-item>\n				<ion-item *ngIf="shopInit?.PaymentOptions.cheque">\n				    <ion-label>پرداخت چکی</ion-label>\n				    <ion-radio [value]="\'cheque\'" (ionSelect)="getRadio($event)"></ion-radio>	\n				</ion-item>\n			</ion-list>\n			<div class="date-picker" *ngIf="chequeSelected">\n				<ion-label>تاریخ چک: </ion-label>\n			  	<dp-date-picker #dayPicker\n				   dir="rtl"\n				   [(ngModel)]="chequeDate"\n				   mode="day"\n				   placeholder="تاریخ چک را وارد نمایید ..."\n				   theme="dp-material"\n				   [config]="datePickerConfig"> \n				</dp-date-picker>\n				<button ion-button class="close-calendar" (click)="close(dayPicker)" color="secondary">\n					<ion-icon name="close"></ion-icon>\n			    </button>\n				<p center ion-text color="red">{{shopInit?.PaymentOptions.onlineFirst}} % از مبلغ باید به صورت نقد پرداخت شود.</p>\n			</div>\n			<ion-list>\n				<ion-item class="checkbox">\n					<ion-label>تحویل فوری (حداکثر تا {{shopInit?.FastDelivery.AtLeast}} {{shopInit?.FastDelivery.TimeUnit == \'Day\' ? \'روز کاری\' : \'ساعت\'}})<br>هزینه: {{shopInit?.FastDelivery.Fee | number}} تومان</ion-label>\n					<ion-checkbox [(ngModel)]="fastDelivery"></ion-checkbox>\n				</ion-item>\n			</ion-list>\n		</div>\n</ion-content>\n<ion-footer>\n	<button class="payment-btn" ion-button full color="greenBlue" (click)="goToBankPage()">ثبت نهایی</button>\n\n</ion-footer>\n'/*ion-inline-end:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/factor-payment/factor-payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared__["a" /* CarioApi */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], FactorPaymentPage);
    return FactorPaymentPage;
}());

//# sourceMappingURL=factor-payment.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cario_api_service__ = __webpack_require__(396);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__cario_api_service__["a"]; });

//# sourceMappingURL=shared.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_detail_product_detail__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_to_basket_add_to_basket__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__category_category__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__category_list_category_list__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__basket_basket__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ShoppingPage = /** @class */ (function () {
    function ShoppingPage(navCtrl, navParams, modalCtrl, loadingCtrl, carioApi, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.carioApi = carioApi;
        this.storage = storage;
        this.searchTerm = '';
        this.searchActive = false;
        this.basketCount = 0;
        this.loadingPage = this.loadingCtrl.create({
            spinner: 'circles',
        });
        this.loadingPage.present();
        this.userType = localStorage.getItem('userType');
        // this.basketCount = parseInt(localStorage.getItem('bCount'));
        this.storage.get('cartItem').then(function (val) {
            if (val) {
                _this.basketCount = val.length;
            }
        });
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]();
    }
    ShoppingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.promise1 = this.carioApi.getApi('?shop=1&ROUTE=ROUTE_SHOP&ACTION=GET_ROOT_CATEGORIES').then(function (data) {
            //let msg = data['MESSAGE'];
            //console.log('data: ',data);
            _this.cats = data;
        }).catch(function (error) {
            console.log('error: ', error);
        });
        this.promise2 = this.carioApi.getApi('?shop=1&ROUTE=ROUTE_SHOP&ACTION=GET_MAIN_CATEGORIES&CATEGORY_ONLY=0').then(function (data) {
            //let msg = data['MESSAGE'];
            console.log('data: ', data);
            _this.catsGroup = data;
        }).catch(function (error) {
            console.log('error: ', error);
        });
        Promise.all([this.promise1, this.promise2]).then(function (values) {
            console.log('values', values);
            _this.loadingPage.dismiss();
        });
        this.searchControl.valueChanges.debounceTime(250).subscribe(function (search) {
            //this.searchActive = true;
            if (_this.searchTerm.length > 0) {
                _this.showList = true;
            }
            else {
                _this.showList = false;
            }
            //this.setFilteredItems(); 
            _this.carioApi.getApi('?shop=1&ROUTE=ROUTE_SHOP&ACTION=SHOP_SUGGESTION&QUERY=' + _this.searchTerm).then(function (data) {
                _this.searchItems = data;
                console.log(_this.searchItems);
            });
        });
    };
    ShoppingPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('cartItem').then(function (val) {
            console.log(val);
            if (val && val.length > 0) {
                _this.basketCount = val.length;
            }
            else {
                _this.basketCount = 0;
            }
        });
    };
    ShoppingPage.prototype.goToBasketPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__basket_basket__["a" /* BasketPage */]);
    };
    ShoppingPage.prototype.checkFocus = function () {
        this.searchActive = true;
    };
    ShoppingPage.prototype.cancelSearch = function ($event) {
        this.searchActive = false;
    };
    ShoppingPage.prototype.goItemDetail = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__product_detail_product_detail__["a" /* ProductDetailPage */], { 'id': id });
    };
    ShoppingPage.prototype.goToBasket = function (id) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__add_to_basket_add_to_basket__["a" /* AddToBasketPage */], { 'id': id });
        modal.onDidDismiss(function () {
            //this.basketCount = parseInt(localStorage.getItem('bCount'));
            _this.storage.get('cartItem').then(function (val) {
                if (val) {
                    _this.basketCount = val.length;
                }
            });
        });
        modal.present();
    };
    ShoppingPage.prototype.goToCatList = function (id) {
        // let modal = this.modalCtrl.create(CategoryListPage, {'id': id});
        // modal.present();		
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__category_list_category_list__["a" /* CategoryListPage */], { 'id': id });
    };
    ShoppingPage.prototype.goToResult = function ($event, item) {
        var typ = item.Type;
        switch (typ) {
            case 'Product': {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__product_detail_product_detail__["a" /* ProductDetailPage */], { 'id': item.id });
                break;
            }
            case 'Category': {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__category_category__["a" /* CategoryPage */], item);
                break;
            }
            default: {
                console.log('type of this item is undefined');
                break;
            }
        }
        ;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Searchbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Searchbar */])
    ], ShoppingPage.prototype, "searchbar", void 0);
    ShoppingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shopping',template:/*ion-inline-start:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/shopping/shopping.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>فروشگاه</ion-title>\n    <span class="basket" (click)="goToBasketPage()">\n	  	<ion-icon name="cart">\n    		<ion-badge color="red" *ngIf="basketCount > 0">{{basketCount}}</ion-badge>\n    	</ion-icon>\n    </span>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content  [class.no-scroll]="searchActive">\n	<div class="search-box">\n		<div class="search-holder">\n		    <ion-searchbar\n		      [(ngModel)]="searchTerm"\n		      [formControl]="searchControl"\n		      (ionFocus)="checkFocus()"\n		      (ionCancel)="cancelSearch($event)"\n		      showCancelButton="true"\n		      cancelButtonText="x"\n		      placeholder="جستجوی سریع کالا؛ مثلا لنت ترمز"\n		      ngClass="{{searchActive ? \'is-active\' : \'\'}}">\n		<!--             [showCancelButton]="shouldShowCancel"\n		      (ionInput)="setFilteredItems()"\n		      (ionCancel)="onCancel($event)" -->\n		    </ion-searchbar>  \n		</div>\n<!-- 		<div *ngIf="searchActive" class="search-back">\n		    <ion-icon name="ios-search-outline"></ion-icon>\n		    <h4>جستجو در دست دو</h4>\n		    <p>آگهی مورد نظر خود را در سریع ترین زمان بیابید</p>\n		</div> -->\n		<ion-list *ngIf="showList" class="searchResult">\n		    <ion-item *ngFor="let item of searchItems" (click)="goToResult($event,item)">\n		    	<ion-icon [name]="item.Type == \'Product\' ? \'md-pricetag\' : \'md-albums\'"></ion-icon>\n		        <span [innerHTML]="item.name"></span>\n		    </ion-item>\n		</ion-list>\n	</div>\n	<div class="search-bg" *ngIf="searchActive"></div>\n	<ion-card class="cat-box">\n		<h4>دسته بندی مورد نظر را انتخاب کنید:</h4>\n		<div class="cat-row">\n			<div *ngFor="let cat of cats; let i=index " (click)="goToCatList(cat.CategoryID)">\n				<img src="assets/imgs/lent.png">\n				<span>{{cat.CategoryName}}</span>\n			</div>\n		</div>\n	</ion-card>\n	<div *ngFor="let catGrp of catsGroup">\n		<h2><span>{{catGrp.CategoryName}}</span></h2>\n		<ion-card class="items-row">\n			<div>\n				<div class="item-box" *ngFor="let item of catGrp.products; let i=index ">\n					<img src="{{item.Images[0] ? item.Images[0]?.ProductImage : \'assets/imgs/no-img.jpg\'}}" (click)="goItemDetail(item.ProductID)">\n					<span class="item-badge">\n						<!-- {{item.Discount}}٪ -->\n						<i *ngIf="userType == \'repairman\'">{{item.ProductPrizeForRepairMan | number}} {{item.ProductPrizeForRepairMan < 100 ? \'%\' : \'تومان\'}} </i>\n						<i *ngIf="userType != \'repairman\'">{{item.ProductPrizeForShop | number}} {{item.ProductPrizeForShop < 100 ? \'%\' : \'تومان\'}} </i>						\n					</span>\n					<div>\n						<h3 (click)="goItemDetail(item.ProductID)">{{item.ProductName}}</h3>\n						<h6>راین گستر<span>{{item.Enabled == 1 ? \'موجود\' : \'نا موجود\'}}</span></h6>\n						<button ion-button outline color="orange" (click)="goToBasket(item.ProductID)">\n							<ion-icon name="cart"></ion-icon>\n							اضافه به سبد خرید\n						</button>\n					</div>\n				</div>\n<!-- 				<div class="item-box">\n					<img src="assets/imgs/item.jpg" (click)="goItemDetail()">\n					<div>\n						<h3>لنت تزمز بوش<span>۶٪</span></h3>\n						<h6>راین گستر<span>موجود</span></h6>\n						<button ion-button outline color="orange" (click)="goToBasket()">\n							<ion-icon name="cart"></ion-icon>\n							اضافه به سبد خرید\n						</button>\n					</div>\n				</div>\n				<div class="item-box">\n					<img src="assets/imgs/item.jpg" (click)="goItemDetail()">\n					<div>\n						<h3>لنت تزمز بوش<span>۶٪</span></h3>\n						<h6>راین گستر<span>موجود</span></h6>\n						<button ion-button outline color="orange" (click)="goToBasket()">\n							<ion-icon name="cart"></ion-icon>\n							اضافه به سبد خرید\n						</button>\n					</div>\n				</div>\n -->			</div>\n		</ion-card>\n	</div>\n</ion-content>\n<a ion-button class="contact-us-btn" href="tel:+982128428855">\n	<ion-icon name="call"></ion-icon>\n</a>		\n'/*ion-inline-end:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/shopping/shopping.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_10__shared_shared__["a" /* CarioApi */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ShoppingPage);
    return ShoppingPage;
}());

//# sourceMappingURL=shopping.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__factor_detail_factor_detail__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basket_basket__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HistoryPage = /** @class */ (function () {
    function HistoryPage(navCtrl, navParams, carioApi, loadingCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.carioApi = carioApi;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.factorNo = 44444;
        this.factors = [];
        this.loadingPage = this.loadingCtrl.create({
            spinner: 'circles',
        });
        this.loadingPage.present();
        //this.basketCount = parseInt(localStorage.getItem('bCount'));
        this.storage.get('cartItem').then(function (val) {
            if (val) {
                _this.basketCount = val.length;
            }
        });
        this.userName = localStorage.getItem('userName');
        this.userId = localStorage.getItem('userId');
        this.userSession = localStorage.getItem('session');
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // ?shop=1&ROUTE=ROUTE_SHOP&ACTION=GET_INVOICE&USER_ID=1&SESSION=c63c7861a2671659e3a5a123f10be97ec0c3ac8941e9741a15e2b8f7c351654b&START=0&LIMIT=5
        this.carioApi.getApi('?shop=1&ROUTE=ROUTE_SHOP&ACTION=GET_INVOICE&USER_ID=' + this.userId + '&SESSION=' + this.userSession + '&START=0&LIMIT=2000').then(function (data) {
            console.log(data);
            _this.factors = data;
            _this.factors = _this.factors.reverse();
            _this.loadingPage.dismiss();
        }).catch(function (error) {
            console.log('error: ', error);
            _this.loadingPage.dismiss();
        });
    };
    HistoryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('cartItem').then(function (val) {
            if (val) {
                _this.basketCount = val.length;
            }
        });
    };
    HistoryPage.prototype.goToBasket = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__basket_basket__["a" /* BasketPage */]);
    };
    HistoryPage.prototype.goToShopping = function () {
        this.navCtrl.parent.select(1);
    };
    HistoryPage.prototype.goFactroDetail = function (fId, fPaied) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__factor_detail_factor_detail__["a" /* FactorDetailPage */], { 'factorNo': fId, 'factorType': fPaied });
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/history/history.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>تاریخچه سفارشات</ion-title>\n    <span class="basket" (click)="goToBasket()">\n	  	<ion-icon name="cart">\n    		<ion-badge color="red" *ngIf="basketCount > 0">{{basketCount}}</ion-badge>\n    	</ion-icon>\n    </span>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="top-box" padding *ngIf="basketCount > 0">\n		<h3>شما یک سفارش نیمه تمام دارید</h3>\n		<h6>\n			<ion-icon name="information-circle-outline"></ion-icon>\n			سفارش خود را تکمیل کنید\n		</h6>\n		<div class="btn-wrapper">\n			<button ion-button color="primary" (click)="goToShopping()">اضافه کردن کالا به سبد</button>\n			<button ion-button color="brown" (click)="goToBasket()">مشاهده سبد خرید</button>\n		</div>\n	</div>\n	<h3>لیست فاکتور های ثبت شده ({{factors?.length}} فاکتور)</h3>\n	<ion-card class="factor-box" padding *ngFor="let factor of factors">\n		<span>#{{factor.OrderID}}</span>\n		<div class="top">\n			<h4>فاکتور شماره {{factor.OrderID}}</h4>\n			<p>{{factor.RegisterDate}}</p>\n		</div>\n		<div class="bottom">\n			<div>\n				<span>\n					<img src="assets/imgs/cart.png">\n					<b>{{factor.FinalPrice | number}}</b> تومان\n				</span>\n				<span>\n					<img src="assets/imgs/wallet.png">\n					<b>{{factor.UserProfit | number}}</b> تومان\n			</span>\n			</div>\n			<div class="{{factor.IsPaied == 1 ? \'paied\' : \'not-paied\'}}">\n				<i>وضعیت پرداخت: </i><b>{{factor.IsPaied == 1 ? \'پرداخت شده\' : \'پرداخت نشده\'}}</b>\n			</div>\n		</div>\n		<button ion-button full color="greenBlue" (click)="goFactroDetail(factor.OrderID,factor.IsPaied)">\n			<ion-icon name="eye"></ion-icon>\n			مشاهده فاکتور\n		</button>	\n	</ion-card>			\n</ion-content>\n<a ion-button class="contact-us-btn" href="tel:+982128428855">\n	<ion-icon name="call"></ion-icon>\n</a>		\n'/*ion-inline-end:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/history/history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__shared_shared__["a" /* CarioApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__increase_credit_increase_credit__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MorePage = /** @class */ (function () {
    function MorePage(navCtrl, navParams, alertCtrl, loadingCtrl, modalCtrl, carioApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.carioApi = carioApi;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.loadingPage = this.loadingCtrl.create({
            spinner: 'circles',
        });
        this.loadingPage.present();
        this.userId = localStorage.getItem('userId');
        this.userSession = localStorage.getItem('session');
    }
    MorePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.pages = [
            { title: 'مشاهده اطلاعات کاربری', component: 'Profile', icon: 'contact' },
            { title: 'خرید جدید', component: 'Shopping', icon: 'cart' },
            { title: 'تاریخچه خرید', component: 'History', icon: 'archive' },
        ];
        this.carioApi.getApi('?ROUTE=ROUTE_PROFILE&ACTION=PROFILE_GET_ALL&APP=1&SESSION=' + this.userSession + '&USER_ID=' + this.userId + '&VERSION=8').then(function (data) {
            _this.loadingPage.dismiss();
            _this.profileData = data;
            console.log(_this.profileData);
        }).catch(function (error) {
            console.log('error: ', error);
            _this.loadingPage.dismiss();
        });
    };
    MorePage.prototype.goPage = function (p) {
        // if (p.component === 'ProfileInfoPage') {
        // 	this.navCtrl.push(p.component);
        // } else {
        // 	this.navCtrl.push(p.component,{'fromTab': true});
        // }
        switch (p.component) {
            case 'Profile': {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */], this.profileData.ProfileContent);
                break;
            }
            case 'Shopping': {
                this.navCtrl.parent.select(1);
                break;
            }
            case 'History': {
                this.navCtrl.parent.select(2);
                break;
            }
            default: {
                console.log('type of this item is undefined');
                break;
            }
        }
        ;
    };
    MorePage.prototype.goToIncCredit = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__increase_credit_increase_credit__["a" /* IncreaseCreditPage */]);
        modal.present();
    };
    MorePage.prototype.signOut = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'می خواهید از سیستم خارج شوید؟',
            buttons: [
                {
                    text: 'لغو',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'تایید',
                    handler: function () {
                        localStorage.clear();
                        localStorage.removeItem('userId');
                        localStorage.removeItem('session');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                        _this.tabBarElement.style.display = 'none';
                        console.log(localStorage);
                    }
                }
            ]
        });
        alert.present();
    };
    MorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-more',template:/*ion-inline-start:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/more/more.html"*/'<ion-header>\n\n<!--   <ion-navbar color="primary">\n    <ion-title>بیشتر</ion-title>\n  </ion-navbar> -->\n	<div class="user-info">\n		<div class="img-holder">\n			<img *ngIf="profileData?.ProfileContent.image" src="http://app.cario.ir/{{profileData?.ProfileContent.image}}">\n			<ion-icon *ngIf="!profileData?.ProfileContent.image" name="md-contact"></ion-icon>\n		</div>\n		<!-- <h2>نام فروشگاه</h2> -->\n		<h4>{{profileData?.ProfileContent.fname}} {{profileData?.ProfileContent.lname}}</h4>\n		<h6>اعتبار: <span>{{profileData?.ProfileContent.purse}} تومان</span></h6>\n		<button ion-button color="green" (click)="goToIncCredit()">\n			<ion-icon name="add"></ion-icon>\n			افزایش اعتبار\n		</button>\n	</div>\n</ion-header>\n\n\n<ion-content>\n\n	<ion-list>\n		<button ion-item *ngFor="let page of pages" (click)="goPage(page)">\n			<ion-icon [name]="page.icon"></ion-icon>\n			{{page.title}}\n		</button>\n		<a ion-item href="tel:+982128428855">\n			<ion-icon name="call"></ion-icon>\n			تماس با پشتیبانی\n		</a>\n		<button ion-item (click)="signOut()">\n			<ion-icon name="exit"></ion-icon>\n			خروج از حساب			\n		</button>\n	</ion-list>\n</ion-content>\n<a ion-button class="contact-us-btn" href="tel:+982128428855">\n	<ion-icon name="call"></ion-icon>\n</a>		\n'/*ion-inline-end:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/more/more.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared__["a" /* CarioApi */]])
    ], MorePage);
    return MorePage;
}());

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, toastCtrl, carioApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.carioApi = carioApi;
        this.loading = false;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.userId = localStorage.getItem('userId');
        this.userSession = localStorage.getItem('session');
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log(this.navParams.data);
        this.profileData = this.navParams.data;
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    ProfilePage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    ProfilePage.prototype.editAddress = function () {
        var _this = this;
        this.loading = true;
        var url = '?shop=1&ROUTE=ROUTE_PROFILE&ACTION=REQUEST_CHANGE_ADDRESS&USER_ID=' + this.userId + '&SESSION=' + this.userSession + '&ADDRESS=NEW';
        this.carioApi.getApi(url).then(function (data) {
            console.log(data);
            var toast = _this.toastCtrl.create({
                message: 'درخواست تغییر آدرس با موفقیت ارسال شد، همکاران ما در اسرع وقت با شما تماس خواهند گرفت',
                position: 'top',
                cssClass: 'success-toast',
                showCloseButton: true,
                closeButtonText: 'X'
            });
            toast.present();
            _this.navCtrl.parent.select(0);
        }).catch(function (error) {
            console.log('error: ', error);
            _this.loading = false;
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/profile/profile.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title><ion-icon name="contact"></ion-icon>مشاهده مشخصات کاربری</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<img src="assets/imgs/store-bg.jpg" class="store-img">\n	<ion-list>\n	  	<ion-item>\n	    	<ion-avatar item-start>\n	    		<ion-icon name="contact"></ion-icon>\n	    	</ion-avatar>\n	    	<p>نام و نام خانوادگی</p>\n	   		<h2>{{profileData?.fname}} {{profileData?.lname}}</h2>\n	  	</ion-item>\n<!-- 	  	<ion-item>\n	    	<ion-avatar item-start>\n	    		<ion-icon name="cart"></ion-icon>\n	    	</ion-avatar>\n	    	<p>نام فروشگاه</p>\n	   		<h2>ابزار یدکی</h2>\n	  	</ion-item> -->\n	  	<ion-item>\n	    	<ion-avatar item-start>\n	    		<ion-icon name="call"></ion-icon>\n	    	</ion-avatar>\n	    	<p>شماره تماس</p>\n	   		<h2>{{profileData?.tel}}</h2>\n	  	</ion-item>\n<!-- 	  	<ion-item>\n	    	<ion-avatar item-start>\n	    		<ion-icon name="phone-portrait"></ion-icon>\n	    	</ion-avatar>\n	    	<p>شماره همراه</p>\n	   		<h2>۰۹۱۲۴۴۴۴۴۴۴</h2>\n	  	</ion-item> -->\n	  	<ion-item>\n	    	<ion-avatar item-start>\n	    		<ion-icon name="mail"></ion-icon>\n	    	</ion-avatar>\n	    	<p>شماره همراه</p>\n	   		<h2>{{profileData?.email}}</h2>\n	  	</ion-item>\n	</ion-list>\n</ion-content>\n<ion-footer>\n	<button ion-button full>\n		<span *ngIf="!loading" (click)="editAddress()">درخواست ویرایش آدرس</span>\n		<ion-spinner *ngIf="loading" color="white" name="bubbles"></ion-spinner>\n	</button>		\n\n</ion-footer>'/*ion-inline-end:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared__["a" /* CarioApi */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, carioApi, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.carioApi = carioApi;
        this.toastCtrl = toastCtrl;
        this.loading = false;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
    };
    // checkLength(e) {
    // 	if (e.length == 11) {
    // 		this.phoneNumberValid = true;
    // 	} else {
    // 		this.phoneNumberValid = false;
    // 	}
    // }
    RegisterPage.prototype.registerUser = function () {
        var _this = this;
        this.loading = true;
        var errorMsg = '';
        if (this.userMobile.length != 11) {
            errorMsg = 'شماره تلفن همراه به درستی وارد نشده';
            var toast = this.toastCtrl.create({
                message: errorMsg,
                duration: 3000,
                position: 'top',
                cssClass: 'failed-toast',
                showCloseButton: true,
                closeButtonText: 'X'
            });
            toast.present();
            this.loading = false;
        }
        else {
            var params = '?ROUTE=LOGIN&ACTION=REQUEST_REGISTRATION&TEL=' + this.userMobile + '&FIXED_TEL=' + this.userPhone + '&APP=6&USER_NAME=' + this.userName + '&ADDRESS=' + this.userAddress + '&COMMENT=' + this.userDesc;
            this.carioApi.postApi(params).then(function (data) {
                console.log(data);
                var toast = _this.toastCtrl.create({
                    message: 'اطلاعات شما با موفقیت ثبت شد، پس از بررسی با شما تماس گرفته می شود',
                    duration: 3000,
                    position: 'top',
                    cssClass: 'success-toast',
                    showCloseButton: true,
                    closeButtonText: 'X'
                });
                toast.present();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                _this.loading = false;
            }).catch(function (error) {
                console.log('error: ', error);
                _this.loading = false;
            });
        }
        //this.navCtrl.push(TabsPage);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/register/register.html"*/'<ion-content padding center>\n	<img class="logo" src="assets/imgs/logo.png">\n	<h3>فرم ثبت نام در سامانه</h3>\n	<p>اطلاعات مورد نیاز را وارد کنید و منتظر تماس کارشناس کاریو بمانید.</p>\n	<ion-item>\n		<ion-label>\n			<ion-icon name="phone-portrait"></ion-icon>\n		</ion-label>\n		<ion-input type="tel" maxLength="11" [(ngModel)]="userMobile" placeholder="شماره همراه"></ion-input>\n	</ion-item>\n	<ion-item>\n		<ion-label>\n			<ion-icon name="person"></ion-icon>\n		</ion-label>\n		<ion-input type="text" [(ngModel)]="userName" placeholder="نام و نام خانوادگی"></ion-input>\n	</ion-item>\n	<ion-item>\n		<ion-label>\n			<ion-icon name="call"></ion-icon>\n		</ion-label>\n		<ion-input type="tel" [(ngModel)]="userPhone" placeholder="شماره ثابت"></ion-input>\n	</ion-item>\n	<ion-item>\n		<ion-label>\n			<ion-icon name="pin"></ion-icon>\n		</ion-label>\n		<ion-textarea [(ngModel)]="userAddress" placeholder="آدرس دقیق"></ion-textarea>\n	</ion-item>\n	<ion-item>\n		<ion-label>\n			<ion-icon name="list"></ion-icon>\n		</ion-label>\n		<ion-textarea [(ngModel)]="userDesc" placeholder="توضیحات اختیاری"></ion-textarea>\n	</ion-item>\n	<div class="has-btn">\n		<button ion-button color="green" [disabled]="!(userMobile && userName && userPhone && userAddress) ">\n			<span *ngIf="!loading" (click)="registerUser()">درخواست ثبت نام</span>\n			<ion-spinner *ngIf="loading" color="white" name="bubbles"></ion-spinner>\n		</button>		\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared__["a" /* CarioApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 135:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 135;

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-to-basket/add-to-basket.module": [
		438,
		16
	],
	"../pages/basket/basket.module": [
		440,
		15
	],
	"../pages/cash-out/cash-out.module": [
		439,
		14
	],
	"../pages/category-list/category-list.module": [
		441,
		13
	],
	"../pages/category/category.module": [
		442,
		12
	],
	"../pages/confirm-code/confirm-code.module": [
		443,
		11
	],
	"../pages/dashboard/dashboard.module": [
		444,
		10
	],
	"../pages/factor-detail/factor-detail.module": [
		445,
		9
	],
	"../pages/factor-payment/factor-payment.module": [
		447,
		8
	],
	"../pages/history/history.module": [
		446,
		7
	],
	"../pages/increase-credit/increase-credit.module": [
		448,
		6
	],
	"../pages/login/login.module": [
		450,
		5
	],
	"../pages/more/more.module": [
		449,
		4
	],
	"../pages/product-detail/product-detail.module": [
		452,
		3
	],
	"../pages/profile/profile.module": [
		451,
		2
	],
	"../pages/register/register.module": [
		454,
		1
	],
	"../pages/shopping/shopping.module": [
		453,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 177;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(371);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var STORAGE_KEY = 'cartItem';
var BasketDataProvider = /** @class */ (function () {
    // public _cart:any = [];
    // public bObject = {
    // 	'id': 0,
    // 	'price': 0
    // }
    function BasketDataProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        //console.log('Hello BasketDataProvider Provider');
        //console.log(this._cart);
    }
    BasketDataProvider.prototype.addToCart = function (item) {
        var _this = this;
        return this.getAllItems().then(function (result) {
            if (result) {
                result.push(item);
                console.log(result);
                return _this.storage.set(STORAGE_KEY, result);
            }
            else {
                return _this.storage.set(STORAGE_KEY, [item]);
            }
        });
    };
    BasketDataProvider.prototype.removeFromCart = function (index) {
        var _this = this;
        return this.getAllItems().then(function (result) {
            if (result) {
                //var index = result.indexOf(i);
                console.log(index);
                result.splice(index, 1);
                //result.splice(e, 1);
                //    if (i !== -1) {
                //     result.splice(i, 1);
                // }
                return _this.storage.set(STORAGE_KEY, result);
            }
        });
    };
    BasketDataProvider.prototype.getAllItems = function () {
        return this.storage.get(STORAGE_KEY);
    };
    BasketDataProvider.prototype.getData = function () {
        this.storage.get(STORAGE_KEY).then(function (val) {
            //console.log(val);
            return val;
        });
    };
    BasketDataProvider.prototype.clearCart = function () {
        this.storage.set(STORAGE_KEY, []);
    };
    BasketDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], BasketDataProvider);
    return BasketDataProvider;
}());

//# sourceMappingURL=basket-data.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_confirm_code_confirm_code__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_dashboard_dashboard__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_shopping_shopping__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_history_history__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_factor_detail_factor_detail__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_product_detail_product_detail__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_add_to_basket_add_to_basket__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_cash_out_cash_out__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_increase_credit_increase_credit__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_category_category__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_category_list_category_list__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_basket_basket__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_factor_payment_factor_payment__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_more_more__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_profile_profile__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng2_jalali_date_picker__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_in_app_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_deeplinks__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_barcode_scanner__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__shared_shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_basket_data_basket_data__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_confirm_code_confirm_code__["a" /* ConfirmCodePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_shopping_shopping__["a" /* ShoppingPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_factor_detail_factor_detail__["a" /* FactorDetailPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_product_detail_product_detail__["a" /* ProductDetailPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_add_to_basket_add_to_basket__["a" /* AddToBasketPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_cash_out_cash_out__["a" /* CashOutPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_increase_credit_increase_credit__["a" /* IncreaseCreditPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_category_list_category_list__["a" /* CategoryListPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_basket_basket__["a" /* BasketPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_factor_payment_factor_payment__["a" /* FactorPaymentPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-to-basket/add-to-basket.module#AddToBasketPageModule', name: 'AddToBasketPage', segment: 'add-to-basket', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cash-out/cash-out.module#CashOutPageModule', name: 'CashOutPage', segment: 'cash-out', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/basket/basket.module#BasketPageModule', name: 'BasketPage', segment: 'basket', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category-list/category-list.module#CategoryListPageModule', name: 'CategoryListPage', segment: 'category-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirm-code/confirm-code.module#ConfirmCodePageModule', name: 'ConfirmCodePage', segment: 'confirm-code', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/factor-detail/factor-detail.module#FactorDetailPageModule', name: 'FactorDetailPage', segment: 'factor-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/factor-payment/factor-payment.module#FactorPaymentPageModule', name: 'FactorPaymentPage', segment: 'factor-payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/increase-credit/increase-credit.module#IncreaseCreditPageModule', name: 'IncreaseCreditPage', segment: 'increase-credit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/more/more.module#MorePageModule', name: 'MorePage', segment: 'more', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-detail/product-detail.module#ProductDetailPageModule', name: 'ProductDetailPage', segment: 'product-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shopping/shopping.module#ShoppingPageModule', name: 'ShoppingPage', segment: 'shopping', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_27_ng2_jalali_date_picker__["a" /* DpDatePickerModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_confirm_code_confirm_code__["a" /* ConfirmCodePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_shopping_shopping__["a" /* ShoppingPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_factor_detail_factor_detail__["a" /* FactorDetailPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_product_detail_product_detail__["a" /* ProductDetailPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_add_to_basket_add_to_basket__["a" /* AddToBasketPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_cash_out_cash_out__["a" /* CashOutPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_increase_credit_increase_credit__["a" /* IncreaseCreditPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_category_list_category_list__["a" /* CategoryListPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_basket_basket__["a" /* BasketPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_factor_payment_factor_payment__["a" /* FactorPaymentPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_31__shared_shared__["a" /* CarioApi */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_deeplinks__["a" /* Deeplinks */],
                __WEBPACK_IMPORTED_MODULE_32__providers_basket_data_basket_data__["a" /* BasketDataProvider */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_basket_data_basket_data__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDetailPage = /** @class */ (function () {
    function ProductDetailPage(navCtrl, navParams, carioApi, loadingCtrl, basketPro, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.carioApi = carioApi;
        this.loadingCtrl = loadingCtrl;
        this.basketPro = basketPro;
        this.toastCtrl = toastCtrl;
        this.count = 1;
        this.amount = 0;
        this.profit = 0;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.loadingPage = this.loadingCtrl.create({
            spinner: 'circles',
        });
        this.loadingPage.present();
        this.userType = localStorage.getItem('userType');
    }
    ProductDetailPage_1 = ProductDetailPage;
    ProductDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.pId = this.navParams.data.id;
        console.log(this.pId);
        this.carioApi.getApi('?shop=1&ROUTE=ROUTE_SHOP&ACTION=GET_PRODUCT_BY_ID&PRODUCT_ID=' + this.pId).then(function (data) {
            console.log(data);
            _this.product = data[0];
            _this.images = _this.product['Images'];
            _this.units = _this.product['Units'];
            _this.unitName = _this.units[0].UnitName;
            _this.unit = _this.units[0].UnitCoefficient;
            _this.amount = _this.product['SellPrice'];
            _this.sellP = _this.amount;
            _this.discount = _this.product['Discount'];
            _this.amount = _this.count * _this.unit * _this.sellP;
            if (_this.userType == 'repairman') {
                if (_this.product.ProductPrizeForRepairMan >= 0 && _this.product.ProductPrizeForRepairMan <= 100) {
                    _this.profit = _this.amount * _this.product.ProductPrizeForRepairMan / 100;
                }
                else {
                    _this.profit = _this.product.ProductPrizeForRepairMan;
                }
            }
            else {
                if (_this.product.ProductPrizeForShop >= 0 && _this.product.ProductPrizeForShop <= 100) {
                    _this.profit = _this.amount * _this.product.ProductPrizeForShop / 100;
                }
                else {
                    _this.profit = _this.product.ProductPrizeForShop;
                }
            }
            _this.amount -= _this.profit;
            _this.loadingPage.dismiss();
        }).catch(function (error) {
            console.log('error: ', error);
            _this.loadingPage.dismiss();
        });
    };
    ProductDetailPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    ProductDetailPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    ProductDetailPage.prototype.goItemDetail = function () {
        this.navCtrl.push(ProductDetailPage_1);
    };
    ProductDetailPage.prototype.getRadio = function (e, name) {
        console.log(e);
        //this.unitValue = e;
        this.unitName = name;
        console.log(this.unitName);
        this.amount = this.count * this.unit * this.sellP;
        if (this.discount >= 0 && this.discount <= 100) {
            this.profit = this.amount * this.discount / 100;
        }
        else {
            this.profit = this.amount - this.discount;
        }
        this.amount -= this.profit;
    };
    ProductDetailPage.prototype.addNumber = function () {
        this.count++;
        this.amount = this.count * this.unit * this.sellP;
        if (this.discount >= 0 && this.discount <= 100) {
            this.profit = this.amount * this.discount / 100;
        }
        else {
            this.profit = this.amount - this.discount;
        }
        this.amount -= this.profit;
    };
    ProductDetailPage.prototype.minusNumber = function () {
        if (this.count > 0) {
            this.count--;
            this.amount = this.count * this.unit * this.sellP;
            if (this.discount >= 0 && this.discount <= 100) {
                this.profit = this.amount * this.discount / 100;
            }
            else {
                this.profit = this.amount - this.discount;
            }
            this.amount -= this.profit;
        }
    };
    ProductDetailPage.prototype.addBasket = function () {
        //let newVal = parseInt(localStorage.getItem('bCount')) + 1;
        //this.basketCount = localStorage.setItem('bCount', `${newVal}`);
        //console.log(localStorage.getItem('bCount'));
        var newItem = {
            'id': this.product.ProductID,
            'name': this.product.ProductName,
            'unit': this.unit,
            'units': this.units,
            'amount': this.amount,
            'sellPrice': this.sellP,
            'discount': this.discount,
            'count': this.count * this.unit,
            'profit': this.profit
        };
        console.log(newItem);
        //this.basketPro.addToCart('newItem');
        this.basketPro.addToCart(newItem).then(function (data) {
            console.log('yessssss', data);
        });
        var toast = this.toastCtrl.create({
            message: 'با موفقیت به سبد خرید افزوده شد',
            duration: 3000,
            position: 'top',
            cssClass: 'success-toast',
            showCloseButton: true,
            closeButtonText: 'X'
        });
        toast.present();
        this.navCtrl.pop();
    };
    ProductDetailPage = ProductDetailPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-detail',template:/*ion-inline-start:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/product-detail/product-detail.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>لنت ترمز بوش</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="slide-wrapper">\n		<ion-slides pager="true" zoom="true" loop="true" speed="500"> <!-- *ngIf="offerSlider && offerSlider.length" [autoplay]="offerSlider.length > 1 ? 3000 : \'false\'"> -->\n		  	<ion-slide *ngFor="let img of images">\n		  		<img src="{{img.ProductImage}}">\n		  	</ion-slide>\n 		  	<ion-slide *ngIf="images?.length == 0">\n		  		<img src="assets/imgs/no-img.jpg">\n		  	</ion-slide>\n		</ion-slides>				\n	</div>\n	<div padding>\n		<div class="info-box">\n			<div class="top">\n				<img src="assets/imgs/lent.png">\n				<div>\n					<h3>{{product?.ProductName}}</h3>\n					<h6>راین گستر</h6>\n				</div>\n				<span>\n					<i *ngIf="userType == \'repairman\'">{{product?.ProductPrizeForRepairMan | number}} {{product?.ProductPrizeForRepairMan < 100 ? \'%\' : \'تومان\'}} </i>\n					<i *ngIf="userType != \'repairman\'">{{product?.ProductPrizeForShop | number}} {{product?.ProductPrizeForShop < 100 ? \'%\' : \'تومان\'}} </i>\n					<br>سود شما\n				</span>\n			</div>\n			<div class="bottom" padding>\n				<div>\n					<img src="assets/imgs/ruler.png">\n					<h4>واحد محصول</h4>\n					<ion-list radio-group [(ngModel)]="unit" class="select-unit">\n						<ion-item *ngFor="let un of units">\n						    <ion-label>{{un.UnitName}}</ion-label>\n						    <ion-radio value="{{un.UnitCoefficient}}" (ionSelect)="getRadio($event,un.UnitName)"></ion-radio>			\n						</ion-item>\n					</ion-list>\n 				</div>\n				<div>\n					<img src="assets/imgs/count.png">\n					<h4>تعداد مورد نظر</h4>\n					<div class="count-btn" *ngIf="product?.Enabled == 1">\n						<button ion-button (click)="addNumber()">+</button>\n						<ion-item>\n							<ion-input readonly [(ngModel)]="count" value=""></ion-input>\n							<ion-label dir="rtl">({{unitName}})</ion-label>\n						</ion-item>\n						<button ion-button (click)="minusNumber()">-</button>						\n					</div>\n					<div *ngIf="product?.Enabled == 0" ion-text color="red"><b>ناموجود</b></div>\n				</div>\n				<div>\n					<img src="assets/imgs/dolor.png">\n					<h4>پرداختی شما</h4>\n					<h6 ion-text color="redDark">{{(product?.Enabled == 1 ? amount : 0) | number}} تومان</h6>\n				</div>\n				<div>\n					<img src="assets/imgs/cart-white.png">\n					<h4>سود شما</h4>\n					<h6 ion-text color="green">\n						<!-- {{profit | number}} -->\n						<span *ngIf="userType == \'repairman\'"> {{(product?.ProductPrizeForRepairMan < 100 ? (product?.ProductPrizeForRepairMan * amount / 100) : product?.ProductPrizeForRepairMan) | number}} </span>\n						<span *ngIf="userType != \'repairman\'">{{(product?.ProductPrizeForShop < 100 ? (product?.ProductPrizeForShop * amount / 100) : product?.ProductPrizeForShop) | number}} </span> تومان\n					</h6>\n				</div>\n			</div>\n		</div>\n		<div class="about-box">\n			<h2>درباره محصول</h2>\n			<p>{{product?.LongDescription}}</p>\n		</div>\n<!-- 		<div class="similar-box">\n			<h2>محصولات مشابه</h2>\n			<div class="items-row">\n				<ion-card class="item-box">\n					<img src="assets/imgs/item.jpg" (click)="goItemDetail()">\n					<div>\n						<h3>لنت تزمز بوش<span>۶٪</span></h3>\n						<h6>راین گستر<span>موجود</span></h6>\n						<button ion-button outline color="orange">\n							<ion-icon name="cart"></ion-icon>\n							اضافه به سبد خرید\n						</button>\n					</div>\n				</ion-card>\n				<ion-card class="item-box">\n					<img src="assets/imgs/item.jpg" (click)="goItemDetail()">\n					<div>\n						<h3>لنت تزمز بوش<span>۶٪</span></h3>\n						<h6>راین گستر<span>موجود</span></h6>\n						<button ion-button outline color="orange">\n							<ion-icon name="cart"></ion-icon>\n							اضافه به سبد خرید\n						</button>\n					</div>\n				</ion-card>\n				<ion-card class="item-box">\n					<img src="assets/imgs/item.jpg" (click)="goItemDetail()">\n					<div>\n						<h3>لنت تزمز بوش<span>۶٪</span></h3>\n						<h6>راین گستر<span>موجود</span></h6>\n						<button ion-button outline color="orange">\n							<ion-icon name="cart"></ion-icon>\n							اضافه به سبد خرید\n						</button>\n					</div>\n				</ion-card>\n			</div>\n		</div>\n -->	</div>\n</ion-content>\n<ion-footer>\n	<button ion-button full color="brown" (click)="addBasket()" [disabled]="product?.Enabled == 0">\n		<ion-icon name="cart"></ion-icon>\n		اضافه به سبد خرید\n	</button>	\n</ion-footer>\n'/*ion-inline-end:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/product-detail/product-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared__["a" /* CarioApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_basket_data_basket_data__["a" /* BasketDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], ProductDetailPage);
    return ProductDetailPage;
    var ProductDetailPage_1;
}());

//# sourceMappingURL=product-detail.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirm_code_confirm_code__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, carioApi, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.carioApi = carioApi;
        this.toastCtrl = toastCtrl;
        this.phoneNumberValid = false;
        this.loading = false;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.checkLength = function (e) {
        if (e.length == 11) {
            this.phoneNumberValid = true;
        }
        else {
            this.phoneNumberValid = false;
        }
    };
    LoginPage.prototype.getCode = function () {
        var _this = this;
        this.loading = true;
        console.log('LoginPage');
        // let params = {
        // 	"ROUTE":  'LOGIN',
        // 	"ACTION": 'LOGIN',
        // 	"TEL":    this.phoneNumber,
        // 	"APP":    3
        // };
        var params = '?ROUTE=LOGIN&ACTION=LOGIN&TEL=' + this.phoneNumber + '&APP=3';
        console.log(params);
        this.carioApi.postApi(params).then(function (data) {
            var msg = data['MESSAGE'];
            console.log(data['MESSAGE']);
            _this.loading = false;
            if (msg == 'REGISTRATION_CODE') {
                var toast = _this.toastCtrl.create({
                    message: 'پیامک تایید برای شما ارسال شد',
                    duration: 3000,
                    position: 'top',
                    cssClass: 'success-toast',
                    showCloseButton: true,
                    closeButtonText: 'X'
                });
                toast.present();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__confirm_code_confirm_code__["a" /* ConfirmCodePage */], _this.phoneNumber);
            }
            else if (msg == 'ACCOUNT_NOT_ACTIVATED') {
                var toast = _this.toastCtrl.create({
                    message: 'این شماره در سیستم موجود نیست',
                    duration: 3000,
                    position: 'top',
                    cssClass: 'failed-toast',
                    showCloseButton: true,
                    closeButtonText: 'X'
                });
                toast.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'شماره موبایل صحیح نمی باشد',
                    duration: 3000,
                    position: 'top',
                    cssClass: 'failed-toast',
                    showCloseButton: true,
                    closeButtonText: 'X'
                });
                toast.present();
            }
        }).catch(function (error) {
            console.log('error: ', error);
            _this.loading = false;
        });
    };
    LoginPage.prototype.goRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/login/login.html"*/'<ion-content padding center>\n	<img class="logo" src="assets/imgs/logo.png">\n	<h3>ورود به حساب</h3>\n	<p>برای استفاده از خدمات فروشگاه و مشاهده تراکنش‌ها و سودها وارد حساب کاربری شوید.</p>\n	<ion-item>\n		<ion-label>\n			<ion-icon name="phone-portrait"></ion-icon>\n		</ion-label>\n		<ion-input type="tel" [(ngModel)]="phoneNumber" (ngModelChange)="checkLength($event)" placeholder="شماره همراه"></ion-input>\n	</ion-item>\n	<div class="has-btn">\n		<button ion-button color="green" [disabled]="!phoneNumberValid">\n			<span *ngIf="!loading" (click)="getCode()">ارسال پیامک تأیید</span>\n			<ion-spinner *ngIf="loading" color="white" name="bubbles"></ion-spinner>\n		</button>		\n	</div>\n	<a href="#" ion-text color="secondary" (click)="goRegister()">فرم درخواست عضویت</a>\n</ion-content>\n'/*ion-inline-end:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared__["a" /* CarioApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarioApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarioApi = /** @class */ (function () {
    function CarioApi(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.baseURL = 'http://app.cario.ir/index.php';
    }
    //  post API
    CarioApi.prototype.postApi = function (params) {
        var _this = this;
        var fullUrl = this.baseURL + params;
        console.log(fullUrl);
        return new Promise(function (resolve, reject) {
            _this.http.post(fullUrl, '')
                .subscribe(function (res) {
                console.log(res);
                resolve(res.json());
            }, function (err) {
                var errorMessages = _this.errorHandling(err);
                reject(errorMessages);
            });
        });
    };
    //  get API
    CarioApi.prototype.getApi = function (apiUrl) {
        var _this = this;
        // this.setToken();
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseURL + apiUrl)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                var errorMessages = _this.errorHandling(err);
                reject(errorMessages);
            });
        });
    };
    //  checking user's phone number
    // postLogin(params) {
    // 	return this.postApi(this.baseURL,params);	
    // }
    // getAllCats(apiUrl) {
    // 	return this.getApi(this.baseURL + apiUrl);	
    // }
    CarioApi.prototype.errorHandling = function (err) {
        if (err.status == 0) {
            var toast = this.toastCtrl.create({
                message: 'بروز مشکل از سمت سرور',
                duration: 3000,
                position: 'top',
                cssClass: 'failed-toast',
                showCloseButton: true,
                closeButtonText: 'X'
            });
            toast.present();
        }
        else {
            switch (err) {
                case 'ACCOUNT_NOT_ACTIVATED':
                    var toast = this.toastCtrl.create({
                        message: 'این شماره قبلا در سیستم ثبت نشده',
                        duration: 3000,
                        position: 'top',
                        cssClass: 'failed-toast',
                        showCloseButton: true,
                        closeButtonText: 'X'
                    });
                    toast.present();
                case 0:
                    return { 'status': err.status, 'msg': err.json().message };
                case 404:
                    return { 'status': err.status, 'msg': err.json().message };
                case 406:
                    return { 'status': err.status, 'msg': err.json().message };
                case 403:
                    return { 'status': err.status, 'msg': err.json().message };
                case 401:
                    return { 'status': err.status, 'msg': err.json().message };
                case 405:
                    return { 'status': err.status, 'msg': err.json().message }; //'Method Not Allowed';
                case 500:
                    return { 'status': err.status, 'msg': err.json().message }; //'Server Error';
            }
        }
    };
    CarioApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* ToastController */]])
    ], CarioApi);
    return CarioApi;
}());

//# sourceMappingURL=cario-api.service.js.map

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 181,
	"./af.js": 181,
	"./ar": 182,
	"./ar-dz": 183,
	"./ar-dz.js": 183,
	"./ar-kw": 184,
	"./ar-kw.js": 184,
	"./ar-ly": 185,
	"./ar-ly.js": 185,
	"./ar-ma": 186,
	"./ar-ma.js": 186,
	"./ar-sa": 187,
	"./ar-sa.js": 187,
	"./ar-tn": 188,
	"./ar-tn.js": 188,
	"./ar.js": 182,
	"./az": 189,
	"./az.js": 189,
	"./be": 190,
	"./be.js": 190,
	"./bg": 191,
	"./bg.js": 191,
	"./bm": 192,
	"./bm.js": 192,
	"./bn": 193,
	"./bn.js": 193,
	"./bo": 194,
	"./bo.js": 194,
	"./br": 195,
	"./br.js": 195,
	"./bs": 196,
	"./bs.js": 196,
	"./ca": 197,
	"./ca.js": 197,
	"./cs": 198,
	"./cs.js": 198,
	"./cv": 199,
	"./cv.js": 199,
	"./cy": 200,
	"./cy.js": 200,
	"./da": 201,
	"./da.js": 201,
	"./de": 202,
	"./de-at": 203,
	"./de-at.js": 203,
	"./de-ch": 204,
	"./de-ch.js": 204,
	"./de.js": 202,
	"./dv": 205,
	"./dv.js": 205,
	"./el": 206,
	"./el.js": 206,
	"./en-au": 207,
	"./en-au.js": 207,
	"./en-ca": 208,
	"./en-ca.js": 208,
	"./en-gb": 209,
	"./en-gb.js": 209,
	"./en-ie": 210,
	"./en-ie.js": 210,
	"./en-il": 211,
	"./en-il.js": 211,
	"./en-nz": 212,
	"./en-nz.js": 212,
	"./eo": 213,
	"./eo.js": 213,
	"./es": 214,
	"./es-do": 215,
	"./es-do.js": 215,
	"./es-us": 216,
	"./es-us.js": 216,
	"./es.js": 214,
	"./et": 217,
	"./et.js": 217,
	"./eu": 218,
	"./eu.js": 218,
	"./fa": 219,
	"./fa.js": 219,
	"./fi": 220,
	"./fi.js": 220,
	"./fo": 221,
	"./fo.js": 221,
	"./fr": 222,
	"./fr-ca": 223,
	"./fr-ca.js": 223,
	"./fr-ch": 224,
	"./fr-ch.js": 224,
	"./fr.js": 222,
	"./fy": 225,
	"./fy.js": 225,
	"./gd": 226,
	"./gd.js": 226,
	"./gl": 227,
	"./gl.js": 227,
	"./gom-latn": 228,
	"./gom-latn.js": 228,
	"./gu": 229,
	"./gu.js": 229,
	"./he": 230,
	"./he.js": 230,
	"./hi": 231,
	"./hi.js": 231,
	"./hr": 232,
	"./hr.js": 232,
	"./hu": 233,
	"./hu.js": 233,
	"./hy-am": 234,
	"./hy-am.js": 234,
	"./id": 235,
	"./id.js": 235,
	"./is": 236,
	"./is.js": 236,
	"./it": 237,
	"./it.js": 237,
	"./ja": 238,
	"./ja.js": 238,
	"./jv": 239,
	"./jv.js": 239,
	"./ka": 240,
	"./ka.js": 240,
	"./kk": 241,
	"./kk.js": 241,
	"./km": 242,
	"./km.js": 242,
	"./kn": 243,
	"./kn.js": 243,
	"./ko": 244,
	"./ko.js": 244,
	"./ky": 245,
	"./ky.js": 245,
	"./lb": 246,
	"./lb.js": 246,
	"./lo": 247,
	"./lo.js": 247,
	"./lt": 248,
	"./lt.js": 248,
	"./lv": 249,
	"./lv.js": 249,
	"./me": 250,
	"./me.js": 250,
	"./mi": 251,
	"./mi.js": 251,
	"./mk": 252,
	"./mk.js": 252,
	"./ml": 253,
	"./ml.js": 253,
	"./mn": 254,
	"./mn.js": 254,
	"./mr": 255,
	"./mr.js": 255,
	"./ms": 256,
	"./ms-my": 257,
	"./ms-my.js": 257,
	"./ms.js": 256,
	"./mt": 258,
	"./mt.js": 258,
	"./my": 259,
	"./my.js": 259,
	"./nb": 260,
	"./nb.js": 260,
	"./ne": 261,
	"./ne.js": 261,
	"./nl": 262,
	"./nl-be": 263,
	"./nl-be.js": 263,
	"./nl.js": 262,
	"./nn": 264,
	"./nn.js": 264,
	"./pa-in": 265,
	"./pa-in.js": 265,
	"./pl": 266,
	"./pl.js": 266,
	"./pt": 267,
	"./pt-br": 268,
	"./pt-br.js": 268,
	"./pt.js": 267,
	"./ro": 269,
	"./ro.js": 269,
	"./ru": 270,
	"./ru.js": 270,
	"./sd": 271,
	"./sd.js": 271,
	"./se": 272,
	"./se.js": 272,
	"./si": 273,
	"./si.js": 273,
	"./sk": 274,
	"./sk.js": 274,
	"./sl": 275,
	"./sl.js": 275,
	"./sq": 276,
	"./sq.js": 276,
	"./sr": 277,
	"./sr-cyrl": 278,
	"./sr-cyrl.js": 278,
	"./sr.js": 277,
	"./ss": 279,
	"./ss.js": 279,
	"./sv": 280,
	"./sv.js": 280,
	"./sw": 281,
	"./sw.js": 281,
	"./ta": 282,
	"./ta.js": 282,
	"./te": 283,
	"./te.js": 283,
	"./tet": 284,
	"./tet.js": 284,
	"./tg": 285,
	"./tg.js": 285,
	"./th": 286,
	"./th.js": 286,
	"./tl-ph": 287,
	"./tl-ph.js": 287,
	"./tlh": 288,
	"./tlh.js": 288,
	"./tr": 289,
	"./tr.js": 289,
	"./tzl": 290,
	"./tzl.js": 290,
	"./tzm": 291,
	"./tzm-latn": 292,
	"./tzm-latn.js": 292,
	"./tzm.js": 291,
	"./ug-cn": 293,
	"./ug-cn.js": 293,
	"./uk": 294,
	"./uk.js": 294,
	"./ur": 295,
	"./ur.js": 295,
	"./uz": 296,
	"./uz-latn": 297,
	"./uz-latn.js": 297,
	"./uz.js": 296,
	"./vi": 298,
	"./vi.js": 298,
	"./x-pseudo": 299,
	"./x-pseudo.js": 299,
	"./yo": 300,
	"./yo.js": 300,
	"./zh-cn": 301,
	"./zh-cn.js": 301,
	"./zh-hk": 302,
	"./zh-hk.js": 302,
	"./zh-tw": 303,
	"./zh-tw.js": 303
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 404;

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_basket_data_basket_data__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_deeplinks__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, deeplinks, carioApi, app, alertCtrl) {
        var _this = this;
        this.deeplinks = deeplinks;
        this.carioApi = carioApi;
        this.app = app;
        this.alertCtrl = alertCtrl;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //statusBar.styleDefault();
            //statusBar.overlaysWebView(true);
            statusBar.backgroundColorByHexString('#5085bb');
            splashScreen.hide();
            // this.carioApi.getApi('?shop=1&ROUTE=ROUTE_SHOP&ACTION=SHOP_INIT&USER_ID=1&SESSION=c63c7861a2671659e3a5a123f10be97ec0c3ac8941e9741a15e2b8f7c351654b').then( data => {
            //   this.initData = data;
            //   console.log('dataaaa',this.initData);
            // }).catch((error: any) => {
            //   console.log('error: ',error);
            // });
            _this.deeplinks.route({
                '/payment': __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
            }).subscribe(function (match) {
                // match.$route - the route we matched, which is the matched entry from the arguments to route()
                // match.$args - the args passed in the link
                // match.$link - the full link data
                console.log('Successfully matched route', match);
            }, function (nomatch) {
                // nomatch.$link - the full link data
                console.error('Got a deeplink that didn\'t match', nomatch);
            });
            _this.isOldUser = localStorage.getItem('session');
            //this.basketCount = localStorage.setItem('bCount', '0');
            //console.log(this.isOldUser);
            if (_this.isOldUser) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
            }
        });
        platform.registerBackButtonAction(function () {
            var nav = app.getActiveNavs()[0];
            var activeView = nav.getActive();
            // if(activeView.name === "DashboardPage" || activeView.name === "ShoppingPage" || activeView.name === "HistoryPage" || activeView.name === "MorePage") {
            //   const alert = this.alertCtrl.create({
            //       title: 'خروج از برنامه',
            //       message: 'آیا میخواهید از برنامه خارج شوید؟',
            //       buttons: [{
            //           text: 'لغو',
            //           role: 'cancel',
            //           handler: () => {
            //               console.log('Application exit prevented!');
            //           }
            //       },{
            //           text: 'تایید',
            //           handler: () => {
            //               platform.exitApp(); // Close this application
            //           }
            //       }]
            //   });
            //   alert.present();
            // } else {
            if (activeView.name === "DashboardPage" || activeView.name === "ShoppingPage" || activeView.name === "HistoryPage" || activeView.name === "MorePage") {
                var alert_1 = _this.alertCtrl.create({
                    title: 'خروج از برنامه',
                    message: 'آیا میخواهید از برنامه خارج شوید؟',
                    buttons: [{
                            text: 'لغو',
                            role: 'cancel',
                            handler: function () {
                                console.log('Application exit prevented!');
                            }
                        }, {
                            text: 'تایید',
                            handler: function () {
                                platform.exitApp(); // Close this application
                            }
                        }]
                });
                alert_1.present();
            }
            else if (nav.canGoBack()) {
                nav.pop();
            }
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/m.hajavi/Desktop/main-project/Cario/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/m.hajavi/Desktop/main-project/Cario/src/app/app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_7__providers_basket_data_basket_data__["a" /* BasketDataProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_deeplinks__["a" /* Deeplinks */],
            __WEBPACK_IMPORTED_MODULE_6__shared_shared__["a" /* CarioApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jalali_moment__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jalali_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jalali_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_basket_data_basket_data__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_detail_product_detail__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BasketPage = /** @class */ (function () {
    function BasketPage(navCtrl, navParams, carioApi, basketPro, alertCtrl, storage, loadingCtrl, toastCtrl, iab) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.carioApi = carioApi;
        this.basketPro = basketPro;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.iab = iab;
        // basketCount;
        this.pMethod = 'online';
        this.profit = 0;
        this.sum = 0;
        this.fAmount = 0;
        this.datePickerConfig = {
            format: 'jYYYY/jM/jD',
            disableKeypress: true,
            allowMultiSelect: false,
            min: __WEBPACK_IMPORTED_MODULE_3_jalali_moment__(),
        };
        //showItem:any;
        this.chequeSelected = false;
        this.orderItemsArray = [];
        this.orderItems = '';
        this.fastDelivery = false;
        this.fDelivery = 0;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.loadingPage = this.loadingCtrl.create({
            spinner: 'circles',
        });
        this.loadingPage.present();
        this.userId = localStorage.getItem('userId');
        this.userSession = localStorage.getItem('session');
        this.carioApi.getApi('?shop=1&ROUTE=ROUTE_SHOP&ACTION=SHOP_INIT&USER_ID=' + this.userId + '&SESSION=' + this.userSession).then(function (data) {
            _this.shopInit = data;
            console.log('dataaaa', _this.shopInit);
            _this.loadingPage.dismiss();
            _this.datePickerConfig['max'] = __WEBPACK_IMPORTED_MODULE_3_jalali_moment__().add(parseInt(_this.shopInit.PaymentOptions.chequeDate), 'day');
            console.log(_this.datePickerConfig['max']);
        }).catch(function (error) {
            console.log('error: ', error);
            _this.loadingPage.dismiss();
        });
    }
    BasketPage.prototype.ionViewDidLoad = function () {
    };
    BasketPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // this.basketPro.favoriteFilm(newItem).then((data) => {
        //      console.log('yessssss', data);
        //    });
        this.fAmount = 0;
        this.profit = 0;
        this.orderItemsArray = [];
        this.storage.get('cartItem').then(function (val) {
            if (val) {
                _this.basketData = val;
                //console.log(this.basketData);
                for (var i = 0; i < _this.basketData.length; i++) {
                    _this.fAmount += _this.basketData[i].amount;
                    _this.profit += _this.basketData[i].profit;
                    _this.orderItemsArray.push(_this.basketData[i].id + '-' + _this.basketData[i].count);
                }
                _this.sum = _this.fAmount + _this.profit;
                //console.log('fff',this.orderItemsArray);
            }
        });
        this.tabBarElement.style.display = 'none';
    };
    BasketPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    BasketPage.prototype.close = function (d) {
        d.api.close();
    };
    BasketPage.prototype.getRadio = function (e) {
        console.log('method:', e);
        if (e == "cheque") {
            this.chequeSelected = true;
        }
        else {
            this.chequeSelected = false;
            //this.chequeDate = '0000-00-00';
        }
    };
    BasketPage.prototype.goToBankPage = function () {
        var _this = this;
        console.log(this.fAmount);
        var cDate;
        var finalAmount = this.fAmount;
        if (this.pMethod == "cheque") {
            if (this.chequeDate == undefined) {
                var toast = this.toastCtrl.create({
                    message: 'درج تاریخ چک الزامی است',
                    duration: 3000,
                    position: 'top',
                    cssClass: 'failed-toast',
                    showCloseButton: true,
                    closeButtonText: 'X'
                });
                toast.present();
            }
            else {
                cDate = this.chequeDate.format('YYYY-MM-DD');
            }
        }
        else {
            cDate = '0000-00-00';
        }
        if (this.pMethod == "online") {
            finalAmount -= this.sum * 0.02;
            // console.log(finalAmount);
        }
        if (this.fastDelivery == true) {
            var fee = this.shopInit.FastDelivery.Fee;
            // console.log(fee , finalAmount);
            finalAmount += fee;
            // console.log(finalAmount);
            this.fDelivery = 1;
        }
        this.orderItems = this.orderItemsArray.join('_');
        console.log(this.orderItems);
        var url = '?shop=1&ROUTE=ROUTE_SHOP&ACTION=SHOP_REGISTER_ORDER&USER_ID=' + this.userId + '&SESSION=' + this.userSession + '&ADDRESS=address&COMMENT=comments&AMOUNT=' + this.sum + '&FINAL_AMOUNT=' + finalAmount + '&ORDER_ITEMS=' + this.orderItems + '&PAYMENT_METHOD=' + this.pMethod + '&CHEQUE_DATE=' + cDate + '&APP=3&ONLINE_FIRST=' + this.shopInit.PaymentOptions.onlineFirst + '&FAST_DELIVERY=' + this.fDelivery + '&FAST_DELIVERY_FEE=' + this.shopInit.FastDelivery.Fee + '&FAST_DELIVERY_DATE=null';
        console.log(url);
        var loading = this.loadingCtrl.create({
            spinner: 'circles',
            content: '... در حال ارسال اطلاعات'
        });
        loading.present();
        this.carioApi.getApi(url).then(function (data) {
            console.log(data);
            if (data['STATE'] === 'SUCCESS') {
                console.log(finalAmount);
                if (_this.pMethod == 'online') {
                    var orderId = data['ORDER_ID'];
                    var url_1 = 'http://app.cario.ir/index.php?shop=1&ROUTE=ROUTE_SHOP&ACTION=SHOP_PAYMENT&USER_ID=' + _this.userId + '&SESSION=' + _this.userSession + '&ORDER_ID=' + orderId;
                    var browser_1 = _this.iab.create(url_1, '_system', { location: 'yes' });
                    _this.basketPro.clearCart();
                    loading.dismiss();
                    setTimeout(function () {
                        window.location.reload();
                    }, 3000);
                    browser_1.on('loadstart').subscribe(function (event) {
                        console.log('loadstart', event);
                        var closeUrl = 'cario://payment';
                        if (event.url == closeUrl) {
                            browser_1.close(); //This will close InAppBrowser Automatically when closeUrl Started
                        }
                    });
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: 'ارسال موفق اطلاعات',
                        duration: 3000,
                        position: 'top',
                        cssClass: 'success-toast',
                        showCloseButton: true,
                        closeButtonText: 'X'
                    });
                    toast.present();
                    loading.dismiss();
                    _this.basketPro.clearCart();
                    _this.navCtrl.pop();
                }
                ;
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'بروز خطا هنگام ارسال اطلاعات',
                    duration: 3000,
                    position: 'top',
                    cssClass: 'failed-toast',
                    showCloseButton: true,
                    closeButtonText: 'X'
                });
                toast.present();
                loading.dismiss();
            }
        }).catch(function (error) {
            console.log('error: ', error);
            loading.dismiss();
        });
    };
    BasketPage.prototype.goToProduct = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__product_detail_product_detail__["a" /* ProductDetailPage */], { 'id': id });
    };
    BasketPage.prototype.removeItem = function (item, index) {
        var _this = this;
        console.log(index);
        var alert = this.alertCtrl.create({
            message: 'آیا می خواهید این آیتم از سبد خرید شما حذف شود؟',
            buttons: [
                {
                    text: 'لغو',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'تایید',
                    handler: function () {
                        _this.basketPro.removeFromCart(index).then(function (data) {
                            console.log('yessssss', data);
                            _this.ionViewWillEnter();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    BasketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-basket',template:/*ion-inline-start:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/basket/basket.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>سبد خرید ({{basketCount}} قلم کالا)</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<h3 *ngIf="orderItemsArray.length == 0" center>سبد خرید شما خالی است.</h3>\n	<div *ngIf="orderItemsArray.length != 0">\n		<div class="payment-box">\n			<div class="top">\n				<div>\n					<div class="img-wrapper">\n						<img src="assets/imgs/cart.png">\n					</div>\n					<h4><span>{{(pMethod == \'online\' ? (fAmount * (1 - 0.02) + (fastDelivery * shopInit?.FastDelivery.Fee)) : fAmount + (fastDelivery * shopInit?.FastDelivery.Fee)) | number}}</span>تومان</h4>\n					<h5>مجموع سبد خرید</h5>\n				</div>\n				<div>\n					<div class="img-wrapper">\n						<img src="assets/imgs/wallet.png">\n					</div>\n					<h4><span>{{(pMethod == \'online\' ? (profit + (fAmount * 0.02)) : profit) | number}}</span>تومان</h4>\n					<h5>بازگشت به کیف پول</h5>\n				</div>\n			</div>\n			<h6>\n				<ion-icon name="alert-outline"></ion-icon>\n				بعد از صحت گزینه های انتخاب شده و انتخاب نحوه پرداخت، گزینه "ثبت نهایی" را انتخاب کنید\n			</h6>\n			<ion-list radio-group [(ngModel)]="pMethod">\n				<ion-item *ngIf="shopInit?.PaymentOptions.online">\n				    <ion-label>پرداخت نقد آنلاین (۲ درصد سود بیشتر)</ion-label>\n				    <ion-radio [value]="\'online\'" (ionSelect)="getRadio($event)"></ion-radio>\n				</ion-item>\n				<ion-item *ngIf="shopInit?.PaymentOptions.cash">\n				    <ion-label>پرداخت نقد در محل</ion-label>\n				    <ion-radio [value]="\'cash\'" (ionSelect)="getRadio($event)"></ion-radio>\n				</ion-item>\n				<ion-item *ngIf="shopInit?.PaymentOptions.cheque">\n				    <ion-label>پرداخت چکی</ion-label>\n				    <ion-radio [value]="\'cheque\'" (ionSelect)="getRadio($event)"></ion-radio>	\n				</ion-item>\n			</ion-list>\n			<div class="date-picker" *ngIf="chequeSelected">\n				<ion-label>تاریخ چک: </ion-label>\n			  	<dp-date-picker #dayPicker\n				   dir="rtl"\n				   [(ngModel)]="chequeDate"\n				   mode="day"\n				   placeholder="تاریخ چک را وارد نمایید ..."\n				   theme="dp-material"\n				   [config]="datePickerConfig"> \n				</dp-date-picker>\n				<button ion-button class="close-calendar" (click)="close(dayPicker)" color="secondary">\n					<ion-icon name="close"></ion-icon>\n			    </button>\n				<p center ion-text color="red">{{shopInit?.PaymentOptions.onlineFirst}} % از مبلغ باید به صورت نقد پرداخت شود.</p>\n			</div>\n			<ion-list>\n				<ion-item class="checkbox">\n					<ion-label>تحویل فوری (حداکثر تا {{shopInit?.FastDelivery.AtLeast}} {{shopInit?.FastDelivery.TimeUnit == \'Day\' ? \'روز کاری\' : \'ساعت\'}})<br>هزینه: {{shopInit?.FastDelivery.Fee | number}} تومان</ion-label>\n					<ion-checkbox [(ngModel)]="fastDelivery"></ion-checkbox>\n				</ion-item>\n			</ion-list>\n			<button class="payment-btn" ion-button full color="greenBlue" (click)="goToBankPage()">ثبت نهایی <!-- (انتقال به درگاه بانک) --></button>\n		</div>\n		<h3>محصولات اضافه شده به سبد: </h3>\n		<ion-card class="basket-item" *ngFor="let item of basketData; let i=index ">\n			<span class="remove-item" (click)="removeItem(item,i)">\n				<ion-icon name="trash"></ion-icon>\n			</span>\n			<div (click)="goToProduct(item.id)"><!-- (click)="showBox()"> -->\n				<img src="assets/imgs/lent.png">\n				<div class="top">\n					<h4>{{item.name}}</h4>\n					<p>راین گستر</p>\n				</div>\n				<div class="bottom">\n					<div>\n						<ion-icon name="list"></ion-icon>\n						<b>{{item.count}} عدد</b> (قیمت واحد: {{item.sellPrice | number}} تومان)		\n					</div>\n					<div class="columns">\n						<span>\n							<img src="assets/imgs/cart.png">\n							<b>{{(item.sellPrice * item.count) | number}}</b> تومان\n						</span>\n						<span>\n							<img src="assets/imgs/wallet.png">\n							<b>{{item.profit | number}}</b> تومان\n						</span>\n						<span>\n							<i *ngIf="userType == \'repairman\'">{{item.ProductPrizeForRepairMan | number}} {{item.ProductPrizeForRepairMan < 100 ? \'%\' : \'تومان\'}} </i>\n							<i *ngIf="userType != \'repairman\'">{{item.ProductPrizeForShop | number}} {{item.ProductPrizeForShop < 100 ? \'%\' : \'تومان\'}} </i>\n							<br>سود شما\n						</span>				\n					</div>\n				</div>\n			</div>\n	<!-- 		<div class="hidden-box">\n				<div>\n					<img src="assets/imgs/ruler.png">\n					<h4>واحد محصول</h4>\n	<!- 					<div class="select-btn">\n						<button ion-button color="green">عدد</button>\n						<button ion-button color="green" disabled="true">جعبه</button>		\n					</div>\n	->\n					<ion-list radio-group [(ngModel)]="unit" class="select-unit">\n						<ion-item *ngFor="let un of units">\n						    <ion-label>{{un.UnitName}}</ion-label>\n						    <ion-radio value="{{un.UnitCoefficient}}" (ionSelect)="getRadio($event,un.UnitName)"></ion-radio>			\n						</ion-item>\n					</ion-list>\n					</div>\n				<div>\n					<img src="assets/imgs/count.png">\n					<h4>تعداد مورد نظر</h4>\n					<div class="count-btn">\n						<button ion-button (click)="addNumber()">+</button>\n						<ion-item>\n							<ion-input readonly [(ngModel)]="count" value=""></ion-input>\n							<ion-label>{{unitName}}</ion-label>\n						</ion-item>\n						<button ion-button (click)="minusNumber()">-</button>						\n					</div>\n				</div>\n				<div>\n					<img src="assets/imgs/dolor.png">\n					<h4>پرداختی شما</h4>\n					<h6 ion-text color="redDark">{{amount}} تومان</h6>\n				</div>\n				<div>\n					<img src="assets/imgs/cart-white.png">\n					<h4>سود شما</h4>\n					<h6 ion-text color="green">{{profit}} تومان</h6>\n				</div>\n			</div>\n	 -->	\n		</ion-card>			\n	</div>\n</ion-content>\n<a ion-button class="contact-us-btn no-tab" href="tel:+982128428855">\n	<ion-icon name="call"></ion-icon>\n</a>		\n'/*ion-inline-end:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/basket/basket.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_6__providers_basket_data_basket_data__["a" /* BasketDataProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__shared_shared__["a" /* CarioApi */],
            __WEBPACK_IMPORTED_MODULE_6__providers_basket_data_basket_data__["a" /* BasketDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], BasketPage);
    return BasketPage;
}());

//# sourceMappingURL=basket.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_detail_product_detail__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_to_basket_add_to_basket__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryPage = /** @class */ (function () {
    function CategoryPage(navCtrl, navParams, loadingCtrl, modalCtrl, carioApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.carioApi = carioApi;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.loadingPage = this.loadingCtrl.create({
            spinner: 'circles',
        });
        this.loadingPage.present();
        this.userType = localStorage.getItem('userType');
    }
    CategoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.catId = this.navParams.data.id;
        this.catName = this.navParams.data.name;
        console.log(this.navParams.data);
        this.carioApi.getApi('?shop=1&ROUTE=ROUTE_SHOP&ACTION=GET_PRODUCT_BY_CATEGORY&CATEGORY_ID=' + this.catId + '&START=0&LIMIT=1000').then(function (data) {
            _this.catItems = data;
            console.log(_this.catItems);
            _this.loadingPage.dismiss();
        });
    };
    CategoryPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    CategoryPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    CategoryPage.prototype.goItemDetail = function ($event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__product_detail_product_detail__["a" /* ProductDetailPage */], { id: item.ProductID });
    };
    CategoryPage.prototype.goToBasket = function ($event, item) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__add_to_basket_add_to_basket__["a" /* AddToBasketPage */], { id: item.ProductID });
        modal.present();
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/category/category.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>دسته بندی <strong>{{catName}}</strong></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n	<div class="i-wrapper" *ngIf="catItems?.length > 0">\n		<ion-card class="box-item" *ngFor="let item of catItems; let i=index ">\n			<img src="{{item.Images[0] ? item.Images[0]?.ProductImage : \'assets/imgs/no-img.jpg\'}}" (click)="goItemDetail($event,item)">\n			<span class="item-badge">\n				<i *ngIf="userType == \'repairman\'">{{item.ProductPrizeForRepairMan | number}} {{item.ProductPrizeForRepairMan < 100 ? \'%\' : \'تومان\'}} </i>\n				<i *ngIf="userType != \'repairman\'">{{item.ProductPrizeForShop | number}} {{item.ProductPrizeForShop < 100 ? \'%\' : \'تومان\'}} </i>\n			</span>\n			<div>\n				<h3 (click)="goItemDetail($event,item)">{{item.ProductName}}</h3>\n				<h6>راین گستر<span>{{item.Enabled == 1 ? \'موجود\' : \'نا موجود\'}}</span></h6>\n				<button ion-button outline color="orange" (click)="goToBasket($event,item)">\n					<ion-icon name="cart"></ion-icon>\n					اضافه به سبد خرید\n				</button>\n			</div>\n		</ion-card>\n	</div>\n	<div *ngIf="catItems?.length == 0" center>\n		<h4>هیچ آیتمی در این دسته بندی موجود نیست</h4>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/category/category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared__["a" /* CarioApi */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddToBasketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_basket_data_basket_data__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddToBasketPage = /** @class */ (function () {
    function AddToBasketPage(navCtrl, navParams, viewCtrl, carioApi, loadingCtrl, basketPro, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.carioApi = carioApi;
        this.loadingCtrl = loadingCtrl;
        this.basketPro = basketPro;
        this.toastCtrl = toastCtrl;
        this.count = 1;
        this.amount = 0;
        this.profit = 0;
        this.loadingPage = this.loadingCtrl.create({
            spinner: 'circles',
        });
        this.loadingPage.present();
        this.userType = localStorage.getItem('userType');
    }
    AddToBasketPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.pId = this.navParams.data['id'];
        console.log(this.pId);
        this.carioApi.getApi('?shop=1&ROUTE=ROUTE_SHOP&ACTION=GET_PRODUCT_BY_ID&PRODUCT_ID=' + this.pId).then(function (data) {
            console.log(data);
            _this.product = data[0];
            _this.images = _this.product['Images'];
            _this.units = _this.product['Units'];
            _this.unitName = _this.units[0].UnitName;
            _this.unit = _this.units[0].UnitCoefficient;
            _this.amount = _this.product['SellPrice'];
            _this.sellP = _this.amount;
            _this.discount = _this.product['Discount'];
            _this.amount = _this.count * _this.unit * _this.sellP;
            if (_this.userType == 'repairman') {
                if (_this.product.ProductPrizeForRepairMan >= 0 && _this.product.ProductPrizeForRepairMan <= 100) {
                    _this.profit = _this.amount * _this.product.ProductPrizeForRepairMan / 100;
                }
                else {
                    _this.profit = _this.product.ProductPrizeForRepairMan;
                }
            }
            else {
                if (_this.product.ProductPrizeForShop >= 0 && _this.product.ProductPrizeForShop <= 100) {
                    _this.profit = _this.amount * _this.product.ProductPrizeForShop / 100;
                }
                else {
                    _this.profit = _this.product.ProductPrizeForShop;
                }
            }
            _this.amount -= _this.profit;
            _this.loadingPage.dismiss();
        }).catch(function (error) {
            console.log('error: ', error);
            _this.loadingPage.dismiss();
        });
    };
    AddToBasketPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    AddToBasketPage.prototype.getRadio = function (e, name) {
        console.log(e);
        //this.unitValue = e;
        this.unitName = name;
        console.log(this.unitName);
        this.amount = this.count * this.unit * this.sellP;
        if (this.discount >= 0 && this.discount <= 100) {
            this.profit = this.amount * this.discount / 100;
        }
        else {
            this.profit = this.amount - this.discount;
        }
        this.amount -= this.profit;
    };
    AddToBasketPage.prototype.addNumber = function () {
        this.count++;
        this.amount = this.count * this.unit * this.sellP;
        if (this.discount >= 0 && this.discount <= 100) {
            this.profit = this.amount * this.discount / 100;
        }
        else {
            this.profit = this.amount - this.discount;
        }
        this.amount -= this.profit;
    };
    AddToBasketPage.prototype.minusNumber = function () {
        if (this.count > 0) {
            this.count--;
            this.amount = this.count * this.unit * this.sellP;
            if (this.discount >= 0 && this.discount <= 100) {
                this.profit = this.amount * this.discount / 100;
            }
            else {
                this.profit = this.amount - this.discount;
            }
            this.amount -= this.profit;
        }
    };
    AddToBasketPage.prototype.addBasket = function () {
        //let newVal = parseInt(localStorage.getItem('bCount')) + 1;
        //this.basketCount = localStorage.setItem('bCount', `${newVal}`);
        //console.log(localStorage.getItem('bCount'));
        var newItem = {
            'id': this.product.ProductID,
            'name': this.product.ProductName,
            'unit': this.unit,
            'units': this.units,
            'amount': this.amount,
            'sellPrice': this.sellP,
            'discount': this.discount,
            'count': this.count * this.unit,
            'profit': this.profit
        };
        console.log(newItem);
        //this.basketPro.addToCart('newItem');
        this.basketPro.addToCart(newItem).then(function (data) {
            console.log('yessssss', data);
        });
        var toast = this.toastCtrl.create({
            message: 'با موفقیت به سبد خرید افزوده شد',
            duration: 3000,
            position: 'top',
            cssClass: 'success-toast',
            showCloseButton: true,
            closeButtonText: 'X'
        });
        toast.present();
        this.viewCtrl.dismiss();
    };
    AddToBasketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-to-basket',template:/*ion-inline-start:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/add-to-basket/add-to-basket.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>لنت ترمز بوش</ion-title>\n	<ion-icon name="md-close" class="close" color="white" (click)="closeModal()"></ion-icon>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n	<div class="slide-wrapper">\n		<ion-slides pager="true" zoom="true" loop="true" speed="500"> <!-- *ngIf="offerSlider && offerSlider.length" [autoplay]="offerSlider.length > 1 ? 3000 : \'false\'"> -->\n		  	<ion-slide *ngFor="let img of images">\n		  		<img src="{{img.ProductImage}}">\n		  	</ion-slide>\n 		  	<ion-slide *ngIf="images?.length == 0">\n		  		<img src="assets/imgs/no-img.jpg">\n		  	</ion-slide>\n		</ion-slides>				\n	</div>\n	<div padding>\n		<div class="info-box">\n			<div class="top">\n				<img src="assets/imgs/lent.png">\n				<div>\n					<h3>{{product?.ProductName}}</h3>\n					<h6>راین گستر</h6>\n				</div>\n				<span>\n					<i *ngIf="userType == \'repairman\'">{{product?.ProductPrizeForRepairMan | number}} {{product?.ProductPrizeForRepairMan < 100 ? \'%\' : \'تومان\'}} </i>\n					<i *ngIf="userType != \'repairman\'">{{product?.ProductPrizeForShop | number}} {{product?.ProductPrizeForShop < 100 ? \'%\' : \'تومان\'}} </i>\n					<br>سود شما\n				</span>\n			</div>\n			<div class="bottom" padding>\n				<div>\n					<img src="assets/imgs/ruler.png">\n					<h4>واحد محصول</h4>\n					<ion-list radio-group [(ngModel)]="unit" class="select-unit">\n						<ion-item *ngFor="let un of units">\n						    <ion-label>{{un.UnitName}}</ion-label>\n						    <ion-radio value="{{un.UnitCoefficient}}" (ionSelect)="getRadio($event,un.UnitName)"></ion-radio>			\n						</ion-item>\n					</ion-list>\n				</div>\n				<div>\n					<img src="assets/imgs/count.png">\n					<h4>تعداد مورد نظر</h4>\n					<div class="count-btn" *ngIf="product?.Enabled == 1">\n						<button ion-button (click)="addNumber()">+</button>\n						<ion-item>\n							<ion-input readonly [(ngModel)]="count" value=""></ion-input>\n							<ion-label dir="rtl">({{unitName}})</ion-label>\n						</ion-item>\n						<button ion-button (click)="minusNumber()">-</button>						\n					</div>\n					<div *ngIf="product?.Enabled == 0" ion-text color="red"><b>ناموجود</b></div>\n				</div>\n				<div>\n					<img src="assets/imgs/dolor.png">\n					<h4>پرداختی شما</h4>\n					<h6 ion-text color="redDark">{{(product?.Enabled == 1 ? amount : 0) | number}} تومان</h6>\n				</div>\n				<div>\n					<img src="assets/imgs/cart-white.png">\n					<h4>سود شما</h4>\n					<h6 ion-text color="green">\n						<span *ngIf="userType == \'repairman\'">{{(product?.ProductPrizeForRepairMan < 100 ? (product?.ProductPrizeForRepairMan * amount / 100) : product?.ProductPrizeForRepairMan)  | number}} </span>\n						<span *ngIf="userType != \'repairman\'">{{(product?.ProductPrizeForShop < 100 ? (product?.ProductPrizeForShop * amount / 100) : product?.ProductPrizeForShop)  | number}} </span> تومان\n					</h6>\n				</div>\n			</div>\n		</div>\n	</div>\n</ion-content>\n<ion-footer>\n	<button ion-button full outline color="orange" (click)="addBasket()" [disabled]="product?.Enabled == 0">\n		<ion-icon name="cart"></ion-icon>\n		اضافه به سبد خرید\n	</button>	\n</ion-footer>\n'/*ion-inline-end:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/add-to-basket/add-to-basket.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_basket_data_basket_data__["a" /* BasketDataProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared__["a" /* CarioApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_basket_data_basket_data__["a" /* BasketDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], AddToBasketPage);
    return AddToBasketPage;
}());

//# sourceMappingURL=add-to-basket.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FactorDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__factor_payment_factor_payment__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FactorDetailPage = /** @class */ (function () {
    function FactorDetailPage(navCtrl, navParams, carioApi, modalCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.carioApi = carioApi;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.loadingPage = this.loadingCtrl.create({
            spinner: 'circles',
        });
        this.loadingPage.present();
        this.userId = localStorage.getItem('userId');
        this.userSession = localStorage.getItem('session');
        this.userType = localStorage.getItem('userType');
    }
    FactorDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.factorNo = this.navParams.data.factorNo;
        this.factorIsPaied = this.navParams.data.factorType;
        // console.log('thissssss:',this.navParams.data);
        this.carioApi.getApi('?shop=1&ROUTE=ROUTE_SHOP&ACTION=GET_INVOICE_BY_ID&USER_ID=' + this.userId + '&SESSION=' + this.userSession + '&ORDER_ID=' + this.factorNo).then(function (data) {
            _this.factors = data[0];
            _this.factorItems = data[0]['Items'];
            console.log(_this.factors);
            console.log(_this.factorItems);
            _this.loadingPage.dismiss();
        }).catch(function (error) {
            console.log('error: ', error);
            _this.loadingPage.dismiss();
        });
    };
    FactorDetailPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    FactorDetailPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    FactorDetailPage.prototype.payFactor = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__factor_payment_factor_payment__["a" /* FactorPaymentPage */], { 'factor': this.factors });
        modal.onDidDismiss(function (response) {
            if (response == undefined) {
                _this.navCtrl.popToRoot();
            }
        });
        modal.present();
    };
    FactorDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-factor-detail',template:/*ion-inline-start:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/factor-detail/factor-detail.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>فاکتور {{factorNo}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<h3><b>{{factorItems?.length}} قلم کالا</b> در این فاکتور ثبت شده است:</h3>\n	<ion-card class="factor-box" padding *ngFor="let item of factorItems">\n		<img src="assets/imgs/lent.png">\n		<div class="top">\n			<h4>{{item.ProductName}}</h4>\n			<p>{{item.ShopKeeperName}}</p>\n		</div>\n		<div class="bottom">\n			<div>\n				<ion-icon name="list"></ion-icon>\n				<b>{{item.Count}} عدد</b> (قیمت واحد: {{item.SellPrice | number}} تومان)		\n			</div>\n			<div class="columns">\n				<span>\n					<img src="assets/imgs/cart.png">\n					<b>{{item.SellPrice * item.Count | number}}</b> تومان\n				</span>\n				<span>\n					<img src="assets/imgs/wallet.png">\n					<b>{{item.UserIncome | number}}</b> تومان\n				</span>\n				<span>\n					<i *ngIf="userType == \'shop\'">{{item.ProductPrizeForShop}}{{item.ProductPrizeForShop > 100 ? \'تومان\' : \'٪\'}}</i>\n					<i *ngIf="userType == \'repairman\'">{{item.ProductPrizeForRepairMan | number}}{{item.ProductPrizeForRepairMan > 100 ? \'تومان\' : \'٪\'}}</i>\n					<br>سود شما\n				</span>				\n			</div>\n		</div>\n	</ion-card>			\n\n</ion-content>\n<ion-footer *ngIf="(factors?.IsPaied == 0 && factors?.Items.length > 0)">\n	<button ion-button full color="greenBlue" (click)="payFactor()">\n		پرداخت (مجموع مبلغ: {{factors?.FinalPrice | number}} تومان)\n	</button>\n</ion-footer>'/*ion-inline-end:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/factor-detail/factor-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared__["a" /* CarioApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], FactorDetailPage);
    return FactorDetailPage;
}());

//# sourceMappingURL=factor-detail.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncreaseCreditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IncreaseCreditPage = /** @class */ (function () {
    function IncreaseCreditPage(navCtrl, navParams, viewCtrl, carioApi, toastCtrl, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.carioApi = carioApi;
        this.toastCtrl = toastCtrl;
        this.iab = iab;
        this.selected = false;
        this.userId = localStorage.getItem('userId');
        this.userSession = localStorage.getItem('session');
    }
    IncreaseCreditPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad IncreaseCreditPage');
    };
    IncreaseCreditPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    IncreaseCreditPage.prototype.getRadio = function (e) {
        console.log('purse:', e);
        this.selected = true;
    };
    IncreaseCreditPage.prototype.checkData = function (e) {
        this.myPurse = e;
        this.cash = this.myPurse;
    };
    IncreaseCreditPage.prototype.addCredit = function () {
        console.log(this.cash);
        var toast = this.toastCtrl.create({
            message: 'در حال انتقال به صفحه درگاه بانکی',
            duration: 3000,
            position: 'top',
            cssClass: 'success-toast',
            showCloseButton: true,
            closeButtonText: 'X'
        });
        toast.present();
        var url = 'http://app.cario.ir/index.php?ROUTE=ROUTE_PURSE&ACTION=PURSE_ADD&APP=1&USER_ID=' + this.userId + '&SESSION=' + this.userSession + '&AMOUNT=' + this.cash;
        var browser = this.iab.create(url, '_system', { location: 'yes' });
        browser.on('loadstart').subscribe(function (event) {
            var closeUrl = 'cario://payment';
            if (event.url == closeUrl) {
                browser.close();
            }
        });
        this.viewCtrl.dismiss();
        //console.log(url);
        //    this.carioApi.getApi('').then( data => {
        //        console.log(data);
        // 	let toast = this.toastCtrl.create({
        // 		message: 'درخواست شما با موفقیت ارسال شد',
        // 		duration: 3000,
        // 		position: 'top',
        // 		cssClass: 'success-toast'
        // 	}); 
        // 	toast.present();
        // }).catch((error: any) => {
        //        console.log('error: ',error);
        // 	let toast = this.toastCtrl.create({
        // 		message: 'بروز مشکل',
        // 		duration: 3000,
        // 		position: 'top',
        // 		cssClass: 'failed-toast'
        // 	}); 
        // 	toast.present();
        //    });
    };
    IncreaseCreditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-increase-credit',template:/*ion-inline-start:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/increase-credit/increase-credit.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>افزایش اعتبار</ion-title>\n    <ion-icon name="md-close" class="close" color="white" (click)="closeModal()"></ion-icon>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h6>مبلغ مورد نظر را انتخاب یا وارد کنید و با انتخاب گزینه‌ی “افزایش اعتبار” به درگاه بانکی متصل می شوید.</h6>\n	<ion-list radio-group [(ngModel)]="cash">\n		<ion-item>\n		    <ion-label>50,000 تومان</ion-label>\n		    <ion-radio [value]="50000" (ionSelect)="getRadio($event)"></ion-radio>			\n		</ion-item>\n		<ion-item>\n		    <ion-label>100,000 تومان</ion-label>\n		    <ion-radio [value]="100000" (ionSelect)="getRadio($event)"></ion-radio>			\n		</ion-item>\n		<ion-item>\n		    <ion-label>200,000 تومان</ion-label>\n		    <ion-radio [value]="200000" (ionSelect)="getRadio($event)"></ion-radio>			\n		</ion-item>\n		<ion-item>\n		    <ion-label>500,000 تومان</ion-label>\n		    <ion-radio [value]="500000" (ionSelect)="getRadio($event)"></ion-radio>			\n		</ion-item>\n		<ion-item>\n		    <ion-label>1,000,000 تومان</ion-label>\n		    <ion-radio [value]="1000000" (ionSelect)="getRadio($event)"></ion-radio>			\n		</ion-item>\n		<ion-item>\n		    <ion-radio [value]="myPurse" (ionSelect)="getRadio($event)">\n		    	<ion-item></ion-item>\n		    </ion-radio>			\n		</ion-item>\n		<ion-item class="input-box">\n			<ion-input type="tel" [(ngModel)]="myPurse" (ngModelChange)="checkData($event)"></ion-input>\n		</ion-item>\n	</ion-list>\n</ion-content>\n\n<ion-footer>\n	<button ion-button full outline color="red" [disabled]="!selected && !myPurse" (click)="addCredit()">\n		<!-- <ion-icon name="bag"></ion-icon> -->\n		افزایش اعتبار\n	</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/increase-credit/increase-credit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared__["a" /* CarioApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], IncreaseCreditPage);
    return IncreaseCreditPage;
}());

//# sourceMappingURL=increase-credit.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_shopping__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__history_history__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__more_more__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';




var TabsPage = /** @class */ (function () {
    function TabsPage(platform, alertCtrl) {
        // 	this.platform.registerBackButtonAction( () => {
        //  		this.exitApp();
        // 	});
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__shopping_shopping__["a" /* ShoppingPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__history_history__["a" /* HistoryPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__more_more__["a" /* MorePage */];
        // }
        // exitApp() {
        //     let alert = this.alertCtrl.create({
        //       message: 'آیا می خواهید از کاریو خارج شوید؟',
        //       buttons: [
        //         {
        //           text: 'لغو',
        //           role: 'cancel',
        //           handler: () => {
        //             console.log('Cancel clicked');
        //           }
        //         },
        //         {
        //           text: 'تایید',
        //           handler: () => {
        // 			this.platform.exitApp();
        //           }
        //         }
        //       ]
        //     });
        //     alert.present();
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/tabs/tabs.html"*/'<ion-tabs color="primary">\n  <ion-tab [root]="tab1Root" tabTitle="داشبورد" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="فروشگاه" tabIcon="cart"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="تاریخچه خرید" tabIcon="archive"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="بیشتر" tabIcon="more"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/m.hajavi/Desktop/main-project/Cario/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[350]);
//# sourceMappingURL=main.js.map