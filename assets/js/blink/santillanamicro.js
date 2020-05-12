(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SantillanaPlatformUI"] = factory();
	else
		root["SantillanaPlatformUI"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
$(window).on('load',function(){var neutralBase='#2A495d';var neutralMedium=neutralBase+'77';var neutralLight=neutralBase+'44';var smBlueBase='#1F7B9E';var smBlueLight=smBlueBase+'77';var checkVisibilityProcess={};// BK-20554 Cambio de estilo de las Gráficas del alumno.
if(typeof charts!=='undefined'){if(charts.ejercicios){charts.ejercicios.canvas.scale.lineColor='#fff';charts.ejercicios.canvas.scale.textColor=neutralBase;charts.ejercicios.canvas.scale.gridLineColor=neutralLight;charts.ejercicios.canvas.datasets.forEach(function(data,index){var lightColor=index===0?neutralLight:smBlueLight,mediumColor=index===0?neutralMedium:smBlueBase,baseColor=index===0?neutralBase:smBlueBase;data.fillColor=lightColor;data.strokeColor=data.pointStrokeColor=mediumColor;data.pointColor=baseColor;data.points.forEach(function(point,subIndex){point.strokeColor=point._saved.strokeColor=mediumColor;point.fillColor=point._saved.fillColor=mediumColor;point.highlightFill=point._saved.highlightFill=lightColor;point.highlightStroke=point._saved.highlightStroke=mediumColor;});});charts.ejercicios.canvas.scale.draw();}// Para competencias
// if (charts.competencias) {
// 	charts.competencias.canvas.scale.textColor = '#000';
// 	charts.competencias.canvas.scale.draw();
// }
}blink.theme.downloadLMS=function(element){$(element).hide();$(".progress-msg").trigger("click");checkVisibilityProcess=setInterval(checkProgressBarVisibility,100);};function checkProgressBarVisibility(){if($("#santillanaDownloadButton").is(":visible")){clearInterval(checkVisibilityProcess);}else{if($("#offlinepc-progressbar-parent > div").css('visibility')=='hidden'){$("#santillanaDownloadButton").show();clearInterval(checkVisibilityProcess);}}}});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var RemoveSlashSlash=function(){function RemoveSlashSlash(){_classCallCheck(this,RemoveSlashSlash);}_createClass(RemoveSlashSlash,[{key:'init',value:function init(){//Calificaciones eliminar ## de la table
this.removeInCalificaciones();var _this=this;var temasTableObserver=new MutationObserver(function(){//do cool things
_this.removeInCalificaciones();});var temasTableDom=document.querySelector('.body_calificaciones .temas');if(temasTableDom){temasTableObserver.observe(temasTableDom,{attributes:true,childList:false,characterData:false,subtree:true});}}},{key:'removeInCalificaciones',value:function removeInCalificaciones(){var calificacionesTableTitle=document.querySelectorAll('.body_calificaciones .temas .subtemas .item.top .titulo');calificacionesTableTitle.forEach(function(titleItem){var titleString=titleItem.innerHTML;if(titleString.substr(0,2)==='##'){setTimeout(function(){titleItem.innerHTML=titleString.substr(2);},0);}});}}]);return RemoveSlashSlash;}();exports.default=RemoveSlashSlash;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Licencias=function(){function Licencias(){_classCallCheck(this,Licencias);}_createClass(Licencias,[{key:'init',value:function init(){this.duplicateSubmitButton();this.addClassToSearchInputParent();this.indicadoresDominioTransform();this.addClassToUsuariosParent();}},{key:'duplicateSubmitButton',value:function duplicateSubmitButton(){var originalButton=document.querySelector('#admin.admin.adminlist form .smenu .row .row .col-xs-12.r button.btn.btn-default');if(originalButton){var clonedButton=originalButton.cloneNode(true);var sMenuElementAll=document.querySelectorAll('#admin.admin.adminlist form .smenu');if(sMenuElementAll.length){var sMenuElement=sMenuElementAll[0];sMenuElement.appendChild(clonedButton);}}}},{key:'addClassToSearchInputParent',value:function addClassToSearchInputParent(){var searchInputParent=document.querySelector('#admin.admin.adminlist .search');if(searchInputParent){searchInputParent.parentNode.classList.add('sm-text-container');}}},{key:'indicadoresDominioTransform',value:function indicadoresDominioTransform(){//Transofmra los filtros para poder darle estilos
if(document.querySelector('form#listadoEstandar .smenu input#buscadorcentro')){var ulElement=document.querySelector('form#listadoEstandar .smenu input#buscadorcentro').parentElement.parentElement;console.log(ulElement);console.log(ulElement.tagName);if(ulElement.tagName==='UL'){//Centro
var liElements=ulElement.querySelectorAll('li');var li1Text=liElements[0].innerHTML;var li2LabelElement=document.createElement('label');li2LabelElement.innerHTML=li1Text;liElements[1].insertBefore(li2LabelElement,liElements[1].firstChild);var li3Text=liElements[2].innerHTML;var li4LabelElement=document.createElement('label');li4LabelElement.innerHTML=li3Text;liElements[3].insertBefore(li4LabelElement,liElements[3].firstChild);var liXLabelElement=document.createElement('label');liElements[4].insertBefore(liXLabelElement,liElements[4].firstChild);liElements[2].remove();liElements[0].remove();ulElement.classList.add('sm-indicadores-dominio-filters');}}}},{key:'addClassToUsuariosParent',value:function addClassToUsuariosParent(){if(document.querySelector('form#listadoEstandar .smenu select#filtro5')){document.querySelector('form#listadoEstandar .smenu select#filtro5').parentElement.parentElement.classList.add('sm-usuarios-filter');}}}]);return Licencias;}();exports.default=Licencias;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var LegalText=function(){function LegalText(){_classCallCheck(this,LegalText);}_createClass(LegalText,[{key:'init',value:function init(){this.contentShadows();}},{key:'contentShadows',value:function contentShadows(){var contentBoxTermElement=document.querySelector('.content-wrapper>.content-box-terms');if(contentBoxTermElement){var contentWrapperContenido=contentBoxTermElement.parentElement;var shadowContentBox=document.createElement('div');shadowContentBox.classList.add('content-box-shadow');contentWrapperContenido.insertBefore(shadowContentBox,contentWrapperContenido.childNodes[0]);}}}]);return LegalText;}();exports.default=LegalText;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Portadas=function(){function Portadas(){_classCallCheck(this,Portadas);}_createClass(Portadas,[{key:'init',value:function init(){var alerta=document.querySelector('.alert.alert-warning.clase-sin-contenido');if(alerta){var codigo=alerta.nextElementSibling;if(alerta.nextElementSibling.classList.contains('codigo-clase')){codigo.parentNode.insertBefore(alerta,codigo.nextSibling);}}}}]);return Portadas;}();exports.default=Portadas;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Mensajes=function(){function Mensajes(){_classCallCheck(this,Mensajes);}_createClass(Mensajes,[{key:'init',value:function init(){// this.changeDefaultButtonsToPrimary();
this.addClassToIconsAndSubmitButtonContainerDiv();}// changeDefaultButtonsToPrimary(){
// 	const defaultButtonElements = document.querySelectorAll('#mensajes .btn.btn-default');
// 	const primaryButtonElements = document.querySelectorAll('#mensajes .btn.btn-primary');
// 	defaultButtonElements.forEach(element => {
// 		element.classList.remove('btn-default');
// 		element.classList.add('btn-primary');
// 	});
// 	primaryButtonElements.forEach(element => {
// 		element.classList.remove('btn-primary');
// 		element.classList.add('btn-default');
// 	});
// }
},{key:'addClassToIconsAndSubmitButtonContainerDiv',value:function addClassToIconsAndSubmitButtonContainerDiv(){var iconsElement=document.querySelector('#mensajes .mform.form-group .icons');if(iconsElement){var containerElement=iconsElement.parentNode;containerElement.classList.add('icons-and-submit');}}}]);return Mensajes;}();exports.default=Mensajes;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var FichaAlumno=function(){function FichaAlumno(){_classCallCheck(this,FichaAlumno);}_createClass(FichaAlumno,[{key:'init',value:function init(){this.insertDataAndNotasInADiv();}},{key:'insertDataAndNotasInADiv',value:function insertDataAndNotasInADiv(){var dataElement=document.querySelector('#ficha-alumno .header .data');var notasElement=document.querySelector('#ficha-alumno .header .notas');if(dataElement&&notasElement){var dataAndNotasElement=document.createElement('div');dataAndNotasElement.classList.add('data-and-notas');dataAndNotasElement.appendChild(dataElement);dataAndNotasElement.appendChild(notasElement);var fichaAlumnoHeaderElement=document.querySelector('#ficha-alumno .header');fichaAlumnoHeaderElement.appendChild(dataAndNotasElement);}}}]);return FichaAlumno;}();exports.default=FichaAlumno;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
  shave - Shave is a javascript plugin that truncates multi-line text within a html element based on set max height
  @version v2.5.9
  @link https://github.com/yowainwright/shave#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (jeffry.in)
  @license MIT
**/
function shave(target, maxHeight) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (typeof maxHeight === 'undefined' || isNaN(maxHeight)) throw Error('maxHeight is required');
  var els = typeof target === 'string' ? document.querySelectorAll(target) : target;
  if (!els) return;
  var character = opts.character || '&mldr;';
  var classname = opts.classname || 'js-shave';
  var spaces = typeof opts.spaces === 'boolean' ? opts.spaces : true;
  var charHtml = "<span class=\"js-shave-char\">".concat(character, "</span>");
  if (!('length' in els)) els = [els];

  for (var i = 0; i < els.length; i += 1) {
    var el = els[i];
    var styles = el.style;
    var span = el.querySelector(".".concat(classname));
    var textProp = el.textContent === undefined ? 'innerText' : 'textContent'; // If element text has already been shaved

    if (span) {
      // Remove the ellipsis to recapture the original text
      el.removeChild(el.querySelector('.js-shave-char'));
      el[textProp] = el[textProp]; // eslint-disable-line
      // nuke span, recombine text
    }

    var fullText = el[textProp];
    var words = spaces ? fullText.split(' ') : fullText; // If 0 or 1 words, we're done

    if (words.length < 2) continue; // Temporarily remove any CSS height for text height calculation

    var heightStyle = styles.height;
    styles.height = 'auto';
    var maxHeightStyle = styles.maxHeight;
    styles.maxHeight = 'none'; // If already short enough, we're done

    if (el.offsetHeight <= maxHeight) {
      styles.height = heightStyle;
      styles.maxHeight = maxHeightStyle;
      continue;
    } // Binary search for number of words which can fit in allotted height


    var max = words.length - 1;
    var min = 0;
    var pivot = void 0;

    while (min < max) {
      pivot = min + max + 1 >> 1; // eslint-disable-line no-bitwise

      el[textProp] = spaces ? words.slice(0, pivot).join(' ') : words.slice(0, pivot);
      el.insertAdjacentHTML('beforeend', charHtml);
      if (el.offsetHeight > maxHeight) max = pivot - 1;else min = pivot;
    }

    el[textProp] = spaces ? words.slice(0, max).join(' ') : words.slice(0, max);
    el.insertAdjacentHTML('beforeend', charHtml);
    var diff = spaces ? " ".concat(words.slice(max).join(' ')) : words.slice(max);
    var shavedText = document.createTextNode(diff);
    var elWithShavedText = document.createElement('span');
    elWithShavedText.classList.add(classname);
    elWithShavedText.style.display = 'none';
    elWithShavedText.appendChild(shavedText);
    el.insertAdjacentElement('beforeend', elWithShavedText);
    styles.height = heightStyle;
    styles.maxHeight = maxHeightStyle;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (shave);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var getNextSibling=function getNextSibling(elem,selector){// Get the next sibling element
var sibling=elem.nextElementSibling;// If there's no selector, return the first sibling
if(!selector)return sibling;// If the sibling matches our selector, use it
// If not, jump to the next sibling and continue the loop
while(sibling){if(sibling.matches(selector))return sibling;sibling=sibling.nextElementSibling;}};exports.default=getNextSibling;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _fGetNextSibling=__webpack_require__(8);var _fGetNextSibling2=_interopRequireDefault(_fGetNextSibling);var _shave=__webpack_require__(7);var _shave2=_interopRequireDefault(_shave);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var ContentBooks=function(){function ContentBooks(){_classCallCheck(this,ContentBooks);}_createClass(ContentBooks,[{key:'init',value:function init(){var _this2=this;this.contentListItemChangeMask();this.contentListItemTruncateTexts();window.addEventListener('resize',function(){return _this2.contentListItemTruncateTexts();});}},{key:'contentListItemChangeMask',value:function contentListItemChangeMask(){var _this=this;var bookListObserver=new MutationObserver(function(){_this.contentListItemChangeMaskUpdate();_this.contentListItemTruncateTexts();});var list=document.querySelector('.contenido .items');if(list){bookListObserver.observe(list,{attributes:false,childList:true,characterData:false});}this.contentListItemChangeMaskUpdate();}},{key:'contentListItemChangeMaskUpdate',value:function contentListItemChangeMaskUpdate(){var items=document.querySelectorAll('.contenido .items .wrap-img');if(items){_.forEach(items,function(item){var sibling=(0,_fGetNextSibling2.default)(item,'.wrap-info');if(sibling){item.querySelector('.wrap-mask').appendChild(sibling);}});}}},{key:'contentListItemTruncateTexts',value:function contentListItemTruncateTexts(){var _this3=this;var items=document.querySelectorAll('.contenido .items .wrap-img');if(items){_.forEach(items,function(item){_this3.contentListItemTruncateTextsItem(item);setTimeout(function(){_this3.contentListItemTruncateTextsItem(item);},600);});}}},{key:'contentListItemTruncateTextsItem',value:function contentListItemTruncateTextsItem(item){this.contentListItemTruncateTextsItemEl(item.querySelector('.titulo'),54,true);this.contentListItemTruncateTextsItemEl(item.querySelector('.descripcion'),20,true);this.contentListItemTruncateTextsItemEl(item.querySelector('.isbn'),20,false);}},{key:'contentListItemTruncateTextsItemEl',value:function contentListItemTruncateTextsItemEl(el,height,spaces){if(el){if(!el.getAttribute('data-shavedtext')){el.setAttribute('data-shavedtext',el.innerText);}else{el.innerText=el.getAttribute('data-shavedtext');}(0,_shave2.default)(el,height,{spaces:spaces});}}}]);return ContentBooks;}();exports.default=ContentBooks;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _contentBooks=__webpack_require__(9);var _contentBooks2=_interopRequireDefault(_contentBooks);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}// import ContentActivities from './_contentActivities';
var contentBooks=new _contentBooks2.default();// const contentActivities = new ContentActivities();
var Content=function(){function Content(){_classCallCheck(this,Content);}_createClass(Content,[{key:'init',value:function init(){this.contentSmenu();contentBooks.init();// contentActivities.init();
}},{key:'contentSmenu',value:function contentSmenu(){//Change dropdown butto from btn-default to btn-primary
var smenuDropdownButton=document.querySelector('#smenu button.btn-default');if(smenuDropdownButton){smenuDropdownButton.classList.remove('btn-default');smenuDropdownButton.classList.add('btn-primary');}}}]);return Content;}();exports.default=Content;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var elementsToShadow=['.content-wrapper>.contenido','.content-wrapper>#profile','.content-wrapper>#alumnos','.content-wrapper>#ejercicios','.content-wrapper>#ficha-alumno','.content-wrapper>#mensajes','.content-wrapper>#admin'];var GeneralContentShadow=function(){function GeneralContentShadow(){_classCallCheck(this,GeneralContentShadow);}_createClass(GeneralContentShadow,[{key:'init',value:function init(){this.contentShadows();}},{key:'contentShadows',value:function contentShadows(){elementsToShadow.forEach(function(elementSelector){var contentWrapperContenido=document.querySelector(elementSelector);if(contentWrapperContenido){var shadowContentBox=document.createElement('div');shadowContentBox.classList.add('content-box-shadow');contentWrapperContenido.insertBefore(shadowContentBox,contentWrapperContenido.childNodes[0]);}});}}]);return GeneralContentShadow;}();exports.default=GeneralContentShadow;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Footer=function(){function Footer(){_classCallCheck(this,Footer);}_createClass(Footer,[{key:'init',value:function init(){this.addFooterContainer();}},{key:'addFooterContainer',value:function addFooterContainer(){var contentWrapper=document.querySelector('.content-wrapper');var footerElement=document.querySelector('.content-wrapper>.footer');if(footerElement&&contentWrapper){var footerContainerElement=document.createElement('div');footerContainerElement.classList.add('footer-container');footerContainerElement.appendChild(footerElement);contentWrapper.appendChild(footerContainerElement);}}}]);return Footer;}();exports.default=Footer;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Header=function(){function Header(){_classCallCheck(this,Header);}_createClass(Header,[{key:'init',value:function init(){this.menuDesplegable();this.fondoPagina();this.mainNav();this.addBrand();// this.addOnScrollEvent();
// this.mainNavCheckIfNeedToAddBackground();
}},{key:'menuDesplegable',value:function menuDesplegable(){var _this2=this;//Menú desplegable
var menuButton=document.querySelector('#main-nav-launcher');//remove blink.theme.toggleMainNav()
$('#main-nav-launcher').unbind();$('#main-nav-launcher').click(function(){var windowWidth=window.innerWidth;if(windowWidth>=768){$("html, body").animate({scrollTop:0},300);}//If scroll is down, dont closes menu, only goes up
if(windowWidth>=768){if(!document.querySelector('#main-nav').classList.contains('open')||window.scrollY<50){blink.theme.toggleMainNav();}}else{blink.theme.toggleMainNav();}_this2.mainNavCheckIfIsOpenAndAddClass();});if(menuButton){// remove children
while(menuButton.firstChild){menuButton.removeChild(menuButton.firstChild);}//Add lines
var div1=document.createElement('div');var div2=document.createElement('div');var div3=document.createElement('div');menuButton.appendChild(div1);menuButton.appendChild(div2);menuButton.appendChild(div3);}}},{key:'fondoPagina',value:function fondoPagina(){var div=document.createElement('div');div.classList.add('sm-body-background');document.body.insertBefore(div,document.body.childNodes[0]);}},{key:'mainNav',value:function mainNav(){var mainNav=document.querySelector('#main-nav');var _this=this;if(mainNav){// const mainNavObserver = new MutationObserver(function (event) {
// 	_this.mainNavCheckIfIsOpenAndAddClass();
// });
// mainNavObserver.observe(mainNav, {
// 	attributes: true, 
// 	attributeFilter: ['class'],
// 	childList: false, 
// 	characterData: false
// });
this.mainNavCheckIfIsOpenAndAddClass();}}},{key:'mainNavCheckIfIsOpenAndAddClass',value:function mainNavCheckIfIsOpenAndAddClass(){var mainNav=document.querySelector('#main-nav');if(mainNav.classList.contains('open')){document.body.classList.add('main-mav--is-open');$("html, body").animate({scrollTop:0},300);}else{document.body.classList.remove('main-mav--is-open');}}// addOnScrollEvent(){
// 	document.addEventListener('scroll', this.mainNavCheckIfNeedToAddBackground);
// }
// mainNavCheckIfNeedToAddBackground(){
// 	const mainNav = document.querySelector('#main-nav');
// 	if(mainNav){
// 		const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
// 		if(scrollTop>68){
// 			mainNav.classList.add('main-nav--width-backgrounds');
// 		} else {
// 			mainNav.classList.remove('main-nav--width-backgrounds');
// 		}
// 	}
// }
},{key:'addBrand',value:function addBrand(){var navbarContainerDom=document.querySelector('div.navbar div.container');var logoDom=document.createElement('div');logoDom.classList.add('sm-platform-logo');navbarContainerDom.insertBefore(logoDom,navbarContainerDom.firstChild);}}]);return Header;}();exports.default=Header;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _header=__webpack_require__(13);var _header2=_interopRequireDefault(_header);var _footer=__webpack_require__(12);var _footer2=_interopRequireDefault(_footer);var _generalContentShadow=__webpack_require__(11);var _generalContentShadow2=_interopRequireDefault(_generalContentShadow);var _content=__webpack_require__(10);var _content2=_interopRequireDefault(_content);var _fichaAlumno=__webpack_require__(6);var _fichaAlumno2=_interopRequireDefault(_fichaAlumno);var _mensajes=__webpack_require__(5);var _mensajes2=_interopRequireDefault(_mensajes);var _portadas=__webpack_require__(4);var _portadas2=_interopRequireDefault(_portadas);var _legalText=__webpack_require__(3);var _legalText2=_interopRequireDefault(_legalText);var _licencias=__webpack_require__(2);var _licencias2=_interopRequireDefault(_licencias);var _removeSlashSlash=__webpack_require__(1);var _removeSlashSlash2=_interopRequireDefault(_removeSlashSlash);__webpack_require__(0);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}// import ScrollBar from './__scrollbar';
var header=new _header2.default();var footer=new _footer2.default();var generalContentShadow=new _generalContentShadow2.default();var content=new _content2.default();var fichaAlumno=new _fichaAlumno2.default();var mensajes=new _mensajes2.default();var portadas=new _portadas2.default();var legalText=new _legalText2.default();var licencias=new _licencias2.default();var removeSlashSlash=new _removeSlashSlash2.default();// const scrollBar = new ScrollBar();
var SantillanaPlatform=function(){function SantillanaPlatform(){_classCallCheck(this,SantillanaPlatform);this.state={isLaunched:false};}_createClass(SantillanaPlatform,[{key:'init',value:function init(){console.log('%c Prismas ','font-size: 40px; font-weight: 700; color: white; background-color: #2a495d;');console.log('Fecha de compilación: 2020-5-12 1:39:33 PM.');console.log("Iniciando...");//Si hay menú, inicia el header
if(document.querySelector('#main-nav')){header.init();}footer.init();generalContentShadow.init();content.init();fichaAlumno.init();mensajes.init();portadas.init();legalText.init();licencias.init();removeSlashSlash.init();// const scrollBarMutationObserver = new MutationObserver(function(mutations) {
// 	mutations.forEach(function(mutation) {
// 		scrollBar.init();
// 	});
// });
// scrollBarMutationObserver.observe(document.body, {
// 	attributes: false,
// 	characterData: false,
// 	childList: true,
// 	subtree: false,
// 	attributeOldValue: false,
// 	characterDataOldValue: false
// });
// scrollBar.init();
//TEMPORAL
// if(document.querySelector('.js-ficha.alumno.padre_nodef.padre_noreg')){
// 	const el = document.querySelector('.js-ficha.alumno.padre_nodef.padre_noreg');
// 	el.querySelector('a.alumno-element').innerHTML = 'Ver ficha';
// 	const list = document.querySelector('.fichas.js-fichas.js-fichas-alumnos>ul');
// 	for(i=0; i<16; i++){
// 		const newEl = el.cloneNode(true);
// 		list.appendChild(newEl);
// 	}
// }
//Disable default blink theme tools position
blink.theme.centrarTools=function(){};}}]);return SantillanaPlatform;}();exports.default=SantillanaPlatform;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};__webpack_require__(15);var _app=__webpack_require__(14);var _app2=_interopRequireDefault(_app);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var santillanaPlatform=new _app2.default();document.addEventListener("DOMContentLoaded",function(event){if((typeof blink==='undefined'?'undefined':_typeof(blink))=='object'&&blink.hasOwnProperty('domain')){blink.domain.allowCKEdShowCaption=function(){return true;};}setTimeout(function(){return santillanaPlatform.init();},0);});

/***/ })
/******/ ]);
});