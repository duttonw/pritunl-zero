(self.webpackChunkpritunl_zero=self.webpackChunkpritunl_zero||[]).push([[74048,36108,23534,46144,70140,47142,66579,31097,99561,5425],{86273:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},53347:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var r;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var n=e.defaultFormattingWidth||e.defaultWidth,i=null!=a&&a.width?String(a.width):n;r=e.formattingValues[i]||e.formattingValues[n]}else{var u=e.defaultWidth,o=null!=a&&a.width?String(a.width):e.defaultWidth;r=e.values[o]||e.values[u]}return r[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},94461:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.width,n=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(n);if(!i)return null;var u,o=i[0],d=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(d)?function(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a;return}(d,(function(e){return e.test(o)})):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a;return}(d,(function(e){return e.test(o)}));return u=e.valueCallback?e.valueCallback(l):l,{value:u=a.valueCallback?a.valueCallback(u):u,rest:t.slice(o.length)}}},e.exports=t.default},44497:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var n=r[0],i=t.match(e.parsePattern);if(!i)return null;var u=e.valueCallback?e.valueCallback(i[0]):i[0];return{value:u=a.valueCallback?a.valueCallback(u):u,rest:t.slice(n.length)}}},e.exports=t.default},85841:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lessThanXSeconds:{one:"હમણાં",other:"​આશરે {{count}} સેકંડ"},xSeconds:{one:"1 સેકંડ",other:"{{count}} સેકંડ"},halfAMinute:"અડધી મિનિટ",lessThanXMinutes:{one:"આ મિનિટ",other:"​આશરે {{count}} મિનિટ"},xMinutes:{one:"1 મિનિટ",other:"{{count}} મિનિટ"},aboutXHours:{one:"​આશરે 1 કલાક",other:"​આશરે {{count}} કલાક"},xHours:{one:"1 કલાક",other:"{{count}} કલાક"},xDays:{one:"1 દિવસ",other:"{{count}} દિવસ"},aboutXWeeks:{one:"આશરે 1 અઠવાડિયું",other:"આશરે {{count}} અઠવાડિયા"},xWeeks:{one:"1 અઠવાડિયું",other:"{{count}} અઠવાડિયા"},aboutXMonths:{one:"આશરે 1 મહિનો",other:"આશરે {{count}} મહિના"},xMonths:{one:"1 મહિનો",other:"{{count}} મહિના"},aboutXYears:{one:"આશરે 1 વર્ષ",other:"આશરે {{count}} વર્ષ"},xYears:{one:"1 વર્ષ",other:"{{count}} વર્ષ"},overXYears:{one:"1 વર્ષથી વધુ",other:"{{count}} વર્ષથી વધુ"},almostXYears:{one:"લગભગ 1 વર્ષ",other:"લગભગ {{count}} વર્ષ"}},r=function(e,t,r){var n,i=a[e];return n="string"==typeof i?i:1===t?i.one:i.other.replace("{{count}}",String(t)),null!=r&&r.addSuffix?r.comparison&&r.comparison>0?n+"માં":n+" પહેલાં":n};t.default=r,e.exports=t.default},62972:(e,t,a)=>{"use strict";var r=a(1654).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(86273)),i={date:(0,n.default)({formats:{full:"EEEE, d MMMM, y",long:"d MMMM, y",medium:"d MMM, y",short:"d/M/yy"},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"hh:mm:ss a zzzz",long:"hh:mm:ss a z",medium:"hh:mm:ss a",short:"hh:mm a"},defaultWidth:"full"}),dateTime:(0,n.default)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default},90710:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lastWeek:"'પાછલા' eeee p",yesterday:"'ગઈકાલે' p",today:"'આજે' p",tomorrow:"'આવતીકાલે' p",nextWeek:"eeee p",other:"P"},r=function(e,t,r,n){return a[e]};t.default=r,e.exports=t.default},9894:(e,t,a)=>{"use strict";var r=a(1654).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(53347)),i={ordinalNumber:function(e,t){return String(e)},era:(0,n.default)({values:{narrow:["ઈસપૂ","ઈસ"],abbreviated:["ઈ.સ.પૂર્વે","ઈ.સ."],wide:["ઈસવીસન પૂર્વે","ઈસવીસન"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1લો ત્રિમાસ","2જો ત્રિમાસ","3જો ત્રિમાસ","4થો ત્રિમાસ"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,n.default)({values:{narrow:["જા","ફે","મા","એ","મે","જૂ","જુ","ઓ","સ","ઓ","ન","ડિ"],abbreviated:["જાન્યુ","ફેબ્રુ","માર્ચ","એપ્રિલ","મે","જૂન","જુલાઈ","ઑગસ્ટ","સપ્ટે","ઓક્ટો","નવે","ડિસે"],wide:["જાન્યુઆરી","ફેબ્રુઆરી","માર્ચ","એપ્રિલ","મે","જૂન","જુલાઇ","ઓગસ્ટ","સપ્ટેમ્બર","ઓક્ટોબર","નવેમ્બર","ડિસેમ્બર"]},defaultWidth:"wide"}),day:(0,n.default)({values:{narrow:["ર","સો","મં","બુ","ગુ","શુ","શ"],short:["ર","સો","મં","બુ","ગુ","શુ","શ"],abbreviated:["રવિ","સોમ","મંગળ","બુધ","ગુરુ","શુક્ર","શનિ"],wide:["રવિવાર","સોમવાર","મંગળવાર","બુધવાર","ગુરુવાર","શુક્રવાર","શનિવાર"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"મ.રાત્રિ",noon:"બ.",morning:"સવારે",afternoon:"બપોરે",evening:"સાંજે",night:"રાત્રે"},abbreviated:{am:"AM",pm:"PM",midnight:"​મધ્યરાત્રિ",noon:"બપોરે",morning:"સવારે",afternoon:"બપોરે",evening:"સાંજે",night:"રાત્રે"},wide:{am:"AM",pm:"PM",midnight:"​મધ્યરાત્રિ",noon:"બપોરે",morning:"સવારે",afternoon:"બપોરે",evening:"સાંજે",night:"રાત્રે"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"મ.રાત્રિ",noon:"બપોરે",morning:"સવારે",afternoon:"બપોરે",evening:"સાંજે",night:"રાત્રે"},abbreviated:{am:"AM",pm:"PM",midnight:"મધ્યરાત્રિ",noon:"બપોરે",morning:"સવારે",afternoon:"બપોરે",evening:"સાંજે",night:"રાત્રે"},wide:{am:"AM",pm:"PM",midnight:"​મધ્યરાત્રિ",noon:"બપોરે",morning:"સવારે",afternoon:"બપોરે",evening:"સાંજે",night:"રાત્રે"}},defaultFormattingWidth:"wide"})};t.default=i,e.exports=t.default},40738:(e,t,a)=>{"use strict";var r=a(1654).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(94461)),i={ordinalNumber:(0,r(a(44497)).default)({matchPattern:/^(\d+)(લ|જ|થ|ઠ્ઠ|મ)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(ઈસપૂ|ઈસ)/i,abbreviated:/^(ઈ\.સ\.પૂર્વે|ઈ\.સ\.)/i,wide:/^(ઈસવીસન\sપૂર્વે|ઈસવીસન)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ઈસપૂ/i,/^ઈસ/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](લો|જો|થો)? ત્રિમાસ/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[જાફેમાએમેજૂજુઓસઓનડિ]/i,abbreviated:/^(જાન્યુ|ફેબ્રુ|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઈ|ઑગસ્ટ|સપ્ટે|ઓક્ટો|નવે|ડિસે)/i,wide:/^(જાન્યુઆરી|ફેબ્રુઆરી|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઇ|ઓગસ્ટ|સપ્ટેમ્બર|ઓક્ટોબર|નવેમ્બર|ડિસેમ્બર)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^જા/i,/^ફે/i,/^મા/i,/^એ/i,/^મે/i,/^જૂ/i,/^જુ/i,/^ઑગ/i,/^સ/i,/^ઓક્ટો/i,/^ન/i,/^ડિ/i],any:[/^જા/i,/^ફે/i,/^મા/i,/^એ/i,/^મે/i,/^જૂ/i,/^જુ/i,/^ઑગ/i,/^સ/i,/^ઓક્ટો/i,/^ન/i,/^ડિ/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^(ર|સો|મં|બુ|ગુ|શુ|શ)/i,short:/^(ર|સો|મં|બુ|ગુ|શુ|શ)/i,abbreviated:/^(રવિ|સોમ|મંગળ|બુધ|ગુરુ|શુક્ર|શનિ)/i,wide:/^(રવિવાર|સોમવાર|મંગળવાર|બુધવાર|ગુરુવાર|શુક્રવાર|શનિવાર)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ર/i,/^સો/i,/^મં/i,/^બુ/i,/^ગુ/i,/^શુ/i,/^શ/i],any:[/^ર/i,/^સો/i,/^મં/i,/^બુ/i,/^ગુ/i,/^શુ/i,/^શ/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(a|p|મ\.?|સ|બ|સાં|રા)/i,any:/^(a|p|મ\.?|સ|બ|સાં|રા)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^મ\.?/i,noon:/^બ/i,morning:/સ/i,afternoon:/બ/i,evening:/સાં/i,night:/રા/i}},defaultParseWidth:"any"})};t.default=i,e.exports=t.default},47967:(e,t,a)=>{"use strict";var r=a(1654).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(85841)),i=r(a(62972)),u=r(a(90710)),o=r(a(9894)),d=r(a(40738)),l={code:"gu",formatDistance:n.default,formatLong:i.default,formatRelative:u.default,localize:o.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=l,e.exports=t.default},1654:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=date-fns-locale-gu-index-js.js.map