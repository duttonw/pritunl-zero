"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpritunl_zero"] = self["webpackChunkpritunl_zero"] || []).push([["date-fns-locale-cs-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/cs/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/cs/_lib/formatDistance/index.js ***!
  \**********************************************************************/
/***/ ((module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nvar formatDistanceLocale = {\n  lessThanXSeconds: {\n    one: {\n      regular: 'méně než sekunda',\n      past: 'před méně než sekundou',\n      future: 'za méně než sekundu'\n    },\n    few: {\n      regular: 'méně než {{count}} sekundy',\n      past: 'před méně než {{count}} sekundami',\n      future: 'za méně než {{count}} sekundy'\n    },\n    many: {\n      regular: 'méně než {{count}} sekund',\n      past: 'před méně než {{count}} sekundami',\n      future: 'za méně než {{count}} sekund'\n    }\n  },\n  xSeconds: {\n    one: {\n      regular: 'sekunda',\n      past: 'před sekundou',\n      future: 'za sekundu'\n    },\n    few: {\n      regular: '{{count}} sekundy',\n      past: 'před {{count}} sekundami',\n      future: 'za {{count}} sekundy'\n    },\n    many: {\n      regular: '{{count}} sekund',\n      past: 'před {{count}} sekundami',\n      future: 'za {{count}} sekund'\n    }\n  },\n  halfAMinute: {\n    type: 'other',\n    other: {\n      regular: 'půl minuty',\n      past: 'před půl minutou',\n      future: 'za půl minuty'\n    }\n  },\n  lessThanXMinutes: {\n    one: {\n      regular: 'méně než minuta',\n      past: 'před méně než minutou',\n      future: 'za méně než minutu'\n    },\n    few: {\n      regular: 'méně než {{count}} minuty',\n      past: 'před méně než {{count}} minutami',\n      future: 'za méně než {{count}} minuty'\n    },\n    many: {\n      regular: 'méně než {{count}} minut',\n      past: 'před méně než {{count}} minutami',\n      future: 'za méně než {{count}} minut'\n    }\n  },\n  xMinutes: {\n    one: {\n      regular: 'minuta',\n      past: 'před minutou',\n      future: 'za minutu'\n    },\n    few: {\n      regular: '{{count}} minuty',\n      past: 'před {{count}} minutami',\n      future: 'za {{count}} minuty'\n    },\n    many: {\n      regular: '{{count}} minut',\n      past: 'před {{count}} minutami',\n      future: 'za {{count}} minut'\n    }\n  },\n  aboutXHours: {\n    one: {\n      regular: 'přibližně hodina',\n      past: 'přibližně před hodinou',\n      future: 'přibližně za hodinu'\n    },\n    few: {\n      regular: 'přibližně {{count}} hodiny',\n      past: 'přibližně před {{count}} hodinami',\n      future: 'přibližně za {{count}} hodiny'\n    },\n    many: {\n      regular: 'přibližně {{count}} hodin',\n      past: 'přibližně před {{count}} hodinami',\n      future: 'přibližně za {{count}} hodin'\n    }\n  },\n  xHours: {\n    one: {\n      regular: 'hodina',\n      past: 'před hodinou',\n      future: 'za hodinu'\n    },\n    few: {\n      regular: '{{count}} hodiny',\n      past: 'před {{count}} hodinami',\n      future: 'za {{count}} hodiny'\n    },\n    many: {\n      regular: '{{count}} hodin',\n      past: 'před {{count}} hodinami',\n      future: 'za {{count}} hodin'\n    }\n  },\n  xDays: {\n    one: {\n      regular: 'den',\n      past: 'před dnem',\n      future: 'za den'\n    },\n    few: {\n      regular: '{{count}} dny',\n      past: 'před {{count}} dny',\n      future: 'za {{count}} dny'\n    },\n    many: {\n      regular: '{{count}} dní',\n      past: 'před {{count}} dny',\n      future: 'za {{count}} dní'\n    }\n  },\n  aboutXWeeks: {\n    one: {\n      regular: 'přibližně týden',\n      past: 'přibližně před týdnem',\n      future: 'přibližně za týden'\n    },\n    few: {\n      regular: 'přibližně {{count}} týdny',\n      past: 'přibližně před {{count}} týdny',\n      future: 'přibližně za {{count}} týdny'\n    },\n    many: {\n      regular: 'přibližně {{count}} týdnů',\n      past: 'přibližně před {{count}} týdny',\n      future: 'přibližně za {{count}} týdnů'\n    }\n  },\n  xWeeks: {\n    one: {\n      regular: 'týden',\n      past: 'před týdnem',\n      future: 'za týden'\n    },\n    few: {\n      regular: '{{count}} týdny',\n      past: 'před {{count}} týdny',\n      future: 'za {{count}} týdny'\n    },\n    many: {\n      regular: '{{count}} týdnů',\n      past: 'před {{count}} týdny',\n      future: 'za {{count}} týdnů'\n    }\n  },\n  aboutXMonths: {\n    one: {\n      regular: 'přibližně měsíc',\n      past: 'přibližně před měsícem',\n      future: 'přibližně za měsíc'\n    },\n    few: {\n      regular: 'přibližně {{count}} měsíce',\n      past: 'přibližně před {{count}} měsíci',\n      future: 'přibližně za {{count}} měsíce'\n    },\n    many: {\n      regular: 'přibližně {{count}} měsíců',\n      past: 'přibližně před {{count}} měsíci',\n      future: 'přibližně za {{count}} měsíců'\n    }\n  },\n  xMonths: {\n    one: {\n      regular: 'měsíc',\n      past: 'před měsícem',\n      future: 'za měsíc'\n    },\n    few: {\n      regular: '{{count}} měsíce',\n      past: 'před {{count}} měsíci',\n      future: 'za {{count}} měsíce'\n    },\n    many: {\n      regular: '{{count}} měsíců',\n      past: 'před {{count}} měsíci',\n      future: 'za {{count}} měsíců'\n    }\n  },\n  aboutXYears: {\n    one: {\n      regular: 'přibližně rok',\n      past: 'přibližně před rokem',\n      future: 'přibližně za rok'\n    },\n    few: {\n      regular: 'přibližně {{count}} roky',\n      past: 'přibližně před {{count}} roky',\n      future: 'přibližně za {{count}} roky'\n    },\n    many: {\n      regular: 'přibližně {{count}} roků',\n      past: 'přibližně před {{count}} roky',\n      future: 'přibližně za {{count}} roků'\n    }\n  },\n  xYears: {\n    one: {\n      regular: 'rok',\n      past: 'před rokem',\n      future: 'za rok'\n    },\n    few: {\n      regular: '{{count}} roky',\n      past: 'před {{count}} roky',\n      future: 'za {{count}} roky'\n    },\n    many: {\n      regular: '{{count}} roků',\n      past: 'před {{count}} roky',\n      future: 'za {{count}} roků'\n    }\n  },\n  overXYears: {\n    one: {\n      regular: 'více než rok',\n      past: 'před více než rokem',\n      future: 'za více než rok'\n    },\n    few: {\n      regular: 'více než {{count}} roky',\n      past: 'před více než {{count}} roky',\n      future: 'za více než {{count}} roky'\n    },\n    many: {\n      regular: 'více než {{count}} roků',\n      past: 'před více než {{count}} roky',\n      future: 'za více než {{count}} roků'\n    }\n  },\n  almostXYears: {\n    one: {\n      regular: 'skoro rok',\n      past: 'skoro před rokem',\n      future: 'skoro za rok'\n    },\n    few: {\n      regular: 'skoro {{count}} roky',\n      past: 'skoro před {{count}} roky',\n      future: 'skoro za {{count}} roky'\n    },\n    many: {\n      regular: 'skoro {{count}} roků',\n      past: 'skoro před {{count}} roky',\n      future: 'skoro za {{count}} roků'\n    }\n  }\n};\nvar formatDistance = function formatDistance(token, count, options) {\n  var pluralResult;\n  var tokenValue = formatDistanceLocale[token];\n\n  // cs pluralization\n  if (tokenValue.type === 'other') {\n    pluralResult = tokenValue.other;\n  } else if (count === 1) {\n    pluralResult = tokenValue.one;\n  } else if (count > 1 && count < 5) {\n    pluralResult = tokenValue.few;\n  } else {\n    pluralResult = tokenValue.many;\n  }\n\n  // times\n  var suffixExist = (options === null || options === void 0 ? void 0 : options.addSuffix) === true;\n  var comparison = options === null || options === void 0 ? void 0 : options.comparison;\n  var timeResult;\n  if (suffixExist && comparison === -1) {\n    timeResult = pluralResult.past;\n  } else if (suffixExist && comparison === 1) {\n    timeResult = pluralResult.future;\n  } else {\n    timeResult = pluralResult.regular;\n  }\n  return timeResult.replace('{{count}}', String(count));\n};\nvar _default = formatDistance;\nexports[\"default\"] = _default;\nmodule.exports = exports.default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2NzL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwyQkFBMkIsUUFBUTtBQUNuQyw2QkFBNkIsUUFBUTtBQUNyQyw2QkFBNkIsUUFBUTtBQUNyQyxLQUFLO0FBQ0w7QUFDQSwyQkFBMkIsUUFBUTtBQUNuQyw2QkFBNkIsUUFBUTtBQUNyQyw2QkFBNkIsUUFBUTtBQUNyQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUIsb0JBQW9CLFFBQVE7QUFDNUIsb0JBQW9CLFFBQVE7QUFDNUIsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUIsb0JBQW9CLFFBQVE7QUFDNUIsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDJCQUEyQixRQUFRO0FBQ25DLDZCQUE2QixRQUFRO0FBQ3JDLDZCQUE2QixRQUFRO0FBQ3JDLEtBQUs7QUFDTDtBQUNBLDJCQUEyQixRQUFRO0FBQ25DLDZCQUE2QixRQUFRO0FBQ3JDLDZCQUE2QixRQUFRO0FBQ3JDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQixvQkFBb0IsUUFBUTtBQUM1QixvQkFBb0IsUUFBUTtBQUM1QixLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQixvQkFBb0IsUUFBUTtBQUM1QixvQkFBb0IsUUFBUTtBQUM1QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEMsOEJBQThCLFFBQVE7QUFDdEMsOEJBQThCLFFBQVE7QUFDdEMsS0FBSztBQUNMO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEMsOEJBQThCLFFBQVE7QUFDdEMsOEJBQThCLFFBQVE7QUFDdEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFrQixRQUFRO0FBQzFCLG9CQUFvQixRQUFRO0FBQzVCLG9CQUFvQixRQUFRO0FBQzVCLEtBQUs7QUFDTDtBQUNBLGtCQUFrQixRQUFRO0FBQzFCLG9CQUFvQixRQUFRO0FBQzVCLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQixvQkFBb0IsUUFBUTtBQUM1QixvQkFBb0IsUUFBUTtBQUM1QixLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQixvQkFBb0IsUUFBUTtBQUM1QixvQkFBb0IsUUFBUTtBQUM1QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEMsOEJBQThCLFFBQVE7QUFDdEMsOEJBQThCLFFBQVE7QUFDdEMsS0FBSztBQUNMO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEMsOEJBQThCLFFBQVE7QUFDdEMsOEJBQThCLFFBQVE7QUFDdEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFrQixRQUFRO0FBQzFCLG9CQUFvQixRQUFRO0FBQzVCLG9CQUFvQixRQUFRO0FBQzVCLEtBQUs7QUFDTDtBQUNBLGtCQUFrQixRQUFRO0FBQzFCLG9CQUFvQixRQUFRO0FBQzVCLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQyw4QkFBOEIsUUFBUTtBQUN0Qyw4QkFBOEIsUUFBUTtBQUN0QyxLQUFLO0FBQ0w7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQyw4QkFBOEIsUUFBUTtBQUN0Qyw4QkFBOEIsUUFBUTtBQUN0QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUIsb0JBQW9CLFFBQVE7QUFDNUIsb0JBQW9CLFFBQVE7QUFDNUIsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUIsb0JBQW9CLFFBQVE7QUFDNUIsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDLDhCQUE4QixRQUFRO0FBQ3RDLDhCQUE4QixRQUFRO0FBQ3RDLEtBQUs7QUFDTDtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDLDhCQUE4QixRQUFRO0FBQ3RDLDhCQUE4QixRQUFRO0FBQ3RDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQixvQkFBb0IsUUFBUTtBQUM1QixvQkFBb0IsUUFBUTtBQUM1QixLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQixvQkFBb0IsUUFBUTtBQUM1QixvQkFBb0IsUUFBUTtBQUM1QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMkJBQTJCLFFBQVE7QUFDbkMsNkJBQTZCLFFBQVE7QUFDckMsNkJBQTZCLFFBQVE7QUFDckMsS0FBSztBQUNMO0FBQ0EsMkJBQTJCLFFBQVE7QUFDbkMsNkJBQTZCLFFBQVE7QUFDckMsNkJBQTZCLFFBQVE7QUFDckM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDLDBCQUEwQixRQUFRO0FBQ2xDLDBCQUEwQixRQUFRO0FBQ2xDLEtBQUs7QUFDTDtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDLDBCQUEwQixRQUFRO0FBQ2xDLDBCQUEwQixRQUFRO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLCtCQUErQixPQUFPO0FBQ3RDO0FBQ0E7QUFDQSxrQkFBZTtBQUNmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJpdHVubC16ZXJvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9jcy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzPzZlNzkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHJlZ3VsYXI6ICdtw6luxJsgbmXFviBzZWt1bmRhJyxcbiAgICAgIHBhc3Q6ICdwxZllZCBtw6luxJsgbmXFviBzZWt1bmRvdScsXG4gICAgICBmdXR1cmU6ICd6YSBtw6luxJsgbmXFviBzZWt1bmR1J1xuICAgIH0sXG4gICAgZmV3OiB7XG4gICAgICByZWd1bGFyOiAnbcOpbsSbIG5lxb4ge3tjb3VudH19IHNla3VuZHknLFxuICAgICAgcGFzdDogJ3DFmWVkIG3DqW7EmyBuZcW+IHt7Y291bnR9fSBzZWt1bmRhbWknLFxuICAgICAgZnV0dXJlOiAnemEgbcOpbsSbIG5lxb4ge3tjb3VudH19IHNla3VuZHknXG4gICAgfSxcbiAgICBtYW55OiB7XG4gICAgICByZWd1bGFyOiAnbcOpbsSbIG5lxb4ge3tjb3VudH19IHNla3VuZCcsXG4gICAgICBwYXN0OiAncMWZZWQgbcOpbsSbIG5lxb4ge3tjb3VudH19IHNla3VuZGFtaScsXG4gICAgICBmdXR1cmU6ICd6YSBtw6luxJsgbmXFviB7e2NvdW50fX0gc2VrdW5kJ1xuICAgIH1cbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHJlZ3VsYXI6ICdzZWt1bmRhJyxcbiAgICAgIHBhc3Q6ICdwxZllZCBzZWt1bmRvdScsXG4gICAgICBmdXR1cmU6ICd6YSBzZWt1bmR1J1xuICAgIH0sXG4gICAgZmV3OiB7XG4gICAgICByZWd1bGFyOiAne3tjb3VudH19IHNla3VuZHknLFxuICAgICAgcGFzdDogJ3DFmWVkIHt7Y291bnR9fSBzZWt1bmRhbWknLFxuICAgICAgZnV0dXJlOiAnemEge3tjb3VudH19IHNla3VuZHknXG4gICAgfSxcbiAgICBtYW55OiB7XG4gICAgICByZWd1bGFyOiAne3tjb3VudH19IHNla3VuZCcsXG4gICAgICBwYXN0OiAncMWZZWQge3tjb3VudH19IHNla3VuZGFtaScsXG4gICAgICBmdXR1cmU6ICd6YSB7e2NvdW50fX0gc2VrdW5kJ1xuICAgIH1cbiAgfSxcbiAgaGFsZkFNaW51dGU6IHtcbiAgICB0eXBlOiAnb3RoZXInLFxuICAgIG90aGVyOiB7XG4gICAgICByZWd1bGFyOiAncMWvbCBtaW51dHknLFxuICAgICAgcGFzdDogJ3DFmWVkIHDFr2wgbWludXRvdScsXG4gICAgICBmdXR1cmU6ICd6YSBwxa9sIG1pbnV0eSdcbiAgICB9XG4gIH0sXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHJlZ3VsYXI6ICdtw6luxJsgbmXFviBtaW51dGEnLFxuICAgICAgcGFzdDogJ3DFmWVkIG3DqW7EmyBuZcW+IG1pbnV0b3UnLFxuICAgICAgZnV0dXJlOiAnemEgbcOpbsSbIG5lxb4gbWludXR1J1xuICAgIH0sXG4gICAgZmV3OiB7XG4gICAgICByZWd1bGFyOiAnbcOpbsSbIG5lxb4ge3tjb3VudH19IG1pbnV0eScsXG4gICAgICBwYXN0OiAncMWZZWQgbcOpbsSbIG5lxb4ge3tjb3VudH19IG1pbnV0YW1pJyxcbiAgICAgIGZ1dHVyZTogJ3phIG3DqW7EmyBuZcW+IHt7Y291bnR9fSBtaW51dHknXG4gICAgfSxcbiAgICBtYW55OiB7XG4gICAgICByZWd1bGFyOiAnbcOpbsSbIG5lxb4ge3tjb3VudH19IG1pbnV0JyxcbiAgICAgIHBhc3Q6ICdwxZllZCBtw6luxJsgbmXFviB7e2NvdW50fX0gbWludXRhbWknLFxuICAgICAgZnV0dXJlOiAnemEgbcOpbsSbIG5lxb4ge3tjb3VudH19IG1pbnV0J1xuICAgIH1cbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHJlZ3VsYXI6ICdtaW51dGEnLFxuICAgICAgcGFzdDogJ3DFmWVkIG1pbnV0b3UnLFxuICAgICAgZnV0dXJlOiAnemEgbWludXR1J1xuICAgIH0sXG4gICAgZmV3OiB7XG4gICAgICByZWd1bGFyOiAne3tjb3VudH19IG1pbnV0eScsXG4gICAgICBwYXN0OiAncMWZZWQge3tjb3VudH19IG1pbnV0YW1pJyxcbiAgICAgIGZ1dHVyZTogJ3phIHt7Y291bnR9fSBtaW51dHknXG4gICAgfSxcbiAgICBtYW55OiB7XG4gICAgICByZWd1bGFyOiAne3tjb3VudH19IG1pbnV0JyxcbiAgICAgIHBhc3Q6ICdwxZllZCB7e2NvdW50fX0gbWludXRhbWknLFxuICAgICAgZnV0dXJlOiAnemEge3tjb3VudH19IG1pbnV0J1xuICAgIH1cbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHJlZ3VsYXI6ICdwxZlpYmxpxb5uxJsgaG9kaW5hJyxcbiAgICAgIHBhc3Q6ICdwxZlpYmxpxb5uxJsgcMWZZWQgaG9kaW5vdScsXG4gICAgICBmdXR1cmU6ICdwxZlpYmxpxb5uxJsgemEgaG9kaW51J1xuICAgIH0sXG4gICAgZmV3OiB7XG4gICAgICByZWd1bGFyOiAncMWZaWJsacW+bsSbIHt7Y291bnR9fSBob2RpbnknLFxuICAgICAgcGFzdDogJ3DFmWlibGnFvm7EmyBwxZllZCB7e2NvdW50fX0gaG9kaW5hbWknLFxuICAgICAgZnV0dXJlOiAncMWZaWJsacW+bsSbIHphIHt7Y291bnR9fSBob2RpbnknXG4gICAgfSxcbiAgICBtYW55OiB7XG4gICAgICByZWd1bGFyOiAncMWZaWJsacW+bsSbIHt7Y291bnR9fSBob2RpbicsXG4gICAgICBwYXN0OiAncMWZaWJsacW+bsSbIHDFmWVkIHt7Y291bnR9fSBob2RpbmFtaScsXG4gICAgICBmdXR1cmU6ICdwxZlpYmxpxb5uxJsgemEge3tjb3VudH19IGhvZGluJ1xuICAgIH1cbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiB7XG4gICAgICByZWd1bGFyOiAnaG9kaW5hJyxcbiAgICAgIHBhc3Q6ICdwxZllZCBob2Rpbm91JyxcbiAgICAgIGZ1dHVyZTogJ3phIGhvZGludSdcbiAgICB9LFxuICAgIGZldzoge1xuICAgICAgcmVndWxhcjogJ3t7Y291bnR9fSBob2RpbnknLFxuICAgICAgcGFzdDogJ3DFmWVkIHt7Y291bnR9fSBob2RpbmFtaScsXG4gICAgICBmdXR1cmU6ICd6YSB7e2NvdW50fX0gaG9kaW55J1xuICAgIH0sXG4gICAgbWFueToge1xuICAgICAgcmVndWxhcjogJ3t7Y291bnR9fSBob2RpbicsXG4gICAgICBwYXN0OiAncMWZZWQge3tjb3VudH19IGhvZGluYW1pJyxcbiAgICAgIGZ1dHVyZTogJ3phIHt7Y291bnR9fSBob2RpbidcbiAgICB9XG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiB7XG4gICAgICByZWd1bGFyOiAnZGVuJyxcbiAgICAgIHBhc3Q6ICdwxZllZCBkbmVtJyxcbiAgICAgIGZ1dHVyZTogJ3phIGRlbidcbiAgICB9LFxuICAgIGZldzoge1xuICAgICAgcmVndWxhcjogJ3t7Y291bnR9fSBkbnknLFxuICAgICAgcGFzdDogJ3DFmWVkIHt7Y291bnR9fSBkbnknLFxuICAgICAgZnV0dXJlOiAnemEge3tjb3VudH19IGRueSdcbiAgICB9LFxuICAgIG1hbnk6IHtcbiAgICAgIHJlZ3VsYXI6ICd7e2NvdW50fX0gZG7DrScsXG4gICAgICBwYXN0OiAncMWZZWQge3tjb3VudH19IGRueScsXG4gICAgICBmdXR1cmU6ICd6YSB7e2NvdW50fX0gZG7DrSdcbiAgICB9XG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiB7XG4gICAgICByZWd1bGFyOiAncMWZaWJsacW+bsSbIHTDvWRlbicsXG4gICAgICBwYXN0OiAncMWZaWJsacW+bsSbIHDFmWVkIHTDvWRuZW0nLFxuICAgICAgZnV0dXJlOiAncMWZaWJsacW+bsSbIHphIHTDvWRlbidcbiAgICB9LFxuICAgIGZldzoge1xuICAgICAgcmVndWxhcjogJ3DFmWlibGnFvm7EmyB7e2NvdW50fX0gdMO9ZG55JyxcbiAgICAgIHBhc3Q6ICdwxZlpYmxpxb5uxJsgcMWZZWQge3tjb3VudH19IHTDvWRueScsXG4gICAgICBmdXR1cmU6ICdwxZlpYmxpxb5uxJsgemEge3tjb3VudH19IHTDvWRueSdcbiAgICB9LFxuICAgIG1hbnk6IHtcbiAgICAgIHJlZ3VsYXI6ICdwxZlpYmxpxb5uxJsge3tjb3VudH19IHTDvWRuxa8nLFxuICAgICAgcGFzdDogJ3DFmWlibGnFvm7EmyBwxZllZCB7e2NvdW50fX0gdMO9ZG55JyxcbiAgICAgIGZ1dHVyZTogJ3DFmWlibGnFvm7EmyB6YSB7e2NvdW50fX0gdMO9ZG7FrydcbiAgICB9XG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZToge1xuICAgICAgcmVndWxhcjogJ3TDvWRlbicsXG4gICAgICBwYXN0OiAncMWZZWQgdMO9ZG5lbScsXG4gICAgICBmdXR1cmU6ICd6YSB0w71kZW4nXG4gICAgfSxcbiAgICBmZXc6IHtcbiAgICAgIHJlZ3VsYXI6ICd7e2NvdW50fX0gdMO9ZG55JyxcbiAgICAgIHBhc3Q6ICdwxZllZCB7e2NvdW50fX0gdMO9ZG55JyxcbiAgICAgIGZ1dHVyZTogJ3phIHt7Y291bnR9fSB0w71kbnknXG4gICAgfSxcbiAgICBtYW55OiB7XG4gICAgICByZWd1bGFyOiAne3tjb3VudH19IHTDvWRuxa8nLFxuICAgICAgcGFzdDogJ3DFmWVkIHt7Y291bnR9fSB0w71kbnknLFxuICAgICAgZnV0dXJlOiAnemEge3tjb3VudH19IHTDvWRuxa8nXG4gICAgfVxuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHJlZ3VsYXI6ICdwxZlpYmxpxb5uxJsgbcSbc8OtYycsXG4gICAgICBwYXN0OiAncMWZaWJsacW+bsSbIHDFmWVkIG3Em3PDrWNlbScsXG4gICAgICBmdXR1cmU6ICdwxZlpYmxpxb5uxJsgemEgbcSbc8OtYydcbiAgICB9LFxuICAgIGZldzoge1xuICAgICAgcmVndWxhcjogJ3DFmWlibGnFvm7EmyB7e2NvdW50fX0gbcSbc8OtY2UnLFxuICAgICAgcGFzdDogJ3DFmWlibGnFvm7EmyBwxZllZCB7e2NvdW50fX0gbcSbc8OtY2knLFxuICAgICAgZnV0dXJlOiAncMWZaWJsacW+bsSbIHphIHt7Y291bnR9fSBtxJtzw61jZSdcbiAgICB9LFxuICAgIG1hbnk6IHtcbiAgICAgIHJlZ3VsYXI6ICdwxZlpYmxpxb5uxJsge3tjb3VudH19IG3Em3PDrWPFrycsXG4gICAgICBwYXN0OiAncMWZaWJsacW+bsSbIHDFmWVkIHt7Y291bnR9fSBtxJtzw61jaScsXG4gICAgICBmdXR1cmU6ICdwxZlpYmxpxb5uxJsgemEge3tjb3VudH19IG3Em3PDrWPFrydcbiAgICB9XG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHJlZ3VsYXI6ICdtxJtzw61jJyxcbiAgICAgIHBhc3Q6ICdwxZllZCBtxJtzw61jZW0nLFxuICAgICAgZnV0dXJlOiAnemEgbcSbc8OtYydcbiAgICB9LFxuICAgIGZldzoge1xuICAgICAgcmVndWxhcjogJ3t7Y291bnR9fSBtxJtzw61jZScsXG4gICAgICBwYXN0OiAncMWZZWQge3tjb3VudH19IG3Em3PDrWNpJyxcbiAgICAgIGZ1dHVyZTogJ3phIHt7Y291bnR9fSBtxJtzw61jZSdcbiAgICB9LFxuICAgIG1hbnk6IHtcbiAgICAgIHJlZ3VsYXI6ICd7e2NvdW50fX0gbcSbc8OtY8WvJyxcbiAgICAgIHBhc3Q6ICdwxZllZCB7e2NvdW50fX0gbcSbc8OtY2knLFxuICAgICAgZnV0dXJlOiAnemEge3tjb3VudH19IG3Em3PDrWPFrydcbiAgICB9XG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiB7XG4gICAgICByZWd1bGFyOiAncMWZaWJsacW+bsSbIHJvaycsXG4gICAgICBwYXN0OiAncMWZaWJsacW+bsSbIHDFmWVkIHJva2VtJyxcbiAgICAgIGZ1dHVyZTogJ3DFmWlibGnFvm7EmyB6YSByb2snXG4gICAgfSxcbiAgICBmZXc6IHtcbiAgICAgIHJlZ3VsYXI6ICdwxZlpYmxpxb5uxJsge3tjb3VudH19IHJva3knLFxuICAgICAgcGFzdDogJ3DFmWlibGnFvm7EmyBwxZllZCB7e2NvdW50fX0gcm9reScsXG4gICAgICBmdXR1cmU6ICdwxZlpYmxpxb5uxJsgemEge3tjb3VudH19IHJva3knXG4gICAgfSxcbiAgICBtYW55OiB7XG4gICAgICByZWd1bGFyOiAncMWZaWJsacW+bsSbIHt7Y291bnR9fSByb2vFrycsXG4gICAgICBwYXN0OiAncMWZaWJsacW+bsSbIHDFmWVkIHt7Y291bnR9fSByb2t5JyxcbiAgICAgIGZ1dHVyZTogJ3DFmWlibGnFvm7EmyB6YSB7e2NvdW50fX0gcm9rxa8nXG4gICAgfVxuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHJlZ3VsYXI6ICdyb2snLFxuICAgICAgcGFzdDogJ3DFmWVkIHJva2VtJyxcbiAgICAgIGZ1dHVyZTogJ3phIHJvaydcbiAgICB9LFxuICAgIGZldzoge1xuICAgICAgcmVndWxhcjogJ3t7Y291bnR9fSByb2t5JyxcbiAgICAgIHBhc3Q6ICdwxZllZCB7e2NvdW50fX0gcm9reScsXG4gICAgICBmdXR1cmU6ICd6YSB7e2NvdW50fX0gcm9reSdcbiAgICB9LFxuICAgIG1hbnk6IHtcbiAgICAgIHJlZ3VsYXI6ICd7e2NvdW50fX0gcm9rxa8nLFxuICAgICAgcGFzdDogJ3DFmWVkIHt7Y291bnR9fSByb2t5JyxcbiAgICAgIGZ1dHVyZTogJ3phIHt7Y291bnR9fSByb2vFrydcbiAgICB9XG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6IHtcbiAgICAgIHJlZ3VsYXI6ICd2w61jZSBuZcW+IHJvaycsXG4gICAgICBwYXN0OiAncMWZZWQgdsOtY2UgbmXFviByb2tlbScsXG4gICAgICBmdXR1cmU6ICd6YSB2w61jZSBuZcW+IHJvaydcbiAgICB9LFxuICAgIGZldzoge1xuICAgICAgcmVndWxhcjogJ3bDrWNlIG5lxb4ge3tjb3VudH19IHJva3knLFxuICAgICAgcGFzdDogJ3DFmWVkIHbDrWNlIG5lxb4ge3tjb3VudH19IHJva3knLFxuICAgICAgZnV0dXJlOiAnemEgdsOtY2UgbmXFviB7e2NvdW50fX0gcm9reSdcbiAgICB9LFxuICAgIG1hbnk6IHtcbiAgICAgIHJlZ3VsYXI6ICd2w61jZSBuZcW+IHt7Y291bnR9fSByb2vFrycsXG4gICAgICBwYXN0OiAncMWZZWQgdsOtY2UgbmXFviB7e2NvdW50fX0gcm9reScsXG4gICAgICBmdXR1cmU6ICd6YSB2w61jZSBuZcW+IHt7Y291bnR9fSByb2vFrydcbiAgICB9XG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZToge1xuICAgICAgcmVndWxhcjogJ3Nrb3JvIHJvaycsXG4gICAgICBwYXN0OiAnc2tvcm8gcMWZZWQgcm9rZW0nLFxuICAgICAgZnV0dXJlOiAnc2tvcm8gemEgcm9rJ1xuICAgIH0sXG4gICAgZmV3OiB7XG4gICAgICByZWd1bGFyOiAnc2tvcm8ge3tjb3VudH19IHJva3knLFxuICAgICAgcGFzdDogJ3Nrb3JvIHDFmWVkIHt7Y291bnR9fSByb2t5JyxcbiAgICAgIGZ1dHVyZTogJ3Nrb3JvIHphIHt7Y291bnR9fSByb2t5J1xuICAgIH0sXG4gICAgbWFueToge1xuICAgICAgcmVndWxhcjogJ3Nrb3JvIHt7Y291bnR9fSByb2vFrycsXG4gICAgICBwYXN0OiAnc2tvcm8gcMWZZWQge3tjb3VudH19IHJva3knLFxuICAgICAgZnV0dXJlOiAnc2tvcm8gemEge3tjb3VudH19IHJva8WvJ1xuICAgIH1cbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcGx1cmFsUmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcblxuICAvLyBjcyBwbHVyYWxpemF0aW9uXG4gIGlmICh0b2tlblZhbHVlLnR5cGUgPT09ICdvdGhlcicpIHtcbiAgICBwbHVyYWxSZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcGx1cmFsUmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSBpZiAoY291bnQgPiAxICYmIGNvdW50IDwgNSkge1xuICAgIHBsdXJhbFJlc3VsdCA9IHRva2VuVmFsdWUuZmV3O1xuICB9IGVsc2Uge1xuICAgIHBsdXJhbFJlc3VsdCA9IHRva2VuVmFsdWUubWFueTtcbiAgfVxuXG4gIC8vIHRpbWVzXG4gIHZhciBzdWZmaXhFeGlzdCA9IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkU3VmZml4KSA9PT0gdHJ1ZTtcbiAgdmFyIGNvbXBhcmlzb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuY29tcGFyaXNvbjtcbiAgdmFyIHRpbWVSZXN1bHQ7XG4gIGlmIChzdWZmaXhFeGlzdCAmJiBjb21wYXJpc29uID09PSAtMSkge1xuICAgIHRpbWVSZXN1bHQgPSBwbHVyYWxSZXN1bHQucGFzdDtcbiAgfSBlbHNlIGlmIChzdWZmaXhFeGlzdCAmJiBjb21wYXJpc29uID09PSAxKSB7XG4gICAgdGltZVJlc3VsdCA9IHBsdXJhbFJlc3VsdC5mdXR1cmU7XG4gIH0gZWxzZSB7XG4gICAgdGltZVJlc3VsdCA9IHBsdXJhbFJlc3VsdC5yZWd1bGFyO1xuICB9XG4gIHJldHVybiB0aW1lUmVzdWx0LnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/date-fns/locale/cs/_lib/formatDistance/index.js\n");

/***/ })

}]);