"use strict";(self.webpackChunkpritunl_zero=self.webpackChunkpritunl_zero||[]).push([[60914],{13409:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n={xseconds_other:"sekundė_sekundžių_sekundes",xminutes_one:"minutė_minutės_minutę",xminutes_other:"minutės_minučių_minutes",xhours_one:"valanda_valandos_valandą",xhours_other:"valandos_valandų_valandas",xdays_one:"diena_dienos_dieną",xdays_other:"dienos_dienų_dienas",xweeks_one:"savaitė_savaitės_savaitę",xweeks_other:"savaitės_savaičių_savaites",xmonths_one:"mėnuo_mėnesio_mėnesį",xmonths_other:"mėnesiai_mėnesių_mėnesius",xyears_one:"metai_metų_metus",xyears_other:"metai_metų_metus",about:"apie",over:"daugiau nei",almost:"beveik",lessthan:"mažiau nei"},s=function(e,o,n,s){return o?s?"kelių sekundžių":"kelias sekundes":"kelios sekundės"},t=function(e,o,n,s){return o?s?i(n)[1]:i(n)[2]:i(n)[0]},a=function(e,o,n,s){var a=e+" ";return 1===e?a+t(0,o,n,s):o?s?a+i(n)[1]:a+(r(e)?i(n)[1]:i(n)[2]):a+(r(e)?i(n)[1]:i(n)[0])};function r(e){return e%10==0||e>10&&e<20}function i(e){return n[e].split("_")}var u={lessThanXSeconds:{one:s,other:a},xSeconds:{one:s,other:a},halfAMinute:"pusė minutės",lessThanXMinutes:{one:t,other:a},xMinutes:{one:t,other:a},aboutXHours:{one:t,other:a},xHours:{one:t,other:a},xDays:{one:t,other:a},aboutXWeeks:{one:t,other:a},xWeeks:{one:t,other:a},aboutXMonths:{one:t,other:a},xMonths:{one:t,other:a},aboutXYears:{one:t,other:a},xYears:{one:t,other:a},overXYears:{one:t,other:a},almostXYears:{one:t,other:a}},_=function(e,o,s){var t,a=e.match(/about|over|almost|lessthan/i),r=a?e.replace(a[0],""):e,i=void 0!==(null==s?void 0:s.comparison)&&s.comparison>0,_=u[e];if(t="string"==typeof _?_:1===o?_.one(o,!0===(null==s?void 0:s.addSuffix),r.toLowerCase()+"_one",i):_.other(o,!0===(null==s?void 0:s.addSuffix),r.toLowerCase()+"_other",i),a){var d=a[0].toLowerCase();t=n[d]+" "+t}return null!=s&&s.addSuffix?s.comparison&&s.comparison>0?"po "+t:"prieš "+t:t};o.default=_,e.exports=o.default}}]);
//# sourceMappingURL=date-fns-locale-lt-_lib-formatDistance-index-js.js.map