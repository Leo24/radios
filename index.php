﻿<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="HandheldFriendly" content="True" />
	<meta http-equiv="Cache-Control" content="no-cache" />
	<title>Рации</title>
	
	<link rel="icon" href="img/favicon.ico" type="image/x-icon">
	
	<link rel="stylesheet" href="css/style.css" type="text/css">
	<link rel="stylesheet" href="css/animate.css" type="text/css">
    <link rel="stylesheet" href="css/tinycarousel.css" type="text/css" media="screen">


	<!--[if IE]><script type="text/javascript" src="../excanvas.js"></script><![endif]-->
 		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<script type="text/javascript" src="./js/CreateHTML5Elements.js"></script>
		<script type="text/javascript" src="./js/cssParser.js"></script>
 		<script type="text/javascript" src="./js/jquery-1.8.3.min.js"></script> 
		<script type="text/javascript" src="js/mform.js"></script> <link rel="stylesheet" href="css/mform.css" />
<!-- 		<script type="text/javascript" src="./js/modal.js"></script> -->
		<script type="text/javascript" src="./js/example.js"></script>
		<script type="text/javascript" src="js/countdown.js"></script>
		<script type="text/javascript" src="js/jquery.tinycarousel.js"></script>
		<script type="text/javascript" src="js/radios.js"></script>

		<script src="js/wow.min.js"></script>
		<script>
			new WOW().init();
		</script>


		<script>
			var dat = new Date();
			dat = new Date(dat.valueOf()+ (24*60*60*1000)*2);  
			
			function setCookie(name, value, options) {
		 
		  options = options || {};

		  var expires = options.expires;

		  if (typeof expires == "number" && expires) {
			var d = new Date();
			d.setTime(d.getTime() + expires*1000);
			expires = options.expires = d;
		  }
		  if (expires && expires.toUTCString) { 
			options.expires = expires.toUTCString();
		  }

		  value = encodeURIComponent(value);

		  var updatedCookie = name + "=" + value;

		  for(var propName in options) {
			updatedCookie += "; " + propName;
			var propValue = options[propName];    
			if (propValue !== true) { 
			  updatedCookie += "=" + propValue;
			 }
		  }

		  document.cookie = updatedCookie;
		}


		function getCookie(name) {
			var cookie = " " + document.cookie;
			var search = " " + name + "=";
			var setStr = null;
			var offset = 0;
			var end = 0;
			if (cookie.length > 0) {
				offset = cookie.indexOf(search);
				if (offset != -1) {
					offset += search.length;
					end = cookie.indexOf(";", offset)
					if (end == -1) {
						end = cookie.length;
					}
					setStr = unescape(cookie.substring(offset, end));
				}
			}
			return(setStr);
		}
		</script>

		<script type="text/javascript">
				$(document).ready(function() {
					$('input').on('click', function () {
						$(this).removeClass('edit_f_error');
					});
				})
		</script>
</head>

<body>

<!-- CONTENT -->

    <div id="header">
		<div class="content">
			<div class="left_sitebar">
				<img class="logo" src="./img/logo.png" alt="logo">
			</div>
			<div class="right_sitebar">
				<h2>Вся Россия: +7 (499) 677-50-79</h2>
			</div>
		</div>
	</div>

<section class='modul-1' id="1">
	<div class="content">
		<h1>Радиостанции <text>от производителя</text></h1>
		<h2>Надежная связь в наших руках!</h2>
		<div class="left_sitebar">
			<h3 class="wow fadeIn">Покупая рацию у нас, Вы получаете</h3>
			<ul>
				<li class="wow slideInLeft">
					<div class="container img left_sitebar wow pulse animated" data-wow-iteration="8">
						<img src="img/icon-m1-1.png" alt="icon-1">
					</div>
					<div class="container txt">
						<p class="text">Идеальное соотношение цены и качества</p>
					</div>
				</li>
				<li class="wow slideInLeft" data-wow-delay="0.2s">
					<div class="container img left_sitebar wow pulse animated" data-wow-iteration="8">
						<img src="img/icon-m1-2.png" alt="icon-2">
					</div>
					<div class="container txt">
						<p class="text">Широкий ассортимент продукции</p>
					</div>
				</li>
				<li class="wow slideInLeft" data-wow-delay="0.4s">
					<div class="container img left_sitebar wow pulse animated" data-wow-iteration="8">
						<img src="img/icon-m1-3.png" alt="icon-3">
					</div>
					<div class="container txt">
						<p class="text">Быстрый ремонт, замену любых комплектующих</p>
					</div>
				</li>
			</ul>
			<a href="#win2"><input class="wow zoomIn" id="btn1" type="button" value="Оставить заявку"/></a>
		</div>
	</div><!--end m1_content-->
