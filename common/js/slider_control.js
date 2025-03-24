$(document).ready(function(){
    if(navigator.userAgent.match(/(iPhone|iPod|Android.*Mobile)/i)) { //モバイルデバイスの処理
            $('.slider').bxSlider({
                auto: true,
                touchEnabled: true, //設定していなくても初期値がtrueなので省略可
                pause: 4000,
            });
            } else {　//モバイルデバイスでは無い場合の処理
    $('.slider').bxSlider({
        auto: true,
        touchEnabled: false, //無効に
        pause: 4000,
    });
        }
}); //sliderの速度をpauseで変更
