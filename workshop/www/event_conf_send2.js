function event_send(){
	var eventname="";
	var date="";
	var state="";
	var info="";
	
	/*　イベント名　*/
	if(document.form.eventname.value!=""){
		eventname=encodeURI(document.form.eventname.value);
	}
	
	/* 日時 */
	if(document.form.eventdate.value!=""){
		date=encodeURI(document.form.eventdate.value);
	}
	
	/* 場所 */
	if(document.form.eventstate.value!=""){
		state=encodeURI(document.form.eventstate.value);
	}
	
	/* 詳しい説明 */
	if(document.form.eventinfo.value!=""){
		info=encodeURI(document.form.eventinfo.value);
	}
	/* 取得した値をパラメータにセット(アンパサンド'&'で連結) */
    var pram="eventname="+eventname+"&eventdate="+date+"&eventstate="+state+"&eventinfo="+info;
    /* アドレスにパラメータを付加 */
    location.href="mail_event_conf2.html?"+pram;
    return false;
    
}