</section><!--end modul-1-->

<section class='modul-2' id="2">
	<div class="content">
		<h1>Доставка раций <text>по всей России!</text></h1>
		<div class="container center wow pulse animated" data-wow-iteration="8" data-wow-offset="300">
			<img src="img/icon-m2-white.png" alt="icon-m2-white" />
		</div>
			<div class="speedform">
				<form class="center_form wow fadeIn" data-wow-offset="300">
					<p class="text_form">Свяжемся с вами в течении<br />60 минут</p>
					<p class="text">и ответим на все Ваши вопросы</p>
							<label class="label_to" style="display:none;">Заявка с блока "Как мы будем работать с вашей заявкой"</label>
							<label class="label_sndok" style="display:none;">Cообщение успешно отправлено!<br />Спасибо за внимание.</label>
							<div class="progressimg" style="display:none;"><img src="./ap_s/img/loader.gif" border="0" alt="loader"></div>
							<p class="label_m1 name">имя:</p>
							<input id="name_form" sf="name" value="Петр Петров" defval="Петр Петров" sname="Имя:"class="edit_f" type="text"/>
							<p class="label_m1 mail">e-mail:</p>
							<input id="mail_form" sf="email" value="petrov@gmail.com" defval="petrov@gmail.com" sname="E-mail:" require="true" title="Это поле обязательное для заполнения" class="edit_f" type="text"/>
							<p class="label_m1 phone">телефон:</p> 
							<input id="phone_form" sf="phone" value="+38 012 1234567" defval="+38 012 1234567" sname="Телефон:" vphone="true" require="true" title="Это поле обязательное для заполнения" class="edit_f" type="text"/>
							<input id="btn2" class="button" type="button" value="" onclick="pushmsg(this);"/>
				</form>
			</div>
	</div><!--end m2_content-->
</section><!--end modul-2-->

<section class='modul-3' id="3">
	<div class="content">
		<h1><img class="wow pulse animated" data-wow-iteration="8" data-wow-offset="300" src="img/icon-m3-tittle.png" alt="icon-m3-tittle"> Модели, <text>которые никогда не подводят</text><br /><b>по акционным ценам</b></h1>
	</div>
	<div class="ccc">
		<div class="container one c0">
			<div class="content">
				<img class="big" id="img1" src="" alt="img1">
				<img class="big" id="img4" src="img/prod1.png" alt="img4">
				<h2><text></text></h2>
				<p class="price"><span style="color:red; text-decoration:line-through;"><span style="color:white;">1476</span></span><text>&nbsp;&nbsp;<b>1377</b>грн.</text></p>
				<div class="count">
					<script type="application/javascript">

//							if(getCookie('kool')==null){
//							 setCookie('kool', dat.toString());
//						} else{
//							dat=new Date(getCookie('kool'));
//						}
//
//							   function countdownComplete(){
//							function deleteCookie(name) {
//						var date = new Date(); // Берём текущую дату
//						date.setTime(date.getTime() - 1); // Возвращаемся в "прошлое"
//						document.cookie = name += "=; expires=" + date.toGMTString(); // Устанавливаем cookie пустое значение и срок действия до прошедшего уже времени
//					  }
//							deleteCookie("kool");
//							deleteCookie("visiteduuid");
//							location.reload();
//						 }
//
//						var CountdownLabels = {
//						second 	: "Секунд",
//						minute 	: "Минут",
//						hour	: "Часов",
//						day 	: "Дней",
//					};
//					var myCountdown1 = new Countdown({
//														time: dat, // 86400 seconds = 1 day  надо, чтобы прошло 3дня, потом таймер обнуляется, пишется "Акция продлена" и опять шел отчет на 3 дня.
//														width: 220,
//														height: 50,
//														padding  : 0.0,
//														rangeHi:"day",
//														style:"flip",
//														onComplete	: countdownComplete,
//
//							}
//														);

					</script>
				</div>
