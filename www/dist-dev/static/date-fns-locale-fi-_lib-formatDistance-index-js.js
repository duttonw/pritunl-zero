"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpritunl_zero"] = self["webpackChunkpritunl_zero"] || []).push([["date-fns-locale-fi-_lib-formatDistance-index-js"],{

/***/ "./node_modules/date-fns/locale/fi/_lib/formatDistance/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/fi/_lib/formatDistance/index.js ***!
  \**********************************************************************/
/***/ ((module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nfunction futureSeconds(text) {\n  return text.replace(/sekuntia?/, 'sekunnin');\n}\nfunction futureMinutes(text) {\n  return text.replace(/minuuttia?/, 'minuutin');\n}\nfunction futureHours(text) {\n  return text.replace(/tuntia?/, 'tunnin');\n}\nfunction futureDays(text) {\n  return text.replace(/päivää?/, 'päivän');\n}\nfunction futureWeeks(text) {\n  return text.replace(/(viikko|viikkoa)/, 'viikon');\n}\nfunction futureMonths(text) {\n  return text.replace(/(kuukausi|kuukautta)/, 'kuukauden');\n}\nfunction futureYears(text) {\n  return text.replace(/(vuosi|vuotta)/, 'vuoden');\n}\nvar formatDistanceLocale = {\n  lessThanXSeconds: {\n    one: 'alle sekunti',\n    other: 'alle {{count}} sekuntia',\n    futureTense: futureSeconds\n  },\n  xSeconds: {\n    one: 'sekunti',\n    other: '{{count}} sekuntia',\n    futureTense: futureSeconds\n  },\n  halfAMinute: {\n    one: 'puoli minuuttia',\n    other: 'puoli minuuttia',\n    futureTense: function futureTense(_text) {\n      return 'puolen minuutin';\n    }\n  },\n  lessThanXMinutes: {\n    one: 'alle minuutti',\n    other: 'alle {{count}} minuuttia',\n    futureTense: futureMinutes\n  },\n  xMinutes: {\n    one: 'minuutti',\n    other: '{{count}} minuuttia',\n    futureTense: futureMinutes\n  },\n  aboutXHours: {\n    one: 'noin tunti',\n    other: 'noin {{count}} tuntia',\n    futureTense: futureHours\n  },\n  xHours: {\n    one: 'tunti',\n    other: '{{count}} tuntia',\n    futureTense: futureHours\n  },\n  xDays: {\n    one: 'päivä',\n    other: '{{count}} päivää',\n    futureTense: futureDays\n  },\n  aboutXWeeks: {\n    one: 'noin viikko',\n    other: 'noin {{count}} viikkoa',\n    futureTense: futureWeeks\n  },\n  xWeeks: {\n    one: 'viikko',\n    other: '{{count}} viikkoa',\n    futureTense: futureWeeks\n  },\n  aboutXMonths: {\n    one: 'noin kuukausi',\n    other: 'noin {{count}} kuukautta',\n    futureTense: futureMonths\n  },\n  xMonths: {\n    one: 'kuukausi',\n    other: '{{count}} kuukautta',\n    futureTense: futureMonths\n  },\n  aboutXYears: {\n    one: 'noin vuosi',\n    other: 'noin {{count}} vuotta',\n    futureTense: futureYears\n  },\n  xYears: {\n    one: 'vuosi',\n    other: '{{count}} vuotta',\n    futureTense: futureYears\n  },\n  overXYears: {\n    one: 'yli vuosi',\n    other: 'yli {{count}} vuotta',\n    futureTense: futureYears\n  },\n  almostXYears: {\n    one: 'lähes vuosi',\n    other: 'lähes {{count}} vuotta',\n    futureTense: futureYears\n  }\n};\nvar formatDistance = function formatDistance(token, count, options) {\n  var tokenValue = formatDistanceLocale[token];\n  var result = count === 1 ? tokenValue.one : tokenValue.other.replace('{{count}}', String(count));\n  if (options !== null && options !== void 0 && options.addSuffix) {\n    if (options.comparison && options.comparison > 0) {\n      return tokenValue.futureTense(result) + ' kuluttua';\n    } else {\n      return result + ' sitten';\n    }\n  }\n  return result;\n};\nvar _default = formatDistance;\nexports[\"default\"] = _default;\nmodule.exports = exports.default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2ZpL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxPQUFPO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBZTtBQUNmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJpdHVubC16ZXJvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9maS9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzP2I0MTMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5mdW5jdGlvbiBmdXR1cmVTZWNvbmRzKHRleHQpIHtcbiAgcmV0dXJuIHRleHQucmVwbGFjZSgvc2VrdW50aWE/LywgJ3Nla3VubmluJyk7XG59XG5mdW5jdGlvbiBmdXR1cmVNaW51dGVzKHRleHQpIHtcbiAgcmV0dXJuIHRleHQucmVwbGFjZSgvbWludXV0dGlhPy8sICdtaW51dXRpbicpO1xufVxuZnVuY3Rpb24gZnV0dXJlSG91cnModGV4dCkge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKC90dW50aWE/LywgJ3R1bm5pbicpO1xufVxuZnVuY3Rpb24gZnV0dXJlRGF5cyh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UoL3DDpGl2w6TDpD8vLCAncMOkaXbDpG4nKTtcbn1cbmZ1bmN0aW9uIGZ1dHVyZVdlZWtzKHRleHQpIHtcbiAgcmV0dXJuIHRleHQucmVwbGFjZSgvKHZpaWtrb3x2aWlra29hKS8sICd2aWlrb24nKTtcbn1cbmZ1bmN0aW9uIGZ1dHVyZU1vbnRocyh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UoLyhrdXVrYXVzaXxrdXVrYXV0dGEpLywgJ2t1dWthdWRlbicpO1xufVxuZnVuY3Rpb24gZnV0dXJlWWVhcnModGV4dCkge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKC8odnVvc2l8dnVvdHRhKS8sICd2dW9kZW4nKTtcbn1cbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2FsbGUgc2VrdW50aScsXG4gICAgb3RoZXI6ICdhbGxlIHt7Y291bnR9fSBzZWt1bnRpYScsXG4gICAgZnV0dXJlVGVuc2U6IGZ1dHVyZVNlY29uZHNcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICdzZWt1bnRpJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWt1bnRpYScsXG4gICAgZnV0dXJlVGVuc2U6IGZ1dHVyZVNlY29uZHNcbiAgfSxcbiAgaGFsZkFNaW51dGU6IHtcbiAgICBvbmU6ICdwdW9saSBtaW51dXR0aWEnLFxuICAgIG90aGVyOiAncHVvbGkgbWludXV0dGlhJyxcbiAgICBmdXR1cmVUZW5zZTogZnVuY3Rpb24gZnV0dXJlVGVuc2UoX3RleHQpIHtcbiAgICAgIHJldHVybiAncHVvbGVuIG1pbnV1dGluJztcbiAgICB9XG4gIH0sXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdhbGxlIG1pbnV1dHRpJyxcbiAgICBvdGhlcjogJ2FsbGUge3tjb3VudH19IG1pbnV1dHRpYScsXG4gICAgZnV0dXJlVGVuc2U6IGZ1dHVyZU1pbnV0ZXNcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdtaW51dXR0aScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXV0dGlhJyxcbiAgICBmdXR1cmVUZW5zZTogZnV0dXJlTWludXRlc1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ25vaW4gdHVudGknLFxuICAgIG90aGVyOiAnbm9pbiB7e2NvdW50fX0gdHVudGlhJyxcbiAgICBmdXR1cmVUZW5zZTogZnV0dXJlSG91cnNcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAndHVudGknLFxuICAgIG90aGVyOiAne3tjb3VudH19IHR1bnRpYScsXG4gICAgZnV0dXJlVGVuc2U6IGZ1dHVyZUhvdXJzXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAncMOkaXbDpCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gcMOkaXbDpMOkJyxcbiAgICBmdXR1cmVUZW5zZTogZnV0dXJlRGF5c1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ25vaW4gdmlpa2tvJyxcbiAgICBvdGhlcjogJ25vaW4ge3tjb3VudH19IHZpaWtrb2EnLFxuICAgIGZ1dHVyZVRlbnNlOiBmdXR1cmVXZWVrc1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICd2aWlra28nLFxuICAgIG90aGVyOiAne3tjb3VudH19IHZpaWtrb2EnLFxuICAgIGZ1dHVyZVRlbnNlOiBmdXR1cmVXZWVrc1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdub2luIGt1dWthdXNpJyxcbiAgICBvdGhlcjogJ25vaW4ge3tjb3VudH19IGt1dWthdXR0YScsXG4gICAgZnV0dXJlVGVuc2U6IGZ1dHVyZU1vbnRoc1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAna3V1a2F1c2knLFxuICAgIG90aGVyOiAne3tjb3VudH19IGt1dWthdXR0YScsXG4gICAgZnV0dXJlVGVuc2U6IGZ1dHVyZU1vbnRoc1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ25vaW4gdnVvc2knLFxuICAgIG90aGVyOiAnbm9pbiB7e2NvdW50fX0gdnVvdHRhJyxcbiAgICBmdXR1cmVUZW5zZTogZnV0dXJlWWVhcnNcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAndnVvc2knLFxuICAgIG90aGVyOiAne3tjb3VudH19IHZ1b3R0YScsXG4gICAgZnV0dXJlVGVuc2U6IGZ1dHVyZVllYXJzXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICd5bGkgdnVvc2knLFxuICAgIG90aGVyOiAneWxpIHt7Y291bnR9fSB2dW90dGEnLFxuICAgIGZ1dHVyZVRlbnNlOiBmdXR1cmVZZWFyc1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdsw6RoZXMgdnVvc2knLFxuICAgIG90aGVyOiAnbMOkaGVzIHt7Y291bnR9fSB2dW90dGEnLFxuICAgIGZ1dHVyZVRlbnNlOiBmdXR1cmVZZWFyc1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICB2YXIgcmVzdWx0ID0gY291bnQgPT09IDEgPyB0b2tlblZhbHVlLm9uZSA6IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuIHRva2VuVmFsdWUuZnV0dXJlVGVuc2UocmVzdWx0KSArICcga3VsdXR0dWEnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBzaXR0ZW4nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/date-fns/locale/fi/_lib/formatDistance/index.js\n");

/***/ })

}]);