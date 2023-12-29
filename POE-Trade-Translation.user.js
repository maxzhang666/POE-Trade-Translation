// ==UserScript==
// @name           POE国际服市集翻译——持续更新
// @namespace      https://wiki.wandhi.com
// @description    POE国际服市集翻译——持续更新
// @license        GPL
// @version        0.0.4
// @author         MaxZhang666
// @source         https://github.com/maxzhang666/POE-Trade-Translation
// @include        *://*
// @require        https://unpkg.com/react@18.2.0/umd/react.production.min.js
// @require        https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js
// @require        https://unpkg.com/@douyinfe/semi-ui@2.49.2/dist/umd/semi-ui.min.js
// @supportURL     https://github.com/maxzhang666/POE-Trade-Translation
// @grant          GM_xmlhttpRequest
// @grant          GM_registerMenuCommand
// @grant          GM_openInTab
// @grant          GM_info
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_getResourceText
// @grant          GM_addStyle
// @connect        poe.game.qq.com
// @connect        www.pathofexile.com
// @run-at         document-end
// @antifeature    referral-link
// ==/UserScript==

!function(root, factory) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = factory(require("React"), require("ReactDOM"), require("SemiUI")); else if ("function" == typeof define && define.amd) define([ "React", "ReactDOM", "SemiUI" ], factory); else {
        var a = "object" == typeof exports ? factory(require("React"), require("ReactDOM"), require("SemiUI")) : factory(root.React, root.ReactDOM, root.SemiUI);
        for (var i in a) ("object" == typeof exports ? exports : root)[i] = a[i];
    }
}(window, (function(__WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__18__, __WEBPACK_EXTERNAL_MODULE__24__) {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
            module.l = !0, module.exports;
        }
        return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
        __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                enumerable: !0,
                get: getter
            });
        }, __webpack_require__.r = function(exports) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(exports, "__esModule", {
                value: !0
            });
        }, __webpack_require__.t = function(value, mode) {
            if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
            if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
            var ns = Object.create(null);
            if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
                enumerable: !0,
                value: value
            }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
                return value[key];
            }.bind(null, key));
            return ns;
        }, __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default;
            } : function() {
                return module;
            };
            return __webpack_require__.d(getter, "a", getter), getter;
        }, __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 8);
    }([ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.Logger = void 0;
        __webpack_require__(13);
        var LogLevel_1 = __webpack_require__(14), Logger = function() {
            function Logger() {}
            return Logger.log = function(msg, level) {}, Logger.debug = function(msg) {
                this.log(msg, LogLevel_1.LogLevel.debug);
            }, Logger.info = function(msg) {
                this.log(msg, LogLevel_1.LogLevel.info);
            }, Logger.warn = function(msg) {
                this.log(msg, LogLevel_1.LogLevel.warn);
            }, Logger.error = function(msg) {
                this.log(msg, LogLevel_1.LogLevel.error);
            }, Logger;
        }();
        exports.Logger = Logger;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var __importDefault = this && this.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.Core = void 0;
        var BrowerType_1 = __webpack_require__(16), diff_match_patch_1 = __importDefault(__webpack_require__(17)), react_dom_1 = __importDefault(__webpack_require__(18)), Core = function() {
            function Core() {}
            return Core.currentUrl = function() {
                return window.location.href;
            }, Object.defineProperty(Core, "url", {
                get: function() {
                    return window.location.href;
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(Core, "clearUrl", {
                get: function() {
                    return this.url.replace(window.location.hash, "");
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(Core, "hash", {
                get: function() {
                    return window.location.hash.slice(1);
                },
                enumerable: !1,
                configurable: !0
            }), Core.open = function(url, front) {
                void 0 === front && (front = !1), GM_openInTab(url, {
                    active: !front
                });
            }, Core.autoLazyload = function(isOk, callback, time) {
                void 0 === time && (time = 5), isOk() ? callback() : setTimeout((function() {
                    Core.autoLazyload(isOk, callback, time);
                }), 1e3 * time);
            }, Core.background = function(callback, time) {
                void 0 === time && (time = 5), setInterval((function() {
                    callback();
                }), 1e3 * time);
            }, Core.lazyload = function(callback, time) {
                void 0 === time && (time = 5), setTimeout((function() {
                    callback();
                }), 1e3 * time);
            }, Core.addStyle = function(content) {
                if (GM_addStyle) GM_addStyle(content); else {
                    var style = unsafeWindow.window.document.createElement("style");
                    style.innerHTML = content, unsafeWindow.window.document.head.append(style);
                }
            }, Core.addStyleUrl = function(url) {
                var style = unsafeWindow.window.document.createElement("link");
                style.href = url, style.rel = "stylesheet", unsafeWindow.window.document.head.append(style);
            }, Core.addScriptUrl = function(url) {
                var script = unsafeWindow.window.document.createElement("script");
                script.type = "text/javascript", script.src = url, unsafeWindow.window.document.head.append(script);
            }, Core.addScript = function(content) {
                var script = unsafeWindow.window.document.createElement("script");
                script.type = "text/javascript", script.innerHTML = content, unsafeWindow.window.document.head.append(script);
            }, Core.Click = function(selector, handle) {
                $(selector).on("click", handle);
            }, Core.inIframe = function() {
                return !(!self.frameElement || "IFRAME" != self.frameElement.tagName) || (window.frames.length != parent.frames.length || self != top);
            }, Core.getBrowser = function() {
                var browser = !1, userAgent = window.navigator.userAgent.toLowerCase();
                return null != userAgent.match(/firefox/) ? browser = BrowerType_1.BrowerType.Firefox : null != userAgent.match(/edge/) ? browser = BrowerType_1.BrowerType.Edge : null != userAgent.match(/edg/) ? browser = BrowerType_1.BrowerType.Edg : null != userAgent.match(/bidubrowser/) ? browser = BrowerType_1.BrowerType.Baidu : null != userAgent.match(/lbbrowser/) ? browser = BrowerType_1.BrowerType.Liebao : null != userAgent.match(/ubrowser/) ? browser = BrowerType_1.BrowerType.UC : null != userAgent.match(/qqbrowse/) ? browser = BrowerType_1.BrowerType.QQ : null != userAgent.match(/metasr/) ? browser = BrowerType_1.BrowerType.Sogou : null != userAgent.match(/opr/) ? browser = BrowerType_1.BrowerType.Opera : null != userAgent.match(/maxthon/) ? browser = BrowerType_1.BrowerType.Maxthon : null != userAgent.match(/2345explorer/) ? browser = BrowerType_1.BrowerType.Ie2345 : null != userAgent.match(/chrome/) ? browser = navigator.mimeTypes.length > 10 ? BrowerType_1.BrowerType.Se360 : BrowerType_1.BrowerType.Chrome : null != userAgent.match(/safari/) && (browser = BrowerType_1.BrowerType.Safiri), 
                browser;
            }, Core.humanSize = function(source) {
                if (null == source || 0 == source) return "0 Bytes";
                "string" == typeof source && (source = parseFloat(source));
                var index;
                return index = Math.floor(Math.log(source) / Math.log(1024)), (source / Math.pow(1024, index)).toFixed(2) + " " + [ "Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB" ][index];
            }, Core.strDiff = function(str1, str2, remove, joinStr) {
                return void 0 === joinStr && (joinStr = ""), (new diff_match_patch_1.default).diff_main(str1, str2).filter((function(_a) {
                    return _a[0] === diff_match_patch_1.default.DIFF_INSERT;
                })).map((function(_a) {
                    return _a[1];
                })).filter((function(part) {
                    return part !== remove;
                })).join(joinStr);
            }, Core.Render = function(element, id) {
                var container = document.getElementById(id);
                if (!container) {
                    var script = unsafeWindow.window.document.createElement("div");
                    script.id = id, unsafeWindow.window.document.head.append(script), container = document.getElementById(id);
                }
                react_dom_1.default.render(element, container);
            }, Core;
        }();
        exports.Core = Core;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.SiteEnum = void 0, function(SiteEnum) {
            SiteEnum.All = "All", SiteEnum.HuaJun = "HuaJun", SiteEnum.TaiPingYang = "TaiPingYang", 
            SiteEnum.XiXiSoft = "XiXiSoft", SiteEnum.DongPo = "DongPo", SiteEnum.DangXia = "DangXia", 
            SiteEnum.DuoTe = "DuoTe", SiteEnum.Pc6 = "Pc6", SiteEnum.TaoBao = "TaoBao", SiteEnum.TMall = "TMall", 
            SiteEnum.JingDong = "JingDong", SiteEnum.Shuma = "Shuma", SiteEnum.IQiYi = "IQiYi", 
            SiteEnum.YouKu = "YouKu", SiteEnum.LeShi = "LeShi", SiteEnum.TuDou = "TuDou", SiteEnum.Tencent_V = "Tencent_V", 
            SiteEnum.MangGuo = "MangGuo", SiteEnum.SoHu = "SoHu", SiteEnum.Acfun = "Acfun", 
            SiteEnum.BiliBili = "BiliBili", SiteEnum.M1905 = "M1905", SiteEnum.PPTV = "PPTV", 
            SiteEnum.YinYueTai = "YinYueTai", SiteEnum.WangYi = "WangYi", SiteEnum.Tencent_M = "Tencent_M", 
            SiteEnum.KuGou = "KuGou", SiteEnum.KuWo = "KuWo", SiteEnum.XiaMi = "XiaMi", SiteEnum.TaiHe = "TaiHe", 
            SiteEnum.QingTing = "QingTing", SiteEnum.LiZhi = "LiZhi", SiteEnum.MiGu = "MiGu", 
            SiteEnum.XiMaLaYa = "XiMaLaYa", SiteEnum.LZY = "LZY", SiteEnum.SuNing = "SuNing", 
            SiteEnum.Vp = "Vp", SiteEnum.Gwd = "Gwd", SiteEnum.POETrade = "POETrade";
        }(exports.SiteEnum || (exports.SiteEnum = {}));
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.Config = void 0;
        var Logger_1 = __webpack_require__(0), Config = function() {
            function Config() {}
            return Object.defineProperty(Config, "env", {
                get: function() {
                    return GM_info;
                },
                enumerable: !1,
                configurable: !0
            }), Config.set = function(key, v, exp) {
                void 0 === exp && (exp = -1);
                var obj = {
                    key: key,
                    value: v,
                    exp: -1 == exp ? exp : (new Date).getTime() + 1e3 * exp
                };
                GM_setValue("POE-Trade-Translation_" + this.encode(key), JSON.stringify(obj));
            }, Config.get = function(key, defaultValue) {
                void 0 === defaultValue && (defaultValue = !1);
                var objStr = GM_getValue("POE-Trade-Translation_" + this.encode(key));
                if (objStr) {
                    var obj = JSON.parse(objStr);
                    if (-1 == obj.exp || obj.exp > (new Date).getTime()) return Logger_1.Logger.info(key + " cache true"), 
                    obj.value;
                }
                return Logger_1.Logger.info(key + " cache false"), defaultValue;
            }, Config.getLocalStorage = function(key, defaultValue) {
                void 0 === defaultValue && (defaultValue = !1);
                var objStr = localStorage.getItem("" + this.encode(key));
                if (objStr) {
                    var obj = JSON.parse(objStr);
                    if (-1 == obj.exp || obj.exp > (new Date).getTime()) return Logger_1.Logger.info(key + " storage cache true"), 
                    obj.value;
                }
                return Logger_1.Logger.info(key + " storage cache false"), defaultValue;
            }, Config.setLocalStorage = function(key, v, exp) {
                void 0 === exp && (exp = -1);
                var obj = {
                    key: key,
                    value: v,
                    exp: -1 == exp ? exp : (new Date).getTime() + 1e3 * exp
                };
                localStorage.setItem("" + this.encode(key), JSON.stringify(obj));
            }, Config.decode = function(str) {
                return atob(str);
            }, Config.encode = function(str) {
                return btoa(str);
            }, Config;
        }();
        exports.Config = Config;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.IocAuto = exports.Container = void 0, __webpack_require__(9);
        var container = new Map, Container = function() {
            function Container() {}
            return Container.Registe = function(type, args) {
                var className = this.processName(type.name);
                return container.set(className, window.Reflect.construct(type, this.buildParams(args))), 
                container.get(className);
            }, Container.buildParams = function(args) {
                var para = [];
                return null == args || args.map((function(item) {
                    para.push(item);
                })), para;
            }, Container.processName = function(name) {
                return name.toLowerCase();
            }, Container.Require = function(type) {
                var _this = this;
                if (null == type) return null;
                var name = this.processName(type.name);
                if (container.has(name)) return container.get(name);
                var args, classParams = Reflect.getMetadata(METADATA_PARAMS, type);
                return (null == classParams ? void 0 : classParams.length) && (args = classParams.map((function(item) {
                    return _this.Require(item);
                }))), this.Registe(type, args);
            }, Container.define = function(target, key) {
                var _a, classType = Reflect.getMetadata(METADATA_TYPE, target, key), desc = null !== (_a = Object.getOwnPropertyDescriptor(target, key)) && void 0 !== _a ? _a : {
                    writable: !0,
                    configurable: !0
                };
                desc.value = this.Require(classType), Object.defineProperty(target, key, desc);
            }, Container;
        }();
        exports.Container = Container;
        var METADATA_TYPE = "design:type", METADATA_PARAMS = "design:paramtypes";
        exports.IocAuto = function(target, key) {
            Container.define(target, key);
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.AppBase = void 0;
        var Logger_1 = __webpack_require__(0), SiteEnum_1 = __webpack_require__(2), Core_1 = __webpack_require__(1), AppBase = function() {
            function AppBase() {
                var _this = this;
                this._unique = !0, this.Process = function() {
                    _this.loader(), _this.run();
                };
            }
            return AppBase.prototype.unique = function() {
                return this._unique;
            }, AppBase.prototype.linkTest = function(url) {
                var _this = this;
                url || (url = Core_1.Core.currentUrl());
                var flag = !1;
                return this.rules.forEach((function(v, k) {
                    return v.test(url) ? (Logger_1.Logger.debug("app:" + _this.appName + "_" + SiteEnum_1.SiteEnum[k] + " test pass"), 
                    flag = !0, _this.site = k, !1) : (Logger_1.Logger.warn("app:" + _this.appName + " test fail"), 
                    !0);
                })), flag;
            }, AppBase;
        }();
        exports.AppBase = AppBase;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.SettingItem = void 0, function(SettingItem) {
            SettingItem.DataSource = "DataSource", SettingItem.ZhStats = "ZhStats";
        }(exports.SettingItem || (exports.SettingItem = {}));
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__7__;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Container_1 = __webpack_require__(4), home_1 = __webpack_require__(12);
        __webpack_require__(1).Core.addStyleUrl("https://unpkg.com/@douyinfe/semi-ui@2.49.2/dist/css/semi.css"), 
        Container_1.Container.Require(home_1.POE_Trade_Translation).Init();
    }, function(module, exports, __webpack_require__) {
        (function(process, global) {
            var Reflect;
            !function(Reflect) {
                !function(factory) {
                    var root = "object" == typeof global ? global : "object" == typeof self ? self : "object" == typeof this ? this : Function("return this;")(), exporter = makeExporter(Reflect);
                    function makeExporter(target, previous) {
                        return function(key, value) {
                            "function" != typeof target[key] && Object.defineProperty(target, key, {
                                configurable: !0,
                                writable: !0,
                                value: value
                            }), previous && previous(key, value);
                        };
                    }
                    void 0 === root.Reflect ? root.Reflect = Reflect : exporter = makeExporter(root.Reflect, exporter), 
                    function(exporter) {
                        var hasOwn = Object.prototype.hasOwnProperty, supportsSymbol = "function" == typeof Symbol, toPrimitiveSymbol = supportsSymbol && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : "@@toPrimitive", iteratorSymbol = supportsSymbol && void 0 !== Symbol.iterator ? Symbol.iterator : "@@iterator", supportsCreate = "function" == typeof Object.create, supportsProto = {
                            __proto__: []
                        } instanceof Array, downLevel = !supportsCreate && !supportsProto, HashMap = {
                            create: supportsCreate ? function() {
                                return MakeDictionary(Object.create(null));
                            } : supportsProto ? function() {
                                return MakeDictionary({
                                    __proto__: null
                                });
                            } : function() {
                                return MakeDictionary({});
                            },
                            has: downLevel ? function(map, key) {
                                return hasOwn.call(map, key);
                            } : function(map, key) {
                                return key in map;
                            },
                            get: downLevel ? function(map, key) {
                                return hasOwn.call(map, key) ? map[key] : void 0;
                            } : function(map, key) {
                                return map[key];
                            }
                        }, functionPrototype = Object.getPrototypeOf(Function), usePolyfill = "object" == typeof process && process.env && "true" === process.env.REFLECT_METADATA_USE_MAP_POLYFILL, _Map = usePolyfill || "function" != typeof Map || "function" != typeof Map.prototype.entries ? CreateMapPolyfill() : Map, _Set = usePolyfill || "function" != typeof Set || "function" != typeof Set.prototype.entries ? CreateSetPolyfill() : Set, Metadata = new (usePolyfill || "function" != typeof WeakMap ? CreateWeakMapPolyfill() : WeakMap);
                        function decorate(decorators, target, propertyKey, attributes) {
                            if (IsUndefined(propertyKey)) {
                                if (!IsArray(decorators)) throw new TypeError;
                                if (!IsConstructor(target)) throw new TypeError;
                                return DecorateConstructor(decorators, target);
                            }
                            if (!IsArray(decorators)) throw new TypeError;
                            if (!IsObject(target)) throw new TypeError;
                            if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes)) throw new TypeError;
                            return IsNull(attributes) && (attributes = void 0), DecorateProperty(decorators, target, propertyKey = ToPropertyKey(propertyKey), attributes);
                        }
                        function metadata(metadataKey, metadataValue) {
                            function decorator(target, propertyKey) {
                                if (!IsObject(target)) throw new TypeError;
                                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey)) throw new TypeError;
                                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
                            }
                            return decorator;
                        }
                        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
                            if (!IsObject(target)) throw new TypeError;
                            return IsUndefined(propertyKey) || (propertyKey = ToPropertyKey(propertyKey)), OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
                        }
                        function hasMetadata(metadataKey, target, propertyKey) {
                            if (!IsObject(target)) throw new TypeError;
                            return IsUndefined(propertyKey) || (propertyKey = ToPropertyKey(propertyKey)), OrdinaryHasMetadata(metadataKey, target, propertyKey);
                        }
                        function hasOwnMetadata(metadataKey, target, propertyKey) {
                            if (!IsObject(target)) throw new TypeError;
                            return IsUndefined(propertyKey) || (propertyKey = ToPropertyKey(propertyKey)), OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
                        }
                        function getMetadata(metadataKey, target, propertyKey) {
                            if (!IsObject(target)) throw new TypeError;
                            return IsUndefined(propertyKey) || (propertyKey = ToPropertyKey(propertyKey)), OrdinaryGetMetadata(metadataKey, target, propertyKey);
                        }
                        function getOwnMetadata(metadataKey, target, propertyKey) {
                            if (!IsObject(target)) throw new TypeError;
                            return IsUndefined(propertyKey) || (propertyKey = ToPropertyKey(propertyKey)), OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
                        }
                        function getMetadataKeys(target, propertyKey) {
                            if (!IsObject(target)) throw new TypeError;
                            return IsUndefined(propertyKey) || (propertyKey = ToPropertyKey(propertyKey)), OrdinaryMetadataKeys(target, propertyKey);
                        }
                        function getOwnMetadataKeys(target, propertyKey) {
                            if (!IsObject(target)) throw new TypeError;
                            return IsUndefined(propertyKey) || (propertyKey = ToPropertyKey(propertyKey)), OrdinaryOwnMetadataKeys(target, propertyKey);
                        }
                        function deleteMetadata(metadataKey, target, propertyKey) {
                            if (!IsObject(target)) throw new TypeError;
                            IsUndefined(propertyKey) || (propertyKey = ToPropertyKey(propertyKey));
                            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, !1);
                            if (IsUndefined(metadataMap)) return !1;
                            if (!metadataMap.delete(metadataKey)) return !1;
                            if (metadataMap.size > 0) return !0;
                            var targetMetadata = Metadata.get(target);
                            return targetMetadata.delete(propertyKey), targetMetadata.size > 0 || Metadata.delete(target), 
                            !0;
                        }
                        function DecorateConstructor(decorators, target) {
                            for (var i = decorators.length - 1; i >= 0; --i) {
                                var decorated = (0, decorators[i])(target);
                                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                                    if (!IsConstructor(decorated)) throw new TypeError;
                                    target = decorated;
                                }
                            }
                            return target;
                        }
                        function DecorateProperty(decorators, target, propertyKey, descriptor) {
                            for (var i = decorators.length - 1; i >= 0; --i) {
                                var decorated = (0, decorators[i])(target, propertyKey, descriptor);
                                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                                    if (!IsObject(decorated)) throw new TypeError;
                                    descriptor = decorated;
                                }
                            }
                            return descriptor;
                        }
                        function GetOrCreateMetadataMap(O, P, Create) {
                            var targetMetadata = Metadata.get(O);
                            if (IsUndefined(targetMetadata)) {
                                if (!Create) return;
                                targetMetadata = new _Map, Metadata.set(O, targetMetadata);
                            }
                            var metadataMap = targetMetadata.get(P);
                            if (IsUndefined(metadataMap)) {
                                if (!Create) return;
                                metadataMap = new _Map, targetMetadata.set(P, metadataMap);
                            }
                            return metadataMap;
                        }
                        function OrdinaryHasMetadata(MetadataKey, O, P) {
                            if (OrdinaryHasOwnMetadata(MetadataKey, O, P)) return !0;
                            var parent = OrdinaryGetPrototypeOf(O);
                            return !IsNull(parent) && OrdinaryHasMetadata(MetadataKey, parent, P);
                        }
                        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
                            var metadataMap = GetOrCreateMetadataMap(O, P, !1);
                            return !IsUndefined(metadataMap) && ToBoolean(metadataMap.has(MetadataKey));
                        }
                        function OrdinaryGetMetadata(MetadataKey, O, P) {
                            if (OrdinaryHasOwnMetadata(MetadataKey, O, P)) return OrdinaryGetOwnMetadata(MetadataKey, O, P);
                            var parent = OrdinaryGetPrototypeOf(O);
                            return IsNull(parent) ? void 0 : OrdinaryGetMetadata(MetadataKey, parent, P);
                        }
                        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
                            var metadataMap = GetOrCreateMetadataMap(O, P, !1);
                            if (!IsUndefined(metadataMap)) return metadataMap.get(MetadataKey);
                        }
                        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
                            GetOrCreateMetadataMap(O, P, !0).set(MetadataKey, MetadataValue);
                        }
                        function OrdinaryMetadataKeys(O, P) {
                            var ownKeys = OrdinaryOwnMetadataKeys(O, P), parent = OrdinaryGetPrototypeOf(O);
                            if (null === parent) return ownKeys;
                            var parentKeys = OrdinaryMetadataKeys(parent, P);
                            if (parentKeys.length <= 0) return ownKeys;
                            if (ownKeys.length <= 0) return parentKeys;
                            for (var set = new _Set, keys = [], _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                                var key = ownKeys_1[_i];
                                set.has(key) || (set.add(key), keys.push(key));
                            }
                            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                                key = parentKeys_1[_a];
                                set.has(key) || (set.add(key), keys.push(key));
                            }
                            return keys;
                        }
                        function OrdinaryOwnMetadataKeys(O, P) {
                            var keys = [], metadataMap = GetOrCreateMetadataMap(O, P, !1);
                            if (IsUndefined(metadataMap)) return keys;
                            for (var iterator = GetIterator(metadataMap.keys()), k = 0; ;) {
                                var next = IteratorStep(iterator);
                                if (!next) return keys.length = k, keys;
                                var nextValue = IteratorValue(next);
                                try {
                                    keys[k] = nextValue;
                                } catch (e) {
                                    try {
                                        IteratorClose(iterator);
                                    } finally {
                                        throw e;
                                    }
                                }
                                k++;
                            }
                        }
                        function Type(x) {
                            if (null === x) return 1;
                            switch (typeof x) {
                              case "undefined":
                                return 0;

                              case "boolean":
                                return 2;

                              case "string":
                                return 3;

                              case "symbol":
                                return 4;

                              case "number":
                                return 5;

                              case "object":
                                return null === x ? 1 : 6;

                              default:
                                return 6;
                            }
                        }
                        function IsUndefined(x) {
                            return void 0 === x;
                        }
                        function IsNull(x) {
                            return null === x;
                        }
                        function IsSymbol(x) {
                            return "symbol" == typeof x;
                        }
                        function IsObject(x) {
                            return "object" == typeof x ? null !== x : "function" == typeof x;
                        }
                        function ToPrimitive(input, PreferredType) {
                            switch (Type(input)) {
                              case 0:
                              case 1:
                              case 2:
                              case 3:
                              case 4:
                              case 5:
                                return input;
                            }
                            var hint = 3 === PreferredType ? "string" : 5 === PreferredType ? "number" : "default", exoticToPrim = GetMethod(input, toPrimitiveSymbol);
                            if (void 0 !== exoticToPrim) {
                                var result = exoticToPrim.call(input, hint);
                                if (IsObject(result)) throw new TypeError;
                                return result;
                            }
                            return OrdinaryToPrimitive(input, "default" === hint ? "number" : hint);
                        }
                        function OrdinaryToPrimitive(O, hint) {
                            if ("string" === hint) {
                                var toString_1 = O.toString;
                                if (IsCallable(toString_1)) if (!IsObject(result = toString_1.call(O))) return result;
                                if (IsCallable(valueOf = O.valueOf)) if (!IsObject(result = valueOf.call(O))) return result;
                            } else {
                                var valueOf;
                                if (IsCallable(valueOf = O.valueOf)) if (!IsObject(result = valueOf.call(O))) return result;
                                var result, toString_2 = O.toString;
                                if (IsCallable(toString_2)) if (!IsObject(result = toString_2.call(O))) return result;
                            }
                            throw new TypeError;
                        }
                        function ToBoolean(argument) {
                            return !!argument;
                        }
                        function ToString(argument) {
                            return "" + argument;
                        }
                        function ToPropertyKey(argument) {
                            var key = ToPrimitive(argument, 3);
                            return IsSymbol(key) ? key : ToString(key);
                        }
                        function IsArray(argument) {
                            return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : "[object Array]" === Object.prototype.toString.call(argument);
                        }
                        function IsCallable(argument) {
                            return "function" == typeof argument;
                        }
                        function IsConstructor(argument) {
                            return "function" == typeof argument;
                        }
                        function IsPropertyKey(argument) {
                            switch (Type(argument)) {
                              case 3:
                              case 4:
                                return !0;

                              default:
                                return !1;
                            }
                        }
                        function GetMethod(V, P) {
                            var func = V[P];
                            if (null != func) {
                                if (!IsCallable(func)) throw new TypeError;
                                return func;
                            }
                        }
                        function GetIterator(obj) {
                            var method = GetMethod(obj, iteratorSymbol);
                            if (!IsCallable(method)) throw new TypeError;
                            var iterator = method.call(obj);
                            if (!IsObject(iterator)) throw new TypeError;
                            return iterator;
                        }
                        function IteratorValue(iterResult) {
                            return iterResult.value;
                        }
                        function IteratorStep(iterator) {
                            var result = iterator.next();
                            return !result.done && result;
                        }
                        function IteratorClose(iterator) {
                            var f = iterator.return;
                            f && f.call(iterator);
                        }
                        function OrdinaryGetPrototypeOf(O) {
                            var proto = Object.getPrototypeOf(O);
                            if ("function" != typeof O || O === functionPrototype) return proto;
                            if (proto !== functionPrototype) return proto;
                            var prototype = O.prototype, prototypeProto = prototype && Object.getPrototypeOf(prototype);
                            if (null == prototypeProto || prototypeProto === Object.prototype) return proto;
                            var constructor = prototypeProto.constructor;
                            return "function" != typeof constructor || constructor === O ? proto : constructor;
                        }
                        function CreateMapPolyfill() {
                            var cacheSentinel = {}, arraySentinel = [], MapIterator = function() {
                                function MapIterator(keys, values, selector) {
                                    this._index = 0, this._keys = keys, this._values = values, this._selector = selector;
                                }
                                return MapIterator.prototype["@@iterator"] = function() {
                                    return this;
                                }, MapIterator.prototype[iteratorSymbol] = function() {
                                    return this;
                                }, MapIterator.prototype.next = function() {
                                    var index = this._index;
                                    if (index >= 0 && index < this._keys.length) {
                                        var result = this._selector(this._keys[index], this._values[index]);
                                        return index + 1 >= this._keys.length ? (this._index = -1, this._keys = arraySentinel, 
                                        this._values = arraySentinel) : this._index++, {
                                            value: result,
                                            done: !1
                                        };
                                    }
                                    return {
                                        value: void 0,
                                        done: !0
                                    };
                                }, MapIterator.prototype.throw = function(error) {
                                    throw this._index >= 0 && (this._index = -1, this._keys = arraySentinel, this._values = arraySentinel), 
                                    error;
                                }, MapIterator.prototype.return = function(value) {
                                    return this._index >= 0 && (this._index = -1, this._keys = arraySentinel, this._values = arraySentinel), 
                                    {
                                        value: value,
                                        done: !0
                                    };
                                }, MapIterator;
                            }();
                            return function() {
                                function Map() {
                                    this._keys = [], this._values = [], this._cacheKey = cacheSentinel, this._cacheIndex = -2;
                                }
                                return Object.defineProperty(Map.prototype, "size", {
                                    get: function() {
                                        return this._keys.length;
                                    },
                                    enumerable: !0,
                                    configurable: !0
                                }), Map.prototype.has = function(key) {
                                    return this._find(key, !1) >= 0;
                                }, Map.prototype.get = function(key) {
                                    var index = this._find(key, !1);
                                    return index >= 0 ? this._values[index] : void 0;
                                }, Map.prototype.set = function(key, value) {
                                    var index = this._find(key, !0);
                                    return this._values[index] = value, this;
                                }, Map.prototype.delete = function(key) {
                                    var index = this._find(key, !1);
                                    if (index >= 0) {
                                        for (var size = this._keys.length, i = index + 1; i < size; i++) this._keys[i - 1] = this._keys[i], 
                                        this._values[i - 1] = this._values[i];
                                        return this._keys.length--, this._values.length--, key === this._cacheKey && (this._cacheKey = cacheSentinel, 
                                        this._cacheIndex = -2), !0;
                                    }
                                    return !1;
                                }, Map.prototype.clear = function() {
                                    this._keys.length = 0, this._values.length = 0, this._cacheKey = cacheSentinel, 
                                    this._cacheIndex = -2;
                                }, Map.prototype.keys = function() {
                                    return new MapIterator(this._keys, this._values, getKey);
                                }, Map.prototype.values = function() {
                                    return new MapIterator(this._keys, this._values, getValue);
                                }, Map.prototype.entries = function() {
                                    return new MapIterator(this._keys, this._values, getEntry);
                                }, Map.prototype["@@iterator"] = function() {
                                    return this.entries();
                                }, Map.prototype[iteratorSymbol] = function() {
                                    return this.entries();
                                }, Map.prototype._find = function(key, insert) {
                                    return this._cacheKey !== key && (this._cacheIndex = this._keys.indexOf(this._cacheKey = key)), 
                                    this._cacheIndex < 0 && insert && (this._cacheIndex = this._keys.length, this._keys.push(key), 
                                    this._values.push(void 0)), this._cacheIndex;
                                }, Map;
                            }();
                            function getKey(key, _) {
                                return key;
                            }
                            function getValue(_, value) {
                                return value;
                            }
                            function getEntry(key, value) {
                                return [ key, value ];
                            }
                        }
                        function CreateSetPolyfill() {
                            return function() {
                                function Set() {
                                    this._map = new _Map;
                                }
                                return Object.defineProperty(Set.prototype, "size", {
                                    get: function() {
                                        return this._map.size;
                                    },
                                    enumerable: !0,
                                    configurable: !0
                                }), Set.prototype.has = function(value) {
                                    return this._map.has(value);
                                }, Set.prototype.add = function(value) {
                                    return this._map.set(value, value), this;
                                }, Set.prototype.delete = function(value) {
                                    return this._map.delete(value);
                                }, Set.prototype.clear = function() {
                                    this._map.clear();
                                }, Set.prototype.keys = function() {
                                    return this._map.keys();
                                }, Set.prototype.values = function() {
                                    return this._map.values();
                                }, Set.prototype.entries = function() {
                                    return this._map.entries();
                                }, Set.prototype["@@iterator"] = function() {
                                    return this.keys();
                                }, Set.prototype[iteratorSymbol] = function() {
                                    return this.keys();
                                }, Set;
                            }();
                        }
                        function CreateWeakMapPolyfill() {
                            var UUID_SIZE = 16, keys = HashMap.create(), rootKey = CreateUniqueKey();
                            return function() {
                                function WeakMap() {
                                    this._key = CreateUniqueKey();
                                }
                                return WeakMap.prototype.has = function(target) {
                                    var table = GetOrCreateWeakMapTable(target, !1);
                                    return void 0 !== table && HashMap.has(table, this._key);
                                }, WeakMap.prototype.get = function(target) {
                                    var table = GetOrCreateWeakMapTable(target, !1);
                                    return void 0 !== table ? HashMap.get(table, this._key) : void 0;
                                }, WeakMap.prototype.set = function(target, value) {
                                    return GetOrCreateWeakMapTable(target, !0)[this._key] = value, this;
                                }, WeakMap.prototype.delete = function(target) {
                                    var table = GetOrCreateWeakMapTable(target, !1);
                                    return void 0 !== table && delete table[this._key];
                                }, WeakMap.prototype.clear = function() {
                                    this._key = CreateUniqueKey();
                                }, WeakMap;
                            }();
                            function CreateUniqueKey() {
                                var key;
                                do {
                                    key = "@@WeakMap@@" + CreateUUID();
                                } while (HashMap.has(keys, key));
                                return keys[key] = !0, key;
                            }
                            function GetOrCreateWeakMapTable(target, create) {
                                if (!hasOwn.call(target, rootKey)) {
                                    if (!create) return;
                                    Object.defineProperty(target, rootKey, {
                                        value: HashMap.create()
                                    });
                                }
                                return target[rootKey];
                            }
                            function FillRandomBytes(buffer, size) {
                                for (var i = 0; i < size; ++i) buffer[i] = 255 * Math.random() | 0;
                                return buffer;
                            }
                            function GenRandomBytes(size) {
                                return "function" == typeof Uint8Array ? "undefined" != typeof crypto ? crypto.getRandomValues(new Uint8Array(size)) : "undefined" != typeof msCrypto ? msCrypto.getRandomValues(new Uint8Array(size)) : FillRandomBytes(new Uint8Array(size), size) : FillRandomBytes(new Array(size), size);
                            }
                            function CreateUUID() {
                                var data = GenRandomBytes(UUID_SIZE);
                                data[6] = 79 & data[6] | 64, data[8] = 191 & data[8] | 128;
                                for (var result = "", offset = 0; offset < UUID_SIZE; ++offset) {
                                    var byte = data[offset];
                                    4 !== offset && 6 !== offset && 8 !== offset || (result += "-"), byte < 16 && (result += "0"), 
                                    result += byte.toString(16).toLowerCase();
                                }
                                return result;
                            }
                        }
                        function MakeDictionary(obj) {
                            return obj.__ = void 0, delete obj.__, obj;
                        }
                        exporter("decorate", decorate), exporter("metadata", metadata), exporter("defineMetadata", defineMetadata), 
                        exporter("hasMetadata", hasMetadata), exporter("hasOwnMetadata", hasOwnMetadata), 
                        exporter("getMetadata", getMetadata), exporter("getOwnMetadata", getOwnMetadata), 
                        exporter("getMetadataKeys", getMetadataKeys), exporter("getOwnMetadataKeys", getOwnMetadataKeys), 
                        exporter("deleteMetadata", deleteMetadata);
                    }(exporter);
                }();
            }(Reflect || (Reflect = {}));
        }).call(this, __webpack_require__(10), __webpack_require__(11));
    }, function(module, exports) {
        var cachedSetTimeout, cachedClearTimeout, process = module.exports = {};
        function defaultSetTimout() {
            throw new Error("setTimeout has not been defined");
        }
        function defaultClearTimeout() {
            throw new Error("clearTimeout has not been defined");
        }
        function runTimeout(fun) {
            if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0);
            if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) return cachedSetTimeout = setTimeout, 
            setTimeout(fun, 0);
            try {
                return cachedSetTimeout(fun, 0);
            } catch (e) {
                try {
                    return cachedSetTimeout.call(null, fun, 0);
                } catch (e) {
                    return cachedSetTimeout.call(this, fun, 0);
                }
            }
        }
        !function() {
            try {
                cachedSetTimeout = "function" == typeof setTimeout ? setTimeout : defaultSetTimout;
            } catch (e) {
                cachedSetTimeout = defaultSetTimout;
            }
            try {
                cachedClearTimeout = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
            } catch (e) {
                cachedClearTimeout = defaultClearTimeout;
            }
        }();
        var currentQueue, queue = [], draining = !1, queueIndex = -1;
        function cleanUpNextTick() {
            draining && currentQueue && (draining = !1, currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1, 
            queue.length && drainQueue());
        }
        function drainQueue() {
            if (!draining) {
                var timeout = runTimeout(cleanUpNextTick);
                draining = !0;
                for (var len = queue.length; len; ) {
                    for (currentQueue = queue, queue = []; ++queueIndex < len; ) currentQueue && currentQueue[queueIndex].run();
                    queueIndex = -1, len = queue.length;
                }
                currentQueue = null, draining = !1, function(marker) {
                    if (cachedClearTimeout === clearTimeout) return clearTimeout(marker);
                    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) return cachedClearTimeout = clearTimeout, 
                    clearTimeout(marker);
                    try {
                        return cachedClearTimeout(marker);
                    } catch (e) {
                        try {
                            return cachedClearTimeout.call(null, marker);
                        } catch (e) {
                            return cachedClearTimeout.call(this, marker);
                        }
                    }
                }(timeout);
            }
        }
        function Item(fun, array) {
            this.fun = fun, this.array = array;
        }
        function noop() {}
        process.nextTick = function(fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
            queue.push(new Item(fun, args)), 1 !== queue.length || draining || runTimeout(drainQueue);
        }, Item.prototype.run = function() {
            this.fun.apply(null, this.array);
        }, process.title = "browser", process.browser = !0, process.env = {}, process.argv = [], 
        process.version = "", process.versions = {}, process.on = noop, process.addListener = noop, 
        process.once = noop, process.off = noop, process.removeListener = noop, process.removeAllListeners = noop, 
        process.emit = noop, process.prependListener = noop, process.prependOnceListener = noop, 
        process.listeners = function(name) {
            return [];
        }, process.binding = function(name) {
            throw new Error("process.binding is not supported");
        }, process.cwd = function() {
            return "/";
        }, process.chdir = function(dir) {
            throw new Error("process.chdir is not supported");
        }, process.umask = function() {
            return 0;
        };
    }, function(module, exports) {
        var g;
        g = function() {
            return this;
        }();
        try {
            g = g || new Function("return this")();
        } catch (e) {
            "object" == typeof window && (g = window);
        }
        module.exports = g;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.POE_Trade_Translation = void 0;
        var Container_1 = __webpack_require__(4), Logger_1 = __webpack_require__(0), Translation_1 = __webpack_require__(15), SettingApp_1 = __webpack_require__(22), POE_Trade_Translation = function() {
            function POE_Trade_Translation() {
                this.plugins = new Array, this.plugins = [ Container_1.Container.Require(Translation_1.Translation), Container_1.Container.Require(SettingApp_1.SettingApp) ], 
                Logger_1.Logger.info("container loaded");
            }
            return POE_Trade_Translation.prototype.Init = function() {
                this.plugins.every((function(element) {
                    return !element.linkTest() || (new Promise((function(resolve) {
                        resolve(1);
                    })).then(element.Process), Logger_1.Logger.debug("element unique:" + element.unique()), 
                    !element.unique());
                }));
            }, POE_Trade_Translation;
        }();
        exports.POE_Trade_Translation = POE_Trade_Translation;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.ScriptOption = exports.ScriptInfo = exports.Env = void 0;
        var Env = function() {
            function Env() {}
            return Env.Sign = "poe_trade_translation", Env;
        }();
        exports.Env = Env;
        var ScriptInfo = function() {};
        exports.ScriptInfo = ScriptInfo;
        var ScriptOption = function() {};
        exports.ScriptOption = ScriptOption;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.LogLevel = void 0, function(LogLevel) {
            LogLevel[LogLevel.debug = 0] = "debug", LogLevel[LogLevel.info = 1] = "info", LogLevel[LogLevel.warn = 2] = "warn", 
            LogLevel[LogLevel.error = 3] = "error";
        }(exports.LogLevel || (exports.LogLevel = {}));
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
            return extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
            }, extendStatics(d, b);
        }, function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __);
        }), __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
            void 0 === k2 && (k2 = k), Object.defineProperty(o, k2, {
                enumerable: !0,
                get: function() {
                    return m[k];
                }
            });
        } : function(o, m, k, k2) {
            void 0 === k2 && (k2 = k), o[k2] = m[k];
        }), __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
            Object.defineProperty(o, "default", {
                enumerable: !0,
                value: v
            });
        } : function(o, v) {
            o.default = v;
        }), __importStar = this && this.__importStar || function(mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (null != mod) for (var k in mod) "default" !== k && Object.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
            return __setModuleDefault(result, mod), result;
        };
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.Translation = void 0;
        var AppBase_1 = __webpack_require__(5), SiteEnum_1 = __webpack_require__(2), Core_1 = __webpack_require__(1), property = __importStar(__webpack_require__(19)), Logger_1 = __webpack_require__(0), Http_1 = __webpack_require__(20), Config_1 = __webpack_require__(3), SettingItem_1 = __webpack_require__(6), Translation = function(_super) {
            function Translation() {
                var _this = null !== _super && _super.apply(this, arguments) || this;
                return _this.appName = "Translation", _this._unique = !1, _this.rules = new Map([ [ SiteEnum_1.SiteEnum.POETrade, /pathofexile\.com\/trade\/search/i ] ]), 
                _this;
            }
            return __extends(Translation, _super), Translation.prototype.loader = function() {
                this.init();
            }, Translation.prototype.run = function() {
                SemiUI.Toast.success({
                    content: "\u6c49\u5316\u811a\u672c\u8fd0\u884c\u6210\u529f!",
                    duration: 1
                }), this.domListening();
            }, Translation.prototype.init = function() {
                var root = Config_1.Config.get(SettingItem_1.SettingItem.DataSource, "https://cdn.jsdelivr.net/gh/");
                Promise.all([ new Promise((function(resolve) {
                    Config_1.Config.get(SettingItem_1.SettingItem.ZhStats) ? resolve(!0) : Http_1.Http.get(root + "/maxzhang666/POE-Trade-Translation/data/zh/stats.json").then((function(res) {
                        Config_1.Config.set(SettingItem_1.SettingItem.ZhStats, {
                            time: new Date,
                            data: res
                        }), resolve(!0);
                    })).catch((function() {
                        SemiUI.Toast.warning({
                            content: "\u6570\u636eStats\u52a0\u8f7d\u5931\u8d25"
                        }), resolve(!1);
                    }));
                })) ]).then((function(res) {
                    SemiUI.Toast.success({
                        content: "\u6570\u636e\u52a0\u8f7d\u5b8c\u6210"
                    });
                }));
            }, Translation.prototype.domListening = function() {
                var that = this, targetNode = document.querySelector("#app");
                new MutationObserver((function(mutations, observer) {
                    mutations.forEach((function(mutation) {
                        mutation.addedNodes.forEach((function(node) {
                            "resultset" === node.className && (observer.disconnect(), that.resultsChange());
                        }));
                    }));
                })).observe(targetNode, {
                    attributes: !0,
                    childList: !0,
                    subtree: !0,
                    characterData: !1
                });
            }, Translation.prototype.resultsChange = function() {
                var that = this, targetNode = document.querySelector(".results");
                new MutationObserver((function(mutations, observer) {
                    mutations.forEach((function(mutation) {
                        mutation.addedNodes.forEach((function(node) {
                            "row" === node.className && that.translate();
                        }));
                    }));
                })).observe(targetNode, {
                    childList: !0,
                    subtree: !0
                });
            }, Translation.prototype.translate = function() {
                var _this = this;
                Core_1.Core.lazyload((function() {
                    document.querySelectorAll("[data-field]:not(.translated)").forEach((function(elm) {
                        _this.affixTranslate(elm);
                    })), document.querySelectorAll(".itemHeader,.vaalHeader,.hybridHeader:not(.translated)").forEach((function(elm) {
                        var name_ub;
                        if (elm.querySelectorAll(".itemName").forEach((function(name) {
                            var regstr = /class="lc">(.+?)<\/span>/gim.exec(name.innerHTML);
                            regstr && regstr.length >= 1 && (~name.className.indexOf("typeLine") ? name_ub = regstr[1] : regstr[1]);
                        })), name_ub) {
                            var name_zb_1 = Translation.words.localItem.get(name_ub) ? Translation.words.localItem.get(name_ub) + "(" + name_ub + ")" : null;
                            if (!name_zb_1) ;
                            name_zb_1 && (elm.innerHTML = elm.innerHTML.replace(">" + name_ub + "<", ">" + name_zb_1 + "<"), 
                            elm.classList.add("translated"));
                        }
                    })), document.querySelectorAll(".requirements:not(translated)").forEach((function(elm) {
                        elm.innerHTML = elm.innerHTML.replace("Requires", "\u9700\u6c42").replace("Level", "\u7b49\u7ea7").replace(/Str(ength)?/, "\u529b\u91cf").replace(/Dex(terity)?/, "\u654f\u6377").replace(/Int(elligence)?/, "\u667a\u6167").replace("in", "\u7684").replace("Any Job", "\u4efb\u610f\u4efb\u52a1").replace("Class", "\u804c\u4e1a").replace("Witch", "\u5973\u5deb").replace("Scion", "\u8d35\u65cf").replace("Marauder", "\u91ce\u86ee\u4eba").replace("Ranger", "\u6e38\u4fa0").replace("Duelist", "\u51b3\u6597\u8005").replace("Templar", "\u5723\u5802\u6b66\u50e7").replace("Shadow", "\u6697\u5f71\u523a\u5ba2"), 
                        elm.classList.add("translated");
                    })), document.querySelectorAll(".property:not(translated)").forEach((function(elm) {
                        var propertyMap = new Map(Object.entries(property)), zhString = elm.innerHTML;
                        propertyMap.forEach((function(v, k) {
                            zhString = zhString.replace(String(k), v);
                        })), zhString != elm.innerHTML && (elm.innerHTML = zhString, elm.classList.add("translated"));
                    }));
                }), .1);
            }, Translation.prototype.affixTranslate = function(elm) {
                var _a, _b, _c, parentNode = elm.parentNode, ele = elm;
                if (parentNode) {
                    var datel = parentNode.querySelector(".l");
                    datel && (datel.innerHTML = datel.innerHTML.replace(/P/g, "\u524d").replace(/S/g, "\u540e"));
                    var field = null === (_a = ele.dataset.field) || void 0 === _a ? void 0 : _a.replace("stat.", "");
                    if (field) {
                        var originalString = ele.innerHTML, usString = null !== (_b = Translation.words.usStats.get(field)) && void 0 !== _b ? _b : originalString, zhString = null !== (_c = Translation.words.zhStats.get(field)) && void 0 !== _c ? _c : originalString;
                        if (usString.indexOf("#") > -1) {
                            var diff = Core_1.Core.strDiff(usString, originalString, "#");
                            isNaN(parseInt(diff)) || (zhString = zhString.replace("#", diff));
                        }
                        if ((~field.indexOf("delirium") || ~field.indexOf("monster")) && (zhString = zhString.replace(/\(.+?\)/, "")), 
                        ~field.search("veiled\\.")) {
                            var rd = parentNode.querySelector(".r .d");
                            if (rd) {
                                var str = rd.innerHTML;
                                str && (rd.innerHTML = str.replace(/.*?(\(.*?\))/, zhString + "$1"));
                            }
                        } else ele.setAttribute("title", ele.innerText), ele.innerHTML = zhString;
                        ~field.indexOf(".") || parentNode.classList.add("translated"), ele.classList.add("translated");
                    }
                }
            }, Translation.prototype.itemsTranslate = function(zhItems, usItems) {
                var zhArr = null == zhItems ? void 0 : zhItems.reduce((function(items, current) {
                    return items[current.id] = current, items;
                }), {});
                return usItems.forEach((function(item) {
                    var zhItem = zhArr[item.id];
                    if (zhItem) {
                        item.label = zhItem.label;
                        for (var i = 0; i < item.entries.length; i++) {
                            var usEntry = item.entries[i], zhEntry = zhItem.entries[i];
                            usEntry && zhEntry && (usEntry.text && zhEntry.text && (usEntry.text = zhEntry.text), 
                            usEntry.name && zhEntry.name && (usEntry.name = zhEntry.name));
                        }
                    }
                })), Logger_1.Logger.info(usItems), usItems;
            }, Translation.prototype.commonTranslate = function(source) {
                if (Translation.words.commonWord.get(source)) return Translation.words.commonWord.get(source);
                for (var _i = 0, _a = Translation.words.commonWord.keys(); _i < _a.length; _i++) {
                    var key = _a[_i];
                    source.indexOf(key) > -1 && (source = source.replace(key, Translation.words.commonWord.get(key)));
                }
                return source;
            }, Translation.prototype.addCommonTranslate = function(source, target) {
                Translation.words.commonWord.set(source, target);
            }, Translation.words = {
                zhStats: new Map,
                usStats: new Map,
                zhItem: new Map,
                usItem: new Map,
                localItem: new Map,
                affix: [],
                delve: [],
                commonWord: new Map
            }, Translation;
        }(AppBase_1.AppBase);
        exports.Translation = Translation;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.BrowerType = void 0, function(BrowerType) {
            BrowerType[BrowerType.Edge = 0] = "Edge", BrowerType[BrowerType.Edg = 1] = "Edg", 
            BrowerType[BrowerType.Chrome = 2] = "Chrome", BrowerType[BrowerType.Firefox = 3] = "Firefox", 
            BrowerType[BrowerType.Safiri = 4] = "Safiri", BrowerType[BrowerType.Se360 = 5] = "Se360", 
            BrowerType[BrowerType.Ie2345 = 6] = "Ie2345", BrowerType[BrowerType.Baidu = 7] = "Baidu", 
            BrowerType[BrowerType.Liebao = 8] = "Liebao", BrowerType[BrowerType.UC = 9] = "UC", 
            BrowerType[BrowerType.QQ = 10] = "QQ", BrowerType[BrowerType.Sogou = 11] = "Sogou", 
            BrowerType[BrowerType.Opera = 12] = "Opera", BrowerType[BrowerType.Maxthon = 13] = "Maxthon";
        }(exports.BrowerType || (exports.BrowerType = {}));
    }, function(module, exports) {
        var diff_match_patch = function() {
            this.Diff_Timeout = 1, this.Diff_EditCost = 4, this.Match_Threshold = .5, this.Match_Distance = 1e3, 
            this.Patch_DeleteThreshold = .5, this.Patch_Margin = 4, this.Match_MaxBits = 32;
        };
        diff_match_patch.Diff = function(op, text) {
            return [ op, text ];
        }, diff_match_patch.prototype.diff_main = function(text1, text2, opt_checklines, opt_deadline) {
            void 0 === opt_deadline && (opt_deadline = this.Diff_Timeout <= 0 ? Number.MAX_VALUE : (new Date).getTime() + 1e3 * this.Diff_Timeout);
            var deadline = opt_deadline;
            if (null == text1 || null == text2) throw new Error("Null input. (diff_main)");
            if (text1 == text2) return text1 ? [ new diff_match_patch.Diff(0, text1) ] : [];
            void 0 === opt_checklines && (opt_checklines = !0);
            var checklines = opt_checklines, commonlength = this.diff_commonPrefix(text1, text2), commonprefix = text1.substring(0, commonlength);
            text1 = text1.substring(commonlength), text2 = text2.substring(commonlength), commonlength = this.diff_commonSuffix(text1, text2);
            var commonsuffix = text1.substring(text1.length - commonlength);
            text1 = text1.substring(0, text1.length - commonlength), text2 = text2.substring(0, text2.length - commonlength);
            var diffs = this.diff_compute_(text1, text2, checklines, deadline);
            return commonprefix && diffs.unshift(new diff_match_patch.Diff(0, commonprefix)), 
            commonsuffix && diffs.push(new diff_match_patch.Diff(0, commonsuffix)), this.diff_cleanupMerge(diffs), 
            diffs;
        }, diff_match_patch.prototype.diff_compute_ = function(text1, text2, checklines, deadline) {
            var diffs;
            if (!text1) return [ new diff_match_patch.Diff(1, text2) ];
            if (!text2) return [ new diff_match_patch.Diff(-1, text1) ];
            var longtext = text1.length > text2.length ? text1 : text2, shorttext = text1.length > text2.length ? text2 : text1, i = longtext.indexOf(shorttext);
            if (-1 != i) return diffs = [ new diff_match_patch.Diff(1, longtext.substring(0, i)), new diff_match_patch.Diff(0, shorttext), new diff_match_patch.Diff(1, longtext.substring(i + shorttext.length)) ], 
            text1.length > text2.length && (diffs[0][0] = diffs[2][0] = -1), diffs;
            if (1 == shorttext.length) return [ new diff_match_patch.Diff(-1, text1), new diff_match_patch.Diff(1, text2) ];
            var hm = this.diff_halfMatch_(text1, text2);
            if (hm) {
                var text1_a = hm[0], text1_b = hm[1], text2_a = hm[2], text2_b = hm[3], mid_common = hm[4], diffs_a = this.diff_main(text1_a, text2_a, checklines, deadline), diffs_b = this.diff_main(text1_b, text2_b, checklines, deadline);
                return diffs_a.concat([ new diff_match_patch.Diff(0, mid_common) ], diffs_b);
            }
            return checklines && text1.length > 100 && text2.length > 100 ? this.diff_lineMode_(text1, text2, deadline) : this.diff_bisect_(text1, text2, deadline);
        }, diff_match_patch.prototype.diff_lineMode_ = function(text1, text2, deadline) {
            var a = this.diff_linesToChars_(text1, text2);
            text1 = a.chars1, text2 = a.chars2;
            var linearray = a.lineArray, diffs = this.diff_main(text1, text2, !1, deadline);
            this.diff_charsToLines_(diffs, linearray), this.diff_cleanupSemantic(diffs), diffs.push(new diff_match_patch.Diff(0, ""));
            for (var pointer = 0, count_delete = 0, count_insert = 0, text_delete = "", text_insert = ""; pointer < diffs.length; ) {
                switch (diffs[pointer][0]) {
                  case 1:
                    count_insert++, text_insert += diffs[pointer][1];
                    break;

                  case -1:
                    count_delete++, text_delete += diffs[pointer][1];
                    break;

                  case 0:
                    if (count_delete >= 1 && count_insert >= 1) {
                        diffs.splice(pointer - count_delete - count_insert, count_delete + count_insert), 
                        pointer = pointer - count_delete - count_insert;
                        for (var subDiff = this.diff_main(text_delete, text_insert, !1, deadline), j = subDiff.length - 1; j >= 0; j--) diffs.splice(pointer, 0, subDiff[j]);
                        pointer += subDiff.length;
                    }
                    count_insert = 0, count_delete = 0, text_delete = "", text_insert = "";
                }
                pointer++;
            }
            return diffs.pop(), diffs;
        }, diff_match_patch.prototype.diff_bisect_ = function(text1, text2, deadline) {
            for (var text1_length = text1.length, text2_length = text2.length, max_d = Math.ceil((text1_length + text2_length) / 2), v_offset = max_d, v_length = 2 * max_d, v1 = new Array(v_length), v2 = new Array(v_length), x = 0; x < v_length; x++) v1[x] = -1, 
            v2[x] = -1;
            v1[v_offset + 1] = 0, v2[v_offset + 1] = 0;
            for (var delta = text1_length - text2_length, front = delta % 2 != 0, k1start = 0, k1end = 0, k2start = 0, k2end = 0, d = 0; d < max_d && !((new Date).getTime() > deadline); d++) {
                for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
                    for (var k1_offset = v_offset + k1, y1 = (x1 = k1 == -d || k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1] ? v1[k1_offset + 1] : v1[k1_offset - 1] + 1) - k1; x1 < text1_length && y1 < text2_length && text1.charAt(x1) == text2.charAt(y1); ) x1++, 
                    y1++;
                    if (v1[k1_offset] = x1, x1 > text1_length) k1end += 2; else if (y1 > text2_length) k1start += 2; else if (front) {
                        if ((k2_offset = v_offset + delta - k1) >= 0 && k2_offset < v_length && -1 != v2[k2_offset]) if (x1 >= (x2 = text1_length - v2[k2_offset])) return this.diff_bisectSplit_(text1, text2, x1, y1, deadline);
                    }
                }
                for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
                    for (var x2, k2_offset = v_offset + k2, y2 = (x2 = k2 == -d || k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1] ? v2[k2_offset + 1] : v2[k2_offset - 1] + 1) - k2; x2 < text1_length && y2 < text2_length && text1.charAt(text1_length - x2 - 1) == text2.charAt(text2_length - y2 - 1); ) x2++, 
                    y2++;
                    if (v2[k2_offset] = x2, x2 > text1_length) k2end += 2; else if (y2 > text2_length) k2start += 2; else if (!front) {
                        if ((k1_offset = v_offset + delta - k2) >= 0 && k1_offset < v_length && -1 != v1[k1_offset]) {
                            var x1;
                            y1 = v_offset + (x1 = v1[k1_offset]) - k1_offset;
                            if (x1 >= (x2 = text1_length - x2)) return this.diff_bisectSplit_(text1, text2, x1, y1, deadline);
                        }
                    }
                }
            }
            return [ new diff_match_patch.Diff(-1, text1), new diff_match_patch.Diff(1, text2) ];
        }, diff_match_patch.prototype.diff_bisectSplit_ = function(text1, text2, x, y, deadline) {
            var text1a = text1.substring(0, x), text2a = text2.substring(0, y), text1b = text1.substring(x), text2b = text2.substring(y), diffs = this.diff_main(text1a, text2a, !1, deadline), diffsb = this.diff_main(text1b, text2b, !1, deadline);
            return diffs.concat(diffsb);
        }, diff_match_patch.prototype.diff_linesToChars_ = function(text1, text2) {
            var lineArray = [], lineHash = {};
            function diff_linesToCharsMunge_(text) {
                for (var chars = "", lineStart = 0, lineEnd = -1, lineArrayLength = lineArray.length; lineEnd < text.length - 1; ) {
                    -1 == (lineEnd = text.indexOf("\n", lineStart)) && (lineEnd = text.length - 1);
                    var line = text.substring(lineStart, lineEnd + 1);
                    (lineHash.hasOwnProperty ? lineHash.hasOwnProperty(line) : void 0 !== lineHash[line]) ? chars += String.fromCharCode(lineHash[line]) : (lineArrayLength == maxLines && (line = text.substring(lineStart), 
                    lineEnd = text.length), chars += String.fromCharCode(lineArrayLength), lineHash[line] = lineArrayLength, 
                    lineArray[lineArrayLength++] = line), lineStart = lineEnd + 1;
                }
                return chars;
            }
            lineArray[0] = "";
            var maxLines = 4e4, chars1 = diff_linesToCharsMunge_(text1);
            return maxLines = 65535, {
                chars1: chars1,
                chars2: diff_linesToCharsMunge_(text2),
                lineArray: lineArray
            };
        }, diff_match_patch.prototype.diff_charsToLines_ = function(diffs, lineArray) {
            for (var i = 0; i < diffs.length; i++) {
                for (var chars = diffs[i][1], text = [], j = 0; j < chars.length; j++) text[j] = lineArray[chars.charCodeAt(j)];
                diffs[i][1] = text.join("");
            }
        }, diff_match_patch.prototype.diff_commonPrefix = function(text1, text2) {
            if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) return 0;
            for (var pointermin = 0, pointermax = Math.min(text1.length, text2.length), pointermid = pointermax, pointerstart = 0; pointermin < pointermid; ) text1.substring(pointerstart, pointermid) == text2.substring(pointerstart, pointermid) ? pointerstart = pointermin = pointermid : pointermax = pointermid, 
            pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
            return pointermid;
        }, diff_match_patch.prototype.diff_commonSuffix = function(text1, text2) {
            if (!text1 || !text2 || text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) return 0;
            for (var pointermin = 0, pointermax = Math.min(text1.length, text2.length), pointermid = pointermax, pointerend = 0; pointermin < pointermid; ) text1.substring(text1.length - pointermid, text1.length - pointerend) == text2.substring(text2.length - pointermid, text2.length - pointerend) ? pointerend = pointermin = pointermid : pointermax = pointermid, 
            pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
            return pointermid;
        }, diff_match_patch.prototype.diff_commonOverlap_ = function(text1, text2) {
            var text1_length = text1.length, text2_length = text2.length;
            if (0 == text1_length || 0 == text2_length) return 0;
            text1_length > text2_length ? text1 = text1.substring(text1_length - text2_length) : text1_length < text2_length && (text2 = text2.substring(0, text1_length));
            var text_length = Math.min(text1_length, text2_length);
            if (text1 == text2) return text_length;
            for (var best = 0, length = 1; ;) {
                var pattern = text1.substring(text_length - length), found = text2.indexOf(pattern);
                if (-1 == found) return best;
                length += found, 0 != found && text1.substring(text_length - length) != text2.substring(0, length) || (best = length, 
                length++);
            }
        }, diff_match_patch.prototype.diff_halfMatch_ = function(text1, text2) {
            if (this.Diff_Timeout <= 0) return null;
            var longtext = text1.length > text2.length ? text1 : text2, shorttext = text1.length > text2.length ? text2 : text1;
            if (longtext.length < 4 || 2 * shorttext.length < longtext.length) return null;
            var dmp = this;
            function diff_halfMatchI_(longtext, shorttext, i) {
                for (var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b, seed = longtext.substring(i, i + Math.floor(longtext.length / 4)), j = -1, best_common = ""; -1 != (j = shorttext.indexOf(seed, j + 1)); ) {
                    var prefixLength = dmp.diff_commonPrefix(longtext.substring(i), shorttext.substring(j)), suffixLength = dmp.diff_commonSuffix(longtext.substring(0, i), shorttext.substring(0, j));
                    best_common.length < suffixLength + prefixLength && (best_common = shorttext.substring(j - suffixLength, j) + shorttext.substring(j, j + prefixLength), 
                    best_longtext_a = longtext.substring(0, i - suffixLength), best_longtext_b = longtext.substring(i + prefixLength), 
                    best_shorttext_a = shorttext.substring(0, j - suffixLength), best_shorttext_b = shorttext.substring(j + prefixLength));
                }
                return 2 * best_common.length >= longtext.length ? [ best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b, best_common ] : null;
            }
            var hm, text1_a, text1_b, text2_a, text2_b, hm1 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 4)), hm2 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 2));
            return hm1 || hm2 ? (hm = hm2 ? hm1 && hm1[4].length > hm2[4].length ? hm1 : hm2 : hm1, 
            text1.length > text2.length ? (text1_a = hm[0], text1_b = hm[1], text2_a = hm[2], 
            text2_b = hm[3]) : (text2_a = hm[0], text2_b = hm[1], text1_a = hm[2], text1_b = hm[3]), 
            [ text1_a, text1_b, text2_a, text2_b, hm[4] ]) : null;
        }, diff_match_patch.prototype.diff_cleanupSemantic = function(diffs) {
            for (var changes = !1, equalities = [], equalitiesLength = 0, lastEquality = null, pointer = 0, length_insertions1 = 0, length_deletions1 = 0, length_insertions2 = 0, length_deletions2 = 0; pointer < diffs.length; ) 0 == diffs[pointer][0] ? (equalities[equalitiesLength++] = pointer, 
            length_insertions1 = length_insertions2, length_deletions1 = length_deletions2, 
            length_insertions2 = 0, length_deletions2 = 0, lastEquality = diffs[pointer][1]) : (1 == diffs[pointer][0] ? length_insertions2 += diffs[pointer][1].length : length_deletions2 += diffs[pointer][1].length, 
            lastEquality && lastEquality.length <= Math.max(length_insertions1, length_deletions1) && lastEquality.length <= Math.max(length_insertions2, length_deletions2) && (diffs.splice(equalities[equalitiesLength - 1], 0, new diff_match_patch.Diff(-1, lastEquality)), 
            diffs[equalities[equalitiesLength - 1] + 1][0] = 1, equalitiesLength--, pointer = --equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1, 
            length_insertions1 = 0, length_deletions1 = 0, length_insertions2 = 0, length_deletions2 = 0, 
            lastEquality = null, changes = !0)), pointer++;
            for (changes && this.diff_cleanupMerge(diffs), this.diff_cleanupSemanticLossless(diffs), 
            pointer = 1; pointer < diffs.length; ) {
                if (-1 == diffs[pointer - 1][0] && 1 == diffs[pointer][0]) {
                    var deletion = diffs[pointer - 1][1], insertion = diffs[pointer][1], overlap_length1 = this.diff_commonOverlap_(deletion, insertion), overlap_length2 = this.diff_commonOverlap_(insertion, deletion);
                    overlap_length1 >= overlap_length2 ? (overlap_length1 >= deletion.length / 2 || overlap_length1 >= insertion.length / 2) && (diffs.splice(pointer, 0, new diff_match_patch.Diff(0, insertion.substring(0, overlap_length1))), 
                    diffs[pointer - 1][1] = deletion.substring(0, deletion.length - overlap_length1), 
                    diffs[pointer + 1][1] = insertion.substring(overlap_length1), pointer++) : (overlap_length2 >= deletion.length / 2 || overlap_length2 >= insertion.length / 2) && (diffs.splice(pointer, 0, new diff_match_patch.Diff(0, deletion.substring(0, overlap_length2))), 
                    diffs[pointer - 1][0] = 1, diffs[pointer - 1][1] = insertion.substring(0, insertion.length - overlap_length2), 
                    diffs[pointer + 1][0] = -1, diffs[pointer + 1][1] = deletion.substring(overlap_length2), 
                    pointer++), pointer++;
                }
                pointer++;
            }
        }, diff_match_patch.prototype.diff_cleanupSemanticLossless = function(diffs) {
            function diff_cleanupSemanticScore_(one, two) {
                if (!one || !two) return 6;
                var char1 = one.charAt(one.length - 1), char2 = two.charAt(0), nonAlphaNumeric1 = char1.match(diff_match_patch.nonAlphaNumericRegex_), nonAlphaNumeric2 = char2.match(diff_match_patch.nonAlphaNumericRegex_), whitespace1 = nonAlphaNumeric1 && char1.match(diff_match_patch.whitespaceRegex_), whitespace2 = nonAlphaNumeric2 && char2.match(diff_match_patch.whitespaceRegex_), lineBreak1 = whitespace1 && char1.match(diff_match_patch.linebreakRegex_), lineBreak2 = whitespace2 && char2.match(diff_match_patch.linebreakRegex_), blankLine1 = lineBreak1 && one.match(diff_match_patch.blanklineEndRegex_), blankLine2 = lineBreak2 && two.match(diff_match_patch.blanklineStartRegex_);
                return blankLine1 || blankLine2 ? 5 : lineBreak1 || lineBreak2 ? 4 : nonAlphaNumeric1 && !whitespace1 && whitespace2 ? 3 : whitespace1 || whitespace2 ? 2 : nonAlphaNumeric1 || nonAlphaNumeric2 ? 1 : 0;
            }
            for (var pointer = 1; pointer < diffs.length - 1; ) {
                if (0 == diffs[pointer - 1][0] && 0 == diffs[pointer + 1][0]) {
                    var equality1 = diffs[pointer - 1][1], edit = diffs[pointer][1], equality2 = diffs[pointer + 1][1], commonOffset = this.diff_commonSuffix(equality1, edit);
                    if (commonOffset) {
                        var commonString = edit.substring(edit.length - commonOffset);
                        equality1 = equality1.substring(0, equality1.length - commonOffset), edit = commonString + edit.substring(0, edit.length - commonOffset), 
                        equality2 = commonString + equality2;
                    }
                    for (var bestEquality1 = equality1, bestEdit = edit, bestEquality2 = equality2, bestScore = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2); edit.charAt(0) === equality2.charAt(0); ) {
                        equality1 += edit.charAt(0), edit = edit.substring(1) + equality2.charAt(0), equality2 = equality2.substring(1);
                        var score = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2);
                        score >= bestScore && (bestScore = score, bestEquality1 = equality1, bestEdit = edit, 
                        bestEquality2 = equality2);
                    }
                    diffs[pointer - 1][1] != bestEquality1 && (bestEquality1 ? diffs[pointer - 1][1] = bestEquality1 : (diffs.splice(pointer - 1, 1), 
                    pointer--), diffs[pointer][1] = bestEdit, bestEquality2 ? diffs[pointer + 1][1] = bestEquality2 : (diffs.splice(pointer + 1, 1), 
                    pointer--));
                }
                pointer++;
            }
        }, diff_match_patch.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/, diff_match_patch.whitespaceRegex_ = /\s/, 
        diff_match_patch.linebreakRegex_ = /[\r\n]/, diff_match_patch.blanklineEndRegex_ = /\n\r?\n$/, 
        diff_match_patch.blanklineStartRegex_ = /^\r?\n\r?\n/, diff_match_patch.prototype.diff_cleanupEfficiency = function(diffs) {
            for (var changes = !1, equalities = [], equalitiesLength = 0, lastEquality = null, pointer = 0, pre_ins = !1, pre_del = !1, post_ins = !1, post_del = !1; pointer < diffs.length; ) 0 == diffs[pointer][0] ? (diffs[pointer][1].length < this.Diff_EditCost && (post_ins || post_del) ? (equalities[equalitiesLength++] = pointer, 
            pre_ins = post_ins, pre_del = post_del, lastEquality = diffs[pointer][1]) : (equalitiesLength = 0, 
            lastEquality = null), post_ins = post_del = !1) : (-1 == diffs[pointer][0] ? post_del = !0 : post_ins = !0, 
            lastEquality && (pre_ins && pre_del && post_ins && post_del || lastEquality.length < this.Diff_EditCost / 2 && pre_ins + pre_del + post_ins + post_del == 3) && (diffs.splice(equalities[equalitiesLength - 1], 0, new diff_match_patch.Diff(-1, lastEquality)), 
            diffs[equalities[equalitiesLength - 1] + 1][0] = 1, equalitiesLength--, lastEquality = null, 
            pre_ins && pre_del ? (post_ins = post_del = !0, equalitiesLength = 0) : (pointer = --equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1, 
            post_ins = post_del = !1), changes = !0)), pointer++;
            changes && this.diff_cleanupMerge(diffs);
        }, diff_match_patch.prototype.diff_cleanupMerge = function(diffs) {
            diffs.push(new diff_match_patch.Diff(0, ""));
            for (var commonlength, pointer = 0, count_delete = 0, count_insert = 0, text_delete = "", text_insert = ""; pointer < diffs.length; ) switch (diffs[pointer][0]) {
              case 1:
                count_insert++, text_insert += diffs[pointer][1], pointer++;
                break;

              case -1:
                count_delete++, text_delete += diffs[pointer][1], pointer++;
                break;

              case 0:
                count_delete + count_insert > 1 ? (0 !== count_delete && 0 !== count_insert && (0 !== (commonlength = this.diff_commonPrefix(text_insert, text_delete)) && (pointer - count_delete - count_insert > 0 && 0 == diffs[pointer - count_delete - count_insert - 1][0] ? diffs[pointer - count_delete - count_insert - 1][1] += text_insert.substring(0, commonlength) : (diffs.splice(0, 0, new diff_match_patch.Diff(0, text_insert.substring(0, commonlength))), 
                pointer++), text_insert = text_insert.substring(commonlength), text_delete = text_delete.substring(commonlength)), 
                0 !== (commonlength = this.diff_commonSuffix(text_insert, text_delete)) && (diffs[pointer][1] = text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1], 
                text_insert = text_insert.substring(0, text_insert.length - commonlength), text_delete = text_delete.substring(0, text_delete.length - commonlength))), 
                pointer -= count_delete + count_insert, diffs.splice(pointer, count_delete + count_insert), 
                text_delete.length && (diffs.splice(pointer, 0, new diff_match_patch.Diff(-1, text_delete)), 
                pointer++), text_insert.length && (diffs.splice(pointer, 0, new diff_match_patch.Diff(1, text_insert)), 
                pointer++), pointer++) : 0 !== pointer && 0 == diffs[pointer - 1][0] ? (diffs[pointer - 1][1] += diffs[pointer][1], 
                diffs.splice(pointer, 1)) : pointer++, count_insert = 0, count_delete = 0, text_delete = "", 
                text_insert = "";
            }
            "" === diffs[diffs.length - 1][1] && diffs.pop();
            var changes = !1;
            for (pointer = 1; pointer < diffs.length - 1; ) 0 == diffs[pointer - 1][0] && 0 == diffs[pointer + 1][0] && (diffs[pointer][1].substring(diffs[pointer][1].length - diffs[pointer - 1][1].length) == diffs[pointer - 1][1] ? (diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length), 
            diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1], diffs.splice(pointer - 1, 1), 
            changes = !0) : diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) == diffs[pointer + 1][1] && (diffs[pointer - 1][1] += diffs[pointer + 1][1], 
            diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1], 
            diffs.splice(pointer + 1, 1), changes = !0)), pointer++;
            changes && this.diff_cleanupMerge(diffs);
        }, diff_match_patch.prototype.diff_xIndex = function(diffs, loc) {
            var x, chars1 = 0, chars2 = 0, last_chars1 = 0, last_chars2 = 0;
            for (x = 0; x < diffs.length && (1 !== diffs[x][0] && (chars1 += diffs[x][1].length), 
            -1 !== diffs[x][0] && (chars2 += diffs[x][1].length), !(chars1 > loc)); x++) last_chars1 = chars1, 
            last_chars2 = chars2;
            return diffs.length != x && -1 === diffs[x][0] ? last_chars2 : last_chars2 + (loc - last_chars1);
        }, diff_match_patch.prototype.diff_prettyHtml = function(diffs) {
            for (var html = [], pattern_amp = /&/g, pattern_lt = /</g, pattern_gt = />/g, pattern_para = /\n/g, x = 0; x < diffs.length; x++) {
                var op = diffs[x][0], text = diffs[x][1].replace(pattern_amp, "&amp;").replace(pattern_lt, "&lt;").replace(pattern_gt, "&gt;").replace(pattern_para, "&para;<br>");
                switch (op) {
                  case 1:
                    html[x] = '<ins style="background:#e6ffe6;">' + text + "</ins>";
                    break;

                  case -1:
                    html[x] = '<del style="background:#ffe6e6;">' + text + "</del>";
                    break;

                  case 0:
                    html[x] = "<span>" + text + "</span>";
                }
            }
            return html.join("");
        }, diff_match_patch.prototype.diff_text1 = function(diffs) {
            for (var text = [], x = 0; x < diffs.length; x++) 1 !== diffs[x][0] && (text[x] = diffs[x][1]);
            return text.join("");
        }, diff_match_patch.prototype.diff_text2 = function(diffs) {
            for (var text = [], x = 0; x < diffs.length; x++) -1 !== diffs[x][0] && (text[x] = diffs[x][1]);
            return text.join("");
        }, diff_match_patch.prototype.diff_levenshtein = function(diffs) {
            for (var levenshtein = 0, insertions = 0, deletions = 0, x = 0; x < diffs.length; x++) {
                var op = diffs[x][0], data = diffs[x][1];
                switch (op) {
                  case 1:
                    insertions += data.length;
                    break;

                  case -1:
                    deletions += data.length;
                    break;

                  case 0:
                    levenshtein += Math.max(insertions, deletions), insertions = 0, deletions = 0;
                }
            }
            return levenshtein += Math.max(insertions, deletions);
        }, diff_match_patch.prototype.diff_toDelta = function(diffs) {
            for (var text = [], x = 0; x < diffs.length; x++) switch (diffs[x][0]) {
              case 1:
                text[x] = "+" + encodeURI(diffs[x][1]);
                break;

              case -1:
                text[x] = "-" + diffs[x][1].length;
                break;

              case 0:
                text[x] = "=" + diffs[x][1].length;
            }
            return text.join("\t").replace(/%20/g, " ");
        }, diff_match_patch.prototype.diff_fromDelta = function(text1, delta) {
            for (var diffs = [], diffsLength = 0, pointer = 0, tokens = delta.split(/\t/g), x = 0; x < tokens.length; x++) {
                var param = tokens[x].substring(1);
                switch (tokens[x].charAt(0)) {
                  case "+":
                    try {
                        diffs[diffsLength++] = new diff_match_patch.Diff(1, decodeURI(param));
                    } catch (ex) {
                        throw new Error("Illegal escape in diff_fromDelta: " + param);
                    }
                    break;

                  case "-":
                  case "=":
                    var n = parseInt(param, 10);
                    if (isNaN(n) || n < 0) throw new Error("Invalid number in diff_fromDelta: " + param);
                    var text = text1.substring(pointer, pointer += n);
                    "=" == tokens[x].charAt(0) ? diffs[diffsLength++] = new diff_match_patch.Diff(0, text) : diffs[diffsLength++] = new diff_match_patch.Diff(-1, text);
                    break;

                  default:
                    if (tokens[x]) throw new Error("Invalid diff operation in diff_fromDelta: " + tokens[x]);
                }
            }
            if (pointer != text1.length) throw new Error("Delta length (" + pointer + ") does not equal source text length (" + text1.length + ").");
            return diffs;
        }, diff_match_patch.prototype.match_main = function(text, pattern, loc) {
            if (null == text || null == pattern || null == loc) throw new Error("Null input. (match_main)");
            return loc = Math.max(0, Math.min(loc, text.length)), text == pattern ? 0 : text.length ? text.substring(loc, loc + pattern.length) == pattern ? loc : this.match_bitap_(text, pattern, loc) : -1;
        }, diff_match_patch.prototype.match_bitap_ = function(text, pattern, loc) {
            if (pattern.length > this.Match_MaxBits) throw new Error("Pattern too long for this browser.");
            var s = this.match_alphabet_(pattern), dmp = this;
            function match_bitapScore_(e, x) {
                var accuracy = e / pattern.length, proximity = Math.abs(loc - x);
                return dmp.Match_Distance ? accuracy + proximity / dmp.Match_Distance : proximity ? 1 : accuracy;
            }
            var score_threshold = this.Match_Threshold, best_loc = text.indexOf(pattern, loc);
            -1 != best_loc && (score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold), 
            -1 != (best_loc = text.lastIndexOf(pattern, loc + pattern.length)) && (score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold)));
            var bin_min, bin_mid, matchmask = 1 << pattern.length - 1;
            best_loc = -1;
            for (var last_rd, bin_max = pattern.length + text.length, d = 0; d < pattern.length; d++) {
                for (bin_min = 0, bin_mid = bin_max; bin_min < bin_mid; ) match_bitapScore_(d, loc + bin_mid) <= score_threshold ? bin_min = bin_mid : bin_max = bin_mid, 
                bin_mid = Math.floor((bin_max - bin_min) / 2 + bin_min);
                bin_max = bin_mid;
                var start = Math.max(1, loc - bin_mid + 1), finish = Math.min(loc + bin_mid, text.length) + pattern.length, rd = Array(finish + 2);
                rd[finish + 1] = (1 << d) - 1;
                for (var j = finish; j >= start; j--) {
                    var charMatch = s[text.charAt(j - 1)];
                    if (rd[j] = 0 === d ? (rd[j + 1] << 1 | 1) & charMatch : (rd[j + 1] << 1 | 1) & charMatch | (last_rd[j + 1] | last_rd[j]) << 1 | 1 | last_rd[j + 1], 
                    rd[j] & matchmask) {
                        var score = match_bitapScore_(d, j - 1);
                        if (score <= score_threshold) {
                            if (score_threshold = score, !((best_loc = j - 1) > loc)) break;
                            start = Math.max(1, 2 * loc - best_loc);
                        }
                    }
                }
                if (match_bitapScore_(d + 1, loc) > score_threshold) break;
                last_rd = rd;
            }
            return best_loc;
        }, diff_match_patch.prototype.match_alphabet_ = function(pattern) {
            for (var s = {}, i = 0; i < pattern.length; i++) s[pattern.charAt(i)] = 0;
            for (i = 0; i < pattern.length; i++) s[pattern.charAt(i)] |= 1 << pattern.length - i - 1;
            return s;
        }, diff_match_patch.prototype.patch_addContext_ = function(patch, text) {
            if (0 != text.length) {
                if (null === patch.start2) throw Error("patch not initialized");
                for (var pattern = text.substring(patch.start2, patch.start2 + patch.length1), padding = 0; text.indexOf(pattern) != text.lastIndexOf(pattern) && pattern.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin; ) padding += this.Patch_Margin, 
                pattern = text.substring(patch.start2 - padding, patch.start2 + patch.length1 + padding);
                padding += this.Patch_Margin;
                var prefix = text.substring(patch.start2 - padding, patch.start2);
                prefix && patch.diffs.unshift(new diff_match_patch.Diff(0, prefix));
                var suffix = text.substring(patch.start2 + patch.length1, patch.start2 + patch.length1 + padding);
                suffix && patch.diffs.push(new diff_match_patch.Diff(0, suffix)), patch.start1 -= prefix.length, 
                patch.start2 -= prefix.length, patch.length1 += prefix.length + suffix.length, patch.length2 += prefix.length + suffix.length;
            }
        }, diff_match_patch.prototype.patch_make = function(a, opt_b, opt_c) {
            var text1, diffs;
            if ("string" == typeof a && "string" == typeof opt_b && void 0 === opt_c) text1 = a, 
            (diffs = this.diff_main(text1, opt_b, !0)).length > 2 && (this.diff_cleanupSemantic(diffs), 
            this.diff_cleanupEfficiency(diffs)); else if (a && "object" == typeof a && void 0 === opt_b && void 0 === opt_c) diffs = a, 
            text1 = this.diff_text1(diffs); else if ("string" == typeof a && opt_b && "object" == typeof opt_b && void 0 === opt_c) text1 = a, 
            diffs = opt_b; else {
                if ("string" != typeof a || "string" != typeof opt_b || !opt_c || "object" != typeof opt_c) throw new Error("Unknown call format to patch_make.");
                text1 = a, diffs = opt_c;
            }
            if (0 === diffs.length) return [];
            for (var patches = [], patch = new diff_match_patch.patch_obj, patchDiffLength = 0, char_count1 = 0, char_count2 = 0, prepatch_text = text1, postpatch_text = text1, x = 0; x < diffs.length; x++) {
                var diff_type = diffs[x][0], diff_text = diffs[x][1];
                switch (patchDiffLength || 0 === diff_type || (patch.start1 = char_count1, patch.start2 = char_count2), 
                diff_type) {
                  case 1:
                    patch.diffs[patchDiffLength++] = diffs[x], patch.length2 += diff_text.length, postpatch_text = postpatch_text.substring(0, char_count2) + diff_text + postpatch_text.substring(char_count2);
                    break;

                  case -1:
                    patch.length1 += diff_text.length, patch.diffs[patchDiffLength++] = diffs[x], postpatch_text = postpatch_text.substring(0, char_count2) + postpatch_text.substring(char_count2 + diff_text.length);
                    break;

                  case 0:
                    diff_text.length <= 2 * this.Patch_Margin && patchDiffLength && diffs.length != x + 1 ? (patch.diffs[patchDiffLength++] = diffs[x], 
                    patch.length1 += diff_text.length, patch.length2 += diff_text.length) : diff_text.length >= 2 * this.Patch_Margin && patchDiffLength && (this.patch_addContext_(patch, prepatch_text), 
                    patches.push(patch), patch = new diff_match_patch.patch_obj, patchDiffLength = 0, 
                    prepatch_text = postpatch_text, char_count1 = char_count2);
                }
                1 !== diff_type && (char_count1 += diff_text.length), -1 !== diff_type && (char_count2 += diff_text.length);
            }
            return patchDiffLength && (this.patch_addContext_(patch, prepatch_text), patches.push(patch)), 
            patches;
        }, diff_match_patch.prototype.patch_deepCopy = function(patches) {
            for (var patchesCopy = [], x = 0; x < patches.length; x++) {
                var patch = patches[x], patchCopy = new diff_match_patch.patch_obj;
                patchCopy.diffs = [];
                for (var y = 0; y < patch.diffs.length; y++) patchCopy.diffs[y] = new diff_match_patch.Diff(patch.diffs[y][0], patch.diffs[y][1]);
                patchCopy.start1 = patch.start1, patchCopy.start2 = patch.start2, patchCopy.length1 = patch.length1, 
                patchCopy.length2 = patch.length2, patchesCopy[x] = patchCopy;
            }
            return patchesCopy;
        }, diff_match_patch.prototype.patch_apply = function(patches, text) {
            if (0 == patches.length) return [ text, [] ];
            patches = this.patch_deepCopy(patches);
            var nullPadding = this.patch_addPadding(patches);
            text = nullPadding + text + nullPadding, this.patch_splitMax(patches);
            for (var delta = 0, results = [], x = 0; x < patches.length; x++) {
                var start_loc, text2, expected_loc = patches[x].start2 + delta, text1 = this.diff_text1(patches[x].diffs), end_loc = -1;
                if (text1.length > this.Match_MaxBits ? -1 != (start_loc = this.match_main(text, text1.substring(0, this.Match_MaxBits), expected_loc)) && (-1 == (end_loc = this.match_main(text, text1.substring(text1.length - this.Match_MaxBits), expected_loc + text1.length - this.Match_MaxBits)) || start_loc >= end_loc) && (start_loc = -1) : start_loc = this.match_main(text, text1, expected_loc), 
                -1 == start_loc) results[x] = !1, delta -= patches[x].length2 - patches[x].length1; else if (results[x] = !0, 
                delta = start_loc - expected_loc, text1 == (text2 = -1 == end_loc ? text.substring(start_loc, start_loc + text1.length) : text.substring(start_loc, end_loc + this.Match_MaxBits))) text = text.substring(0, start_loc) + this.diff_text2(patches[x].diffs) + text.substring(start_loc + text1.length); else {
                    var diffs = this.diff_main(text1, text2, !1);
                    if (text1.length > this.Match_MaxBits && this.diff_levenshtein(diffs) / text1.length > this.Patch_DeleteThreshold) results[x] = !1; else {
                        this.diff_cleanupSemanticLossless(diffs);
                        for (var index2, index1 = 0, y = 0; y < patches[x].diffs.length; y++) {
                            var mod = patches[x].diffs[y];
                            0 !== mod[0] && (index2 = this.diff_xIndex(diffs, index1)), 1 === mod[0] ? text = text.substring(0, start_loc + index2) + mod[1] + text.substring(start_loc + index2) : -1 === mod[0] && (text = text.substring(0, start_loc + index2) + text.substring(start_loc + this.diff_xIndex(diffs, index1 + mod[1].length))), 
                            -1 !== mod[0] && (index1 += mod[1].length);
                        }
                    }
                }
            }
            return [ text = text.substring(nullPadding.length, text.length - nullPadding.length), results ];
        }, diff_match_patch.prototype.patch_addPadding = function(patches) {
            for (var paddingLength = this.Patch_Margin, nullPadding = "", x = 1; x <= paddingLength; x++) nullPadding += String.fromCharCode(x);
            for (x = 0; x < patches.length; x++) patches[x].start1 += paddingLength, patches[x].start2 += paddingLength;
            var patch = patches[0], diffs = patch.diffs;
            if (0 == diffs.length || 0 != diffs[0][0]) diffs.unshift(new diff_match_patch.Diff(0, nullPadding)), 
            patch.start1 -= paddingLength, patch.start2 -= paddingLength, patch.length1 += paddingLength, 
            patch.length2 += paddingLength; else if (paddingLength > diffs[0][1].length) {
                var extraLength = paddingLength - diffs[0][1].length;
                diffs[0][1] = nullPadding.substring(diffs[0][1].length) + diffs[0][1], patch.start1 -= extraLength, 
                patch.start2 -= extraLength, patch.length1 += extraLength, patch.length2 += extraLength;
            }
            if (0 == (diffs = (patch = patches[patches.length - 1]).diffs).length || 0 != diffs[diffs.length - 1][0]) diffs.push(new diff_match_patch.Diff(0, nullPadding)), 
            patch.length1 += paddingLength, patch.length2 += paddingLength; else if (paddingLength > diffs[diffs.length - 1][1].length) {
                extraLength = paddingLength - diffs[diffs.length - 1][1].length;
                diffs[diffs.length - 1][1] += nullPadding.substring(0, extraLength), patch.length1 += extraLength, 
                patch.length2 += extraLength;
            }
            return nullPadding;
        }, diff_match_patch.prototype.patch_splitMax = function(patches) {
            for (var patch_size = this.Match_MaxBits, x = 0; x < patches.length; x++) if (!(patches[x].length1 <= patch_size)) {
                var bigpatch = patches[x];
                patches.splice(x--, 1);
                for (var start1 = bigpatch.start1, start2 = bigpatch.start2, precontext = ""; 0 !== bigpatch.diffs.length; ) {
                    var patch = new diff_match_patch.patch_obj, empty = !0;
                    for (patch.start1 = start1 - precontext.length, patch.start2 = start2 - precontext.length, 
                    "" !== precontext && (patch.length1 = patch.length2 = precontext.length, patch.diffs.push(new diff_match_patch.Diff(0, precontext))); 0 !== bigpatch.diffs.length && patch.length1 < patch_size - this.Patch_Margin; ) {
                        var diff_type = bigpatch.diffs[0][0], diff_text = bigpatch.diffs[0][1];
                        1 === diff_type ? (patch.length2 += diff_text.length, start2 += diff_text.length, 
                        patch.diffs.push(bigpatch.diffs.shift()), empty = !1) : -1 === diff_type && 1 == patch.diffs.length && 0 == patch.diffs[0][0] && diff_text.length > 2 * patch_size ? (patch.length1 += diff_text.length, 
                        start1 += diff_text.length, empty = !1, patch.diffs.push(new diff_match_patch.Diff(diff_type, diff_text)), 
                        bigpatch.diffs.shift()) : (diff_text = diff_text.substring(0, patch_size - patch.length1 - this.Patch_Margin), 
                        patch.length1 += diff_text.length, start1 += diff_text.length, 0 === diff_type ? (patch.length2 += diff_text.length, 
                        start2 += diff_text.length) : empty = !1, patch.diffs.push(new diff_match_patch.Diff(diff_type, diff_text)), 
                        diff_text == bigpatch.diffs[0][1] ? bigpatch.diffs.shift() : bigpatch.diffs[0][1] = bigpatch.diffs[0][1].substring(diff_text.length));
                    }
                    precontext = (precontext = this.diff_text2(patch.diffs)).substring(precontext.length - this.Patch_Margin);
                    var postcontext = this.diff_text1(bigpatch.diffs).substring(0, this.Patch_Margin);
                    "" !== postcontext && (patch.length1 += postcontext.length, patch.length2 += postcontext.length, 
                    0 !== patch.diffs.length && 0 === patch.diffs[patch.diffs.length - 1][0] ? patch.diffs[patch.diffs.length - 1][1] += postcontext : patch.diffs.push(new diff_match_patch.Diff(0, postcontext))), 
                    empty || patches.splice(++x, 0, patch);
                }
            }
        }, diff_match_patch.prototype.patch_toText = function(patches) {
            for (var text = [], x = 0; x < patches.length; x++) text[x] = patches[x];
            return text.join("");
        }, diff_match_patch.prototype.patch_fromText = function(textline) {
            var patches = [];
            if (!textline) return patches;
            for (var text = textline.split("\n"), textPointer = 0, patchHeader = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/; textPointer < text.length; ) {
                var m = text[textPointer].match(patchHeader);
                if (!m) throw new Error("Invalid patch string: " + text[textPointer]);
                var patch = new diff_match_patch.patch_obj;
                for (patches.push(patch), patch.start1 = parseInt(m[1], 10), "" === m[2] ? (patch.start1--, 
                patch.length1 = 1) : "0" == m[2] ? patch.length1 = 0 : (patch.start1--, patch.length1 = parseInt(m[2], 10)), 
                patch.start2 = parseInt(m[3], 10), "" === m[4] ? (patch.start2--, patch.length2 = 1) : "0" == m[4] ? patch.length2 = 0 : (patch.start2--, 
                patch.length2 = parseInt(m[4], 10)), textPointer++; textPointer < text.length; ) {
                    var sign = text[textPointer].charAt(0);
                    try {
                        var line = decodeURI(text[textPointer].substring(1));
                    } catch (ex) {
                        throw new Error("Illegal escape in patch_fromText: " + line);
                    }
                    if ("-" == sign) patch.diffs.push(new diff_match_patch.Diff(-1, line)); else if ("+" == sign) patch.diffs.push(new diff_match_patch.Diff(1, line)); else if (" " == sign) patch.diffs.push(new diff_match_patch.Diff(0, line)); else {
                        if ("@" == sign) break;
                        if ("" !== sign) throw new Error('Invalid patch mode "' + sign + '" in: ' + line);
                    }
                    textPointer++;
                }
            }
            return patches;
        }, (diff_match_patch.patch_obj = function() {
            this.diffs = [], this.start1 = null, this.start2 = null, this.length1 = 0, this.length2 = 0;
        }).prototype.toString = function() {
            for (var op, text = [ "@@ -" + (0 === this.length1 ? this.start1 + ",0" : 1 == this.length1 ? this.start1 + 1 : this.start1 + 1 + "," + this.length1) + " +" + (0 === this.length2 ? this.start2 + ",0" : 1 == this.length2 ? this.start2 + 1 : this.start2 + 1 + "," + this.length2) + " @@\n" ], x = 0; x < this.diffs.length; x++) {
                switch (this.diffs[x][0]) {
                  case 1:
                    op = "+";
                    break;

                  case -1:
                    op = "-";
                    break;

                  case 0:
                    op = " ";
                }
                text[x + 1] = op + encodeURI(this.diffs[x][1]) + "\n";
            }
            return text.join("").replace(/%20/g, " ");
        }, module.exports = diff_match_patch, module.exports.diff_match_patch = diff_match_patch, 
        module.exports.DIFF_DELETE = -1, module.exports.DIFF_INSERT = 1, module.exports.DIFF_EQUAL = 0;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__18__;
    }, function(module) {
        module.exports = JSON.parse('{"Critical Strike Chance":" \u66b4\u51fb\u7387","Effectiveness of Added Damage":" \u4f24\u5bb3\u6548\u7528","Bow":" \u5f13","Rune ":" \u7b26\u6587","Claw":" \u722a","Dagger":" \u5315\u9996","Warstaff":" \u6218\u6756","Staff":" \u957f\u6756","Axe":" \u65a7","Two Handed ":" \u53cc\u624b","One Handed ":" \u5355\u624b","Mace":" \u9524","Sword":" \u5251","Wand":" \u6cd5\u6756","Fishing Rod":" \u9c7c\u7aff","Abyss":" \u6df1\u6e0a","Client":" \u5ba2\u6237","Alert Level Reduction":" \u8b66\u62a5\u7b49\u7ea7\u8870\u51cf","Time Before Lockdown":" \u5c01\u9501\u524d\u7684\u65f6\u95f4","This item can be equipped by":" \u8be5\u7269\u54c1\u53ef\u4ee5\u88c5\u5907\u7ed9","Any Heist member can equip this item.":" \u4efb\u4f55\u8d4f\u91d1\u730e\u4eba\u90fd\u53ef\u4ee5\u88c5\u5907\u8be5\u7269\u54c1\u3002","Sceptre":" \u77ed\u6756","Weapon Range":" \u6b66\u5668\u8303\u56f4","Attack":" \u653b\u51fb","Melee":" \u8fd1\u6218","Strike":" \u6253\u51fb","Slam":" \u731b\u51fb","Warcry":" \u6218\u543c","Spell":" \u6cd5\u672f","Arcane":" \u5965\u672f","Brand":" \u70d9\u5370","Orb":" \u6cd5\u7403","Nova":" \u65b0\u661f","Channelling":" \u6301\u7eed\u541f\u5531","Physical":" \u7269\u7406","Fire":" \u706b\u7130","Cold":" \u51b0\u971c","Lightning":" \u95ea\u7535","Chaos":" \u6df7\u6c8c","Projectile":" \u6295\u5c04\u7269","Chaining":" \u8fde\u9501","Prismatic":" \u8679\u5149","Minion":" \u53ec\u5524\u751f\u7269","Mine":" \u5730\u96f7","Trap":" \u9677\u9631","Golem":" \u56fe\u817e","Aura":" \u5149\u73af","Herald":" \u6377","Stance":" \u59ff\u6001","Guard":" \u62a4\u536b","Totem":" \u56fe\u817e","Movement":" \u4f4d\u79fb","Travel":" \u65c5\u884c","Blink":" \u95ea\u73b0","Curse":" \u8bc5\u5492","Hex":" \u9b54\u86ca","Mark":" \u5492\u5370","AoE":" \u6548\u679c\u533a\u57df","Duration":" \u6301\u7eed\u65f6\u95f4","Vaal":" \u74e6\u5c14","Trigger":" \u89e6\u53d1","Critical":" \u66b4\u51fb","Link":" \u7f81\u7eca","Mana":" \u9b54\u529b"," Damage":" \u4f24\u5bb3"," Speed":" \u901f\u5ea6","of base":" \u57fa\u7840","Cost &amp; Reservation Multiplier":" \u6d88\u8017\u53ca\u4fdd\u7559\u52a0\u6210","Cost":" \u6d88\u8017","Cast":" \u65bd\u653e","Reservation":" \u4fdd\u7559","Time":" \u65f6\u95f4","Cooldown":" \u51b7\u5374","per ":" \u6bcf","Seconds":" \u79d2","Second":" \u79d2","second":" \u79d2","sec":" \u79d2","Max":" \u6700\u9ad8\u7b49\u7ea7","Instant":" \u77ac\u53d1","Alternate Quality":" \u66ff\u6362\u54c1\u8d28","Cooldown Time":" \u51b7\u5374\u65f6\u95f4","Souls Per Use":" \u6bcf\u6b21\u65bd\u653e\u6240\u9700\u7075\u9b42","Can Store":" \u53ef\u50a8\u5b58","Soul Gain Prevention":" \u9677\u9631\u6301\u7eed","Karst, the Lockpick":"\u89e3\u5bc6\u5e08\u5361\u65af\u7279","Huck, the Soldier":"\u519b\u58eb\u54c8\u514b","Niles, the Interrogator":"\u5ba1\u8baf\u5e08\u5948\u5c14\u65af","Vinderi, the Dismantler":"\u7206\u7834\u5e08\u6e29\u5fb7\u5229","Gianna, the Master of Disguise":"\u6613\u5bb9\u5927\u5e08\u5409\u5b89\u5a1c","Tibbs, the Giant":"\u5de8\u6c49\u7279\u535c\u65af","Tullina, the Catburglar":"\u6f5c\u884c\u8005\u56fe\u6797\u5a1c","Nenet, the Scout":"\u65a5\u5019\u5948\u5c3c\u7279","Isla, the Engineer":"\u5de5\u7a0b\u5e08\u4f0a\u65af\u62c9","Atlas Region":" \u5f02\u754c\u5730\u533a","Haewark Hamlet":" \u6d77\u6c83\u514b\u6751","Lira Arthain":" \u5229\u62c9\u4e9a\u68ee","Valdos Rest":" \u74e6\u5c14\u591a\u4e4b\u606f","Glennach Cairns":" \u683c\u4f26\u7eb3\u8d6b\u77f3\u51a2","Limited to":" \u4ec5\u9650","Radius":" \u8303\u56f4","Variable":" \u53d8\u91cf","Medium":" \u4e2d","Small":" \u5c0f","Survival":" \u5e78\u5b58","Lasts":" \u6301\u7eed","Large":" \u5927","Consumes":" \u6bcf\u6b21\u4f7f\u7528"," of ":" \u4ece"," on use":" \u4e2d\u6d88\u8017","Currently has":" \u76ee\u524d\u6709","Charges":" \u5145\u80fd\u6b21\u6570","Recovers":" \u56de\u590d","Historic":" \u53f2\u5b9e","Life":" \u751f\u547d"," over":" \u7528\u65f6","Genus":" \u5c5e\u7c7b","Group":" \u7ec4\u522b","Family":" \u79d1\u76ee","Uses":" \u4f7f\u7528","Use":" \u4f7f\u7528","Requires":" \u9700\u8981","Support":" \u8f85\u52a9","Socketed Fossils":" \u4e2a\u5df2\u9576\u5d4c\u7684\u5316\u77f3","Socketed Fossil":" \u4e2a\u5df2\u9576\u5d4c\u7684\u5316\u77f3"}');
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.HttpHeaders = exports.Http = void 0;
        var Logger_1 = __webpack_require__(0), Common_1 = __webpack_require__(21), Config_1 = __webpack_require__(3), Http = function() {
            function Http() {}
            return Http.ajax = function(option) {
                var _a, _b, head = new HttpHeaders;
                head["User-Agent"] = null !== (_a = unsafeWindow.window.navigator.userAgent) && void 0 !== _a ? _a : "Mozilla/4.0 (compatible) Greasemonkey", 
                head.Accept = "application/atom+xml,application/xml,text/xml", option.url.indexOf("shuma") > -1 && (head.Author = null !== (_b = Config_1.Config.env.script.author) && void 0 !== _b ? _b : "shuma", 
                head.Version = Config_1.Config.env.script.version), option.headers || (option.headers = head);
                try {
                    GM_xmlhttpRequest(option);
                } catch (e) {
                    Logger_1.Logger.error(e);
                }
            }, Http.getFormData = function(data) {
                if (data instanceof Map) {
                    var fd_1 = new FormData;
                    data.forEach((function(v, k) {
                        var _v;
                        _v = "string" == typeof v ? v.toString() : JSON.stringify(v), fd_1.append(k, _v);
                    })), data = fd_1;
                }
                return data;
            }, Http._getData = function(data, contentType) {
                if (void 0 === contentType && (contentType = "json"), data instanceof Map) {
                    var fd_2 = new FormData;
                    data.forEach((function(v, k) {
                        fd_2.append(k, v);
                    })), data = fd_2;
                }
                var res = "";
                if ("json" == contentType) {
                    var obj_1 = Object.create(null);
                    data.forEach((function(k, v) {
                        obj_1[v] = k;
                    })), res = JSON.stringify(obj_1);
                } else data.forEach((function(k, v) {
                    res += v + "=" + encodeURIComponent(k.toString()) + "&";
                })), res = Common_1.Common.trim(res, "&");
                return res;
            }, Http.post = function(url, data, contentType, timeOut) {
                void 0 === contentType && (contentType = "json"), void 0 === timeOut && (timeOut = 120);
                var _data = "";
                return _data = "json" == contentType ? JSON.stringify(data) : Http.getFormData(data), 
                new Promise((function(resolve, reject) {
                    Http.ajax({
                        url: url,
                        method: "POST",
                        data: _data,
                        timeout: 1e3 * timeOut,
                        onload: function(response) {
                            var _a;
                            try {
                                var res = null !== (_a = JSON.parse(response.responseText)) && void 0 !== _a ? _a : response.responseText;
                                resolve(res);
                            } catch (error) {
                                Logger_1.Logger.debug(error), reject();
                            }
                        },
                        onerror: function(response) {
                            reject(response);
                        },
                        ontimeout: function() {
                            reject("\u8bf7\u6c42\u8d85\u65f6");
                        }
                    });
                }));
            }, Http.get = function(url, data, time_out) {
                return void 0 === data && (data = new Map), void 0 === time_out && (time_out = 120), 
                new Promise((function(resolve, reject) {
                    Http.ajax({
                        url: url,
                        method: "GET",
                        timeout: 1e3 * time_out,
                        onload: function(response) {
                            var _a;
                            try {
                                var res = null !== (_a = JSON.parse(response.responseText)) && void 0 !== _a ? _a : response.responseText;
                                resolve(res);
                            } catch (error) {
                                Logger_1.Logger.debug(error), reject();
                            }
                        },
                        onerror: function(response) {
                            reject(response);
                        },
                        ontimeout: function() {
                            reject("\u8bf7\u6c42\u8d85\u65f6");
                        }
                    });
                }));
            }, Http;
        }();
        exports.Http = Http;
        var HttpHeaders = function() {};
        exports.HttpHeaders = HttpHeaders;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.Common = void 0;
        var Common = function() {
            function Common() {}
            return Common.randStr = function(len) {
                void 0 === len && (len = 4);
                for (var $chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", pwd = "", i = 0; i < len; i++) pwd += $chars.charAt(Math.floor(62 * Math.random()));
                return pwd;
            }, Common.humanSize = function(fileSize) {
                return fileSize < 1024 ? fileSize + "B" : fileSize < 1048576 ? (fileSize / 1024).toFixed(2) + "KB" : fileSize < 1073741824 ? (fileSize / 1048576).toFixed(2) + "MB" : (fileSize / 1073741824).toFixed(2) + "GB";
            }, Common.trim = function(source, char) {
                return source.replace(new RegExp("^\\" + char + "+|\\" + char + "+$", "g"), "");
            }, Common.getCookie = function(key) {
                for (var arr = document.cookie.replace(/\s/g, "").split(";"), i = 0, l = arr.length; i < l; i++) {
                    var tempArr = arr[i].split("=");
                    if (tempArr[0] == key) return decodeURIComponent(tempArr[1]);
                }
                return "";
            }, Common;
        }();
        exports.Common = Common;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
            return extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
            }, extendStatics(d, b);
        }, function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __);
        }), __importDefault = this && this.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.SettingApp = void 0;
        var AppBase_1 = __webpack_require__(5), SiteEnum_1 = __webpack_require__(2), react_1 = __importDefault(__webpack_require__(7)), Core_1 = __webpack_require__(1), Setting_1 = __webpack_require__(23), SettingApp = function(_super) {
            function SettingApp() {
                var _this = null !== _super && _super.apply(this, arguments) || this;
                return _this.rules = new Map([ [ SiteEnum_1.SiteEnum.POETrade, /pathofexile\.com\/trade\/search/i ] ]), 
                _this.appName = "\u914d\u7f6e\u4e2d\u5fc3", _this._unique = !1, _this;
            }
            return __extends(SettingApp, _super), SettingApp.prototype.loader = function() {}, 
            SettingApp.prototype.run = function() {
                var that = this;
                GM_registerMenuCommand("\u914d\u7f6e\u4e2d\u5fc3", (function() {
                    that.setting();
                }));
            }, SettingApp.prototype.setting = function() {
                Core_1.Core.Render(react_1.default.createElement(Setting_1.SettingUI, {
                    key: (new Date).getTime()
                }), "SettingApp");
            }, SettingApp;
        }(AppBase_1.AppBase);
        exports.SettingApp = SettingApp;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
            return extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
            }, extendStatics(d, b);
        }, function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __);
        }), __importDefault = this && this.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.SettingUI = void 0;
        var react_1 = __importDefault(__webpack_require__(7)), semi_ui_1 = __webpack_require__(24), Config_1 = __webpack_require__(3), SettingItem_1 = __webpack_require__(6), Logger_1 = __webpack_require__(0), SettingUI = function(_super) {
            function SettingUI(props) {
                var _this = _super.call(this, props) || this;
                return _this.state = {
                    visible: !0,
                    source: Config_1.Config.get(SettingItem_1.SettingItem.DataSource, "https://cdn.jsdelivr.net/gh/")
                }, _this.showDialog = _this.showDialog.bind(_this), _this.handleOk = _this.handleOk.bind(_this), 
                _this.handleCancel = _this.handleCancel.bind(_this), _this.getFormApi = _this.getFormApi.bind(_this), 
                _this;
            }
            return __extends(SettingUI, _super), SettingUI.prototype.showDialog = function() {
                this.setState({
                    visible: !0
                });
            }, SettingUI.prototype.handleOk = function() {
                var _this = this;
                this.formApi.validate().then((function(values) {
                    Config_1.Config.set(SettingItem_1.SettingItem.DataSource, values.source), SemiUI.Toast.success({
                        content: "\u4fdd\u5b58\u6210\u529f"
                    }), _this.setState({
                        visible: !1
                    });
                })).catch((function(errors) {}));
            }, SettingUI.prototype.handleCancel = function() {
                this.setState({
                    visible: !1
                });
            }, SettingUI.prototype.getFormApi = function(formApi) {
                this.formApi = formApi;
            }, SettingUI.prototype.showTips = function(values) {
                var str = "";
                switch (values.source) {
                  case "https://cdn.jsdelivr.net/gh/":
                    str = "https://cdn.jsdelivr.net";
                    break;

                  case "https://github.com/":
                    str = "https://github.com";
                }
                return str ? [ "\u6570\u636e\u6e90 - ", react_1.default.createElement(semi_ui_1.Typography.Text, {
                    type: "tertiary",
                    link: {
                        href: str,
                        target: "_blank"
                    },
                    style: {
                        marginRight: 8
                    }
                }, str) ] : "\u6570\u636e\u6e90(\u9009\u62e9\u6570\u636e\u6e90\u540e\u8bf7\u70b9\u51fb\u94fe\u63a5\u5c1d\u8bd5\u662f\u5426\u80fd\u6b63\u5e38\u6253\u5f00)";
            }, SettingUI.prototype.render = function() {
                var _this = this, _a = this.state, visible = _a.visible, source = _a.source, initV = {
                    source: source
                };
                return Logger_1.Logger.info("[SettingUI] visible: " + visible + ", source: " + source), 
                react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(semi_ui_1.Modal, {
                    title: "\u7cfb\u7edf\u914d\u7f6e",
                    visible: visible,
                    onOk: this.handleOk,
                    style: {
                        width: 600
                    },
                    onCancel: this.handleCancel
                }, react_1.default.createElement(semi_ui_1.Form, {
                    getFormApi: this.getFormApi,
                    initValues: initV
                }, (function(_a) {
                    _a.formState;
                    var values = _a.values;
                    _a.formApi;
                    return react_1.default.createElement(semi_ui_1.Row, null, react_1.default.createElement(semi_ui_1.Form.Select, {
                        field: "source",
                        label: _this.showTips(values),
                        placeholder: "\u8bf7\u9009\u62e9\u6570\u636e\u6e90",
                        style: {
                            width: "100%"
                        },
                        rules: [ {
                            required: !0,
                            message: "\u8bf7\u9009\u62e9\u6570\u636e\u6e90"
                        } ]
                    }, react_1.default.createElement(semi_ui_1.Form.Select.Option, {
                        key: "https:://cdn.jsdelivr.net/gh/",
                        value: "https://cdn.jsdelivr.net/gh/"
                    }, "jsdelivr"), react_1.default.createElement(semi_ui_1.Form.Select.Option, {
                        value: "https://github.com/"
                    }, "github")));
                }))));
            }, SettingUI;
        }(react_1.default.Component);
        exports.SettingUI = SettingUI;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__24__;
    } ]);
}));