<!--				<p class="btns del"><a href="#win-zak-1"><input class="button del get-detail" type="button" value=""/></a></p>-->
<!--				<p class="btns"><a href="#win-zak"><input class="button" type="button" value=""/></a></p>-->
			</div>
		</div>
		<div class="container two c1" onmouseover="$('#img4').style('display':'none');">
			<div class="content">
				<img class="big" id="img2" src="" alt="img2">
				<h2><text></text></h2>
				<p class="price"><span style="color:red; text-decoration:line-through;"><span style="color:white;">1476</span></span><text>&nbsp;&nbsp;<b>1377</b>грн.</text></p>
				<div class="count">
					<script type="application/javascript">

							if(getCookie('kool')==null){
							 setCookie('kool', dat.toString());
						} else{
							dat=new Date(getCookie('kool'));
						}

							   function countdownComplete(){
							function deleteCookie(name) {
						var date = new Date(); // Берём текущую дату
						date.setTime(date.getTime() - 1); // Возвращаемся в "прошлое"
						document.cookie = name += "=; expires=" + date.toGMTString(); // Устанавливаем cookie пустое значение и срок действия до прошедшего уже времени
					  }
							deleteCookie("kool");
							deleteCookie("visiteduuid");
							location.reload();
						 }

						var CountdownLabels = {
						second 	: "Секунд",
						minute 	: "Минут",
						hour	: "Часов",
						day 	: "Дней",
					};
					var myCountdown1 = new Countdown({
														time: dat, // 86400 seconds = 1 day  надо, чтобы прошло 3дня, потом таймер обнуляется, пишется "Акция продлена" и опять шел отчет на 3 дня.
														width: 220,
														height: 50,
														padding  : 0.0,
														rangeHi:"day",
														style:"flip",
														onComplete	: countdownComplete,

							}
														);

					</script>
				</div>
<!--				<p class="btns del"><a href="#win-zak-2"><input class="button del" type="button" value=""/></a></p>-->
<!--				<p class="btns"><a href="#win-zak"><input class="button" type="button" value=""/></a></p>-->
			</div>
		</div>
		<div class="container three c2">
			<div class="content">
				<img class="big" id="img3" src="" alt="img3">
				<h2><text></text></h2>
				<p class="price"><span style="color:red; text-decoration:line-through;"><span style="color:white;">1476</span></span><text>&nbsp;&nbsp;<b>1377</b>грн.</text></p>
				<div class="count">
					<script type="application/javascript">
					
							if(getCookie('kool')==null){
							 setCookie('kool', dat.toString());		 
						} else{
							dat=new Date(getCookie('kool'));	
						}
						
							   function countdownComplete(){
							function deleteCookie(name) {
						var date = new Date(); // Берём текущую дату
						date.setTime(date.getTime() - 1); // Возвращаемся в "прошлое"
						document.cookie = name += "=; expires=" + date.toGMTString(); // Устанавливаем cookie пустое значение и срок действия до прошедшего уже времени
					  }	   	
							deleteCookie("kool");
							deleteCookie("visiteduuid");
							location.reload();	
						 }

						var CountdownLabels = {
						second 	: "Секунд",
						minute 	: "Минут",
						hour	: "Часов",
						day 	: "Дней",
					};	  
					var myCountdown1 = new Countdown({
														time: dat, // 86400 seconds = 1 day  надо, чтобы прошло 3дня, потом таймер обнуляется, пишется "Акция продлена" и опять шел отчет на 3 дня.
														width: 220, 
														height: 50, 
														padding  : 0.0,  
														rangeHi:"day",
														style:"flip",
														onComplete	: countdownComplete,
								
							}
														);

					</script>
				</div>
<!--				<p class="btns del"><a href="#win-zak-3"><input class="button del" type="button" value=""/></a></p>-->
<!--				<p class="btns"><a href="#win-zak"><input class="button" type="button" value=""/></a></p>-->
			</div>
		</div>
		<div class="container four"></div>
	</div>
<!-- 	<div class="container four">
		<h2>Рация<text>Baofeng UV-5R</text></h2>
		<p class="price">1476 <text>1377</text> грн.</p>
	</div> -->
</section><!--end modul-3-->

