// ***to find the original, look in /main.es here or in the github repo***
"use strict"
!function(){function n(){var n=function(){return 10*Math.random()|0},t=function(){return 12*Math.random()|0},e=function(){return[1,2,5,6,7,8,10,11][8*Math.random()|0]},c=function(n){f.push(n),o.append($('<div style="background:'+r[n]+';">'))}
f=[],o.empty(),a.empty(),c(n()),c(n()),c(t()),c(e())}function t(){var n=f,t="R k M G".split(" ")
t[-1]="m"
var r=[,1,2,,,.5,.25,.1,.05,,5,10],o=10*n[0]+n[1],a=n[2]
n[2]>=10?(o*=Math.pow(10,9-n[2]+3),a=9-n[2]):o*=Math.pow(10,(a+3)%3),o>1e3&&(o/=1e3,a+=3)
var e=""+o;-1===e.indexOf(".")&&(e+="."),e=e.replace(".",t[Math.floor(a/3)]),e+=" &plusmn;"+r[n[3]]+"%",$("#answer").html(e)}var r="000 663332 fe0000 ff6600 ffff01 3c3 6766ff cd66ff 939393 fff cb9a34 ccc"
r=r.split(" ").map(function(n){return"#"+n})
var f=void 0,o=void 0,a=void 0
$(function(){o=$("#resistor"),a=$("#answer"),n()
var r={A:n,S:t}
$(document).keydown(function(n){for(var t in r)n.keyCode===t.charCodeAt()&&r[t]()})})}()
