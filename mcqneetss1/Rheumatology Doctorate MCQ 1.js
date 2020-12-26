var qmakeVers = '3.1.2';
var qmakeProgName = "QuizFaber";
var qmakeURL = 'www.quizfaber.com/';
var dhtmlEnabled = 1;
var html5Enabled = 1;
var frameEnabled = 1;
var charset = 'Windows-1252';
var soundEnable = 0;
var okSound='';
var errSound='';
var warnSound='';
var maxtime=3600;
var showTimeout = 1;
var keyword = 'syskey';
var los = 0;
var maxvoto = 100;
var minvoto = 0;
var roundvoto = 1;
var voto = 0;
var computeMarkFnType = 0;
var silent = 0;
var quizRetire = 0;
var showReport = 0;
var ncols_report = 1;
var valutaQuiz = 1;
var auto_repeat = 0;
var man_repeat = 0;
var n_repeat = 0;
var reviewQuiz = 0;
var valuateAfterRetire = 1;
var markPercentage = 0;
var incl_close_btn = 1;
var incl_print_btn = 1;
var incl_linkback = 0;
var questSlide  = 1;
var lockRightAns = 0;
var reportNotation  = 1;
var remRepAlways  = 0;
var confirmEachQst = 0;
var compressReport = 0
var clearHistory = 0;
var finalMess = '';
var valid;
var nScore;
var maxScore;
var questions=100;
var falseQuests = 0;
var invisibleQuests = 0;
var qstHead;
var groups;
var quizTitle="Rheumatology NEET SS mock test 1";
var printCpRg=1;
var filename = 'Rheumatology Doctorate MCQ 1';

