(self.webpackChunkpritunl_zero=self.webpackChunkpritunl_zero||[]).push([[95144,46144,70140],{94461:(a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(a){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.width,i=r&&a.matchPatterns[r]||a.matchPatterns[a.defaultMatchWidth],n=t.match(i);if(!n)return null;var u,s=n[0],d=r&&a.parsePatterns[r]||a.parsePatterns[a.defaultParseWidth],l=Array.isArray(d)?function(a,t){for(var e=0;e<a.length;e++)if(t(a[e]))return e;return}(d,(function(a){return a.test(s)})):function(a,t){for(var e in a)if(a.hasOwnProperty(e)&&t(a[e]))return e;return}(d,(function(a){return a.test(s)}));return u=a.valueCallback?a.valueCallback(l):l,{value:u=e.valueCallback?e.valueCallback(u):u,rest:t.slice(s.length)}}},a.exports=t.default},44497:(a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(a){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.match(a.matchPattern);if(!r)return null;var i=r[0],n=t.match(a.parsePattern);if(!n)return null;var u=a.valueCallback?a.valueCallback(n[0]):n[0];return{value:u=e.valueCallback?e.valueCallback(u):u,rest:t.slice(i.length)}}},a.exports=t.default},35003:(a,t,e)=>{"use strict";var r=e(1654).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(e(94461)),n={ordinalNumber:(0,r(e(44497)).default)({matchPattern:/^(\d+)(\.)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a)}}),era:(0,i.default)({matchPatterns:{narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^v/i,/^n/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},defaultParseWidth:"any"})};t.default=n,a.exports=t.default},1654:a=>{a.exports=function(a){return a&&a.__esModule?a:{default:a}},a.exports.__esModule=!0,a.exports.default=a.exports}}]);
//# sourceMappingURL=date-fns-locale-de-_lib-match-index-js.js.map