// ==UserScript==
// @name           POE国际服市集翻译——持续更新
// @namespace      https://wiki.wandhi.com
// @description    POE国际服市集翻译——持续更新
// @license        MIT
// @version        1.0.0
// @author         shuma
// @source         https://wiki.wandhi.com
// @include        *://*
// @require        https://cdn.bootcss.com/jquery/2.2.4/jquery.min.js
// @require        https://cdn.jsdelivr.net/npm/echarts@5.1.2/dist/echarts.min.js
// @supportURL     https://wiki.wandhi.com
// @grant          GM_xmlhttpRequest
// @grant          GM_registerMenuCommand
// @grant          GM_openInTab
// @grant          GM_info
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_getResourceText
// @grant          GM_addStyle
// @grant          window.onurlchange
// @connect        shuma.ink
// @connect        gwdang.com
// @connect        baidu.com
// @connect        localhost
// @run-at         document-end
// @antifeature    membership
// @antifeature    referral-link
// ==/UserScript==

!function(root, factory) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = factory(); else if ("function" == typeof define && define.amd) define([], factory); else {
        var a = factory();
        for (var i in a) ("object" == typeof exports ? exports : root)[i] = a[i];
    }
}(window, (function() {
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
        }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 0);
    }([ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Container_1 = __webpack_require__(1), home_1 = __webpack_require__(5);
        Container_1.Container.Require(home_1.POE_Trade_Translation).Init();
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.IocAuto = exports.Container = void 0, __webpack_require__(2);
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
        }).call(this, __webpack_require__(3), __webpack_require__(4));
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
        var Logger_1 = __webpack_require__(6), POE_Trade_Translation = function() {
            function POE_Trade_Translation() {
                this.plugins = new Array, this.plugins = [], Logger_1.Logger.info("container loaded");
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
        }), exports.Logger = void 0;
        __webpack_require__(7);
        var LogLevel_1 = __webpack_require__(8), Logger = function() {
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
    } ]);
}));