function initRollOverImages() {
	var image_cache = new Object();
	$("#menu img,img.on").not("[src*='_on.']").each(function(i) {
		var imgsrc = this.src;
		var dot = this.src.lastIndexOf('.');
		var imgsrc_on = this.src.substr(0, dot) + '_on' + this.src.substr(dot, 4);
		image_cache[this.src] = new Image();
		image_cache[this.src].src = imgsrc_on;
		$(this).hover(
			function() { this.src = imgsrc_on; },
			function() { this.src = imgsrc; }
		);
	});
}
$(document).ready(initRollOverImages);


/*----------------------------------------headタグのviewport設定------------------------------------------------------------------------*/
/*$(function(){
    var ua = navigator.userAgent;
    if((ua.indexOf('iPhone') > 0) || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)){
        $('head').prepend('<meta name="viewport" content="width=device-width,,maximum-scale=1.0,initial-scale=1,shrink-to-fit=yes,viewport-fit=cover">');
    } else {
        $('head').prepend('<meta name="viewport" content="width=1130">');
    } 
});ページのcontentsセレクターがすべて1000pxのためwidthを1130にしないと横の模様がipadスマホで切れてしまう。iphoneX用にviewport-fit=coverを設定,上を下のコードと合体*/


$(function(){
    /*
     * イベントハンドラの設定、iphoneX以降の横画面対策、左右のの空白を消し背景をだすためのviewport設定。
     * viewport-fit=coverを設定してiphoneX以降でコンテンツ端が切れるため背景をだすために横の時にwidthを1130にして130px左右に背景をだして切れても問題ないようにする。
     * load や resize も入れておかないと android で
     * うまく動作しないことがあるかも。問題なさそうなら外したほうが吉。
     */
    $(window).on("load orientationchange resize", function() {
 			var ua = navigator.userAgent;
        /* 
         * 現在の回転角度を取得して縦横の判定を行う
         * 90 と -90 の場合は横向きであると判断できる
         */
        if(Math.abs(window.orientation) === 90) {
            $('head').prepend('<meta name="viewport" content="width=1130,viewport-fit=cover">');/*スマホ横向きで見ている*/

        } else if((ua.indexOf('iPhone') > 0) || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)){
            $('head').prepend('<meta name="viewport" content="width=device-width,maximum-scale=1.0,initial-scale=1,viewport-fit=cover">');
            /*スマホ縦向きでかつスマホで見ている*/ 
        } else {
        	$('head').prepend('<meta name="viewport" content="width=1130">');/*PCの時*/
        }
 
        /*
         * 何らかの処理を追加
         */
    });
});
/*----------------------------------------headタグのviewport設定------------------------------------------------------------------------*/