var topChartFile='';
var pesi;
var allAnsReport;
var author  = '';
var mediaDir  = 'media';
var cssDir  = 'css';
var fileExtension = 'htm';
var resultBoxKind  = 0;
var isResultsPageDark = 0;
var disableRightClickMenu = 0;
var ordineDomande;
var typeOfQuest;
var isQuestCustom;
var omitPoint;
var nc=0,    
ns=0,    
nr;      
var end_test=0;  
var userName=""; 
var identityName=""; 
var computeMarkErr = 0;  
var okIcon = "smiling.gif";
var koIcon = "no.gif";
var warnIcon = "warn.gif";
var checkIcon = "check.png";
function setCookie(cookie_name,cookie_value,minuti)
{
var expdate= new Date();  
cookie_value+="#"; 
expdate.setTime(expdate.getTime()+(60000*minuti));
document.cookie = cookie_name+"="+escape(cookie_value)+"; expires="+expdate.toGMTString();
}
function setTempCookie(cookie_name,cookie_value,minuti)
{
document.cookie = cookie_name+"="+escape(cookie_value+"#");
}
function setShortCookie(cookie_name, cookie_value, millisec) {
var expdate = new Date();  
cookie_value += "#"; 
expdate.setTime(expdate.getTime() + millisec);
document.cookie = cookie_name + "=" + escape(cookie_value) + "; expires=" + expdate.toGMTString();
}
function getCookie(cookie_name)
{
var arg;
var alen;
var clen = document.cookie.length;
var i=0,j,k;
var valore;
arg = cookie_name + "=";
alen=arg.length
while (i<clen) {
j = i+alen;
if (document.cookie.substring(i,j)==arg)  {
k = document.cookie.indexOf(escape("#"),j);
valore = unescape(document.cookie.substring(j,k));
return valore;
}
i = document.cookie.indexOf(" ",i)+1;
if (i==0) break;
}
return "";  
}
function deleteCookie(cookie_name) 
{
document.cookie = cookie_name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function getHTMLTagBkGroundSound(soundFile)
{
var tagSound = "";
var test_audio = document.createElement("audio");  
var mediasupport = (test_audio.play) ? true : false;
if (mediasupport) {
tagSound = '<AUDIO SRC="' + soundFile + '" autoplay loop>';
} 
else { 
if (getBrowser() == "IE") {
tagSound = '<BGSOUND src="' + soundFile + '" loop="infinite">';
}
else {
tagSound = '<EMBED SRC="' + soundFile + '" hidden="true" loop="yes" autostart="true">';
}
}
return tagSound;
}
function PlaySound(suonoID)  {
if (soundEnable==0)
return;
var thissound=document.getElementById(suonoID);
if (thissound!=null) {
thissound.Play();
}
}
var dlgList = new init_array(10);
var nDlgs = 0;
function MyDialog(dlgId,filename,x,y) {
this.dlgId = dlgId;
this.filename = filename;
this.x = x;
this.y = y;
this.opened = 0;
this.handle = 0;
}
function CreateDialog(dlgId,filename,x,y) {
var my_dialog;
var i,found=0;
for (i=0; i<nDlgs; i++) {
if (dlgList[i].dlgId==dlgId) { found=1; break; }
}
if (found==0) {
my_dialog = new MyDialog(dlgId,filename,x,y);
dlgList[nDlgs] = my_dialog;
nDlgs++;
}
else {
my_dialog = dlgList[i];
}
return my_dialog;
}
function ManageDialog(myDialog) {
var handle;
var mode = '';
dlgId = 'my'+myDialog.filename;
if (myDialog.opened==0) {
mode = 'menubar=no,status=no,location=no';
mode += ',width='+myDialog.x;
mode += ',height='+myDialog.y;
handle = window.open(myDialog.filename,myDialog.dlgId,mode);
myDialog.handle = handle;
myDialog.opened = 1;
}
else {
handle = myDialog.handle;
}
return handle;
}
function UnmanageDialog(dlgId) {
var i;
for (i=0; i<nDlgs; i++) {
if (dlgList[i].dlgId==dlgId) {
if (dlgList[i].opened==1) {
dlgList[i].handle.close();
dlgList[i].opened = 0;
break;
}
}
}
}
function UnmanageAllDialogs() {
var i;
for (i=0; i<nDlgs; i++) {
UnmanageDialog(dlgList[i].dlgId);
}
}
function GetRequestHttpPostFromForm(context) 
{
var bodyStr = '';
var fields = context.getElementsByTagName("input");
for (var i = 0; i < fields.length; i++) {
bodyStr += fields[i].name + "=" + fields[i].value;
if (i!=fields.length-1) bodyStr += "&";
}
return bodyStr;
}
function init_array()
{
this.length = init_array.arguments.length;
for (var i=0;i<this.length;i++)
this[i]=init_array.arguments[i];
}
function init_IntArray(n,value) {
var i;
this.length=n;
for (i=0; i<n; i++)
this[i]=value;
}
function initOneElementVector() {
this.length=1;
}
function dec_to_hex(str_dec)
{
var H=0,L=0;
var S="";
var dec=0;
dec = eval(str_dec);
H=Math.floor(dec/16);
L=dec%16;
S+=valore_hex(H);
S+=valore_hex(L);
return S;
}
function hex_to_dec(hex)
{
var d=0,H=0,L=0;
H=valore_dec(hex.charAt(0));
L=valore_dec(hex.charAt(1));
d=H*16+L;
return d;
}
function valore_dec(c)
{
var n=0;
if (c<='9') n=eval(c);
if ((c=='A')||(c=='a')) n=10;
if ((c=='B')||(c=='b')) n=11;
if ((c=='C')||(c=='c')) n=12;
if ((c=='D')||(c=='d')) n=13;
if ((c=='E')||(c=='e')) n=14;
if ((c=='F')||(c=='f')) n=15;
return n;
}
function valore_hex(n)
{
if (n<=9) return n;
if (n==10) return 'A';
if (n==11) return 'B';
if (n==12) return 'C';
if (n==13) return 'D';
if (n==14) return 'E';
if (n==15) return 'F';
}
function Lettera(cc)
{
var c,chr=65;
var a=0,b=0;
if (cc<=25) {
chr+=cc;
c = unescape("%"+dec_to_hex(chr));
}
else {
a = Math.floor(cc / 26);
b = cc % 26;
chr+=b;
c = unescape("%"+dec_to_hex(chr));
c = "" + a + c;
}
return c;
}
function trim(str) {
var i,iStart,iStop;
for (i=0; i<str.length; i++) {
if (str.charAt(i)!=' ')
break;
}
iStart = i;
for (i=str.length-1; i>=0; i--) {
if (str.charAt(i)!=' ')
break;
}
iStop = i;
if ((iStart!=0)||(iStop!=str.length-1))
return str.substring(iStart,iStop+1);
return str;
}
function rand(n) {
return Math.floor(Math.random()*n);
}
function DataToStringa()
{
var obj = new Date();
var mese,giorno;
var nome="";
var stringa="";
var strData;
giorno = obj.getDay();
switch(giorno) {
case 0: nome = "Sunday"; break;
case 1: nome = "Monday"; break;
case 2: nome = "Tuesday"; break;
case 3: nome = "Wednesday"; break;
case 4: nome = "Thursday"; break;
case 5: nome = "Friday"; break;
case 6: nome = "Saturday"; break;
}
strData = nome+", "+obj.getDate();
mese = obj.getMonth();
switch(mese) {
case 0: nome = "January";  break;
case 1: nome = "February"; break;
case 2: nome = "March"; break;
case 3: nome = "April"; break;
case 4: nome = "May"; break;
case 5: nome = "June"; break;
case 6: nome = "July"; break;
case 7: nome = "August"; break;
case 8: nome = "September"; break;
case 9: nome = "October"; break;
case 10: nome = "November"; break;
case 11: nome = "December";
}
strData += " " + nome + " " + obj.getFullYear();
strData += " - ";
if (obj.getHours()<10)
strData += "0" + obj.getHours();
else
strData += obj.getHours();
strData += ":";
if (obj.getMinutes()<10)
strData += "0" + obj.getMinutes();
else
strData += obj.getMinutes();
strData += ":";
if (obj.getSeconds()<10)
strData += "0" + obj.getSeconds();
else
strData += obj.getSeconds();
return strData;
}
function SetInnerText(obj,text)
{
if(document.all) {
obj.innerText = text;
} 
else {
obj.textContent = text;
} 
}
function GetInnerText(obj)
{
if (document.all) {
return obj.innerText;
}
else {
return obj.textContent;
}
}
function getBrowserVers()
{
return parseInt (navigator.appVersion.charAt(0));
}
function getBrowser()
{
var appVers = navigator.appVersion;
if (navigator.appName=="Netscape") {
if ((appVers.indexOf("Safari")!=-1)&&(appVers.indexOf("Chrome")==-1)) {
	 return "SF";  
}
else if (appVers.indexOf("Chrome")!=-1) {
	 return "CR";  
}
return "NS";  
}
else if (navigator.appName=="Microsoft Internet Explorer") {
return "IE";
}
else if (navigator.appName=="Opera") {
return "OP";
}
return "";
}
function pluginInstalled(str)
{
var i;
for (i=0; i<navigator.plugins.length; i++) {
if (navigator.plugins[i].name.indexOf(str) != -1)
return true;
}
return false;
}
var QueryString = function () {
var query_string = {};
var query = window.location.search.substring(1);
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
var pair = vars[i].split("=");
if (typeof query_string[pair[0]] === "undefined") {
query_string[pair[0]] = pair[1];
} else if (typeof query_string[pair[0]] === "string") {
var arr = [query_string[pair[0]], pair[1]];
query_string[pair[0]] = arr;
} else {
query_string[pair[0]].push(pair[1]);
}
}
return query_string;
} ();
var get_params = function (search_string) {
var parse = function(params, pairs) {
var pair = pairs[0];
var parts = pair.split('=');
var key = decodeURIComponent(parts[0]);
var value = decodeURIComponent(parts.slice(1).join('='));
if (typeof params[key] === "undefined") {
params[key] = value;
} else {
params[key] = [].concat(params[key], value);
}
return pairs.length == 1 ? params : parse(params, pairs.slice(1))
}
return search_string.length == 0 ? {} : parse({}, search_string.substr(1).split('&'));
}
function CodeString(msg) 
{
return Tea.encrypt(msg, keyword);
}
function DecodeString(msg) 
{
return Tea.decrypt(msg, keyword);
}
function DecodeNumber(msg,n,minNum,maxNum)
{
var clearNumber;
var plainText;
plainText = Tea.decrypt(msg, keyword);
if (plainText.length > 1) {
if (plainText.charAt(0) == 'N') {
plainText = plainText.substring(1);
clearNumber = parseInt(plainText);
clearNumber = clearNumber - n;
if ((clearNumber >= minNum) && (clearNumber <= maxNum)) {
return clearNumber;
}
}
}
PrintWrongKeyword();
return -1;
}
function CodeNumber(clearNumber, n) 
{
var plainText;
var num = clearNumber + n;
plainText = "N" + num.toString();
return Tea.encrypt(plainText, keyword);
}
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/*  Block TEA (xxtea) Tiny Encryption Algorithm implementation in JavaScript                      */
/*     (c) Chris Veness 2002-2012: www.movable-type.co.uk/tea-block.html                          */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/*  Algorithm: David Wheeler & Roger Needham, Cambridge University Computer Lab                   */
/*             http://www.cl.cam.ac.uk/ftp/papers/djw-rmn/djw-rmn-tea.html (1994)                 */
/*             http://www.cl.cam.ac.uk/ftp/users/djw3/xtea.ps (1997)                              */
/*             http://www.cl.cam.ac.uk/ftp/users/djw3/xxtea.ps (1998)                             */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
var Tea = {};  
/*
* encrypt text using Corrected Block TEA (xxtea) algorithm
*
* @param {string} plaintext String to be encrypted (multi-byte safe)
* @param {string} password  Password to be used for encryption (1st 16 chars)
* @returns {string} encrypted text
*/
Tea.encrypt = function (plaintext, password) {
if (plaintext.length == 0) return ('');  
var v = Tea.strToLongs(Utf8.encode(plaintext));
if (v.length <= 1) v[1] = 0;  
var k = Tea.strToLongs(Utf8.encode(password).slice(0, 16));
var n = v.length;
var z = v[n - 1], y = v[0], delta = 0x9E3779B9;
var mx, e, q = Math.floor(6 + 52 / n), sum = 0;
while (q-- > 0) {  
sum += delta;
e = sum >>> 2 & 3;
for (var p = 0; p < n; p++) {
y = v[(p + 1) % n];
mx = (z >>> 5 ^ y << 2) + (y >>> 3 ^ z << 4) ^ (sum ^ y) + (k[p & 3 ^ e] ^ z);
z = v[p] += mx;
}
}
var ciphertext = Tea.longsToStr(v);
return Base64.encode(ciphertext);
}
/*
* decrypt text using Corrected Block TEA (xxtea) algorithm
*
* @param {string} ciphertext String to be decrypted
* @param {string} password   Password to be used for decryption (1st 16 chars)
* @returns {string} decrypted text
*/
Tea.decrypt = function (ciphertext, password) {
if (ciphertext.length == 0) return ('');
var v = Tea.strToLongs(Base64.decode(ciphertext));
var k = Tea.strToLongs(Utf8.encode(password).slice(0, 16));
var n = v.length;
var z = v[n - 1], y = v[0], delta = 0x9E3779B9;
var mx, e, q = Math.floor(6 + 52 / n), sum = q * delta;
while (sum != 0) {
e = sum >>> 2 & 3;
for (var p = n - 1; p >= 0; p--) {
z = v[p > 0 ? p - 1 : n - 1];
mx = (z >>> 5 ^ y << 2) + (y >>> 3 ^ z << 4) ^ (sum ^ y) + (k[p & 3 ^ e] ^ z);
y = v[p] -= mx;
}
sum -= delta;
}
var plaintext = Tea.longsToStr(v);
plaintext = plaintext.replace(/\0+$/, '');
return Utf8.decode(plaintext);
}
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
Tea.strToLongs = function (s) {  
var l = new Array(Math.ceil(s.length / 4));
for (var i = 0; i < l.length; i++) {
l[i] = s.charCodeAt(i * 4) + (s.charCodeAt(i * 4 + 1) << 8) +
(s.charCodeAt(i * 4 + 2) << 16) + (s.charCodeAt(i * 4 + 3) << 24);
}
return l;  
}              
Tea.longsToStr = function (l) {  
var a = new Array(l.length);
for (var i = 0; i < l.length; i++) {
a[i] = String.fromCharCode(l[i] & 0xFF, l[i] >>> 8 & 0xFF,
l[i] >>> 16 & 0xFF, l[i] >>> 24 & 0xFF);
}
return a.join('');  
}
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/*  Base64 class: Base 64 encoding / decoding (c) Chris Veness 2002-2012                          */
/*    note: depends on Utf8 class                                                                 */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
var Base64 = {};  
Base64.code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
/**
* Encode string into Base64, as defined by RFC 4648 [http://tools.ietf.org/html/rfc4648]
* (instance method extending String object). As per RFC 4648, no newlines are added.
*
* @param {String} str The string to be encoded as base-64
* @param {Boolean} [utf8encode=false] Flag to indicate whether str is Unicode string to be encoded 
*   to UTF8 before conversion to base64; otherwise string is assumed to be 8-bit characters
* @returns {String} Base64-encoded string
*/
Base64.encode = function (str, utf8encode) {  
utf8encode = (typeof utf8encode == 'undefined') ? false : utf8encode;
var o1, o2, o3, bits, h1, h2, h3, h4, e = [], pad = '', c, plain, coded;
var b64 = Base64.code;
plain = utf8encode ? Utf8.encode(str) : str;
c = plain.length % 3;  
if (c > 0) { while (c++ < 3) { pad += '='; plain += '\0'; } }
for (c = 0; c < plain.length; c += 3) {  
o1 = plain.charCodeAt(c);
o2 = plain.charCodeAt(c + 1);
o3 = plain.charCodeAt(c + 2);
bits = o1 << 16 | o2 << 8 | o3;
h1 = bits >> 18 & 0x3f;
h2 = bits >> 12 & 0x3f;
h3 = bits >> 6 & 0x3f;
h4 = bits & 0x3f;
e[c / 3] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
}
coded = e.join('');  
coded = coded.slice(0, coded.length - pad.length) + pad;
return coded;
}
/**
* Decode string from Base64, as defined by RFC 4648 [http://tools.ietf.org/html/rfc4648]
* (instance method extending String object). As per RFC 4648, newlines are not catered for.
*
* @param {String} str The string to be decoded from base-64
* @param {Boolean} [utf8decode=false] Flag to indicate whether str is Unicode string to be decoded 
*   from UTF8 after conversion from base64
* @returns {String} decoded string
*/
Base64.decode = function (str, utf8decode) {
utf8decode = (typeof utf8decode == 'undefined') ? false : utf8decode;
var o1, o2, o3, h1, h2, h3, h4, bits, d = [], plain, coded;
var b64 = Base64.code;
coded = utf8decode ? Utf8.decode(str) : str;
for (var c = 0; c < coded.length; c += 4) {  
h1 = b64.indexOf(coded.charAt(c));
h2 = b64.indexOf(coded.charAt(c + 1));
h3 = b64.indexOf(coded.charAt(c + 2));
h4 = b64.indexOf(coded.charAt(c + 3));
bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
o1 = bits >>> 16 & 0xff;
o2 = bits >>> 8 & 0xff;
o3 = bits & 0xff;
d[c / 4] = String.fromCharCode(o1, o2, o3);
if (h4 == 0x40) d[c / 4] = String.fromCharCode(o1, o2);
if (h3 == 0x40) d[c / 4] = String.fromCharCode(o1);
}
plain = d.join('');  
return utf8decode ? Utf8.decode(plain) : plain;
}
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/*  Utf8 class: encode / decode between multi-byte Unicode characters and UTF-8 multiple          */
/*              single-byte character encoding (c) Chris Veness 2002-2012                         */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
var Utf8 = {};  
/**
* Encode multi-byte Unicode string into utf-8 multiple single-byte characters 
* (BMP / basic multilingual plane only)
*
* Chars in range U+0080 - U+07FF are encoded in 2 chars, U+0800 - U+FFFF in 3 chars
*
* @param {String} strUni Unicode string to be encoded as UTF-8
* @returns {String} encoded string
*/
Utf8.encode = function (strUni) {
var strUtf = strUni.replace(
/[\u0080-\u07ff]/g,  
function (c) {
var cc = c.charCodeAt(0);
return String.fromCharCode(0xc0 | cc >> 6, 0x80 | cc & 0x3f);
}
);
strUtf = strUtf.replace(
/[\u0800-\uffff]/g,  
function (c) {
var cc = c.charCodeAt(0);
return String.fromCharCode(0xe0 | cc >> 12, 0x80 | cc >> 6 & 0x3F, 0x80 | cc & 0x3f);
}
);
return strUtf;
}
/**
* Decode utf-8 encoded string back into multi-byte Unicode characters
*
* @param {String} strUtf UTF-8 string to be decoded back to Unicode
* @returns {String} decoded string
*/
Utf8.decode = function (strUtf) {
var strUni = strUtf.replace(
/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,  
function (c) {  
var cc = ((c.charCodeAt(0) & 0x0f) << 12) | ((c.charCodeAt(1) & 0x3f) << 6) | (c.charCodeAt(2) & 0x3f);
return String.fromCharCode(cc);
}
);
strUni = strUni.replace(
/[\u00c0-\u00df][\u0080-\u00bf]/g,                 
function (c) {  
var cc = (c.charCodeAt(0) & 0x1f) << 6 | c.charCodeAt(1) & 0x3f;
return String.fromCharCode(cc);
}
);
return strUni;
}
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
function AnsReport(choice,value,rem,data,answer)
{
this.choice = choice;
this.valuation = value;
this.remark = rem;
this.data = data;
this.answer = answer;
}
function doValuate(n) {
if (typeOfQuest[n]==1)          
doValuateMultiAns(n);
else if (typeOfQuest[n]==101)   
doValuateWithPoints(n);
else if (typeOfQuest[n]==2)    
doValuateBoolAns(n);
else if (typeOfQuest[n]==3)     
doValuateOpenAns(n);
else if (typeOfQuest[n]==4)     
doValuateFillGap(n);
else if (typeOfQuest[n]==5)     
doValuateMatching(n);
}
function doValuateMultiAns(n)
{
nScore[n] = getGuessAns(n);
maxScore[n] = getNumAns(n);
if (nScore[n]==maxScore[n])
valid[n]=1; else valid[n]=-1;
}
function doValuateWithPoints(n)
{
nScore[n] = getScore(n);
maxScore[n] = ConvertPointToMark(n,nScore[n]);
valid[n]=5;
}
function doValuateBoolAns(n)
{
nScore[n] = getGuessAns(n);
maxScore[n] = getNumAns(n);
if (nScore[n]==maxScore[n])
valid[n]=1;
else if (nScore[n]==0)
valid[n]=-1;
else
valid[n]=3;
}
function doValuateFillGap(n)
{
nScore[n] = getGuessFillGap(n);
maxScore[n] = getNumAns(n);
if (nScore[n]==maxScore[n])
valid[n]=1;
else if (nScore[n]==0)
valid[n]=-1;
else
valid[n]=3;
}
function doValuateMatching(n)
{
nScore[n] = getGuessMatch(n);
maxScore[n] = getNumAns(n);
if (nScore[n]==maxScore[n])
valid[n]=1;
else if (nScore[n]==0)
valid[n]=-1;
else
valid[n]=3;
}
function doValuateOpenAns(n)
{
nScore[n]   = 0;
maxScore[n] = 0;
valid[n]    = 2;
}
function getGuessAns(n)
{
var j,guess=0;
for (j=0;j<allAnsReport[n].length;j++) {
if (getGuessAnsN(n,j)) guess++;
}
return guess;
}
function getGuessAnsN(n,m)
{
var value,choice,data;
value  = allAnsReport[n][m].valuation;
choice = allAnsReport[n][m].choice;
data   = allAnsReport[n][m].data;
value += data;
if (((value>0)&&(choice==1)) || ((value<0)&&(choice==0)))
return 1;
return 0;
}
function getGuessPtAnsN(n, m) {
var value, choice, data;
value = allAnsReport[n][m].valuation;
choice = allAnsReport[n][m].choice;
data = allAnsReport[n][m].data;
if (((value > 0) && (choice == 1)) || ((data > 0) && (choice == 0)))
return 1;
return 0;
}
function getGuessMatch(n)
{
var j,guess=0;
for (j=0;j<allAnsReport[n].length;j++) {
if (getGuessMatchN(n,j)==1) guess++;
}
return guess;
}
function getGuessMatchN(n,m)
{
var i,j,value,choice;
var str1,str2,str3;
value  = allAnsReport[n][m].valuation;
choice = allAnsReport[n][m].choice;
str1 = choice[0] + choice[1];
for (i=0; i<value.length; i++) {
str2 = choice[0] + value[i];
if (str1.toString().toLowerCase()==str2.toString().toLowerCase()) {
for (j=0; j<allAnsReport[n].length; j++) {
str3 = allAnsReport[n][j].choice[0] + allAnsReport[n][j].choice[1];
if (str1.toString().toLowerCase()==str3.toString().toLowerCase()) {
if (j==m)
return 1; 
else
return -1; 
}
}
}
}
return 0;
}
function getGuessFillGap(n)
{
var j,guess=0;
for (j=0;j<allAnsReport[n].length;j++) {
if (getGuessFillGapN(n,j)==1) guess++;
}
return guess;
}
function getGuessFillGapN(n,m)
{
var i,j,value,choice;
var str1,str2;
choice = allAnsReport[n][m].choice;
value  = allAnsReport[n][m].valuation;
str1 = trim(choice.toString().toLowerCase());
for (i=0; i<value.length; i++) {
str2 = trim(value[i].toString().toLowerCase());
if (str1==str2)
return 1;
}
return 0;
}
function getNumAns(n)
{
return allAnsReport[n].length;
}
function getScore(n)
{
var j,choice,value,data,
score=0,nchoice=0;
for (j=0;j<allAnsReport[n].length;j++) {
choice = allAnsReport[n][j].choice;
value = allAnsReport[n][j].valuation;
data = allAnsReport[n][j].data;
if (choice==1) {
score += value;
nchoice++;
}
else
score += data;
}
if (nchoice==0)
return omitPoint[n];
return score;
}
function getListOfRightAns(n)
{
var j,value,msg='';
for (j=0;j<allAnsReport[n].length;j++) {
value = allAnsReport[n][j].valuation;
if (value>0)
msg += Lettera(j)+' ';
}
return msg;
}
function getNumOfRightAns(n)
{
var j,value,num=0;
for (j=0;j<allAnsReport[n].length;j++) {
value = allAnsReport[n][j].valuation;
if (value>0)
num++;
}
return num;
}
function getListOfSelAns(n)
{
var j,value,msg='';
if (typeOfQuest[n]==3) {    
return allAnsReport[n][0].choice;
}
for (j=0;j<allAnsReport[n].length;j++) {
choice = allAnsReport[n][j].choice;
if ((typeOfQuest[n]==1)||          
(typeOfQuest[n]==101)) {       
if (choice==1)
msg += Lettera(j)+' ';
}
else if (typeOfQuest[n]==2) {    
if (choice==1)
msg += 'V ';
else if (choice==0)
msg += 'F ';
}
else if (typeOfQuest[n]==4) {    
msg += choice+",";
}
else if (typeOfQuest[n]==5) {    
msg += choice[0] + "-" + choice[1] + ", ";
}   
}
return msg;
}
function initListOfRemark(n)
{
var j,i,rem,value;
i=0;
this.length=0;
for (j=0;j<allAnsReport[n].length;j++) {
choice = allAnsReport[n][j].choice;
rem = allAnsReport[n][j].remark;
if (choice==1) {
this[i] = rem;
i++;
}
}
this.length = i;
}
function getListOfMistake(n)
{
var j,msg='',separator;
var isFirst=1;
for (j=0;j<allAnsReport[n].length;j++) {
if ((typeOfQuest[n]!=4)&&(typeOfQuest[n]!=5)) {
if (!getGuessAnsN(n,j)) {
if (isFirst==0) {
msg += ' ';
}
else {
isFirst=0;
}
msg += Lettera(j);
}
}
else if (typeOfQuest[n]==4) {
if (!getGuessFillGapN(n,j)) {
if (isFirst==0) {
separator = ', ';
}
else {
separator = '';
isFirst=0;
}
if (allAnsReport[n][j].choice!="") {
msg += separator + allAnsReport[n][j].choice;
}
}
}
else if (typeOfQuest[n]==5) {
if (!getGuessMatchN(n,j)) {
if (isFirst==0) {
msg += ', ';
}
else {
isFirst=0;
}
msg += allAnsReport[n][j].choice[0] + ' - ' + allAnsReport[n][j].choice[1];
}
}
}
return msg;
}
function ComputeMarks()
{
var voto = 0;
var sommaPesi = 0;
var sommatoria = 0;
var puntiGruppo = 0;
var votoGruppo;
var iCapoGruppo;  
for (var i=0;i<questions;i++) {
if ((valid[i]!=2)&&
(valid[i]!=4)&&
((groups[i]==0) || (groups[i]==2)))
sommaPesi += pesi[i];
if (valid[i]==1)
sommatoria += pesi[i];
else if (valid[i]==3)
sommatoria += (pesi[i] * nScore[i]) / maxScore[i];
else if (valid[i]==5) {
if (groups[i]==0)
sommatoria += pesi[i] * (maxScore[i]-minvoto)/(maxvoto-minvoto);
else if (groups[i]==2) {
puntiGruppo = nScore[i];
iCapoGruppo = i;
i++;
while (groups[i]==1) {
puntiGruppo += nScore[i];
i++;
}
votoGruppo = ConvertPointToMark(iCapoGruppo,puntiGruppo);
maxScore[iCapoGruppo] = votoGruppo;
sommatoria += pesi[iCapoGruppo] * (votoGruppo-minvoto)/(maxvoto-minvoto);
}
}
}
if (sommaPesi != 0) {
voto = ComputeFinalMark(sommatoria, sommaPesi);
/*
if (roundvoto==1)
voto = minvoto + Math.round(sommatoria*(maxvoto-minvoto)/sommaPesi);
else if (roundvoto==0) {
voto = minvoto + sommatoria*(maxvoto-minvoto)/sommaPesi;
}
else {
votoReal = sommatoria*(maxvoto-minvoto)/sommaPesi;
voto = minvoto + Math.round(votoReal / roundvoto) * roundvoto;
}*/
}
else {
window.alert("Warning: unable to compute final mark");
computeMarkErr = 1;
voto = 0;
}
return voto;
}
function ComputeFinalMark(sommatoria, sommaPesi) 
{
var votoReal = 0.0;
var voto = 0;
if (computeMarkFnType == 0) 
{
if (roundvoto == 1)
voto = minvoto + Math.round(sommatoria * (maxvoto - minvoto) / sommaPesi);
else if (roundvoto == 0) {
voto = minvoto + sommatoria * (maxvoto - minvoto) / sommaPesi;
}
else {
votoReal = sommatoria * (maxvoto - minvoto) / sommaPesi;
voto = minvoto + Math.round(votoReal / roundvoto) * roundvoto;
}
}
else if (computeMarkFnType == 1) 
{
if (sommaPesi >= 1)
votoReal = ((((maxvoto - minvoto) + 1) / sommaPesi) * sommatoria) + minvoto - 1;
else
votoReal = minvoto;
if ((roundvoto > 0) && (roundvoto < 1))
voto = Math.round(votoReal / roundvoto) * roundvoto;
else
voto = votoReal;
}
else if (computeMarkFnType == 2) {
voto = CustomComputeFinalMark(sommatoria, sommaPesi);
}
return voto;
}
function CountAnswers() {
var ratio;
var nexcl=0;
nc = 0;
ns = 0;
nr = questions;
for (var i=0;i<questions;i++) {
if (valid[i]==1) nc++;
else if (valid[i]==-1) ns++;
else if (valid[i]==3) {
ratio = 100 * nScore[i] / maxScore[i];
if (ratio>=60) nc++;
else ns++;
}
else if (valid[i]==5) {
ratio = 100 * maxScore[i] / maxvoto;
if (ratio>=60) nc++;
else ns++;
}
if (valid[i]!=0) nr--;
if ((valid[i]==2)||(valid[i]==4)) nexcl++;
}
if ((questSlide==1)&&(lockRightAns==1)) {
if (nc + nexcl == questions) return 1;
}
else {
if (nr==0) return 1;
}
return 0;
}
function StoreStatusBar() 
{
setShortCookie("qmake.nRight", "" + GetInnerText(document.getElementById("nRight")),3000);
setShortCookie("qmake.nWrong", "" + GetInnerText(document.getElementById("nWrong")), 3000);
setShortCookie("qmake.nToDo", "" + GetInnerText(document.getElementById("nToDo")), 3000);
}
function RetrieveStatusBar() 
{
SetInnerText(document.getElementById("nRight"), parseInt(getCookie("qmake.nRight")));
SetInnerText(document.getElementById("nWrong"), parseInt(getCookie("qmake.nWrong")));
SetInnerText(document.getElementById("nToDo"), parseInt(getCookie("qmake.nToDo")));
}
function StoreAnswer(n)
{
var j;
var cookieName = "";
var numOfReport;
for (j=0;j<allAnsReport[n].length;j++) {
cookieName = "qmake.aar"+n+".item"+j;
		
	setTempCookie(cookieName+".choice",""+allAnsReport[n][j].choice);
	setTempCookie(cookieName+".valuation",""+allAnsReport[n][j].valuation);
	setTempCookie(cookieName+".remark",""+allAnsReport[n][j].remark);
	setTempCookie(cookieName+".data",""+allAnsReport[n][j].data);
	setTempCookie(cookieName+".answer",""+allAnsReport[n][j].answer);
}
setTempCookie("qmake.valid"+n,""+valid[n]);
setTempCookie("qmake.nScore"+n,""+nScore[n]);
setTempCookie("qmake.maxScore"+n,""+maxScore[n]); 
setTempCookie("qmake.typeOfQuest"+n,""+typeOfQuest[n]);
setTempCookie("qmake.pesi"+n,""+pesi[n]);
setTempCookie("qmake.end_test",""+end_test);
setTempCookie("qmake.aar"+n+".length",""+allAnsReport[n].length);
numOfReport = getCookie("qmake.aar.length");
if (n+1 > numOfReport) {
setTempCookie("qmake.aar.length",n+1);
}
}
function RetrieveAnswer(n,numOfItems)
{
var j;
var choice,valuation,remark,data,answer;
var cookieName;
this.length = numOfItems;
for (j=0; j<numOfItems; j++) {
cookieName = "qmake.aar"+n+".item"+j;
choice = parseInt(getCookie(cookieName+".choice"));
valuation = parseInt(getCookie(cookieName+".valuation"));
remark = getCookie(cookieName+".remark");
data = getCookie(cookieName+".data");
answer = getCookie(cookieName+".answer");
	
	this[j] = new AnsReport(choice,valuation,remark,data,answer);
}
}
function RetrieveAllAnswer()
{
var i;
var numOfReport;
var numOfItems;
var cookieName;
end_test = parseInt(getCookie("qmake.end_test"));
numOfReport = parseInt(getCookie("qmake.aar.length"));
oldtime = parseInt(getCookie("qmake.startTime"));
for (i=0;i<numOfReport;i++) {
cookieName = "qmake.aar"+i;
	numOfItems = parseInt(getCookie(cookieName+".length"));
	allAnsReport[i] = new RetrieveAnswer(i,numOfItems);
valid[i] = parseInt(getCookie("qmake.valid"+i));
nScore[i] = parseInt(getCookie("qmake.nScore"+i));
maxScore[i] = parseInt(getCookie("qmake.maxScore"+i));
pesi[i] = parseInt(getCookie("qmake.pesi"+i));
typeOfQuest[i] = parseInt(getCookie("qmake.typeOfQuest"+i));
}
}
function ResetAllAnswer()
{
var i;
var numOfReport;
numOfReport = parseInt(getCookie("qmake.aar.length"));
for (i=0;i<numOfReport;i++) {
setTempCookie("qmake.valid"+i,"0");
setTempCookie("qmake.nScore"+i,"0");
setTempCookie("qmake.maxScore"+i,"0");
setTempCookie("qmake.typeOfQuest"+i,"0");
setTempCookie("qmake.pesi"+i,"0");
setTempCookie("qmake.aar"+i+".length","0");
}
setTempCookie("qmake.end_test","0");
setTempCookie("qmake.aar.length","0");
}
function GetPostMessageForStore(tokenID)
{
var postMessage = "";
var nowDateObj = new Date();
var nowTime = Math.floor(nowDateObj.getTime()/1000);
var jsonStr = JSON.stringify(allAnsReport);
var jValid = JSON.stringify(valid);
var jScore = JSON.stringify(nScore);
var jMaxScore = JSON.stringify(maxScore);
var jTypeOfQuest = JSON.stringify(typeOfQuest);
var jWeight = JSON.stringify(pesi);
postMessage += "token_id=" + tokenID;
postMessage += "&answers_json=" + encodeURIComponent(jsonStr);
postMessage += "&valid_json=" + encodeURIComponent(jValid);
postMessage += "&score_json=" + encodeURIComponent(jScore);
postMessage += "&max_score_json=" + encodeURIComponent(jMaxScore);
postMessage += "&type_of_question_json=" + encodeURIComponent(jTypeOfQuest);
postMessage += "&weight_json=" + encodeURIComponent(jWeight);
postMessage += "&end_test=" + end_test;
postMessage += "&start_time=" + oldtime;
postMessage += "&end_time=" + nowTime;
if (frameEnabled)        
postMessage += "&curr_page=" + frames.quiz_main.location;
else
postMessage += "&curr_page=" + window.location;
return postMessage;
}
function RestoreAll(params)
{
var nowDateObj = new Date();
var nowTime = Math.floor(nowDateObj.getTime() / 1000);
var jsonStr = params['answers_json'];
var jValidStr = params['valid_json'];
var jScoreStr = params['score_json'];
var jMaxScoreStr = params['max_score_json'];
var jTypeOfQuestStr = params['type_of_question_json'];
var jWeightStr = params['weight_json'];
end_test = 0;
var startTime = parseInt(params['start_time']);
var endTime = parseInt(params['end_time']);
oldtime = nowTime - ( endTime - startTime);
if (maxtime > 0) Timer();
allAnsReport = JSON.parse(jsonStr);
valid = JSON.parse(jValidStr);
nScore = JSON.parse(jScoreStr);
maxScore = JSON.parse(jMaxScoreStr);
typeOfQuest = JSON.parse(jTypeOfQuestStr);
pesi = JSON.parse(jWeightStr);
CountAnswers();
if (frameEnabled)
PrintBottomFrame();
var curr_page = params['curr_page'];
return curr_page;
}
function ManageStoreAndRestore(tokenID,url,suspend,linkback_url)
{
var xmlhttp;
if (window.XMLHttpRequest) {
xmlhttp = new XMLHttpRequest();
} else {
xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange = function () {
if (xmlhttp.readyState == XMLHttpRequest.DONE) {
if (xmlhttp.status == 200)
{
var resp = xmlhttp.responseText;
var params = get_params(resp);
var status = params['status'];
if (status == 'stored')
{
}
else if (status == 'restored')
{
if (frameEnabled)
frames.quiz_main.location = RestoreAll(params);
else
window.location = RestoreAll(params);
}
else if (status == 'suspended')
{
window.top.location = linkback_url;
}
else if (status == 'error') {
alert('Error : ' + params['error_descr']);
}
else {
alert('Error unknown');
}
}
else
{
alert('HTTP error : ' + xmlhttp.status);
}
}
}
var params = GetPostMessageForStore(tokenID) + "&suspend=" + suspend;
xmlhttp.open("POST", url, true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.setRequestHeader("Content-length", params.length);
xmlhttp.setRequestHeader("Connection", "close");
xmlhttp.send(params);
}
var ctmnow=0,cnewdt;
var time, oldtime = 0;
var timerInPause = 0;
var pauseTime;
function StartTime()
{
var data,sec;
data = new Date();
sec = Math.floor(data.getTime()/1000);
return sec;
}
function getTimeString(deltatime)
{
var resto,h,m,s;
var str;
h = Math.floor(deltatime/3600);
resto = deltatime%3600;
m = Math.floor(resto/60);
s = resto%60;
if (h<10) h='0'+h;
if (m<10) m='0'+m;
if (s<10) s='0'+s;
str = h+":"+m+":"+s;
return str;
}
function Timer()
{
var delta;
if (ctmnow) {
clearTimeout(ctmnow);
ctmnow=0;
}
cnewdt = new Date();
time   = Math.floor(cnewdt.getTime()/1000);
delta  = maxtime-(time-oldtime);
if ((end_test==0)&&(oldtime!=time)&&(showTimeout==1)) {
SetClock(getTimeString(delta));
}
if ((delta<=0)&&(end_test==0)) {
window.status = "";
window.alert("The time is over!");
end_test=1;
EndQuiz();
}
else {
if (timerInPause == 0) {
ctmnow = setTimeout("Timer()", 1000);
}
else {
pauseTime = time;         
}
}
}
function PauseTimer() 
{
timerInPause = 1;
}
function ResumeTimer() 
{
if (timerInPause == 1) 
{
timerInPause = 0;
if (oldtime > 0) 
{
cnewdt = new Date();
time = Math.floor(cnewdt.getTime() / 1000);
oldtime = oldtime + (time - pauseTime);
Timer();
}
}
}
function RestartTimer()
{
if (ctmnow) {
clearTimeout(ctmnow);
ctmnow=0;
}
ctmnow=setTimeout("Timer()",1000);
}
function determinaOrdineIniziale(nvett) 
{
var i,count,n;
var nuovoPezzo;
this.length=nvett;
for (i=0; i<nvett; i++)
this[i]=-1;
count=0;
while (count<nvett) {
n = rand(nvett);
nuovoPezzo = 1;
for (i=0; i<count; i++) {
if (this[i]==n)
nuovoPezzo = 0;
}
if (nuovoPezzo==1) {
this[count]=n;
count++;
}
}
}
function RefreshAllMatchingList(context) 
{
var n;
for (n = 0; n < typeOfQuest.length; n++) 
{
if (typeOfQuest[n] == 5) 
{
context['listaLeft' + n] = new context["creaListaLeft" + n]();
context['listaRight' + n] = new context["creaListaRight" + n]();
refreshMatching(context.document, 'select' + n + '_Left_', context['listaLeft' + n], context['ordineLeft' + n]);
refreshMatching(context.document, 'select' + n + '_Right_', context['listaRight' + n], context['ordineRight' + n]);
}
}
}
function refreshMatching(doc, selectListID, lista1, ordine1) 
{
var selectobject;
var id;
var n;
for (n = 0; n < lista1.length; n++) {
id = selectListID + n;
selectobject = doc.getElementById(id);
for (var i = 0; i < selectobject.length; i++) {
selectobject.options[i].text = lista1[ordine1[i]];
selectobject.options[i].value = lista1[ordine1[i]];
}
}
}
function creaMatching(doc,listaLeft,listaRight,orderLeft, orderRight , nomeSelect, lockLeftCol)
{
var nMatching; 
var i;
var idLeft;
var idRight;
var attrDisabled;
if (lockLeftCol == 0)
attrDisabled = "";
else
attrDisabled = "DISABLED";
for (nMatching = 0; nMatching < listaLeft.length; nMatching++) 
{
idLeft = nomeSelect + "_Left_" + nMatching;
idRight = nomeSelect + "_Right_" + nMatching;
doc.writeln("<SELECT ID='" + idLeft + "' NAME='" + nomeSelect + "' " + attrDisabled  + ">");
for (i = 0; i < listaLeft.length; i++) 
{
if (nMatching == i)
doc.writeln("<OPTION SELECTED>" + listaLeft[orderLeft[i]] + "</OPTION>");
else
doc.writeln("<OPTION>" + listaLeft[orderLeft[i]] + "</OPTION>");
}
doc.writeln("</SELECT>");
doc.writeln("<SELECT ID='" + idRight + "' NAME='" + nomeSelect + "'>");
for (i = 0; i < listaRight.length; i++) 
{
if (nMatching == i)
doc.writeln("<OPTION SELECTED>" + listaRight[orderRight[i]] + "</OPTION>");
else
doc.writeln("<OPTION>" + listaRight[orderRight[i]] + "</OPTION>");
}
doc.writeln("</SELECT>");
doc.writeln("<BR />");
}
}
function getSelezione(obj) {
var i;
for (i=0; i<obj.options.length; i++) {
if (obj.options[i].selected)
return i;
}
return -1;
}
function getTextSelected(selObj)
{
var i,found;
found =0;
for (i=0; i<selObj.length;i++) {
if (selObj.options[i].selected) {
found = 1;
break;
}
}
if (found==1) {
return selObj.options[i].value;
}
return "";
}
function ShowHiddenInputField(iframeDoc) 
{
var body = GetRequestHttpPostFromForm(sendwin.document.dataform);
sendwin.document.open('text/html', 'replace');
sendwin.document.write(body);
sendwin.document.close();
}
function PrintOpenHTML(documento,title,needOpen,closeHead) 
{
var myNewDoc = documento;
var url = documento.location.href;
if (documento.getElementById('hidden_url') != undefined) 
{
var file = documento.getElementById('hidden_url').value;
if (file != undefined) url = file;
}
if (needOpen==1) 
{ 
if (clearHistory) 
{
	      myNewDoc = documento.open("text/html", "replace");
}
else 
{
	      myNewDoc = documento.open();
}
}
var filename = cssDir + '/' + url.substr(url.lastIndexOf('/') + 1, url.lastIndexOf('.') - url.lastIndexOf('/') - 1);
documento.writeln ('<HTML>');
documento.writeln ('<HEAD>');
documento.writeln ("<TITLE>"+title+"</TITLE>");
documento.writeln ('<META HTTP-EQUIV="Content-Type" CONTENT="text/html; CHARSET=' + charset + '">');
documento.writeln ("<META name='generator' content='QuizFaber " + qmakeVers + "'>");
documento.writeln ('<link rel="stylesheet" type="text/css" href="' + filename + '.css">');
if (closeHead == 1) 
{
documento.writeln ('</HEAD>');
documento.writeln ('<BODY>');
documento.writeln ('<form class="hidden_style"><input type="hidden" id="hidden_url" value="' + url + '"></form>');
}
return myNewDoc;
}
function RepeatQuiz() 
{
repeatwin = ManageDialog(CreateDialog('mydlg1', filename + '_dlg1.' + fileExtension,270,100));
}
function AskMeName()
{
userName = window.prompt("Insert your name :","");
if ((userName=="")||(userName==null)) {
userName = "unknown";
}
identityName = userName;
userName = userName + ',' + "Student name="+userName;
}
function AskMeKeyword(word,digest)
{
if (word=='') {
keyword = window.prompt("Insert the keyword:","");
if (keyword==null) {
PrintWrongKeyword();
return false;
}
else if (digest!=hex_md5(keyword)) {
PrintWrongKeyword();
return false;
}
}
else {
keyword = word;
}
setTempCookie("qmake.pwd",keyword); 
return true;
}
function DoneBefore()
{
window.alert("Hey! You have already answered the question");
}
function IncompletedQuest(msgType) 
{
if (msgType == 1)
window.alert("The answer is incompleted. Please, choose at least one answer");
else if (msgType == 2)
window.alert("The answer is incompleted. Please, choose all the items");
}
function Retire()
{
if (window.confirm("Are you sure?"))
{
ManageRetire();
}
}
function PrintStatusBar()
{
var i;
var msg;
if (nr==questions)
return;
if (silent==1) {
window.status="to be answered: "+nr+" questions.";
return;
}
msg="on "+(questions-nr)+" questions, ";
if (nc>1) msg+=nc+" right and ";
if (nc==1) msg+=" only one exact and ";
if (nc==0) msg+=" nothing exact and ";
if (ns>1) msg+=ns+" wrong.";
if (ns==1) msg+=" only one wrong.";
if (ns==0) msg+=" nothing wrong.";
msg+=" You must answer to ";
if (nr>1) msg+=nr+" questions.";
else msg+=" one question.";
window.status=msg;
}
function checkRisposta(checkBox,risp,n)
{
if ( ((checkBox.checked==true) && (isRightAns(n,risp)==1)) ||
((checkBox.checked==false) && (isRightAns(n,risp)==0)) )
return 1;
return 0;
}
function checkRispostaBooleana(radioBox,risp,n)
{
if ( ((radioBox[0].checked==true) && (risp[n]==1)) ||
((radioBox[1].checked==true) && (risp[n]==0)) )
return 1;
return 0;
}
function checkTrueOrFalse(radioBox)
{
if ( (radioBox[0].checked==false) &&
(radioBox[1].checked==false))
return 0;
return 1;
}
function isRightAns(nAns,risp)
{
var i;
for (i=0; i<risp.length; i++)
if (risp[i]==nAns)
return 1;
return 0;
}
function GetNRepeat() {
if (frameEnabled == 0) {
var num = getCookie("qmake.nRepeat");
if (num) {
n_repeat = num;
}
else {
n_repeat = 0;
}
}
return n_repeat;
}
function SetNRepeat(num) {
if (frameEnabled == 0) {
setCookie("qmake.nRepeat", "" + num, maxtime);
}
n_repeat = num;
}
function IncreaseNRepeat() {
var num = GetNRepeat();
SetNRepeat(num + 1);
}
function VerifyReload(time,titolo,indice)
{
var valore = getCookie("Qmake"+qmakeVers+"-"+indice);
if (valore==titolo) {
end_test=1;
PrintNoReload();
return 0;
}
setCookie("Qmake"+qmakeVers+"-"+indice,titolo,time);
return 1;
}
function verifyAnswer (risp,nrisp,ri)
{
var i;
for (i=0;i<nrisp;i++) {
if (risp[i]==ri)
return 1;
}
return 0;
}
function GetCopyrightMsg()
{
var msg;
msg = "<P class='copyright_msg'>";
msg += "This quiz was created ";
if (author!='') {
msg += "by <B>"+author+"</B> ";
}
msg += "with <A HREF='http://"+qmakeURL+"' TARGET='qf_website'>"+qmakeProgName+" "+qmakeVers+"</A>";
msg += "</P>";
return msg;
}
function GetWrongKeyWord() {
var msg;
msg = "<P class='unexpected_interruption_title'>Watch out!</P>";
msg += "<P class='unexpected_interruption_text'>The keyword isn't correct<BR /><BR />";
msg += "Unable to continue the quiz<BR />";
msg += "For information, contact the quiz's author<BR /><BR />";
msg += "<INPUT TYPE='BUTTON' VALUE='QUIT' OnClick='top.close()'></P>";
return msg;
}
function GetNoReloadableMsg()
{
var msg;
msg = "<P class='no_reloadable_title'>Watch out!</P>";
msg += "<P class='no_reloadable_text'>Reload of quiz is not allowed<BR /><BR />";
msg += "Unable to start the quiz<BR />";
msg += "For information, contact the quiz's author<BR /><BR />";
msg += "<INPUT TYPE='BUTTON' VALUE='QUIT' OnClick='top.close()'></P>";
return msg;
}
function CenterElementInBrowserWin(objElem) 
{
var halfW = objElem.offsetWidth / 2;
var halfH = objElem.offsetHeight / 2;
objElem.style.top = "50%";
objElem.style.left = "50%";
objElem.style.marginTop = "-" + halfH.toString() + "px";
objElem.style.marginLeft = "-" + halfW.toString() + "px";
}
var tagOkImage;
var tagBoxImage;
var tagArrowImage;
var tagResponseImageOk;
var tagResponseImageKo;
function PrintPageResults(newDoc,copyRightOnPage) 
{
if (GetTypeOfSubstitution(voto) == 4) {
document.location = GetLinkFromMark(voto);
window.status = "";
return;
}
newDoc.close();
PrintOpenHTML(newDoc, "Quiz Result", 1, 0);
PrintReportStyle(newDoc, compressReport);
PrintJSResult(newDoc, html5Enabled, disableRightClickMenu);
newDoc.writeln("</head>");
newDoc.writeln("<body>");
newDoc.writeln("<div class='report_mainPage'>");
if (valutaQuiz == 1) {
if (GetTypeOfSubstitution(voto) <= 2) {
PrintResultsTable(newDoc);
if (showReport == 1)
PrintReport(newDoc, compressReport);
}
else if (GetTypeOfSubstitution(voto) == 3) {
newDoc.writeln("<center><TABLE WIDTH='100%' BORDER=0><TD ALIGN='LEFT'>");
newDoc.writeln(GetRemFromMark(voto));
newDoc.writeln("</TD></TABLE></center>");
}
else {
}
}
else {
newDoc.writeln("<center><TABLE WIDTH='100%' BORDER=0><TD ALIGN='LEFT'>");
newDoc.writeln(finalMess);
newDoc.writeln("</TD></TABLE></center>");
}
PrintLinkBack(newDoc);
if (copyRightOnPage == 1) PrintCopyright();
newDoc.writeln("</div>");
newDoc.writeln("</body></html>");
newDoc.close();
window.status = "";
}
function PrintReportStyle(doc, report_style)
{
doc.writeln("<style>\n");
if (questSlide == 1) {
doc.writeln(".report_mainPage {width:70%;  margin:0 auto; } \n");
}
else {
doc.writeln(".report_mainPage {width:100%;  margin:0 auto; } \n");
}
doc.writeln("</style>\n");
}
function PrintQstReport(qst_index, qst_num, doc, report_style) 
{
var classSuffix = "";
if (report_style == 1) {
classSuffix = "_compress";
}
if (report_style == 0) {
doc.writeln("<SPAN class='quiz_quest_header_class' style='text-transform:uppercase;'>question " + qst_index + "</SPAN><BR />");
doc.writeln("<SPAN class='quiz_quest_class'>" + qstHead[qst_num] + "</SPAN>");
}
else {
doc.writeln("<SPAN class='report_qstId" + classSuffix + "'>" + qst_index + "</SPAN>");
doc.writeln("<SPAN class='report_qstText" + classSuffix + "'>" + qstHead[qst_num] + "</SPAN>");
}
doc.writeln("<BR>");
if (report_style == 0) 
doc.writeln("<SPAN class='quiz_remark_class'>");
else
doc.writeln("<SPAN class='report_qstEvalText" + classSuffix + "'>");
if (valid[qst_num]==1) {
doc.writeln("Correct answer");
}
else if (valid[qst_num]==-1) {
doc.writeln("Wrong answer");
}
else if (valid[qst_num]==2) {
doc.writeln("Question not valuated");
}
else if (valid[qst_num]==3) {
if (typeOfQuest[qst_num]==2) {
doc.writeln("Right sentences "+nScore[qst_num]+" on "+maxScore[qst_num]);
}
else if (typeOfQuest[qst_num]==4) {
doc.writeln("Guess words "+nScore[qst_num]+" on "+maxScore[qst_num]);
}
else if (typeOfQuest[qst_num]==5) {
doc.writeln("Matching "+nScore[qst_num]+" on "+maxScore[qst_num]);
}
}
else if (valid[qst_num]==5) {
doc.write("scores "+nScore[qst_num]);
if (groups[qst_num]==0) {
doc.writeln(" (MARK "+maxScore[qst_num]+")");
}
else if (groups[qst_num]==1) {
doc.writeln("<BR>Scores added with the previous question");
}
else if (groups[qst_num]==2) {
doc.writeln("<BR>MARK (computes from the sum of scores of next questions): "+maxScore[qst_num]);
}
}
doc.writeln("</SPAN>");
doc.writeln("<BR>");
}
function PrintAnsReport(qst_num, ans_num, doc, report_style, lastAns)
{
var isGuess;
var choice,value,data;
var l,m;
var borderStyle;
var classSuffix = "";
if (report_style == 1) {
classSuffix = "_compress";
}
if (typeOfQuest[qst_num]==4)
isGuess = getGuessFillGapN(qst_num,ans_num);
else if (typeOfQuest[qst_num]==5)
isGuess = (getGuessMatchN(qst_num,ans_num)==1);
else if (typeOfQuest[qst_num]==2)
isGuess = getGuessAnsN(qst_num, ans_num); 
else if (typeOfQuest[qst_num] == 101)
isGuess = getGuessPtAnsN(qst_num, ans_num);
else {
if (reportNotation==1) 
isGuess = getGuessAnsN(qst_num,ans_num);
else 
isGuess = (allAnsReport[qst_num][ans_num].valuation + allAnsReport[qst_num][ans_num].data)>0;
}
if (report_style == 0) {
if (isGuess) {
doc.write("<TD WIDTH=30>"+tagResponseImageOk+"</TD>");
}
else {
doc.write("<TD WIDTH=30>"+tagResponseImageKo+"</TD>");
}
}
if (report_style == 0) {
doc.write("<TD WIDTH=30 class='quiz_letter_class' style='text-align:center;'>");
doc.write("<SPAN class='quiz_letter_class'>" + Lettera(ans_num) + "</SPAN>");
doc.write("</TD>");
}
else {
doc.write("<TD WIDTH=10 class='report_letterText" + classSuffix  + "'>");
doc.write("<SPAN class='report_letterText" + classSuffix + "'>");
if (isGuess)
doc.write("<U>"+Lettera(ans_num)+"</U>");
else
doc.write(Lettera(ans_num));
doc.write("</SPAN>");
doc.write("</TD>");
doc.write("<TD><DIV class='vertical-line'/>&nbsp;</TD>");
}
choice = allAnsReport[qst_num][ans_num].choice;
if (typeOfQuest[qst_num] == 2) {
if (report_style == 0)
doc.write("<TD WIDTH=50 class='quiz_answer_class' style='vertical-align:center;'> ");
else
doc.write("<TD WIDTH=50 style='vertical-align:center;'> ");
PrintTrueOrFalse(doc,1);
doc.write(" ");
if (choice==1)
doc.write(tagOkImage+"</TD>");
else
doc.write(tagBoxImage+"</TD>");
if (report_style == 0)
doc.write("<TD WIDTH=50 class='quiz_answer_class' style='vertical-align:center;'> ");
else
doc.write("<TD WIDTH=50 style='vertical-align:center;'> ");
PrintTrueOrFalse(doc,0);
doc.write(" ");
if (choice==0)
doc.write(tagOkImage+"</TD>");
else
doc.write(tagBoxImage+"</TD>");
}
else if (typeOfQuest[qst_num] == 4) {
if (report_style == 0)
doc.write("<TD class='quiz_answer_class'><SPAN class='quiz_answer_class'>");
else
doc.write("<TD><SPAN class='report_ansText" + classSuffix + "'>");
if (getGuessFillGapN(qst_num,ans_num))
doc.write(choice);
else {
doc.write("<S>"+choice+"</S>");
if (report_style == 0)
doc.write(" "+tagArrowImage+" ");
else
doc.write(" -> ");
for (l=0; l<allAnsReport[qst_num][ans_num].valuation.length-1; l++)
doc.write(allAnsReport[qst_num][ans_num].valuation[l]+ " , ");
doc.write(allAnsReport[qst_num][ans_num].valuation[l]);
}
doc.write("</SPAN></TD>");
}
else if (typeOfQuest[qst_num]==5) {
if (report_style == 0)
doc.write("<TD class='quiz_answer_class'><SPAN class='quiz_answer_class'>");
else
doc.write("<TD><SPAN class='report_ansText" + classSuffix + "'>"); 
m = getGuessMatchN(qst_num,ans_num);
if (m==1) {
doc.write(choice[0]+" - "+choice[1]);
}
else if (m==0) {
doc.write(choice[0]+" - ");
doc.write("<S>"+choice[1]+"</S>");
if (report_style == 0)
doc.write(" "+tagArrowImage+" ");
else
doc.write(" -> ");
for (l=0; l<allAnsReport[qst_num][ans_num].valuation.length-1; l++)
doc.write(allAnsReport[qst_num][ans_num].valuation[l]+ " , ");
doc.write(allAnsReport[qst_num][ans_num].valuation[l]);
}
else {
doc.write("<S>"+choice[0]+" - "+choice[1]+"</S>");
}
doc.write("</SPAN></TD>");
}
else if ((typeOfQuest[qst_num] == 1) || (typeOfQuest[qst_num] == 101)) {
if (report_style == 0)
doc.write("<TD WIDTH=30 class='quiz_answer_class' style='text-align:center;'>");
else
doc.write("<TD WIDTH=22 class='report_ansText" + classSuffix + "'>");
if (choice==1)
doc.write(tagOkImage);
else
doc.write(tagBoxImage);
doc.write("</TD>");
var next = ((valid[qst_num] == 5) || (allAnsReport[qst_num][ans_num].answer != "") || (choice == 1) || (remRepAlways == 1))
if (!next) {
doc.writeln("<TD></TD>");
}
else {
if (report_style == 0)
doc.writeln("<TD class='quiz_answer_class'>");
else
doc.write("<TD class='report_ansText" + classSuffix + "' >");
if (valid[qst_num] == 5) {
value = allAnsReport[qst_num][ans_num].valuation;
data = allAnsReport[qst_num][ans_num].data;
doc.write(" (" + value + ") ");
if (data != 0)
doc.write(" (" + data + ") ");
}
if (allAnsReport[qst_num][ans_num].answer != "") {
doc.write(allAnsReport[qst_num][ans_num].answer);
}
if ((choice == 1) || (remRepAlways == 1)) {
doc.write("<I>" + allAnsReport[qst_num][ans_num].remark + "</I>");
}
doc.writeln("</TD>");
}
}
if ((report_style == 1) && (lastAns == 0)) {
doc.write("<TD><div class='vertical-line'/>&nbsp;</TD>");
}
}
function PrintReport(doc,report_style)
{
var i,j,n=1,k;
var half_index,index13,index23,index14,index34,col_width;
var lastAns;
var okImage,boxImage,arrowImage,responseImageOk,responseImageKo;
if (isResultsPageDark==0) {
okImage  = mediaDir+"/ok.gif";
boxImage = mediaDir+"/square.gif";
}
else {
okImage  = mediaDir+"/ok2.gif";
boxImage = mediaDir+"/square2.gif";
}
tagOkImage = "<IMG SRC=" + unescape("%22") + okImage + unescape("%22") + " WIDTH=22 HEIGHT=22 ALIGN='CENTER' ALT='Selected answer' style='vertical-align:middle;'>";
tagBoxImage = "<IMG SRC=" + unescape("%22") + boxImage + unescape("%22") + " WIDTH=22 HEIGHT=22 ALIGN='CENTER' style='vertical-align:middle;'>";
arrowImage = mediaDir+"/arrow.gif";
tagArrowImage = "<IMG SRC=" + unescape("%22") + arrowImage + unescape("%22") + " WIDTH=30 HEIGHT=16 ALIGN='CENTER' style='vertical-align:middle;'>";
responseImageOk = mediaDir+"/smile.gif";
tagResponseImageOk = "<IMG SRC="+unescape("%22")+responseImageOk+unescape("%22")+" ALIGN='CENTER' ALT='Correct answer'>";
responseImageKo = mediaDir+"/ko.gif";
tagResponseImageKo = "<IMG SRC="+unescape("%22")+responseImageKo+unescape("%22")+" ALIGN='CENTER' ALT='Wrong answer'>";
half_index = Math.ceil(questions/2);
index13  = Math.ceil(questions/3);
index23  = Math.ceil(2*questions/3);
index14  = Math.ceil(questions/4);
index34  = Math.ceil(3*questions/4);
col_width  = Math.floor(100 / ncols_report);
doc.writeln("<P><center><TABLE WIDTH='100%' BORDER=0>");
for (k=0;k<questions;k++) {
if ((k==0)&&(ncols_report==1)) {
doc.writeln("<TD>\n");
}
if ((k==0)&&(ncols_report>=2)) {
doc.writeln("<TD WIDTH='"+col_width+"%' VALIGN='top'>\n");
}
if ((k==half_index)&&((ncols_report==2)||(ncols_report==4))) {
doc.writeln("</TD><TD WIDTH='"+col_width+"%' VALIGN='top'>");
}
if (ncols_report==3) {
if ((k==index13)||(k==index23)) {
doc.writeln("</TD><TD WIDTH='33%' VALIGN='top'>");
}
}
if (ncols_report==4) {
if ((k==index14)||(k==index34)) {
doc.writeln("</TD><TD WIDTH='25%' VALIGN='top'>");
}
}
i = ordineDomande[k];
if (valid[i]==4)
continue;
PrintQstReport(n,i,doc,report_style);
n++;
if (report_style == 0)
doc.writeln("<BR>");
if (valid[i]==2) {
doc.write("<P class='quiz_answer_class'>" + allAnsReport[i][0].choice + "</P>");
continue;
}
if (isQuestCustom[i] == 0) 
{
doc.writeln("<TABLE style='border: 1px solid #D3D3D3;'>");
for (j = 0; j < allAnsReport[i].length; j++) {
if (report_style == 0)
doc.write("<TR>");
lastAns = 0;
if (j == allAnsReport[i].length - 1) lastAns = 1;
PrintAnsReport(i, j, doc, report_style, lastAns);
if (report_style == 0)
doc.write("");
}
doc.writeln("</TABLE><BR>");
}
else {
var remark = allAnsReport[i][0].remark;
var answer = allAnsReport[i][0].answer;
if ((remark != "") || (answer != "")) {
doc.writeln("<TABLE style='border: 1px solid #D3D3D3;'><TR><TD>");
if (answer != "") {
doc.write(answer + "<BR>");
}
if (remark != "") {
doc.write("<I>" + remark + "</I>");
}
doc.write("</TD></TR></TABLE><BR>");
}
}
}
doc.writeln("</TD></TABLE></center>");
}
function PrintLinkBar(doc)
{
var count = 0;
if (incl_print_btn) {
doc.writeln("<a href=\"#\" onclick='printWindow()' class='nextQst_btn_class'>PRINT</a>");
count++;
}
if (man_repeat) {
doc.writeln("<a href=\"#\" onclick='OpenPage(\"" + filename + "." + fileExtension + "\")' class='nextQst_btn_class'>REPEAT</a>");
count++;
}
if (topChartFile!='') {
doc.writeln("<a href=\"#\" onClick='OpenPage(\"" + topChartFile + "\")' class='nextQst_btn_class'>Top Chart</a>");
count++;
}
if (incl_close_btn) {
doc.writeln("<a href=\"#\" onclick='top.close()' class='nextQst_btn_class'>QUIT</a>");
count++;
}
}
function PrintLinkBack(doc)
{
if (incl_linkback || incl_print_btn || man_repeat || (topChartFile!='') || incl_close_btn) {
doc.writeln("<center><TABLE  WIDTH='100%' BORDER=0'><TR>\n");
doc.writeln("<TD ALIGN='LEFT'>");
if (incl_linkback)
PrintATagLinkBack(doc);
doc.writeln("</TD>");
doc.writeln("<TD ALIGN='RIGHT'>\n");
PrintLinkBar(doc);
doc.writeln("</TD></TR></TABLE></center><BR>\n");
}
}
function PrintFrame(doc,titolo,msg) {
PrintOpenHTML(doc, titolo, 1, 1);
doc.writeln (msg);
doc.writeln ("</body></html>");
doc.close();
}
function PrintJSResult(doc, html5Enabled, disableRightClickMenu)
{
doc.writeln("<script language='javascript'>\n");
doc.writeln("function printWindow(){\n");
doc.writeln("   window.print();\n");
doc.writeln("}\n");
doc.writeln("function OpenPage(filename){\n"); 
doc.writeln("  if (window.top!=window.self) { window.top.location=filename; } else { window.location=filename; }");
doc.writeln("}\n");
if (html5Enabled && disableRightClickMenu)  {
doc.writeln("document.addEventListener(\"contextmenu\", function(e){ e.preventDefault();}, false);\n");
}
doc.writeln("</script>\n");
}
function GetVoto(mark)
{
var tipo;
var str="";
tipo = GetTypeOfSubstitution(mark);
if (tipo == 2) {
return GetRemFromMark(voto);
}
else {
if (markPercentage==0) {
str += ""+voto+"/"+maxvoto;
}
else {
str += ""+voto+"/"+maxvoto+" ( "+Math.floor(voto*100/maxvoto)+"% )";
}
if (tipo == 1) {
str += " - "+GetRemFromMark(voto);
}
return str;
}
}
function getHTMLResultBox(feedback, title, bodyMsg, n)
{
var msg;
var icoImage;
var nomeIco = checkIcon;
var titleClass = "question_feedback_neutral_title";
if (feedback == 1) {
nomeIco = okIcon;
titleClass = "question_feedback_ok_title";
}
else if (feedback == -1) {
nomeIco = koIcon;
titleClass = "question_feedback_ko_title";
}
else if (feedback == 0) {
nomeIco = warnIcon;
titleClass = "question_feedback_partially_ok_title";
}
icoImage = mediaDir+"/"+nomeIco;
msg = "<TABLE WIDTH='100%' CELLSPACING=4 CELLPADDING=0 BORDER=0><TR>";
msg += "<TD ALIGN='LEFT' WIDTH='50px'><IMG SRC='" + icoImage + "' ALIGN='MIDDLE'></TD>";
msg += "<TD ALIGN='CENTER'><SPAN class='" + titleClass + "'>" + title + "</SPAN></TD>";
msg += "</TR></TABLE><HR>";
msg += "<SPAN class='qst_feedback_class'>";
if (qstRem[n] != "") {
msg += qstRem[n] + "<HR>";
}
if (bodyMsg != "") {
msg += bodyMsg + "<HR>";
}
msg += "</SPAN>";
msg += "<INPUT TYPE='BUTTON' VALUE='OK' class='question_feedback_botton' ";
if (resultBoxKind == 0) {
msg += "onClick='parent.hideWindow(" + n + ")'";
}
else {
msg += "onClick='self.close()'";
}
msg += ">";
return msg;
}
function getRispostaSelezionata(n, m) {
return getHTMLResultBox(-2, "Selected answer", "", n);
}
function getBooleanAnswer(n,m)
{
var title, msg = "";
var feedback = 0;
if (nScore[n] == getNumAns(n)) {
feedback = 1;
}
else if (nScore[n] == 0) {
feedback = -1;
}
else {
feedback = 0;
}
title = "Right Answers " + nScore[n] + " / " + getNumAns(n);
if (nScore[n]<getNumAns(n))
msg = "Wrong Answers : " + getListOfMistake(n);
return getHTMLResultBox(feedback,title,msg,n);
}
function getRightAnswer(n,m,explan)
{
var i,msg="";
for (i=0;i<explan.length; i++) {
if (explan[i]!="") {
msg+=explan[i] + "<BR>";
}
}
return getHTMLResultBox(1,"Good ! Right answer",msg,n);
}
function getWrongAnswer(n,m,explan)
{
var i,title,msg="";
if (isQuestCustom[n] == 0) {
title = "Wrong!<BR>The correct answer was " + getListOfRightAns(n);
}
else {
title = "Wrong!";
}
for (i=0;i<explan.length; i++) {
if (explan[i]!="") {
msg+=explan[i]+"<BR>";
}
}
return getHTMLResultBox(-1,title,msg,n);
}
function getQuestionScore(n,m)
{
var i,title,msg="";
var feedback = 0;
if (maxScore[n] == maxvoto) {
feedback = 1;
}
else if (maxScore[n] == minvoto) {
feedback = -1;
}
else {
feedback = 0;
}
title = "Score " + nScore[n];
if (groups[n]==0)
title += " / MARK " + maxScore[n];
if (getGuessAns(n)<getNumAns(n))
msg = "The correct answer was " + getListOfRightAns(n);
return getHTMLResultBox(feedback,title,msg,n);
}
function PrintAnswer(n,m)
{
var i,count;
var explan = new initListOfRemark(n);
var layer;
var table;
layer = frames.quiz_main.document.getElementById("hideTxt"+n); 
table = frames.quiz_main.document.getElementById("hideAns"+n);   
/*}
else {
layer = frames.quiz_main.document.getElementById("hideTxt");
table = frames.quiz_main.document.getElementById("hideAns");
}*/
if (silent==1) {
if (questSlide==0) {
ShowResultBox(getRispostaSelezionata(n,m),layer,table);
}
}
else {
if (valid[n]==1) {
ShowResultBox(getRightAnswer(n,m,explan),layer,table);
PlaySoundFile(okSound);
}
else {
ShowResultBox(getWrongAnswer(n,m,explan),layer,table);
PlaySoundFile(errSound);
}
}
end_test = CountAnswers();
PrintStatusBar();
PrintBottomFrame();
if (end_test==1) {
window.status = "";
window.alert("You have answered all of the questions");
EndQuiz();
}
return end_test;
}
function PrintOpenAnswer(n) {
end_test = CountAnswers();
PrintStatusBar();
PrintBottomFrame();
if (end_test==1) {
window.status = "";
window.alert("You have answered all of the questions");
EndQuiz();
}
return end_test;
}
function PrintBooleanAnswer(n,m)
{
var i,count;
var layer;
var table;
layer = frames.quiz_main.document.getElementById("hideTxt"+n); 
table = frames.quiz_main.document.getElementById("hideAns"+n); 
/*}
else {
layer = frames.quiz_main.document.getElementById("hideTxt");
table = frames.quiz_main.document.getElementById("hideAns");
}*/
if (silent==0) {
ShowResultBox(getBooleanAnswer(n,m),layer,table);
PlaySoundBooleanAns(n);
}
else {
if (questSlide==0) {
ShowResultBox(getRispostaSelezionata(n,m),layer,table);
}
}
end_test = CountAnswers();
PrintStatusBar();
PrintBottomFrame();
if (end_test==1) {
window.status = "";
window.alert("You have answered all of the questions");
EndQuiz();
}
return end_test;
}
function PrintQuestionScore(n,m)
{
var i,count;
var layer;
var table;
layer = frames.quiz_main.document.getElementById("hideTxt"+n); 
table = frames.quiz_main.document.getElementById("hideAns"+n); 
/*}
else {
layer = frames.quiz_main.document.getElementById("hideTxt");
table = frames.quiz_main.document.getElementById("hideAns"); 
}*/
if (silent==0) {
ShowResultBox(getQuestionScore(n,m),layer,table);
PlaySoundWithScore(maxScore[n]);
}
else {
if (questSlide==0) {
ShowResultBox(getRispostaSelezionata(n,m),layer,table);
}
}
end_test = CountAnswers();
PrintStatusBar();
PrintBottomFrame();
if (end_test==1) {
window.status = "";
window.alert("You have answered all of the questions");
EndQuiz();
}
return end_test;
}
function ShowResultBox (htmlTag,layer,table)
{
if (resultBoxKind==0) {
layer.innerHTML = htmlTag;
table.className = 'cardShow';
if (questSlide == 1) {
CenterElementInBrowserWin(table);
}
}
else {
if (silent==0) {
resultWin = window.open('mio.htm','resWin','scrollbars=yes,menubar=no,status=no,location=no,toolbar=no,width=432,height=150');
var hideTxtObj = resultWin.document.getElementById("hideTxt");
SetInnerText(hideTxtObj,htmlTag);
}
}
}
function hideWindow(n) {
var checkObj = frames.quiz_main.document.getElementById("check" + n);
checkObj.className = 'checkShow';
var hideAnsObj = frames.quiz_main.document.getElementById("hideAns" + n);
hideAnsObj.className = 'cardHide';
/*
if (questSlide==0) {
var hideAnsObj = frames.quiz_main.document.getElementById("hideAns"+n);
hideAnsObj.className='cardHide';
}
else {
var hideAnsObj = frames.quiz_main.document.getElementById("hideAns");
hideAnsObj.className='cardHide';
}*/
}
function PrintResults() 
{
PrintPageResults(frames.quiz_main.document, 0);
PrintCopyright();
}
function PrintBottomFrame()
{
if (silent==0) {
var nRightObj = frames.quiz_status.document.getElementById("nRight");
var nWrongObj = frames.quiz_status.document.getElementById("nWrong");
SetInnerText(nRightObj,nc);
SetInnerText(nWrongObj,ns);   
}
var nToDoObj = frames.quiz_status.document.getElementById("nToDo");
SetInnerText(nToDoObj,nr);
}
function PrintWrongKeyword() 
{
PrintOpenHTML(frames.quiz_main.document, "", 1, 1);
frames.quiz_main.document.writeln(GetWrongKeyWord());
frames.quiz_main.document.writeln ("</body></html>");
frames.quiz_main.document.close();
PrintCopyright();
}
function PrintNoReload() 
{
PrintOpenHTML(frames.quiz_main.document, "", 1, 1);
frames.quiz_main.document.writeln(GetNoReloadableMsg());
frames.quiz_main.document.writeln ("</body></html>");
frames.quiz_main.document.close();
PrintCopyright();
}
function PrintCopyright() 
{
PrintOpenHTML(frames.quiz_status.document,"Info",1,0);
frames.quiz_status.document.writeln("<STYLE>");
frames.quiz_status.document.writeln("<!--");
frames.quiz_status.document.writeln("BODY { margin-top:5px; margin-left:5px }");
frames.quiz_status.document.writeln("-->");
frames.quiz_status.document.writeln("</STYLE>");
frames.quiz_status.document.writeln ("</head>");
frames.quiz_status.document.writeln ("<body bgcolor ='#C0C0C0'>");
if (printCpRg==1) {
frames.quiz_status.document.writeln(GetCopyrightMsg());   
}
frames.quiz_status.document.writeln ("</body></html>");
frames.quiz_status.document.close();
}
function AskPrintQuiz() {
var i;
if (window.confirm("Print quiz ?")) {
if (questSlide==0) {
if (confirmEachQst==0) {
var verifyButtonObj = frames.quiz_main.document.getElementById("verifyButtonId");
verifyButtonObj.className="okButtonHidden";
}
else if (questions-invisibleQuests>=1) {
for (i=0; i<questions-invisibleQuests; i++) {
var okButtonObj = frames.quiz_main.document.getElementById("okButtonId"+i);
okButtonObj.className="okButtonHidden";
if (silent==1) {
var hideAnsObj = frames.quiz_main.document.getElementById("hideAns"+i);
hideAnsObj.className="cardHide";
var checkObj = frames.quiz_main.document.getElementById("check"+i);
checkObj.className="checkHide";
}
}
}
else {
var okButtonObj = frames.quiz_main.document.getElementById("okButtonId");
okButtonObj.className="okButtonHidden";
if (silent == 1) {
var hideAnsObj = frames.quiz_main.document.getElementById("hideAns" + i);
hideAnsObj.className = "cardHide";
var checkObj = frames.quiz_main.document.getElementById("check" + i);
checkObj.className = "checkHide";
}
/*
if (silent==1) {
var hideAnsObj = frames.quiz_main.document.getElementById("hideAns");
hideAnsObj.className="cardHide";
var checkObj = frames.quiz_main.document.getElementById("check");
checkObj.className="checkHide";        
}*/
}
}
frames.quiz_main.print();
window.alert("QUIT PRINT");
}
}
function ShowReviewButton()
{
if ((dhtmlEnabled == 1) && (reviewQuiz == 1))
{
var resultBtn = frames.quiz_main.document.getElementById("result_btn_div");
if (resultBtn != null) resultBtn.style.visibility = "visible";
if (quizRetire == 1) {
var retireBtn = frames.quiz_main.document.getElementById("retire_btn_div");
if (retireBtn != null) retireBtn.style.visibility = "hidden";
}
}
}
function SetClock(timeStr)
{
var clockObj = frames.quiz_status.document.getElementById("clock");
SetInnerText(clockObj,timeStr);
}
function PlaySoundFile(soundFile) {
PrintOpenHTML(frames.quiz_hidden.document,"",0,1);
frames.quiz_hidden.document.writeln ("<EMBED SRC='"+soundFile+"' AUTOSTART=TRUE HIDDEN=TRUE>");
frames.quiz_hidden.document.writeln ("</body></html>");
frames.quiz_hidden.document.close();
}
function PlaySoundBooleanAns(n)
{
if (nScore[n]==maxScore[n])
PlaySoundFile(okSound);
else if (nScore[n]==0)
PlaySoundFile(errSound);
else
PlaySoundFile(warnSound);
}
function PlaySoundWithScore(voto)
{
if (voto==maxvoto)
PlaySoundFile(okSound);
else if (voto==minvoto)
PlaySoundFile(errSound);
else
PlaySoundFile(warnSound);
}
var lastLayer = null;
function showTooltip (thisLayer) {
var toolTipObj = frames.quiz_main.document.getElementById(thisLayer);
toolTipObj.className = "tooltipShow";
}
function clearTooltip (thisLayer) {
if (lastLayer!=null)
deleteTooltip ();
lastLayer = thisLayer;
setTimeout(deleteTooltip,1000);
}
function deleteTooltip () {
if (lastLayer != null) {
var toolTipObj = frames.quiz_main.document.getElementById(lastLayer);
toolTipObj.className  = "tooltipHide";   
}
lastLayer = null;
}
function completeInitValuate() {
 if (frames.quiz_main.currPage==0) {
   if (valid[0]==0) {
     allAnsReport[0] = new frames.quiz_main.initValuate1();
     doValuate(0,frames.quiz_main.document.domanda.score1,frames.quiz_main.document.domanda.risposta1);
     StoreAnswer(0);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q2.htm" }
 if (frames.quiz_main.currPage==1) {
   if (valid[1]==0) {
     allAnsReport[1] = new frames.quiz_main.initValuate2();
     doValuate(1,frames.quiz_main.document.domanda.score2,frames.quiz_main.document.domanda.risposta2);
     StoreAnswer(1);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q3.htm" }
 if (frames.quiz_main.currPage==2) {
   if (valid[2]==0) {
     allAnsReport[2] = new frames.quiz_main.initValuate3();
     doValuate(2,frames.quiz_main.document.domanda.score3,frames.quiz_main.document.domanda.risposta3);
     StoreAnswer(2);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q4.htm" }
 if (frames.quiz_main.currPage==3) {
   if (valid[3]==0) {
     allAnsReport[3] = new frames.quiz_main.initValuate4();
     doValuate(3,frames.quiz_main.document.domanda.score4,frames.quiz_main.document.domanda.risposta4);
     StoreAnswer(3);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q5.htm" }
 if (frames.quiz_main.currPage==4) {
   if (valid[4]==0) {
     allAnsReport[4] = new frames.quiz_main.initValuate5();
     doValuate(4,frames.quiz_main.document.domanda.score5,frames.quiz_main.document.domanda.risposta5);
     StoreAnswer(4);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q6.htm" }
 if (frames.quiz_main.currPage==5) {
   if (valid[5]==0) {
     allAnsReport[5] = new frames.quiz_main.initValuate6();
     doValuate(5,frames.quiz_main.document.domanda.score6,frames.quiz_main.document.domanda.risposta6);
     StoreAnswer(5);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q7.htm" }
 if (frames.quiz_main.currPage==6) {
   if (valid[6]==0) {
     allAnsReport[6] = new frames.quiz_main.initValuate7();
     doValuate(6,frames.quiz_main.document.domanda.score7,frames.quiz_main.document.domanda.risposta7);
     StoreAnswer(6);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q8.htm" }
 if (frames.quiz_main.currPage==7) {
   if (valid[7]==0) {
     allAnsReport[7] = new frames.quiz_main.initValuate8();
     doValuate(7,frames.quiz_main.document.domanda.score8,frames.quiz_main.document.domanda.risposta8);
     StoreAnswer(7);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q9.htm" }
 if (frames.quiz_main.currPage==8) {
   if (valid[8]==0) {
     allAnsReport[8] = new frames.quiz_main.initValuate9();
     doValuate(8,frames.quiz_main.document.domanda.score9,frames.quiz_main.document.domanda.risposta9);
     StoreAnswer(8);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q10.htm" }
 if (frames.quiz_main.currPage==9) {
   if (valid[9]==0) {
     allAnsReport[9] = new frames.quiz_main.initValuate10();
     doValuate(9,frames.quiz_main.document.domanda.score10,frames.quiz_main.document.domanda.risposta10);
     StoreAnswer(9);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q11.htm" }
 if (frames.quiz_main.currPage==10) {
   if (valid[10]==0) {
     allAnsReport[10] = new frames.quiz_main.initValuate11();
     doValuate(10,frames.quiz_main.document.domanda.score11,frames.quiz_main.document.domanda.risposta11);
     StoreAnswer(10);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q12.htm" }
 if (frames.quiz_main.currPage==11) {
   if (valid[11]==0) {
     allAnsReport[11] = new frames.quiz_main.initValuate12();
     doValuate(11,frames.quiz_main.document.domanda.score12,frames.quiz_main.document.domanda.risposta12);
     StoreAnswer(11);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q13.htm" }
 if (frames.quiz_main.currPage==12) {
   if (valid[12]==0) {
     allAnsReport[12] = new frames.quiz_main.initValuate13();
     doValuate(12,frames.quiz_main.document.domanda.score13,frames.quiz_main.document.domanda.risposta13);
     StoreAnswer(12);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q14.htm" }
 if (frames.quiz_main.currPage==13) {
   if (valid[13]==0) {
     allAnsReport[13] = new frames.quiz_main.initValuate14();
     doValuate(13,frames.quiz_main.document.domanda.score14,frames.quiz_main.document.domanda.risposta14);
     StoreAnswer(13);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q15.htm" }
 if (frames.quiz_main.currPage==14) {
   if (valid[14]==0) {
     allAnsReport[14] = new frames.quiz_main.initValuate15();
     doValuate(14,frames.quiz_main.document.domanda.score15,frames.quiz_main.document.domanda.risposta15);
     StoreAnswer(14);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q16.htm" }
 if (frames.quiz_main.currPage==15) {
   if (valid[15]==0) {
     allAnsReport[15] = new frames.quiz_main.initValuate16();
     doValuate(15,frames.quiz_main.document.domanda.score16,frames.quiz_main.document.domanda.risposta16);
     StoreAnswer(15);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q17.htm" }
 if (frames.quiz_main.currPage==16) {
   if (valid[16]==0) {
     allAnsReport[16] = new frames.quiz_main.initValuate17();
     doValuate(16,frames.quiz_main.document.domanda.score17,frames.quiz_main.document.domanda.risposta17);
     StoreAnswer(16);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q18.htm" }
 if (frames.quiz_main.currPage==17) {
   if (valid[17]==0) {
     allAnsReport[17] = new frames.quiz_main.initValuate18();
     doValuate(17,frames.quiz_main.document.domanda.score18,frames.quiz_main.document.domanda.risposta18);
     StoreAnswer(17);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q19.htm" }
 if (frames.quiz_main.currPage==18) {
   if (valid[18]==0) {
     allAnsReport[18] = new frames.quiz_main.initValuate19();
     doValuate(18,frames.quiz_main.document.domanda.score19,frames.quiz_main.document.domanda.risposta19);
     StoreAnswer(18);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q20.htm" }
 if (frames.quiz_main.currPage==19) {
   if (valid[19]==0) {
     allAnsReport[19] = new frames.quiz_main.initValuate20();
     doValuate(19,frames.quiz_main.document.domanda.score20,frames.quiz_main.document.domanda.risposta20);
     StoreAnswer(19);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q21.htm" }
 if (frames.quiz_main.currPage==20) {
   if (valid[20]==0) {
     allAnsReport[20] = new frames.quiz_main.initValuate21();
     doValuate(20,frames.quiz_main.document.domanda.score21,frames.quiz_main.document.domanda.risposta21);
     StoreAnswer(20);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q22.htm" }
 if (frames.quiz_main.currPage==21) {
   if (valid[21]==0) {
     allAnsReport[21] = new frames.quiz_main.initValuate22();
     doValuate(21,frames.quiz_main.document.domanda.score22,frames.quiz_main.document.domanda.risposta22);
     StoreAnswer(21);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q23.htm" }
 if (frames.quiz_main.currPage==22) {
   if (valid[22]==0) {
     allAnsReport[22] = new frames.quiz_main.initValuate23();
     doValuate(22,frames.quiz_main.document.domanda.score23,frames.quiz_main.document.domanda.risposta23);
     StoreAnswer(22);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q24.htm" }
 if (frames.quiz_main.currPage==23) {
   if (valid[23]==0) {
     allAnsReport[23] = new frames.quiz_main.initValuate24();
     doValuate(23,frames.quiz_main.document.domanda.score24,frames.quiz_main.document.domanda.risposta24);
     StoreAnswer(23);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q25.htm" }
 if (frames.quiz_main.currPage==24) {
   if (valid[24]==0) {
     allAnsReport[24] = new frames.quiz_main.initValuate25();
     doValuate(24,frames.quiz_main.document.domanda.score25,frames.quiz_main.document.domanda.risposta25);
     StoreAnswer(24);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q26.htm" }
 if (frames.quiz_main.currPage==25) {
   if (valid[25]==0) {
     allAnsReport[25] = new frames.quiz_main.initValuate26();
     doValuate(25,frames.quiz_main.document.domanda.score26,frames.quiz_main.document.domanda.risposta26);
     StoreAnswer(25);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q27.htm" }
 if (frames.quiz_main.currPage==26) {
   if (valid[26]==0) {
     allAnsReport[26] = new frames.quiz_main.initValuate27();
     doValuate(26,frames.quiz_main.document.domanda.score27,frames.quiz_main.document.domanda.risposta27);
     StoreAnswer(26);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q28.htm" }
 if (frames.quiz_main.currPage==27) {
   if (valid[27]==0) {
     allAnsReport[27] = new frames.quiz_main.initValuate28();
     doValuate(27,frames.quiz_main.document.domanda.score28,frames.quiz_main.document.domanda.risposta28);
     StoreAnswer(27);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q29.htm" }
 if (frames.quiz_main.currPage==28) {
   if (valid[28]==0) {
     allAnsReport[28] = new frames.quiz_main.initValuate29();
     doValuate(28,frames.quiz_main.document.domanda.score29,frames.quiz_main.document.domanda.risposta29);
     StoreAnswer(28);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q30.htm" }
 if (frames.quiz_main.currPage==29) {
   if (valid[29]==0) {
     allAnsReport[29] = new frames.quiz_main.initValuate30();
     doValuate(29,frames.quiz_main.document.domanda.score30,frames.quiz_main.document.domanda.risposta30);
     StoreAnswer(29);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q31.htm" }
 if (frames.quiz_main.currPage==30) {
   if (valid[30]==0) {
     allAnsReport[30] = new frames.quiz_main.initValuate31();
     doValuate(30,frames.quiz_main.document.domanda.score31,frames.quiz_main.document.domanda.risposta31);
     StoreAnswer(30);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q32.htm" }
 if (frames.quiz_main.currPage==31) {
   if (valid[31]==0) {
     allAnsReport[31] = new frames.quiz_main.initValuate32();
     doValuate(31,frames.quiz_main.document.domanda.score32,frames.quiz_main.document.domanda.risposta32);
     StoreAnswer(31);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q33.htm" }
 if (frames.quiz_main.currPage==32) {
   if (valid[32]==0) {
     allAnsReport[32] = new frames.quiz_main.initValuate33();
     doValuate(32,frames.quiz_main.document.domanda.score33,frames.quiz_main.document.domanda.risposta33);
     StoreAnswer(32);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q34.htm" }
 if (frames.quiz_main.currPage==33) {
   if (valid[33]==0) {
     allAnsReport[33] = new frames.quiz_main.initValuate34();
     doValuate(33,frames.quiz_main.document.domanda.score34,frames.quiz_main.document.domanda.risposta34);
     StoreAnswer(33);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q35.htm" }
 if (frames.quiz_main.currPage==34) {
   if (valid[34]==0) {
     allAnsReport[34] = new frames.quiz_main.initValuate35();
     doValuate(34,frames.quiz_main.document.domanda.score35,frames.quiz_main.document.domanda.risposta35);
     StoreAnswer(34);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q36.htm" }
 if (frames.quiz_main.currPage==35) {
   if (valid[35]==0) {
     allAnsReport[35] = new frames.quiz_main.initValuate36();
     doValuate(35,frames.quiz_main.document.domanda.score36,frames.quiz_main.document.domanda.risposta36);
     StoreAnswer(35);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q37.htm" }
 if (frames.quiz_main.currPage==36) {
   if (valid[36]==0) {
     allAnsReport[36] = new frames.quiz_main.initValuate37();
     doValuate(36,frames.quiz_main.document.domanda.score37,frames.quiz_main.document.domanda.risposta37);
     StoreAnswer(36);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q38.htm" }
 if (frames.quiz_main.currPage==37) {
   if (valid[37]==0) {
     allAnsReport[37] = new frames.quiz_main.initValuate38();
     doValuate(37,frames.quiz_main.document.domanda.score38,frames.quiz_main.document.domanda.risposta38);
     StoreAnswer(37);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q39.htm" }
 if (frames.quiz_main.currPage==38) {
   if (valid[38]==0) {
     allAnsReport[38] = new frames.quiz_main.initValuate39();
     doValuate(38,frames.quiz_main.document.domanda.score39,frames.quiz_main.document.domanda.risposta39);
     StoreAnswer(38);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q40.htm" }
 if (frames.quiz_main.currPage==39) {
   if (valid[39]==0) {
     allAnsReport[39] = new frames.quiz_main.initValuate40();
     doValuate(39,frames.quiz_main.document.domanda.score40,frames.quiz_main.document.domanda.risposta40);
     StoreAnswer(39);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q41.htm" }
 if (frames.quiz_main.currPage==40) {
   if (valid[40]==0) {
     allAnsReport[40] = new frames.quiz_main.initValuate41();
     doValuate(40,frames.quiz_main.document.domanda.score41,frames.quiz_main.document.domanda.risposta41);
     StoreAnswer(40);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q42.htm" }
 if (frames.quiz_main.currPage==41) {
   if (valid[41]==0) {
     allAnsReport[41] = new frames.quiz_main.initValuate42();
     doValuate(41,frames.quiz_main.document.domanda.score42,frames.quiz_main.document.domanda.risposta42);
     StoreAnswer(41);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q43.htm" }
 if (frames.quiz_main.currPage==42) {
   if (valid[42]==0) {
     allAnsReport[42] = new frames.quiz_main.initValuate43();
     doValuate(42,frames.quiz_main.document.domanda.score43,frames.quiz_main.document.domanda.risposta43);
     StoreAnswer(42);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q44.htm" }
 if (frames.quiz_main.currPage==43) {
   if (valid[43]==0) {
     allAnsReport[43] = new frames.quiz_main.initValuate44();
     doValuate(43,frames.quiz_main.document.domanda.score44,frames.quiz_main.document.domanda.risposta44);
     StoreAnswer(43);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q45.htm" }
 if (frames.quiz_main.currPage==44) {
   if (valid[44]==0) {
     allAnsReport[44] = new frames.quiz_main.initValuate45();
     doValuate(44,frames.quiz_main.document.domanda.score45,frames.quiz_main.document.domanda.risposta45);
     StoreAnswer(44);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q46.htm" }
 if (frames.quiz_main.currPage==45) {
   if (valid[45]==0) {
     allAnsReport[45] = new frames.quiz_main.initValuate46();
     doValuate(45,frames.quiz_main.document.domanda.score46,frames.quiz_main.document.domanda.risposta46);
     StoreAnswer(45);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q47.htm" }
 if (frames.quiz_main.currPage==46) {
   if (valid[46]==0) {
     allAnsReport[46] = new frames.quiz_main.initValuate47();
     doValuate(46,frames.quiz_main.document.domanda.score47,frames.quiz_main.document.domanda.risposta47);
     StoreAnswer(46);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q48.htm" }
 if (frames.quiz_main.currPage==47) {
   if (valid[47]==0) {
     allAnsReport[47] = new frames.quiz_main.initValuate48();
     doValuate(47,frames.quiz_main.document.domanda.score48,frames.quiz_main.document.domanda.risposta48);
     StoreAnswer(47);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q49.htm" }
 if (frames.quiz_main.currPage==48) {
   if (valid[48]==0) {
     allAnsReport[48] = new frames.quiz_main.initValuate49();
     doValuate(48,frames.quiz_main.document.domanda.score49,frames.quiz_main.document.domanda.risposta49);
     StoreAnswer(48);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q50.htm" }
 if (frames.quiz_main.currPage==49) {
   if (valid[49]==0) {
     allAnsReport[49] = new frames.quiz_main.initValuate50();
     doValuate(49,frames.quiz_main.document.domanda.score50,frames.quiz_main.document.domanda.risposta50);
     StoreAnswer(49);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q51.htm" }
 if (frames.quiz_main.currPage==50) {
   if (valid[50]==0) {
     allAnsReport[50] = new frames.quiz_main.initValuate51();
     doValuate(50,frames.quiz_main.document.domanda.score51,frames.quiz_main.document.domanda.risposta51);
     StoreAnswer(50);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q52.htm" }
 if (frames.quiz_main.currPage==51) {
   if (valid[51]==0) {
     allAnsReport[51] = new frames.quiz_main.initValuate52();
     doValuate(51,frames.quiz_main.document.domanda.score52,frames.quiz_main.document.domanda.risposta52);
     StoreAnswer(51);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q53.htm" }
 if (frames.quiz_main.currPage==52) {
   if (valid[52]==0) {
     allAnsReport[52] = new frames.quiz_main.initValuate53();
     doValuate(52,frames.quiz_main.document.domanda.score53,frames.quiz_main.document.domanda.risposta53);
     StoreAnswer(52);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q54.htm" }
 if (frames.quiz_main.currPage==53) {
   if (valid[53]==0) {
     allAnsReport[53] = new frames.quiz_main.initValuate54();
     doValuate(53,frames.quiz_main.document.domanda.score54,frames.quiz_main.document.domanda.risposta54);
     StoreAnswer(53);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q55.htm" }
 if (frames.quiz_main.currPage==54) {
   if (valid[54]==0) {
     allAnsReport[54] = new frames.quiz_main.initValuate55();
     doValuate(54,frames.quiz_main.document.domanda.score55,frames.quiz_main.document.domanda.risposta55);
     StoreAnswer(54);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q56.htm" }
 if (frames.quiz_main.currPage==55) {
   if (valid[55]==0) {
     allAnsReport[55] = new frames.quiz_main.initValuate56();
     doValuate(55,frames.quiz_main.document.domanda.score56,frames.quiz_main.document.domanda.risposta56);
     StoreAnswer(55);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q57.htm" }
 if (frames.quiz_main.currPage==56) {
   if (valid[56]==0) {
     allAnsReport[56] = new frames.quiz_main.initValuate57();
     doValuate(56,frames.quiz_main.document.domanda.score57,frames.quiz_main.document.domanda.risposta57);
     StoreAnswer(56);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q58.htm" }
 if (frames.quiz_main.currPage==57) {
   if (valid[57]==0) {
     allAnsReport[57] = new frames.quiz_main.initValuate58();
     doValuate(57,frames.quiz_main.document.domanda.score58,frames.quiz_main.document.domanda.risposta58);
     StoreAnswer(57);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q59.htm" }
 if (frames.quiz_main.currPage==58) {
   if (valid[58]==0) {
     allAnsReport[58] = new frames.quiz_main.initValuate59();
     doValuate(58,frames.quiz_main.document.domanda.score59,frames.quiz_main.document.domanda.risposta59);
     StoreAnswer(58);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q60.htm" }
 if (frames.quiz_main.currPage==59) {
   if (valid[59]==0) {
     allAnsReport[59] = new frames.quiz_main.initValuate60();
     doValuate(59,frames.quiz_main.document.domanda.score60,frames.quiz_main.document.domanda.risposta60);
     StoreAnswer(59);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q61.htm" }
 if (frames.quiz_main.currPage==60) {
   if (valid[60]==0) {
     allAnsReport[60] = new frames.quiz_main.initValuate61();
     doValuate(60,frames.quiz_main.document.domanda.score61,frames.quiz_main.document.domanda.risposta61);
     StoreAnswer(60);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q62.htm" }
 if (frames.quiz_main.currPage==61) {
   if (valid[61]==0) {
     allAnsReport[61] = new frames.quiz_main.initValuate62();
     doValuate(61,frames.quiz_main.document.domanda.score62,frames.quiz_main.document.domanda.risposta62);
     StoreAnswer(61);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q63.htm" }
 if (frames.quiz_main.currPage==62) {
   if (valid[62]==0) {
     allAnsReport[62] = new frames.quiz_main.initValuate63();
     doValuate(62,frames.quiz_main.document.domanda.score63,frames.quiz_main.document.domanda.risposta63);
     StoreAnswer(62);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q64.htm" }
 if (frames.quiz_main.currPage==63) {
   if (valid[63]==0) {
     allAnsReport[63] = new frames.quiz_main.initValuate64();
     doValuate(63,frames.quiz_main.document.domanda.score64,frames.quiz_main.document.domanda.risposta64);
     StoreAnswer(63);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q65.htm" }
 if (frames.quiz_main.currPage==64) {
   if (valid[64]==0) {
     allAnsReport[64] = new frames.quiz_main.initValuate65();
     doValuate(64,frames.quiz_main.document.domanda.score65,frames.quiz_main.document.domanda.risposta65);
     StoreAnswer(64);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q66.htm" }
 if (frames.quiz_main.currPage==65) {
   if (valid[65]==0) {
     allAnsReport[65] = new frames.quiz_main.initValuate66();
     doValuate(65,frames.quiz_main.document.domanda.score66,frames.quiz_main.document.domanda.risposta66);
     StoreAnswer(65);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q67.htm" }
 if (frames.quiz_main.currPage==66) {
   if (valid[66]==0) {
     allAnsReport[66] = new frames.quiz_main.initValuate67();
     doValuate(66,frames.quiz_main.document.domanda.score67,frames.quiz_main.document.domanda.risposta67);
     StoreAnswer(66);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q68.htm" }
 if (frames.quiz_main.currPage==67) {
   if (valid[67]==0) {
     allAnsReport[67] = new frames.quiz_main.initValuate68();
     doValuate(67,frames.quiz_main.document.domanda.score68,frames.quiz_main.document.domanda.risposta68);
     StoreAnswer(67);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q69.htm" }
 if (frames.quiz_main.currPage==68) {
   if (valid[68]==0) {
     allAnsReport[68] = new frames.quiz_main.initValuate69();
     doValuate(68,frames.quiz_main.document.domanda.score69,frames.quiz_main.document.domanda.risposta69);
     StoreAnswer(68);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q70.htm" }
 if (frames.quiz_main.currPage==69) {
   if (valid[69]==0) {
     allAnsReport[69] = new frames.quiz_main.initValuate70();
     doValuate(69,frames.quiz_main.document.domanda.score70,frames.quiz_main.document.domanda.risposta70);
     StoreAnswer(69);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q71.htm" }
 if (frames.quiz_main.currPage==70) {
   if (valid[70]==0) {
     allAnsReport[70] = new frames.quiz_main.initValuate71();
     doValuate(70,frames.quiz_main.document.domanda.score71,frames.quiz_main.document.domanda.risposta71);
     StoreAnswer(70);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q72.htm" }
 if (frames.quiz_main.currPage==71) {
   if (valid[71]==0) {
     allAnsReport[71] = new frames.quiz_main.initValuate72();
     doValuate(71,frames.quiz_main.document.domanda.score72,frames.quiz_main.document.domanda.risposta72);
     StoreAnswer(71);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q73.htm" }
 if (frames.quiz_main.currPage==72) {
   if (valid[72]==0) {
     allAnsReport[72] = new frames.quiz_main.initValuate73();
     doValuate(72,frames.quiz_main.document.domanda.score73,frames.quiz_main.document.domanda.risposta73);
     StoreAnswer(72);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q74.htm" }
 if (frames.quiz_main.currPage==73) {
   if (valid[73]==0) {
     allAnsReport[73] = new frames.quiz_main.initValuate74();
     doValuate(73,frames.quiz_main.document.domanda.score74,frames.quiz_main.document.domanda.risposta74);
     StoreAnswer(73);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q75.htm" }
 if (frames.quiz_main.currPage==74) {
   if (valid[74]==0) {
     allAnsReport[74] = new frames.quiz_main.initValuate75();
     doValuate(74,frames.quiz_main.document.domanda.score75,frames.quiz_main.document.domanda.risposta75);
     StoreAnswer(74);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q76.htm" }
 if (frames.quiz_main.currPage==75) {
   if (valid[75]==0) {
     allAnsReport[75] = new frames.quiz_main.initValuate76();
     doValuate(75,frames.quiz_main.document.domanda.score76,frames.quiz_main.document.domanda.risposta76);
     StoreAnswer(75);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q77.htm" }
 if (frames.quiz_main.currPage==76) {
   if (valid[76]==0) {
     allAnsReport[76] = new frames.quiz_main.initValuate77();
     doValuate(76,frames.quiz_main.document.domanda.score77,frames.quiz_main.document.domanda.risposta77);
     StoreAnswer(76);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q78.htm" }
 if (frames.quiz_main.currPage==77) {
   if (valid[77]==0) {
     allAnsReport[77] = new frames.quiz_main.initValuate78();
     doValuate(77,frames.quiz_main.document.domanda.score78,frames.quiz_main.document.domanda.risposta78);
     StoreAnswer(77);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q79.htm" }
 if (frames.quiz_main.currPage==78) {
   if (valid[78]==0) {
     allAnsReport[78] = new frames.quiz_main.initValuate79();
     doValuate(78,frames.quiz_main.document.domanda.score79,frames.quiz_main.document.domanda.risposta79);
     StoreAnswer(78);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q80.htm" }
 if (frames.quiz_main.currPage==79) {
   if (valid[79]==0) {
     allAnsReport[79] = new frames.quiz_main.initValuate80();
     doValuate(79,frames.quiz_main.document.domanda.score80,frames.quiz_main.document.domanda.risposta80);
     StoreAnswer(79);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q81.htm" }
 if (frames.quiz_main.currPage==80) {
   if (valid[80]==0) {
     allAnsReport[80] = new frames.quiz_main.initValuate81();
     doValuate(80,frames.quiz_main.document.domanda.score81,frames.quiz_main.document.domanda.risposta81);
     StoreAnswer(80);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q82.htm" }
 if (frames.quiz_main.currPage==81) {
   if (valid[81]==0) {
     allAnsReport[81] = new frames.quiz_main.initValuate82();
     doValuate(81,frames.quiz_main.document.domanda.score82,frames.quiz_main.document.domanda.risposta82);
     StoreAnswer(81);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q83.htm" }
 if (frames.quiz_main.currPage==82) {
   if (valid[82]==0) {
     allAnsReport[82] = new frames.quiz_main.initValuate83();
     doValuate(82,frames.quiz_main.document.domanda.score83,frames.quiz_main.document.domanda.risposta83);
     StoreAnswer(82);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q84.htm" }
 if (frames.quiz_main.currPage==83) {
   if (valid[83]==0) {
     allAnsReport[83] = new frames.quiz_main.initValuate84();
     doValuate(83,frames.quiz_main.document.domanda.score84,frames.quiz_main.document.domanda.risposta84);
     StoreAnswer(83);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q85.htm" }
 if (frames.quiz_main.currPage==84) {
   if (valid[84]==0) {
     allAnsReport[84] = new frames.quiz_main.initValuate85();
     doValuate(84,frames.quiz_main.document.domanda.score85,frames.quiz_main.document.domanda.risposta85);
     StoreAnswer(84);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q86.htm" }
 if (frames.quiz_main.currPage==85) {
   if (valid[85]==0) {
     allAnsReport[85] = new frames.quiz_main.initValuate86();
     doValuate(85,frames.quiz_main.document.domanda.score86,frames.quiz_main.document.domanda.risposta86);
     StoreAnswer(85);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q87.htm" }
 if (frames.quiz_main.currPage==86) {
   if (valid[86]==0) {
     allAnsReport[86] = new frames.quiz_main.initValuate87();
     doValuate(86,frames.quiz_main.document.domanda.score87,frames.quiz_main.document.domanda.risposta87);
     StoreAnswer(86);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q88.htm" }
 if (frames.quiz_main.currPage==87) {
   if (valid[87]==0) {
     allAnsReport[87] = new frames.quiz_main.initValuate88();
     doValuate(87,frames.quiz_main.document.domanda.score88,frames.quiz_main.document.domanda.risposta88);
     StoreAnswer(87);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q89.htm" }
 if (frames.quiz_main.currPage==88) {
   if (valid[88]==0) {
     allAnsReport[88] = new frames.quiz_main.initValuate89();
     doValuate(88,frames.quiz_main.document.domanda.score89,frames.quiz_main.document.domanda.risposta89);
     StoreAnswer(88);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q90.htm" }
 if (frames.quiz_main.currPage==89) {
   if (valid[89]==0) {
     allAnsReport[89] = new frames.quiz_main.initValuate90();
     doValuate(89,frames.quiz_main.document.domanda.score90,frames.quiz_main.document.domanda.risposta90);
     StoreAnswer(89);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q91.htm" }
 if (frames.quiz_main.currPage==90) {
   if (valid[90]==0) {
     allAnsReport[90] = new frames.quiz_main.initValuate91();
     doValuate(90,frames.quiz_main.document.domanda.score91,frames.quiz_main.document.domanda.risposta91);
     StoreAnswer(90);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q92.htm" }
 if (frames.quiz_main.currPage==91) {
   if (valid[91]==0) {
     allAnsReport[91] = new frames.quiz_main.initValuate92();
     doValuate(91,frames.quiz_main.document.domanda.score92,frames.quiz_main.document.domanda.risposta92);
     StoreAnswer(91);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q93.htm" }
 if (frames.quiz_main.currPage==92) {
   if (valid[92]==0) {
     allAnsReport[92] = new frames.quiz_main.initValuate93();
     doValuate(92,frames.quiz_main.document.domanda.score93,frames.quiz_main.document.domanda.risposta93);
     StoreAnswer(92);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q94.htm" }
 if (frames.quiz_main.currPage==93) {
   if (valid[93]==0) {
     allAnsReport[93] = new frames.quiz_main.initValuate94();
     doValuate(93,frames.quiz_main.document.domanda.score94,frames.quiz_main.document.domanda.risposta94);
     StoreAnswer(93);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q95.htm" }
 if (frames.quiz_main.currPage==94) {
   if (valid[94]==0) {
     allAnsReport[94] = new frames.quiz_main.initValuate95();
     doValuate(94,frames.quiz_main.document.domanda.score95,frames.quiz_main.document.domanda.risposta95);
     StoreAnswer(94);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q96.htm" }
 if (frames.quiz_main.currPage==95) {
   if (valid[95]==0) {
     allAnsReport[95] = new frames.quiz_main.initValuate96();
     doValuate(95,frames.quiz_main.document.domanda.score96,frames.quiz_main.document.domanda.risposta96);
     StoreAnswer(95);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q97.htm" }
 if (frames.quiz_main.currPage==96) {
   if (valid[96]==0) {
     allAnsReport[96] = new frames.quiz_main.initValuate97();
     doValuate(96,frames.quiz_main.document.domanda.score97,frames.quiz_main.document.domanda.risposta97);
     StoreAnswer(96);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q98.htm" }
 if (frames.quiz_main.currPage==97) {
   if (valid[97]==0) {
     allAnsReport[97] = new frames.quiz_main.initValuate98();
     doValuate(97,frames.quiz_main.document.domanda.score98,frames.quiz_main.document.domanda.risposta98);
     StoreAnswer(97);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q99.htm" }
 if (frames.quiz_main.currPage==98) {
   if (valid[98]==0) {
     allAnsReport[98] = new frames.quiz_main.initValuate99();
     doValuate(98,frames.quiz_main.document.domanda.score99,frames.quiz_main.document.domanda.risposta99);
     StoreAnswer(98);    }
   frames.quiz_main.location.href="Rheumatology Doctorate MCQ 1Q100.htm" }
 if (frames.quiz_main.currPage==99) {
   if (valid[99]==0) {
     allAnsReport[99] = new frames.quiz_main.initValuate100();
     doValuate(99,frames.quiz_main.document.domanda.score100,frames.quiz_main.document.domanda.risposta100);
     StoreAnswer(99);    }
   FinalActions();
 }
 CountAnswers();
}

function ConvertPointToMark(n,points) {
return 0;
}


function PrintResultsTable(doc) {
  var deltatime = time - oldtime;
  var percentage;
  doc.writeln("<TABLE class='results_table_class'>");  doc.writeln("<TR class='results_TH_class'><TD COLSPAN='2' class='results_TD_class'>");
  doc.writeln("<SPAN class='result_table_title_class'>Quiz Result - "+quizTitle+"</SPAN>");
  doc.writeln("</TD></TR>");
  doc.writeln("<TR class='results_TH_class'><TD nowrap class='results_TD_class'><SPAN class='result_table_quest_num_class'>&#160;&#160;Number of questions</SPAN></TD>");
  doc.writeln("    <TD class='results_TD_class' nowrap><SPAN class='result_table_quest_num_class'>&#160;&#160;"+(questions-invisibleQuests)+"</SPAN></TD></TR>");
  if (identityName!="") {
  doc.writeln("<TR class='results_TH_class'><TD nowrap class='results_TD_class'><SPAN class='results_table_others_class'>&#160;&#160;Student name</SPAN></TD>");
  doc.writeln("    <TD class='results_TD_class' ><SPAN class='results_table_others_class'>&#160;&#160;"+identityName+"</SPAN></TD></TR>");
  }
  doc.writeln("<TR class='results_TH_class'><TD nowrap class='results_TD_class'><SPAN class='results_table_others_class'>&#160;&#160;Right Answers</SPAN></TD>");
  doc.writeln("    <TD class='results_TD_class' nowrap><SPAN class='results_table_others_class'>&#160;&#160;"+nc+"</SPAN></TD></TR>");
  doc.writeln("<TR class='results_TH_class'><TD nowrap class='results_TD_class'><SPAN class='results_table_others_class'>&#160;&#160;Wrong Answers</SPAN></TD>");
  doc.writeln("    <TD class='results_TD_class' nowrap><SPAN class='results_table_others_class'>&#160;&#160;"+ns+"</SPAN></TD></TR>");
  doc.writeln("<TR class='results_TH_class'><TD nowrap class='results_TD_class'><SPAN class='results_table_others_class'>&#160;&#160;Unmarked questions</SPAN></TD>");
  doc.writeln("    <TD class='results_TD_class' nowrap><SPAN class='results_table_others_class'>&#160;&#160;"+falseQuests+"</SPAN></TD></TR>");
  if (maxtime>0) {
  doc.writeln("<TR class='results_TH_class'><TD nowrap class='results_TD_class'><SPAN class='results_table_others_class'>&#160;&#160;Time elapsed</SPAN></TD>");
  doc.writeln("    <TD class='results_TD_class' nowrap><SPAN class='results_table_others_class'>&#160;&#160;"+getTimeString(deltatime)+"</SPAN></TD></TR>");
  }
  doc.writeln("<TR class='results_TH_class'><TD nowrap class='results_TD_class'><SPAN class='results_table_others_class'>&#160;&#160;Date</SPAN></TD>");
  doc.writeln("    <TD class='results_TD_class' nowrap><SPAN class='results_table_others_class'>&#160;&#160;"+DataToStringa()+"</SPAN></TD></TR>");
  if (computeMarkErr==0) {
  doc.writeln("<TR class='results_TH_class'><TD nowrap class='results_TD_class'><SPAN class='results_table_mark_class'>&#160;&#160;MARK</SPAN></TD>");
  doc.writeln("    <TD class='results_TD_class' nowrap><SPAN class='results_table_mark_class'>&#160;&#160;"+GetVoto(voto)+"</SPAN></TD></TR>");
  } else {
  doc.writeln("<TR class='results_TH_class'><TD nowrap class='results_TD_class'><SPAN class='results_table_mark_class'>&#160;&#160;MARK</SPAN></TD>");
  doc.writeln("    <TD class='results_TD_class' nowrap><SPAN class='results_table_mark_class'>&#160;&#160;No mark</SPAN></TD></TR>");
  }
  doc.writeln("</TABLE>")}

function EndQuiz() {
 completeInitValuate();
}

function FinalActions() {
 voto = ComputeMarks();
 PrintResults();
}
function PrintTrueOrFalse(documento,flag) {
  if (flag==1) documento.write("<FONT class='report_ansText'>T</FONT>");
  else if (flag==0) documento.write("<FONT class='report_ansText'>F</FONT>");
}
function PrintATagLinkBack(documento) {
 return;
}

function init_valid()
{
 for (var i=0;i<questions;i++) {
   valid[i]=0;
   pesi[i]=0;
   nScore[i]=0;
   maxScore[i]=0;
 }
 nc = 0;
 ns = 0;
 nr = questions-0;
 voto = 0;
 computeMarkErr = 0;
 window.status='';
}
function initShortQuestion() {
 qstHead[0]="A T-cell hybridoma";
 qstHead[1]="Which of the following is not used as a direct conjugate to the antibody fo...";
 qstHead[2]="The use of green fluorescent protein in flow cytofluorometry permits measur...";
 qstHead[3]="The functional activity of neutrophils can be assessed by";
 qstHead[4]="The activation of lymphocytes cannot be assessed by";
 qstHead[5]="The TUNEL technique can be employed to measure";
 qstHead[6]="Antibody-secreting cells can be enumerated by";
 qstHead[7]="Introduction of a gene into a cell using calcium phosphate precipitate is t...";
 qstHead[8]="Common approach to generating conditional knockout mice involves";
 qstHead[9]="Which of the following is not used for the precipitation of immune complexes?";
 qstHead[10]="Antigen-specific B-cells can be purified by";
 qstHead[11]="Antigens in tissues can be localized with fluorescent antibodies using";
 qstHead[12]="Which one of the following is a primary lymphoid organ";
 qstHead[13]="When antigen reaches a lymph node in a primed animal";
 qstHead[14]="The cell type involved in the entry of lymphocytes into lymph nodes is";
 qstHead[15]="The VLA molecules are";
 qstHead[16]="On entering a germinal center, the primary B-blasts grow exponentially to f...";
 qstHead[17]="The tingible bodies inside germinal center macrophages are";
 qstHead[18]="The paracortical area of the lymph node comprises mainly";
 qstHead[19]="In a lymph node, the antigen pneumococcus polysaccharide SIII leads to";
 qstHead[20]="Which of the following lymphoid tissues is unencapsulated";
 qstHead[21]="Expression of a CD8 alpha-alpha homodimer is characteristic of";
 qstHead[22]="Which of the following functions are macrophages unable to carry out";
 qstHead[23]="When Langerhans' cells differentiate into fully mature dendritic cells (DCs...";
 qstHead[24]="Lymphocytes";
 qstHead[25]="Follicular dendritic cells";
 qstHead[26]="The spleen is largely involved with the response to antigens which are in the";
 qstHead[27]="The germinal center is an important site of";
 qstHead[28]="Lymphocytes in the lamina propria secrete large amounts of";
 qstHead[29]="The bone marrow is a site of";
 qstHead[30]="The following is characteristic of B- but not T-cells";
 qstHead[31]="When a resting naive T-cell engages its specific MHC/peptide complex displa...";
 qstHead[32]="Proliferation of activated T-cells";
 qstHead[33]="Sos (Son of sevenless)";
 qstHead[34]="Protein tyrosine kinase activity following T-cell stimulation";
 qstHead[35]="The early increase in phospholipase C gamma 1 activity following T-cell sti...";
 qstHead[36]="The nuclear AP-1 site responsible for 90% of IL-2 enhancer activity binds";
 qstHead[37]="In the immunological synapse";
 qstHead[38]="T-cell mutants lacking CD45 cannot transduce signals received through the s...";
 qstHead[39]="Lipopolysaccharide (LPS) from Gram-negative bacteria is";
 qstHead[40]="The carrier T-cell epitope on a thymus-dependent antigen";
 qstHead[41]="T-cell help for antibody production";
 qstHead[42]="Cross-linking of B-cell surface receptors";
 qstHead[43]="Activation of resting B-cells by T-helpers depends directly upon costimulat...";
 qstHead[44]="B-cells as distinct from T-cells";
 qstHead[45]="The T-cell receptor link to MHC/peptide is enhanced by interaction between ...";
 qstHead[46]="The main costimulatory signal for activation of resting T-cells is provided...";
 qstHead[47]="Which one of the following events occurs earliest in T-cell signaling";
 qstHead[48]="Which is the first of the following genes to be upregulated subsequent to T...";
 qstHead[49]="A Cytokine receptor which is a member of the hematopoietin receptor family is";
 qstHead[50]="Cytokines always act";
 qstHead[51]="The alpha beta heterodimeric form of the IL-2 receptor";
 qstHead[52]="IFN-gamma and TNF (TNF alpha) can act synergistically";
 qstHead[53]="Which of the following is characteristically produced by the Th2 CD4 cells ...";
 qstHead[54]="Dendritic cells can be driven from a resting state to an activated state by...";
 qstHead[55]="In the germinal center,  B-cells become memory cells under the influence of";
 qstHead[56]="High affinity B-cell clones in mammals are usually generated by";
 qstHead[57]="Prior to class switching, B-cells express";
 qstHead[58]="The cytokine which is most involved in the class switch to IgE production is";
 qstHead[59]="The first event following the production of CH sterile transcripts by immun...";
 qstHead[60]="The specificity of antibody secreted by a B-cell may not be the same as tha...";
 qstHead[61]="The major long term source of a foreign antigen in the body is";
 qstHead[62]="Effector memory T-cells can be distinguished from the central memory T-cell...";
 qstHead[63]="Cytokines";
 qstHead[64]="Th1 cells secrete";
 qstHead[65]="Which one of the following cytokines can mediate release of acute phase pro...";
 qstHead[66]="Which of the following is not a feature of germinal center B-cells";
 qstHead[67]="Low amounts of antigen";
 qstHead[68]="Memory T-cells";
 qstHead[69]="Activated memory T-cells can be distinguished from naive T-cells on the bas...";
 qstHead[70]="A major factor regulating the adaptive immune response is";
 qstHead[71]="Antigenic competition";
 qstHead[72]="Negative feedback on adaptive B-cell responses is mediated by";
 qstHead[73]="An example of an anti-apoptotic molecule is";
 qstHead[74]="Injection of a mouse with a very high dose of sheep erythrocytes induces";
 qstHead[75]="Suppression of Th2 by Th1 cells may be mediated by";
 qstHead[76]="Cells bearing MHC class I plus peptide are targets for specific";
 qstHead[77]="Natural antibodies";
 qstHead[78]="Antibodies specific for different epitopes on the same antigen";
 qstHead[79]="Regulatory idiotypes on antibodies";
 qstHead[80]="An internal image monoclonal anti-idiotype";
 qstHead[81]="Which of the following is never related to poor MHC-linked immune response";
 qstHead[82]="Relative to males, females";
 qstHead[83]="Immune responses are";
 qstHead[84]="Stimulation of glucocorticoid synthesis by IL-1";
 qstHead[85]="Protein-calorie malnutrition does not affect";
 qstHead[86]="The stress induced by severe exercise can increase susceptibility to infect...";
 qstHead[87]="The level of antigen";
 qstHead[88]="IgG antibodies";
 qstHead[89]="T-cell mediated suppression";
 qstHead[90]="Idiotype–anti–idiotype interactions";
 qstHead[91]="High antibody responses linked to MHC class II genes";
 qstHead[92]="With respect to immune neuroendocrine networks";
 qstHead[93]="Cell-mediated immunity";
 qstHead[94]="Which of the following is the earliest site of hematopoiesis in the embryo";
 qstHead[95]="Stem cell factor is produced mainly by";
 qstHead[96]="An example of a peptide hormone produced by the thymus is";
 qstHead[97]="Hassall's corpuscles are found in";
 qstHead[98]="Which of the following statements might not be true?";
 qstHead[99]=" In the thymic medulla the majority of gamma delta T-cells are";
}

function initQuestionRemark() {
 qstRem[0]="";
 qstRem[1]="";
 qstRem[2]="";
 qstRem[3]="";
 qstRem[4]="";
 qstRem[5]="";
 qstRem[6]="";
 qstRem[7]="";
 qstRem[8]="";
 qstRem[9]="";
 qstRem[10]="";
 qstRem[11]="";
 qstRem[12]="";
 qstRem[13]="";
 qstRem[14]="";
 qstRem[15]="";
 qstRem[16]="";
 qstRem[17]="";
 qstRem[18]="";
 qstRem[19]="";
 qstRem[20]="";
 qstRem[21]="";
 qstRem[22]="";
 qstRem[23]="";
 qstRem[24]="";
 qstRem[25]="";
 qstRem[26]="";
 qstRem[27]="";
 qstRem[28]="";
 qstRem[29]="";
 qstRem[30]="";
 qstRem[31]="";
 qstRem[32]="";
 qstRem[33]="";
 qstRem[34]="";
 qstRem[35]="";
 qstRem[36]="";
 qstRem[37]="";
 qstRem[38]="";
 qstRem[39]="";
 qstRem[40]="";
 qstRem[41]="";
 qstRem[42]="";
 qstRem[43]="";
 qstRem[44]="";
 qstRem[45]="";
 qstRem[46]="";
 qstRem[47]="";
 qstRem[48]="";
 qstRem[49]="";
 qstRem[50]="";
 qstRem[51]="";
 qstRem[52]="";
 qstRem[53]="";
 qstRem[54]="";
 qstRem[55]="";
 qstRem[56]="";
 qstRem[57]="";
 qstRem[58]="";
 qstRem[59]="";
 qstRem[60]="";
 qstRem[61]="";
 qstRem[62]="";
 qstRem[63]="";
 qstRem[64]="";
 qstRem[65]="";
 qstRem[66]="";
 qstRem[67]="";
 qstRem[68]="";
 qstRem[69]="";
 qstRem[70]="";
 qstRem[71]="";
 qstRem[72]="";
 qstRem[73]="";
 qstRem[74]="";
 qstRem[75]="";
 qstRem[76]="";
 qstRem[77]="";
 qstRem[78]="";
 qstRem[79]="";
 qstRem[80]="";
 qstRem[81]="";
 qstRem[82]="";
 qstRem[83]="";
 qstRem[84]="";
 qstRem[85]="";
 qstRem[86]="";
 qstRem[87]="";
 qstRem[88]="";
 qstRem[89]="";
 qstRem[90]="";
 qstRem[91]="";
 qstRem[92]="";
 qstRem[93]="";
 qstRem[94]="";
 qstRem[95]="";
 qstRem[96]="";
 qstRem[97]="";
 qstRem[98]="";
 qstRem[99]="";
}

function CustomComputeFinalMark(sommatoria, sommaPesi) {
}

function ManageRetire() {
  end_test = 1;
  setTempCookie("qmake.end_test", "" + end_test);
  EndQuiz();
}

function GetTypeOfSubstitution(aMark) { return 0; }

function Constructor() {
  valid = new init_array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
  nScore = new init_array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
  maxScore = new init_array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
  qstHead = new init_array("","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","");
  qstRem = new init_array("","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","");
  initShortQuestion();
  initQuestionRemark();
  groups = new init_array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
  pesi = new init_array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
  allAnsReport = new init_array(100);
  ordineDomande = new init_array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99);
  typeOfQuest = new init_array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
  isQuestCustom = new init_array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
  omitPoint = new init_array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
}
