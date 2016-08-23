function kakunin(btnNo){
  if (btnNo == 1){
    link = "送信";
    href = "file:///Users/obalab/enPiT/pbl_d/workshop/www/mail_complete.html";
  }else{
    link = "Google";
    href = "http://www.google.co.jp/";
  }

  ret = confirm(link + "します。宜しいですか？");
  if (ret == true){
    location.href = href;
  }
}
