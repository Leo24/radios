


$(document).ready(function(){$(".overlay, .popup").mouseover(function() {
 
var HeightDocument = $(document).height();var WidthDocument = $(document).width(); //������ � ������ ����� ���������
var HeightScreen = $(window).height(); //������ � ������ ���� ���������
  
$(".transparent").css({"width":WidthDocument,"height":HeightDocument});$(".transparent").fadeIn(700); // ������� ��������� �� �������� ����
$("body").css({"overflow-y":"hidden"});return false;}); // ��������� ������� �� ��������� ��������
 
$(".transparent, .overlay, .popup").mouseout(function() { // ��� ����� �� ������ c �� "closenec" ���� � ��� ���������� � ...
$("body").css({"overflow-y":"auto"}); // ����������� ����������� ��������
});});