<section class='modul-4' id="4">
	<div class="content">
	<script src="js/slides.js"></script>
	<script>
		/*
			Get the curent slide
		*/
		function currentSlide( current ) {
			$(".current_slide").text(current + " of " + $("#slides").slides("status","total") );
		}
		
		$(function(){
			/*
				Initialize SlidesJS
			*/
			$("#slides").slides({
				navigateEnd: function( current ) {
					currentSlide( current );
				},
				loaded: function(){
					currentSlide( 1 );
				}
			});
			
			/*
				Play/stop button
			*/
			$(".controls").click(function(e) {
				e.preventDefault();
				
				// Example status method usage
				var slidesStatus = $("#slides").slides("status","state");
				
				if (!slidesStatus || slidesStatus === "stopped") {

					// Example play method usage
					$("#slides").slides("play");

					// Change text
					$(this).text("Stop");
				} else {
					
					// Example stop method usage
					$("#slides").slides("stop");
					
					// Change text
					$(this).text("Play");
				}
			});
		});
	</script>
	<h1>Вам нужна рация, <text>если</text></h1>
		<div id="container">
			<div id="slides">
				<div class='item-1'>
					<div class="container center">
						<ul>
							<li class="wow zoomIn" data-wow-duration="1s">
								<p class="text"><text>У Вас </text>отсутствует покрытие<br />сотовой связи<text> или </text>сообщение<br />затруднено</p>
							</li>
							
							<li class="wow zoomIn" data-wow-duration="1s">
								<p class="text"><text>Вы</text> руководите командой<br /><text>по</text> страйкболу <text>или</text> пейнтболу</p>
							</li>
							
							<li class="wow zoomIn" data-wow-duration="1s">
								<p class="text"><text>Любите совершать вылазку<br />на дикую природу<br /></text>и нуждаетесь в средствах<br />сообщения между<br />членами группы</p>
							</li>
							
							<li class="wow zoomIn" data-wow-duration="1s">
								<p class="text"><text>Вы</text> охотник, рыбак <br /><text>или</text> путешественник</p>
							</li>
							
							<li class="wow zoomIn" data-wow-duration="1s">
								<p class="text"><text>Вашим рабочим</text> необходимо<br />надежное <text>и</text> удобное<br />средство связи</p>
							</li>
							
							<li class="wow zoomIn" data-wow-duration="1s">
								<p class="text"><text>Вы находитесь</text> в тяжелых<br />погодных условиях</p>
							</li>
						</ul>
					</div>
				</div>
				<div class='item-2'>
					<div class="container center">
						<ul>
							<li>
								<p class="text"><text>Участвуете<br />в </text>каких-либо экспедициях</p>
							</li>
							
							<li>
								<p class="text"><text>У Вас</text> cобственное охранное<br />агентство</p>
							</li>
							
							<li>
								<p class="text"><text>Ваша компания организовывает<br />крупные мероприятия или<br />шоу-программы, </text>поэтому все<br />сотрудники должны быть<br />постоянно на связи</p>
							</li>
							
							<li>
								<p class="text"><text>Вы любите экстремальный<br />спорт</text> или участвуете<br />в автопробегах</p>
							</li>
							
							<li>
								<p class="text"><text>Работаете </text> дальнобойщиком<br /><text>и Вам </text>нужна надежная связь</p>
							</li>
							
							<li>
								<p class="text"><text>Отправляетесь в</text> горы <text>или</text><br />посещаете горнолыжные курорты</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		<!-- end SlidesJS  slideshow -->
		</div>
	</div><!--end m4_content-->
</section>

