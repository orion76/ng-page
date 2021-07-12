(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/www/ng-page/src/main.ts */"zUnb");


/***/ }),

/***/ "0gde":
/*!**************************************************!*\
  !*** ./src/app/content/page-main/section-one.ts ***!
  \**************************************************/
/*! exports provided: SectionOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionOneComponent", function() { return SectionOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "7zfz");




function SectionOneComponent_p_card_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", block_r1.title, "");
} }
function SectionOneComponent_p_card_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const block_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", block_r1.description, " ");
} }
function SectionOneComponent_p_card_5_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", link_r7.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r7.description);
} }
function SectionOneComponent_p_card_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SectionOneComponent_p_card_5_ng_template_1_Template, 2, 1, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SectionOneComponent_p_card_5_ng_template_2_Template, 1, 1, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0414\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0432 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SectionOneComponent_p_card_5_div_6_Template, 6, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.cardClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", block_r1.content);
} }
const sectionHeader = {
    title: 'Политические организации',
    description: `
  Политические организации, имеющие в своих главных концепциях принципы самоуправления обществом(государством)
  посредством прямой демократии.
  `,
};
/**
 * Движение за Прямую Демократию
 */
const block1 = {
    title: 'Движение за Прямую Демократию',
    description: `
Сообщество неравнодушных к судьбе своего государства граждан,
объеденившихся вокруг цели внедрения принципов самоуправления и народовластия, как в упраление
государством в целом, так и активного участия граждан в самоуправлении на местах.
Таких как местные администрации, товарищества собственников жилья(ТСЖ) и т.п.
`,
    content: [
        {
            title: 'Движение за прямую демократию - Я/Мы гражданин.',
            url: 'https://vk.com/ppd.komi',
            description: 'Группа с социальной сети "ВКонтакте"'
        },
        {
            title: 'Телеграмм-чат "Территория свободы"',
            url: 'https://t.me/terrtitory_of_freedom',
            description: 'Публичный чат сообщества в мессенджере "Телеграмм"'
        },
        {
            title: 'Телеграм-канал',
            url: 'https://t.me/pramayademokratia',
            description: ''
        },
        {
            title: 'ТикТок',
            url: 'https://www.tiktok.com/@pryamayademocratia',
            description: 'Группа в социальной сети "ТикТок"'
        }
    ]
};
/**
 * Движение Прямая Демократия / Party of Pure Democracy
 */
const block2 = {
    title: 'Движение Прямая Демократия / Party of Pure Democracy',
    description: `
Цель собравшихся здесь — построение правового государства, создание гражданского общества, развитие демократии и самоуправления.
Наш инструмент — прямая демократия, когда активные граждане совместно обсуждают, принимают и исполняют важные решения, а также несут ответственность за них на любом этапе, подлинное народовластие.
Мы придерживаемся таких принципов в группе, и мы стремимся к внедрению такой формы управления на всех уровнях власти.
      `,
    content: [
        {
            title: 'Facebook',
            url: 'https://www.facebook.com/groups/313687725397308/',
            description: 'Наше Движение за непосредственную власть народа. '
        },
    ]
};
const blocks = [
    block1,
    block2
];
class SectionOneComponent {
    constructor() {
        this.cardClass = 'page-column';
        this.header = sectionHeader;
        this.blocks = blocks;
    }
    ngOnInit() {
    }
}
SectionOneComponent.ɵfac = function SectionOneComponent_Factory(t) { return new (t || SectionOneComponent)(); };
SectionOneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionOneComponent, selectors: [["section-one"]], decls: 6, vars: 3, consts: [[1, "section-title"], [1, "section-description"], [1, "section-content"], [3, "class", 4, "ngFor", "ngForOf"], ["pTemplate", "title"], ["pTemplate", "subtitle"], [1, "block-links"], ["class", "block-link-wrapper", 4, "ngFor", "ngForOf"], [1, "title-content"], [1, "block-link-wrapper"], [1, "block-link", 3, "href"], ["aria-hidden", "true", 1, "pi", "pi-link"], [1, "block-link-description", "p-card-subtitle"]], template: function SectionOneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SectionOneComponent_p_card_5_Template, 7, 3, "p-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.header.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.header.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blocks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], primeng_card__WEBPACK_IMPORTED_MODULE_2__["Card"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"]], encapsulation: 2 });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _content_main_menu_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content/main-menu.content */ "Z/v9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/menubar */ "b1Ni");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _page_page_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/page-main.component */ "UFjN");
/* harmony import */ var primeng_scrolltop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/scrolltop */ "JD6B");






function AppComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const metaDescription = `Движение за Прямую Демократию. Обзор интернет-ресурсов, посвященных Прямой демократии, народовластию и самоуправлению`;
const metaKeywords = `прямая демократия, народовластие, самоуправление`;
class AppComponent {
    constructor() {
        this.items = _content_main_menu_content__WEBPACK_IMPORTED_MODULE_0__["mainMenuItems"];
        // constructor(private meta: Meta) {
        // this.meta.addTag({name: 'description', content: metaDescription});
        // this.meta.addTag({name: 'keywords', content: metaKeywords});
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 2, consts: [["role", "banner", 1, "toolbar", 3, "model"], ["pTemplate", "start"], ["role", "main", 1, "content"], [1, "page"], [3, "threshold"], [1, "logo-container"], ["src", "/assets/logo.png", 1, "logo"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-menubar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_ng_template_1_Template, 2, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "page-main", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "p-scrollTop", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("model", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("threshold", 400);
    } }, directives: [primeng_menubar__WEBPACK_IMPORTED_MODULE_2__["Menubar"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"], _page_page_main_component__WEBPACK_IMPORTED_MODULE_4__["PageMainComponent"], primeng_scrolltop__WEBPACK_IMPORTED_MODULE_5__["ScrollTop"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "UFjN":
/*!*********************************************!*\
  !*** ./src/app/page/page-main.component.ts ***!
  \*********************************************/
/*! exports provided: PageMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageMainComponent", function() { return PageMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/divider */ "lUkA");
/* harmony import */ var _content_page_main_section_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/page-main/section-one */ "0gde");
/* harmony import */ var _content_page_main_section_two__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content/page-main/section-two */ "eiFb");
/* harmony import */ var _content_page_main_section_three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../content/page-main/section-three */ "eK3b");





class PageMainComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PageMainComponent.ɵfac = function PageMainComponent_Factory(t) { return new (t || PageMainComponent)(); };
PageMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageMainComponent, selectors: [["page-main"]], decls: 13, vars: 0, consts: [[1, "header"], [1, "page-title"], [1, "description"], [1, "content"], [1, "section-wrapper", "section-one"], ["id", "section-one", 1, "section", "column-2"], [1, "section-wrapper", "section-two"], ["id", "section-two", 1, "section", "column-2"], [1, "section-wrapper", "section-three"], ["id", "section-three", 1, "section", "column-2"]], template: function PageMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041F\u0440\u044F\u043C\u0430\u044F \u0434\u0435\u043C\u043E\u043A\u0440\u0430\u0442\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u041F\u0440\u044F\u043C\u0430\u044F \u0434\u0435\u043C\u043E\u043A\u0440\u0430\u0442\u0438\u044F - \u0444\u043E\u0440\u043C\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043E\u043C, \u043F\u0440\u0438 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0432\u0441\u0435 \u0437\u0430\u043A\u043E\u043D\u044B, \u0438\u043D\u0438\u0446\u0438\u0430\u0442\u0438\u0432\u044B \u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E\u0442\u0441\u044F \u043D\u0435\u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u0433\u0440\u0430\u0436\u0434\u0430\u043D\u0430\u043C\u0438, \u0447\u0435\u0440\u0435\u0437 \u0440\u0435\u0444\u0435\u0440\u0435\u043D\u0434\u0443\u043C\u044B \u0438 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u043D\u0438\u044F. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "section-one", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "section-two", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "section-three", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_divider__WEBPACK_IMPORTED_MODULE_1__["Divider"], _content_page_main_section_one__WEBPACK_IMPORTED_MODULE_2__["SectionOneComponent"], _content_page_main_section_two__WEBPACK_IMPORTED_MODULE_3__["SectionTwoComponent"], _content_page_main_section_three__WEBPACK_IMPORTED_MODULE_4__["SectionThreeComponent"]], encapsulation: 2 });


/***/ }),

/***/ "Z/v9":
/*!**********************************************!*\
  !*** ./src/app/content/main-menu.content.ts ***!
  \**********************************************/
