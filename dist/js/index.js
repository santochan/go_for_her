// document.getElementsByClassName('panel panel-left')[0].getElementsByTagName('li')[0].onclick = function(){
//   var lang = this.getElementsByClassName('item-title')[0];
//    if(lang === "中文"){
//      document.getElementsByClassName('her-btns')[0].innerHTML = "你知道什么是家暴？";
//      document.getElementsByClassName('her-btns')[0].innerHTML = "你遭受过家暴吗？";
//      document.getElementsByClassName('her-btns')[0].innerHTML = "遭受家暴，我能怎么办？";
//   }
//
// };
var myApp = new Framework7();

  var $$ = Dom7;

console.log($$('.panel .panel-left'));
  $$('.open-left-panel').on('click', function (e) {
      // 'left' position to open Left panel
      myApp.openPanel('left');
  });

  $$('.open-right-panel').on('click', function (e) {
      // 'right' position to open Right panel
      myApp.openPanel('right');
  });

  $$('.panel .panel-left li').on('click', function (e) {
      myApp.closePanel();
  });
