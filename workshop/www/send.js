window.onload = function() {

    /**
   * メールに記載する情報を格納する変数
   */
    var address, ccAddress, subject, body, hiddenData, mail;
    var sendmail = document.getElementById('btn');

    sendmail.onclick = function() {

        // メールに記載したい情報をhiddenタグから取得
        hiddenData = document.getElementById('hidden_data').value;
        address = 'enpit2016_minipbl_teamd@googlegroups.com';
        ccAddress = '';
        subject = '件名';
	mail = document.fm.tarea.value
        body = '本文' + '%0D%0A' + mail; // 「'%0D%0A'」を入れて改行

        // 「'?cc='」部分でCC追加
        location.href = 'mailto:' + address + '?cc=' + ccAddress + '&subject=' + subject + '&body=' + body;
    };

};
