var event_list = new Array(
"", "入園式", "函館山登山遠足", "いちご狩り", "海遠足", "七夕まつり", "収穫祭", "つくしっ子祭り", "十五夜", "運動会", "秋の遠足", "焼きいも会", "クリスマス会", "もちつき会", "そり遠足", "冬まつり", "節分", "ひな祭り", "卒園式" 
);

for(i=1;i<20;i++){
	document.eventlist.event.options[i].text = event_list[i];
}
