(self.webpackChunkpritunl_zero=self.webpackChunkpritunl_zero||[]).push([[81468,36108,23534,46144,70140,72658,64191,845,7541,92597],{86273:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},53347:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var o;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,n=null!=a&&a.width?String(a.width):r;o=e.formattingValues[n]||e.formattingValues[r]}else{var u=e.defaultWidth,i=null!=a&&a.width?String(a.width):e.defaultWidth;o=e.values[i]||e.values[u]}return o[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},94461:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=a.width,r=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],n=t.match(r);if(!n)return null;var u,i=n[0],d=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(d)?function(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a;return}(d,(function(e){return e.test(i)})):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a;return}(d,(function(e){return e.test(i)}));return u=e.valueCallback?e.valueCallback(l):l,{value:u=a.valueCallback?a.valueCallback(u):u,rest:t.slice(i.length)}}},e.exports=t.default},44497:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.match(e.matchPattern);if(!o)return null;var r=o[0],n=t.match(e.parsePattern);if(!n)return null;var u=e.valueCallback?e.valueCallback(n[0]):n[0];return{value:u=a.valueCallback?a.valueCallback(u):u,rest:t.slice(r.length)}}},e.exports=t.default},76757:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lessThanXSeconds:{one:"malpli ol sekundo",other:"malpli ol {{count}} sekundoj"},xSeconds:{one:"1 sekundo",other:"{{count}} sekundoj"},halfAMinute:"duonminuto",lessThanXMinutes:{one:"malpli ol minuto",other:"malpli ol {{count}} minutoj"},xMinutes:{one:"1 minuto",other:"{{count}} minutoj"},aboutXHours:{one:"proksimume 1 horo",other:"proksimume {{count}} horoj"},xHours:{one:"1 horo",other:"{{count}} horoj"},xDays:{one:"1 tago",other:"{{count}} tagoj"},aboutXMonths:{one:"proksimume 1 monato",other:"proksimume {{count}} monatoj"},xWeeks:{one:"1 semajno",other:"{{count}} semajnoj"},aboutXWeeks:{one:"proksimume 1 semajno",other:"proksimume {{count}} semajnoj"},xMonths:{one:"1 monato",other:"{{count}} monatoj"},aboutXYears:{one:"proksimume 1 jaro",other:"proksimume {{count}} jaroj"},xYears:{one:"1 jaro",other:"{{count}} jaroj"},overXYears:{one:"pli ol 1 jaro",other:"pli ol {{count}} jaroj"},almostXYears:{one:"preskaŭ 1 jaro",other:"preskaŭ {{count}} jaroj"}},o=function(e,t,o){var r,n=a[e];return r="string"==typeof n?n:1===t?n.one:n.other.replace("{{count}}",String(t)),null!=o&&o.addSuffix?null!=o&&o.comparison&&o.comparison>0?"post "+r:"antaŭ "+r:r};t.default=o,e.exports=t.default},35712:(e,t,a)=>{"use strict";var o=a(1654).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a(86273)),n={date:(0,r.default)({formats:{full:"EEEE, do 'de' MMMM y",long:"y-MMMM-dd",medium:"y-MMM-dd",short:"yyyy-MM-dd"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"Ho 'horo kaj' m:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{any:"{{date}} {{time}}"},defaultWidth:"any"})};t.default=n,e.exports=t.default},5842:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lastWeek:"'pasinta' eeee 'je' p",yesterday:"'hieraŭ je' p",today:"'hodiaŭ je' p",tomorrow:"'morgaŭ je' p",nextWeek:"eeee 'je' p",other:"P"},o=function(e,t,o,r){return a[e]};t.default=o,e.exports=t.default},44202:(e,t,a)=>{"use strict";var o=a(1654).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a(53347)),n={ordinalNumber:function(e){return Number(e)+"-a"},era:(0,r.default)({values:{narrow:["aK","pK"],abbreviated:["a.K.E.","p.K.E."],wide:["antaŭ Komuna Erao","Komuna Erao"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1-a kvaronjaro","2-a kvaronjaro","3-a kvaronjaro","4-a kvaronjaro"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,r.default)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan","feb","mar","apr","maj","jun","jul","aŭg","sep","okt","nov","dec"],wide:["januaro","februaro","marto","aprilo","majo","junio","julio","aŭgusto","septembro","oktobro","novembro","decembro"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["D","L","M","M","Ĵ","V","S"],short:["di","lu","ma","me","ĵa","ve","sa"],abbreviated:["dim","lun","mar","mer","ĵaŭ","ven","sab"],wide:["dimanĉo","lundo","mardo","merkredo","ĵaŭdo","vendredo","sabato"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"a",pm:"p",midnight:"noktomezo",noon:"tagmezo",morning:"matene",afternoon:"posttagmeze",evening:"vespere",night:"nokte"},abbreviated:{am:"a.t.m.",pm:"p.t.m.",midnight:"noktomezo",noon:"tagmezo",morning:"matene",afternoon:"posttagmeze",evening:"vespere",night:"nokte"},wide:{am:"antaŭtagmeze",pm:"posttagmeze",midnight:"noktomezo",noon:"tagmezo",morning:"matene",afternoon:"posttagmeze",evening:"vespere",night:"nokte"}},defaultWidth:"wide"})};t.default=n,e.exports=t.default},50894:(e,t,a)=>{"use strict";var o=a(1654).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a(44497)),n=o(a(94461)),u={ordinalNumber:(0,r.default)({matchPattern:/^(\d+)(-?a)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^([ap]k)/i,abbreviated:/^([ap]\.?\s?k\.?\s?e\.?)/i,wide:/^((antaǔ |post )?komuna erao)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^a/i,/^[kp]/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^k[1234]/i,wide:/^[1234](-?a)? kvaronjaro/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|maj|jun|jul|a(ŭ|ux|uh|u)g|sep|okt|nov|dec)/i,wide:/^(januaro|februaro|marto|aprilo|majo|junio|julio|a(ŭ|ux|uh|u)gusto|septembro|oktobro|novembro|decembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^a(u|ŭ)/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[dlmĵjvs]/i,short:/^(di|lu|ma|me|(ĵ|jx|jh|j)a|ve|sa)/i,abbreviated:/^(dim|lun|mar|mer|(ĵ|jx|jh|j)a(ŭ|ux|uh|u)|ven|sab)/i,wide:/^(diman(ĉ|cx|ch|c)o|lundo|mardo|merkredo|(ĵ|jx|jh|j)a(ŭ|ux|uh|u)do|vendredo|sabato)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^(j|ĵ)/i,/^v/i,/^s/i],any:[/^d/i,/^l/i,/^ma/i,/^me/i,/^(j|ĵ)/i,/^v/i,/^s/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^([ap]|(posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo])/i,abbreviated:/^([ap][.\s]?t[.\s]?m[.\s]?|(posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo])/i,wide:/^(anta(ŭ|ux)tagmez|posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo]/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^noktom/i,noon:/^t/i,morning:/^m/i,afternoon:/^posttagmeze/i,evening:/^v/i,night:/^n/i}},defaultParseWidth:"any"})};t.default=u,e.exports=t.default},24627:(e,t,a)=>{"use strict";var o=a(1654).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a(76757)),n=o(a(35712)),u=o(a(5842)),i=o(a(44202)),d=o(a(50894)),l={code:"eo",formatDistance:r.default,formatLong:n.default,formatRelative:u.default,localize:i.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=l,e.exports=t.default},1654:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=date-fns-locale-eo-index-js.js.map