/*! exports provided: mainMenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainMenuItems", function() { return mainMenuItems; });
const mainMenuItems = [
    { label: 'Политические организации', routerLink: '/', fragment: 'section-one' },
    { label: 'Социальные сети', routerLink: '/', fragment: 'section-two' },
    { label: 'Блогеры,СМИ', routerLink: '/', fragment: 'section-three' },
];


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _page_page_main_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/page-main.module */ "vlN/");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/menubar */ "b1Ni");
/* harmony import */ var primeng_scrolltop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/scrolltop */ "JD6B");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_megamenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/megamenu */ "BAkx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [
    // {provide: DATA_SERVICE, useClass: DataService}
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            primeng_menubar__WEBPACK_IMPORTED_MODULE_4__["MenubarModule"],
            primeng_scrolltop__WEBPACK_IMPORTED_MODULE_5__["ScrollTopModule"],
            _page_page_main_module__WEBPACK_IMPORTED_MODULE_3__["PageMainModule"],
            primeng_api__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            primeng_megamenu__WEBPACK_IMPORTED_MODULE_8__["MegaMenuModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        primeng_menubar__WEBPACK_IMPORTED_MODULE_4__["MenubarModule"],
        primeng_scrolltop__WEBPACK_IMPORTED_MODULE_5__["ScrollTopModule"],
        _page_page_main_module__WEBPACK_IMPORTED_MODULE_3__["PageMainModule"],
        primeng_api__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        primeng_megamenu__WEBPACK_IMPORTED_MODULE_8__["MegaMenuModule"]] }); })();


/***/ }),

/***/ "eK3b":
/*!****************************************************!*\
  !*** ./src/app/content/page-main/section-three.ts ***!
  \****************************************************/
/*! exports provided: SectionThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionThreeComponent", function() { return SectionThreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "7zfz");




function SectionThreeComponent_p_card_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", block_r1.title, "");
} }
function SectionThreeComponent_p_card_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const block_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", block_r1.description, " ");
} }
function SectionThreeComponent_p_card_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", link_r7.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r7.description);
} }
function SectionThreeComponent_p_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SectionThreeComponent_p_card_3_ng_template_1_Template, 2, 1, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SectionThreeComponent_p_card_3_ng_template_2_Template, 1, 1, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SectionThreeComponent_p_card_3_div_3_Template, 6, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.cardClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", block_r1.content);
} }
const sectionHeader = {
    title: 'Блогеры',
    description: 'Видео-ролики, лекции, дискуссии',
};
const blocks = [
    {
        title: 'Youtube',
        description: 'Блогеры Ютуба',
        content: [
            {
                title: 'Лекс Кравецкий',
                url: 'https://www.youtube.com/channel/UChaVzaxNKR-I6i43Qkacw7A',
                description: 'Блогер, писатель, программист, теоретик Прямой демократии.'
            }
        ]
    },
];
class SectionThreeComponent {
    constructor() {
        this.cardClass = 'page-column';
        this.header = sectionHeader;
        this.blocks = blocks;
    }
    ngOnInit() {
    }
}
SectionThreeComponent.ɵfac = function SectionThreeComponent_Factory(t) { return new (t || SectionThreeComponent)(); };
SectionThreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionThreeComponent, selectors: [["section-three"]], decls: 4, vars: 2, consts: [[1, "section-title"], [1, "section-content"], [3, "class", 4, "ngFor", "ngForOf"], ["pTemplate", "title"], ["pTemplate", "subtitle"], ["class", "block-links", 4, "ngFor", "ngForOf"], [1, "block-links"], [1, "block-link", 3, "href"], ["aria-hidden", "true", 1, "pi", "pi-link"], [1, "block-link-description"]], template: function SectionThreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SectionThreeComponent_p_card_3_Template, 4, 3, "p-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.header.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blocks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], primeng_card__WEBPACK_IMPORTED_MODULE_2__["Card"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"]], encapsulation: 2 });


/***/ }),

/***/ "eiFb":
/*!**************************************************!*\
  !*** ./src/app/content/page-main/section-two.ts ***!
  \**************************************************/
