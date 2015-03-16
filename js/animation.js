    $(window).scroll(function() {
		 
         $('.menu').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+000) {
            $(this).addClass("visible animated slideInLeft");
            }
         
        });
                                                                                   
           $('.fon_menu').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+000) {
            $(this).addClass("visible animated slideInLeft");
            }
        }); 

	   	jQuery(document).ready(function() {
		jQuery('.post_fon_menu').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceInLeft',
		offset: 000
		});
		});
	   
		jQuery(document).ready(function() {
		jQuery('.post_car_1').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceInRight',
		offset: 200
		});
		});
		
		jQuery(document).ready(function() {
		jQuery('.post_car_2').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceInRight',
		offset: 300
		});
		});
		
		jQuery(document).ready(function() {
		jQuery('.post_car_3').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceInLeft',
		offset: 300
		});
		});
			
		jQuery(document).ready(function() {
		jQuery('.post_icon_1').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 600
		});
		});
		
		jQuery(document).ready(function() {
		jQuery('.post_icon_2').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 600
		});
		});
	   
	/*   
	              $('.post_icon_1').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+500) {
            $(this).addClass("animated fadeIn");
            }
        }); 
		
		
		           $('.post_icon_2').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+500) {
            $(this).addClass("animated fadeIn");
            }
        }); 
	   */
    });   
	
		function diplay_hide (road_m1)

		{ 
			if ($(road_m1).css('display') == 'none') 
				{ 
					$(road_m1).animate({height: 'toggle'}, 300); 
				} 
		}
		function diplay_hide (road_m2)

		{ 
			if ($(road_m2).css('display') == 'none') 
				{ 
					$(road_m2).animate({height: 'toggle'}, 300); 
				} 
		}
		function diplay_hide (road_m3)

		{ 
			if ($(road_m3).css('display') == 'none') 
				{ 
					$(road_m3).animate({height: 'toggle'}, 300); 
				} 
		}
		function diplay_hide (road_m4)

		{ 
			if ($(road_m4).css('display') == 'none') 
				{ 
					$(road_m4).animate({height: 'toggle'}, 300); 
				} 
		}
		
		
		function diplay_hide (fon_menu)

		{ 
			if ($(fon_menu).css('display') == 'none') 
				{ 
					$(fon_menu).animate({width: 'toggle'}, 1000); 
				} 
		}
		
				function diplay_hide (menu)

		{ 
			if ($(menu).css('display') == 'none') 
				{ 
					$(menu).animate({width: 'toggle'}, 1000); 
				} 
		}