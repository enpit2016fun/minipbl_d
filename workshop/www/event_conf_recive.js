/* パラメータを受取る側 */
function pramWrite() {
/* アドレスの「?」以降の引数(パラメータ)を取得 */
var pram=location.search;
/* 引数がない時は処理しない */
if (!pram) return false;
/* 先頭の?をカット */
pram=pram.substring(1);
/* 「&」で引数を分割して配列に */
var pair=pram.split("&");
var i=temp="";
var key=new Array();
for (i=0; i < pair.length; i++) {
	/* 配列の値を「=」で分割 */
	temp=pair[i].split("=");
	keyName=temp[0];
	keyValue=temp[1];
	/* キーと値の連想配列を生成 */
	key[keyName]=keyValue;
}
var eventname=eventdate=eventstate=eventinfo="";
/* 名前 */
if (!key["eventname"] || key["eventname"]==""){
	eventname="";
}else{
/* コード変換 */
	eventname=decodeURI(key["eventname"]);
}
/* 日時 */
if(key["eventdate"]!="") {
	eventdate=decodeURI(key["eventdate"]);
}else{
	eventdate="日時不明";
}
/* 場所 */
if(key["eventstate"]){
	eventstate=decodeURI(key["eventstate"]);
}else{
	eventstate="無趣味";
}
if(key["eventinfo"]){
	eventinfo=decodeURI(key["eventinfo"]);
}else{
	eventinfo=""
}


document.form1.pram.value="イベント名："+eventname+"\n"+"日時："+eventdate+"\n"+"場所："+eventstate+"\n"+"詳しい説明："+eventinfo;
}