/*! exports provided: SectionTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTwoComponent", function() { return SectionTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "7zfz");




function SectionTwoComponent_p_card_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](block_r1.title);
} }
function SectionTwoComponent_p_card_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", link_r6.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r6.description);
} }
function SectionTwoComponent_p_card_5_ng_template_3_Template(rf, ctx) { }
function SectionTwoComponent_p_card_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SectionTwoComponent_p_card_5_ng_template_1_Template, 2, 1, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SectionTwoComponent_p_card_5_div_2_Template, 6, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SectionTwoComponent_p_card_5_ng_template_3_Template, 0, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.cardClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", block_r1.content);
} }
const sectionHeader = {
    title: 'Социальные сети',
    description: `
  Группы и сообщества в социальных сетях, имеющие в своих главных концепциях принципы самоуправления
  обществом(государством) посредством прямой демократии.
  `,
};
const blocks = [
    {
        title: 'ВКонтакте',
        description: '',
        content: [
            {
                title: 'Прямая демократия в России',
                url: 'https://vk.com/public137033037',
                description: 'Сообщество российский приверженцов Прямой демократии'
            },
            {
                title: 'Проект 13',
                url: 'https://vk.com/public45436767',
                description: 'Обсуждение проблем и перспектив Прямой демократии'
            },
            {
                title: 'Прямая демократия. Электронная демократия.',
                url: 'https://vk.com/priam_dem',
                description: 'Группа для объединения сторонников и продвижения прямой демократии.'
            },
            {
                title: 'Круглый стол прямой демократии',
                url: 'https://vk.com/club42349963',
                description: 'Целью движения является развитие теории Прямой Демократии.'
            }
        ]
    },
];
class SectionTwoComponent {
    constructor() {
        this.cardClass = 'page-column';
        this.header = sectionHeader;
        this.blocks = blocks;
    }
    ngOnInit() {
    }
}
SectionTwoComponent.ɵfac = function SectionTwoComponent_Factory(t) { return new (t || SectionTwoComponent)(); };
SectionTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionTwoComponent, selectors: [["section-two"]], decls: 6, vars: 3, consts: [[1, "section-title"], [1, "section-description"], [1, "section-content"], [3, "class", 4, "ngFor", "ngForOf"], ["pTemplate", "title"], ["class", "block-links", 4, "ngFor", "ngForOf"], ["pTemplate", "footer"], [1, "block-links"], [1, "block-link", 3, "href"], ["aria-hidden", "true", 1, "pi", "pi-link"], [1, "block-link-description"]], template: function SectionTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SectionTwoComponent_p_card_5_Template, 4, 3, "p-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.header.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.header.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blocks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], primeng_card__WEBPACK_IMPORTED_MODULE_2__["Card"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"]], encapsulation: 2 });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
const config = {
    anchorScrolling: 'enabled',
    useHash: false
};
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, config)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vlN/":
/*!******************************************!*\
  !*** ./src/app/page/page-main.module.ts ***!
  \******************************************/
/*! exports provided: PageMainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageMainModule", function() { return PageMainModule; });
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var _content_page_main_section_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/page-main/section-one */ "0gde");
/* harmony import */ var _page_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-main.component */ "UFjN");
/* harmony import */ var _content_page_main_section_two__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content/page-main/section-two */ "eiFb");
/* harmony import */ var _content_page_main_section_three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../content/page-main/section-three */ "eK3b");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/panel */ "7CaW");
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/divider */ "lUkA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class PageMainModule {
}
PageMainModule.ɵfac = function PageMainModule_Factory(t) { return new (t || PageMainModule)(); };
PageMainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: PageMainModule });
PageMainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_0__["CardModule"],
            primeng_panel__WEBPACK_IMPORTED_MODULE_5__["PanelModule"],
            primeng_divider__WEBPACK_IMPORTED_MODULE_6__["DividerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](PageMainModule, { declarations: [_page_main_component__WEBPACK_IMPORTED_MODULE_2__["PageMainComponent"],
        _content_page_main_section_one__WEBPACK_IMPORTED_MODULE_1__["SectionOneComponent"],
        _content_page_main_section_two__WEBPACK_IMPORTED_MODULE_3__["SectionTwoComponent"],
        _content_page_main_section_three__WEBPACK_IMPORTED_MODULE_4__["SectionThreeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
        primeng_card__WEBPACK_IMPORTED_MODULE_0__["CardModule"],
        primeng_panel__WEBPACK_IMPORTED_MODULE_5__["PanelModule"],
        primeng_divider__WEBPACK_IMPORTED_MODULE_6__["DividerModule"]], exports: [_page_main_component__WEBPACK_IMPORTED_MODULE_2__["PageMainComponent"],
        _content_page_main_section_one__WEBPACK_IMPORTED_MODULE_1__["SectionOneComponent"],
        _content_page_main_section_two__WEBPACK_IMPORTED_MODULE_3__["SectionTwoComponent"],
        _content_page_main_section_three__WEBPACK_IMPORTED_MODULE_4__["SectionThreeComponent"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map