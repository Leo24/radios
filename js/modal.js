


$(document).ready(function(){$(".overlay, .popup").mouseover(function() {
 
var HeightDocument = $(document).height();var WidthDocument = $(document).width(); //Ширина и высота всего документа
var HeightScreen = $(window).height(); //Ширина и высота окна браухзера
  
$(".transparent").css({"width":WidthDocument,"height":HeightDocument});$(".transparent").fadeIn(700); // Плавное наложение на страницу фона
$("body").css({"overflow-y":"hidden"});return false;}); // Наложение запрета на прокрутку страницы
 
$(".transparent, .overlay, .popup").mouseout(function() { // При клике на кнопке c ид "closenec" окно и фон скрываются и ...
$("body").css({"overflow-y":"auto"}); // Возвращение подвижности страницы
});});
