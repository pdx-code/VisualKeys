require.config({
  shim: {
  },

  paths: {
    jquery: 'vendor/jquery.min'
  }
});
 
require(['app','vendor/jquery.transit'], function(app) {
  var effect = 0;
  var effects = [
    {"effectName": "Color","effectClass": "color", "duration": 200},
    {"effectName": "Wicked", "effectClass": "wicked", "duration": 200},
    {"effectName": "Keyboard", "effectClass": "qwerty", "duration": 200},
    {"effectName": "Dvorak Keyboard","effectClass": "dvorak", "duration": 200} ];
  
  var qwLayout = [
    "q","w","e","r","t","y","u","i","o","p",
    "a","s","d","f","g","h","j","k","l",
    "z","x","c","v","b","n","m" ];
    
  var dvLayout = [
    "p","y","f","g","c","r","l",
    "a","o","e","u","i","d","h","t","n","s",
    "q","j","k","x","b","m","w","v","z" ];

  // run the effect
  // ----------------------------------------------------------
  var runEffect = function (key, effect){
    var currentEffect = effects[effect];
    var duration = currentEffect["duration"];
    var id = "#"+key;

    $(id).transition({ 
      scale: 1.5,
      color: "#f00",
      y: "+=50px",
      duration: duration
    }, function(){
      $(this).transition({
        y: "-=50px",
        scale: 1,
        color: "#F2F2F2",
        duration: duration/20
      });
    });
    
    $('.log').html(key+" "+currentEffect["duration"]);
  };

// change the effect
// ----------------------------------------------------------
// ----------------------------------------------------------
$("select").change(function(){
  effect = $("select option:selected").attr('value');
  if(effect == 2) {
    
    $("br").remove();
    $.each(qwLayout, function(intIndex, value){
      var id = "#"+value;
      $(id).appendTo("#letters");
    });
    
    $("#space").appendTo("#letters");
    $("#p, #l, #m").after("<br>")
    
  };// end if
  
  if(effect == 3) {
    $("br").remove();
    $.each(dvLayout, function(intIndex, value){
      var id = "#"+value;
      $(id).appendTo("#letters");
    });
    $("#space").appendTo("#letters");
    $("#l, #s, #z").after("<br>")
    
  };// end if
});

$('body').keydown(function(event){
  var letter = '';
  switch(event.keyCode)
    {
      case 65: letter='a'; break;
      case 66: letter='b'; break;
      case 67: letter='c'; break;
      case 68: letter='d'; break;
      case 69: letter='e'; break;
      case 70: letter='f'; break;
      case 71: letter='g'; break;
      case 72: letter='h'; break;
      case 73: letter='i'; break;
      case 74: letter='j'; break;
      case 75: letter='k'; break;
      case 76: letter='l'; break;
      case 77: letter='m'; break;
      case 78: letter='n'; break;
      case 79: letter='o'; break;
      case 80: letter='p'; break;
      case 81: letter='q'; break;
      case 82: letter='r'; break;
      case 83: letter='s'; break;
      case 84: letter='t'; break;
      case 85: letter='u'; break;
      case 86: letter='v'; break;
      case 87: letter='w'; break;
      case 88: letter='x'; break;
      case 89: letter='y'; break;
      case 90: letter='z'; break;
      case 32: letter='space'; break;
    }
  
  
  runEffect(letter, effect);
});




});
