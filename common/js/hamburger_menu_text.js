$(function(){
    $('#menu li').hover(function(){
        $("ul:not(:animated)", this).slideDown();
    }, function(){
        $("ul.child",this).slideUp();
    });
});

$(document).ready(function() {
  $(".drawer").drawer();
});

$(function(){/*ハンバーガーメニュー下のmenuをclose切り替え*/
  var flg = "off";
  $('#h-text').on('click', function(){/*ここのセレクターをidに割り当て*/
    if(flg == "off"){
      $(this).text("close");
      flg = "on";
    }else{
      $(this).text("menu");
      flg = "off";
    }
  });
});