<section class='modul-5' id="module_start_road">
	<section class="lines_m5">
		<div class="content">
		<img src="img/lines-m5.png" alt="lines-m5">
		<script type="text/javascript" src="js/move.js"></script>
		<script type="text/javascript">
			  document.getElementById('module_start_road').onmouseover = function(e){
			move('.lines_m5')
			  .set('height', '891px')
			  .duration('3s')
			  .end();
		  };
		</script>
		</div>
	</section>
	<div class="content" >
		<div class="left_sitebar">
			<ul>
				<li>
					<div class="container img left_sitebar wow slideInLeft" data-wow-delay="0.5s">
						<img src="img/icon-m5-1.png" alt="icon-m5-1">
					</div>
					<div class="container txt wow fadeIn" data-wow-delay="0.5s">
						<p class="text">Рации <b>Beofeng</b> и <b>Kenwood</b><br />чрезвычайно популярны среди<br />участников страйкбольных игр</p>
					</div>
				</li>
				<li>
					<div class="container img left_sitebar wow slideInLeft" data-wow-delay="1.0s">
						<img src="img/icon-m5-2.png" alt="icon-m5-2">
					</div>
					<div class="container txt wow fadeIn" data-wow-delay="1s">
						<p class="text">Крупные компании закупают<br />рации <b>Beofeng</b> для своих<br />сотрудников</p>
					</div>
				</li>
				<li>
					<div class="container img left_sitebar wow slideInLeft" data-wow-delay="1.5s">
						<img src="img/icon-m5-3.png" alt="icon-m5-3">
					</div>
					<div class="container txt wow fadeIn" data-wow-delay="1.5s">
						<p class="text">Обладатели рации <b>Kenwood</b><br />дарят такие же своим друзьям</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="right_sitebar wow slideInRight" data-wow-offset="300">
			<div class="container right">
				<h1><img src="img/icon_title-m5.png" alt="icon-title-m5"> именно <br />поэтому:</h1>
			</div>
		</div>
		<div class="container center clear">
			<a href="#win3"><input id="btn3" class="button wow zoomIn" data-wow-offset="0" data-wow-duration="1.0s" type="button" value="" onclick=""/></a>
		</div>
	</div><!--end m5_content-->
</section><!--end modul-5-->

<section class='modul-6' id="6">
	<div class="content">
		<h1 class="wow zoomIn" data-wow-offset="300" data-wow-duration="2s"><text>Нас выбирают,</text><br />потому что</h1>
		<h2 id="m6-1" class="wow zoomIn" data-wow-offset="300" data-wow-duration="1.5s">Более 50 моделей<br />всегда в наличии<h2>
		<h2 id="m6-2" class="wow zoomIn" data-wow-offset="300" data-wow-duration="1.5s">Мы даем гарантию<br />возврата товара<br />до 28 дней<h2>
		<h2 id="m6-3" class="wow zoomIn" data-wow-offset="300" data-wow-duration="1.5s">Самая выгодная и честная<br />цена на рынке<h2>
	</div><!--end m6_content-->
</section><!--end modul-6-->

<section class='modul-7' id="7">
	<div class="content">
		<h1><img src="img/icon-m7-tittle.png" alt="icon-m7-tittle" class="wow pulse animated" data-wow-iteration="8" data-wow-offset="300"> Как заказать рацию</h1>
		<div class="container center">
			<ul>
				<li>
					<div class="container right_sitebar">
						<img src="img/icon-m7-1.png" alt="icon-m7-1" class="wow zoomIn" data-wow-offset="100" data-wow-duration="1.5s">
					</div>
					<div class="container left_sitebar wow zoomInLeft">
						<p class="text">Вы оставляете заявку<br />или звоните нам</p>
					</div>
				</li>
				
				<li>
					<div class="container right_sitebar wow zoomInRight">
						<p class="text">Мы подтверждаем<br />заказ</p>
					</div>
					<div class="container left_sitebar">
						<img src="img/icon-m7-2.png" alt="icon-m7-2" class="wow zoomIn" data-wow-offset="100" data-wow-duration="1.5s">
					</div>
				</li>

				<li>
					<div class="container right_sitebar">
						<img src="img/icon-m7-4.png" alt="icon-m7-4" class="wow zoomIn" data-wow-offset="100" data-wow-duration="1.5s">
					</div>
					<div class="container left_sitebar wow zoomInLeft">
						<p class="text">Мы доставляем Вам<br />товар</p>
					</div>
				</li>

 				<li>
					<div class="container right_sitebar wow zoomInRight">
						<p class="text">Вы производите предоплату<br />и получаете скидку</p>
						<img src="img/arrow-m7.png" alt="arrow-m7">
						<p class="text not_padding">Вы оплачиваете товар по<br />получению</p>
					</div>
					<div class="container left_sitebar">
						<img src="img/icon-m7-3.png" alt="icon-m7-3"class="wow zoomIn" data-wow-offset="100" data-wow-duration="1.5s">
					</div>
				</li> 
			</ul>
		</div>
		<div class="container center clear">
			<a href="#win4"><input id="btn3" class="button wow zoomIn" data-wow-offset="0" data-wow-duration="1.0s" type="button" value="" onclick=""/></a>
		</div>
	</div><!--end m7_content-->
</section><!--end modul-7-->

<section class='modul-8' id="8">
	<div class="content">
		<h1>Отзывы<br />наших клиентов</h1>
		<div class="container center clear">
			<img src="img/icon-m7-tittle.png" alt="icon-m7-tittle" class="wow pulse animated" data-wow-iteration="8" data-wow-offset="300">
		</div>
		
		<!-- Attach our CSS -->
	  	<link rel="stylesheet" href="./css/orbit-1.2.3.css">
		
		<!-- Attach necessary JS -->
		<script type="text/javascript" src="./js/jquery.orbit-1.2.3.min.js"></script>	
		
			<!--[if IE]>
			     <style type="text/css">
			         .timer { display: none !important; }
			         div.caption { background:transparent; filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000,endColorstr=#99000000);zoom: 1; }
			    </style>
			<![endif]-->

		<!-- Run the plugin -->
		<script type="text/javascript">
			$(window).load(function() {
				$('.slider_sert').orbit();
			});
		</script>
		<div class="slider_sert">
			<div class="cont_slider_2">
				<img src="img/foto-1.png" alt="foto-1">
				<p class="text">Регулярно выезжаем на природу большой компанией. Так как места выбираем каждый раз новые, да и заходим порой далеко, жизненно необходима связь между собой. Брат по чьему-то совету купил себе Baofeng. Понятный 
					функционал, параметры устраивают.
					Приобрели по Интернету себе такие же. Что сказать, испытания рации прошли без
					потерь. Батарея держит, прием хороший. В непогоду работали без осложнений, а не как часто бывает. В общем, оправдали надежды.</p>
				<p class="text right">Александр <br />г.Москва</p>
			</div>
			<div class="cont_slider_2">
				<img src="img/foto-2.png" alt="foto-2">
				<p class="text">Мы с друзьями – команда по страйкболу. Решили обновить экипировку. Посоветовали
					взять Kenwood F8. В принципе, рации зарекомендовали себя давно. Поэтому особо не
					раздумывали. На первых же играх и опробовали. Понравилось: хорошо лежит в руке,
					мощности и заряда вполне хватает. Гарнитура удобная. Для наших задач – идеальный
					вариант!</p>
				<p class="text right">Сергей <br />г.Владивосток</p>
			</div>
			<div class="cont_slider_2">
				<img src="img/foto-5.png" alt="foto-5">
				<p class="text">Я альпинист, хорошая рация – вопрос крайне важный. Мы ходим группами, 
					но связь все равно крайне необходима. В нашем деле может случиться все что угодно. 
					Недавно обновили свой арсенал на рации, взяли Kenwood. 
					Главное, что рация хорошо работает в разных погодных условиях без особых перебоев. 
					В целом довольны, тем более купили по вполне лояльным ценам.</p>
				<p class="text right">Сергей <br />г.Москва</p>
			</div>
			<div class="cont_slider_2">
				<img src="img/foto-6.png" alt="foto-6">
				<p class="text">В связи с расширением компании обновили средства связи для рабочих. Приобрели для
					всех бригад рации Kenwood. Ими уже пользуются в других филиалах нашей компании.
					Сказали, что цена, качество и функционал – все в порядке. Можно пользоваться без
					проблем. Прошло время. О своем выборе не пожалели.
					</p>
				<p class="text right">Денис <br />г.Москва</p>
			</div>
		</div>
		
	</div><!--end m8_content-->
</section><!--end modul-8-->

<footer id="f">
	<div class="content">
		<div class="logos">
			<div class="left_sitebar">
				<h2>У вас есть вопросы?</h2>
			</div>
			<div class="right_sitebar">
				<a href="#win5">Мы Вам позвоним</a>
			</div>
			<div class="left_sitebar">
				<img class="logo" src="./img/logo_footer.png" alt="logo_footer">
			</div>
			<div class="right_sitebar bottom">
				<p class="text">Москва и Санкт-Петербург: +7 (499) 677-50-79</p>
			</div>
		</div>
	</div><!--end f_content-->
</footer><!--end footer--> 

<a href="#" class="cart"></a>

<!-- MODAL -->

		<a href="#x" class="overlay" id="win-zak"></a>
	<div class="popup zak basket">

	</div>
		<a href="#x" class="overlay" id="win-zak-3"></a>
	<div class="popup zak del">

		<a class="close" title="Закрыть" href="#close"></a>
	</div>
	
		<a href="#x" class="overlay" id="win2"></a>
	<div class="popup">
			<div class="speedform">
				<form class="center_form">
					<p class="text_form">Свяжемся с вами в течении<br />60 минут</p>
					<p class="text">и ответим на все Ваши вопросы</p>
							<label class="label_to" style="display:none;">Заявка с блока "Как мы будем работать с вашей заявкой"</label>
							<label class="label_sndok" style="display:none;">Cообщение успешно отправлено!<br />Спасибо за внимание.</label>
							<div class="progressimg" style="display:none;"><img src="./ap_s/img/loader.gif" border="0" alt="loader"></div>
							<p class="label_m1 name">имя:</p>
							<input id="name_form" sf="name" value="Петр Петров" defval="Петр Петров" sname="Имя:"class="edit_f" type="text"/>
							<p class="label_m1 mail">e-mail:</p>
							<input id="mail_form" sf="email" value="petrov@gmail.com" defval="petrov@gmail.com" sname="E-mail:" require="true" title="Это поле обязательное для заполнения" class="edit_f" type="text"/>
							<p class="label_m1 phone">телефон:</p> 
							<input id="phone_form" sf="phone" value="+38 012 1234567" defval="+38 012 1234567" sname="Телефон:" vphone="true" require="true" title="Это поле обязательное для заполнения" class="edit_f" type="text"/>
							<input id="btn2" class="button" type="button" value="" onclick="pushmsg(this);"/>
				</form>
			</div>
		<a class="close" title="Закрыть" href="#close"></a>
	</div>
	
		<a href="#x" class="overlay" id="win3"></a>
	<div class="popup">
			<div class="speedform">
				<form class="center_form">
					<p class="text_form">Свяжемся с вами в течении<br />60 минут</p>
					<p class="text">и ответим на все Ваши вопросы</p>
							<label class="label_to" style="display:none;">Заявка с блока "Как мы будем работать с вашей заявкой"</label>
							<label class="label_sndok" style="display:none;">Cообщение успешно отправлено!<br />Спасибо за внимание.</label>
							<div class="progressimg" style="display:none;"><img src="./ap_s/img/loader.gif" border="0" alt="loader"></div>
							<p class="label_m1 name">имя:</p>
							<input id="name_form" sf="name" value="Петр Петров" defval="Петр Петров" sname="Имя:"class="edit_f" type="text"/>
							<p class="label_m1 mail">e-mail:</p>
							<input id="mail_form" sf="email" value="petrov@gmail.com" defval="petrov@gmail.com" sname="E-mail:" require="true" title="Это поле обязательное для заполнения" class="edit_f" type="text"/>
							<p class="label_m1 phone">телефон:</p> 
							<input id="phone_form" sf="phone" value="+38 012 1234567" defval="+38 012 1234567" sname="Телефон:" vphone="true" require="true" title="Это поле обязательное для заполнения" class="edit_f" type="text"/>
							<input id="btn2" class="button" type="button" value="" onclick="pushmsg(this);"/>
				</form>
			</div>
		<a class="close" title="Закрыть" href="#close"></a>
	</div>
	
		<a href="#x" class="overlay" id="win4"></a>
	<div class="popup">
			<div class="speedform">
				<form class="center_form">
					<p class="text_form">Свяжемся с вами в течении<br />60 минут</p>
					<p class="text">и ответим на все Ваши вопросы</p>
							<label class="label_to" style="display:none;">Заявка с блока "Как мы будем работать с вашей заявкой"</label>
							<label class="label_sndok" style="display:none;">Cообщение успешно отправлено!<br />Спасибо за внимание.</label>
							<div class="progressimg" style="display:none;"><img src="./ap_s/img/loader.gif" border="0" alt="loader"></div>
							<p class="label_m1 name">имя:</p>
							<input id="name_form" sf="name" value="Петр Петров" defval="Петр Петров" sname="Имя:"class="edit_f" type="text"/>
							<p class="label_m1 mail">e-mail:</p>
							<input id="mail_form" sf="email" value="petrov@gmail.com" defval="petrov@gmail.com" sname="E-mail:" require="true" title="Это поле обязательное для заполнения" class="edit_f" type="text"/>
							<p class="label_m1 phone">телефон:</p> 
							<input id="phone_form" sf="phone" value="+38 012 1234567" defval="+38 012 1234567" sname="Телефон:" vphone="true" require="true" title="Это поле обязательное для заполнения" class="edit_f" type="text"/>
							<input id="btn2" class="button" type="button" value="" onclick="pushmsg(this);"/>
				</form>
			</div>
		<a class="close" title="Закрыть" href="#close"></a>
	</div>
	
		<a href="#x" class="overlay" id="win5"></a>
	<div class="popup">
			<div class="speedform">
				<form class="center_form">
					<p class="text_form">Свяжемся с вами в течении<br />60 минут</p>
					<p class="text">и ответим на все Ваши вопросы</p>
							<label class="label_to" style="display:none;">Заявка с блока "Как мы будем работать с вашей заявкой"</label>
							<label class="label_sndok" style="display:none;">Cообщение успешно отправлено!<br />Спасибо за внимание.</label>
							<div class="progressimg" style="display:none;"><img src="./ap_s/img/loader.gif" border="0" alt="loader"></div>
							<p class="label_m1 name">имя:</p>
							<input id="name_form" sf="name" value="Петр Петров" defval="Петр Петров" sname="Имя:"class="edit_f" type="text"/>
							<p class="label_m1 mail">e-mail:</p>
							<input id="mail_form" sf="email" value="petrov@gmail.com" defval="petrov@gmail.com" sname="E-mail:" require="true" title="Это поле обязательное для заполнения" class="edit_f" type="text"/>
							<p class="label_m1 phone">телефон:</p> 
							<input id="phone_form" sf="phone" value="+38 012 1234567" defval="+38 012 1234567" sname="Телефон:" vphone="true" require="true" title="Это поле обязательное для заполнения" class="edit_f" type="text"/>
							<input id="btn2" class="button" type="button" value="" onclick="pushmsg(this);"/>
				</form>
			</div>
		<a class="close" title="Закрыть" href="#close"></a>
	</div>
	
		<a href="#x" class="overlay" id="win6"></a>
	<div class="popup">
			<div class="speedform">
				<form class="center_form">
					<p class="text_form order">Оформление заказа</p>
							<label class="label_to" style="display:none;">Заявка с блока "Как мы будем работать с вашей заявкой"</label>
							<label class="label_sndok" style="display:none;">Cообщение успешно отправлено!<br />Спасибо за внимание.</label>
							<div class="progressimg" style="display:none;"><img src="./ap_s/img/loader.gif" border="0" alt="loader"></div>
							<p class="label_m1 name">имя:</p>
							<input id="name_form" sf="name" value="Петр Петров" defval="Петр Петров" sname="Имя:"class="edit_f" type="text"/>
							<p class="label_m1 mail">e-mail:</p>
							<input id="mail_form" sf="email" value="petrov@gmail.com" defval="petrov@gmail.com" sname="E-mail:" require="true" title="Это поле обязательное для заполнения" class="edit_f" type="text"/>
							<p class="label_m1 phone">телефон:</p> 
							<input id="phone_form" sf="phone" value="+38 012 1234567" defval="+38 012 1234567" sname="Телефон:" vphone="true" require="true" title="Это поле обязательное для заполнения" class="edit_f" type="text"/>
							<input id="btn2" class="button" type="button" value="" onclick="pushmsg(this);"/>
				</form>
			</div>
		<a class="close" title="Закрыть" href="#close"></a>
	</div>

<!-- <script type="text/javascript" src="https://zadarma.com/swfobject.js"></script> 
<script type="text/javascript"> 
	var flashvars = {};
	flashvars.phone="172114";
	flashvars.img1="https://zadarma.com/images/but/call3_blue_ru_free.png";
	flashvars.img2="https://zadarma.com/images/but/call2_green_ru_connecting.png";
	flashvars.img3="https://zadarma.com/images/but/call2_green_ru_reset.png";
	flashvars.img4="https://zadarma.com/images/but/call2_green_ru_error.png";
	var params = {};
	params.wmode='transparent';
	var attributes = {};
	swfobject.embedSWF("https://zadarma.com/pbutton.swf", "myAlternativeContent", "215", "138", "9.0.0", false, flashvars, params, attributes);
</script> 
<div id="myAlternativeContent"> 
	<a href="http://www.adobe.com/go/getflashplayer"> 
	<img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" /> 
	</a> 
</div> 	 -->		
	
</body>
</html>