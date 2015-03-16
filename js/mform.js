var visiteduuid = '-';	
var referrer = '-';
var reference = '-';

$(function(){
	setTimeout(function(){
		try {
		$.ajax({
			url: "ap_s/v.php",
			data: ('ref='+document.referrer),
			dataType: "jsonp",
		success: function (data, textStatus) {
			if (data.error=="0"){
			}
		else {
			//alert('Error!');
			}
		},
		error:
		function (request, status, error) {
			//alert('Error!');//alert(request.responseText);
			;
			}
		});
		}catch (e) {}
	},1000); 
});
		



		function field_focus(event){
    $(event).addClass('edit_f_te');
    if (event.value == $(event).attr('defval')) {
        if($(event).hasClass('phone-code')) {
            event.value = "+";
        } else {
            event.value = "";
        }
    }
}
function field_blur(event){

    if (event.value == '' || event.value == '+') {
        event.value = $(event).attr('defval');
        $(event).removeClass('edit_f_te');
    }

}

function _onfocus(event){
    field_focus(event);
}

function _onblur(event){
    field_blur(event);
}
		


	function pushmsg(event) {
                var str = 'p=1';
				var sform=null; var ft='';
				var v = 0;
				$(event).parents('form').each(function(){
					sform =  this;
				});

				// vemail="true"
				$(sform).find("input[vemail*='true']").each(function(){
					if (validate($(this).val())==false){
						$(this).addClass('edit_f_error');
						v = 1;
					}
				});
				
				$(sform).find("input[vphone='true']").each(function(){
					if (validatephone($(this).val())==false){
						$(this).addClass('edit_f_error');
						v = 1;
					}
				});	
				
				$(sform).find("input[type='text'], textarea, select").each(function(){
					str +=  "&" + $(this).attr('id')+'='+encodeURIComponent(
					(($(this).attr('sname')!=null)?$(this).attr('sname'):$(this).attr('defval'))
					+':;:'+$(this).val());
					if (($(this).attr('defval')==$(this).val()) && ($(this).attr('require')!=null)){
						$(this).addClass('edit_f_error');
						v = 1;
					}
				});


				$(sform).find("input[type='radio']:checked, input[type='checkbox']:checked").each(function(){
					str += "&" + $(this).attr('id')+'='+encodeURIComponent(
					(($(this).attr('sname')!=null)?$(this).attr('sname'):$(this).attr('defval'))
					+':;:'+$(this).val());
				}); 

				if (v==1) return;
				
				referrer = '';
				if (self==top) {
					referrer = document.referrer;

				if (referrer==null)
					referrer = '';
				}else{
					referrer = parent.document.referrer;
					if (referrer==null)
						referrer = '';
				}

				if (referrer!='' && referrer!=null)  referrer = referer(referrer);
				

				str+= '&referrer=referrer:;:'+encodeURIComponent(referrer); 
				str+= '&url=url:;:'+encodeURIComponent(document.location); 

				ft = $(sform).find('.label_to').text();
				
				$(sform).children().hide();
				$(sform).find(".progressimg").show();
				
				
				str +=  "&" + generateGuid()+'='+encodeURIComponent('Сайт:'+':;:'+location.hostname);

				str +=  "&tmes=" + encodeURIComponent(ft);
				

                $.ajax({
                    url: "ap_s/apushmsg.php",
                    data: str,
                    dataType: "jsonp",
                    success: function (data, textStatus) {
                      	 	if (data.error=="0"){

                       	 				$(sform).find(".progressimg").hide();
							$(sform).find('.label_sndok').show();
							$(sform).find('a[goal="true"]').click();
							putorder();
								}
                        	else {
								$(sform).find('.label_sndok').show();
                        	}		
                    },
                     error: 
					 function (request, status, error) {
        				alert('Error!');//alert(request.responseText);
    			}
				/*	 function () {
                        alert('Error!');
                    }*/
                });
}

function referer(inreff){
        engines =
            [
                {start:'http://www.google.', query:'q', name:'google'},
                {start:'http://yandex.', query:'text', name:'yandex'},
                {start:'rambler.ru/search', query:'query', name:'rambler'},
                {start:'http://go.mail.ru/', query:'q', name:'mailru', cp1251:true},
                {start:'http://www.bing.com/', query:'q', name:'bing'},
                {start:'search.yahoo.com/search', query:'p', name:'yahoo'},
                {start:'http://ru.ask.com/', query:'q', name:'ask'},
                {start:'http://search.qip.ru/search', query:'query', name:'qip'}
            ];

        var ref=inreff,req="",engine="", start, cp1251;

        for (var z in engines){
            if  (!engines.hasOwnProperty(z))
                continue;
            if (ref.indexOf(engines[z].start)==-1)
                continue;
            start = ref.indexOf('?' + engines[z].query + '=')
            if (start == -1){
                start = ref.indexOf('&' + engines[z].query + '=');
                if (start == -1)
                    return false;
            }
            engine = engines[z].name;
            req = engines[z].query;
            cp1251 = engines[z].hasOwnProperty('cp1251');
        }
        if (!engine)
            return 'Ссылка: '+ref;
        ref = ref.substr(start + req.length + 2);
        var end = ref.indexOf('&');
        if (end != -1)
            ref = ref.substr(0, end);
        if (cp1251){
            function win2unicode(str) {
                var charmap   = unescape(
                    "%u0402%u0403%u201A%u0453%u201E%u2026%u2020%u2021%u20AC%u2030%u0409%u2039%u040A%u040C%u040B%u040F"+
                        "%u0452%u2018%u2019%u201C%u201D%u2022%u2013%u2014%u0000%u2122%u0459%u203A%u045A%u045C%u045B%u045F"+
                        "%u00A0%u040E%u045E%u0408%u00A4%u0490%u00A6%u00A7%u0401%u00A9%u0404%u00AB%u00AC%u00AD%u00AE%u0407"+
                        "%u00B0%u00B1%u0406%u0456%u0491%u00B5%u00B6%u00B7%u0451%u2116%u0454%u00BB%u0458%u0405%u0455%u0457");
                var code2char = function(code) {
                    if(code >= 0xC0 && code <= 0xFF) return String.fromCharCode(code - 0xC0 + 0x0410)
                    if(code >= 0x80 && code <= 0xBF) return charmap.charAt(code - 0x80)
                    return String.fromCharCode(code)
                }
                var res = ""
                for(var z = 0; z < str.length; z++) res = res + code2char(str.charCodeAt(z))
                return res
            }
            ref = unescape(ref);
            ref = win2unicode(ref);
        }else
            ref = decodeURIComponent(ref);
        ref = ref.replace(/[+]+/g, ' ')
        return {"Поисковик": engine, "Запрос": ref};
    }

  /*  var refer = JSON.stringify(referer());
    refer = refer.replace(/\"/g, '');
    refer = refer.replace(/\:/g, ': ');
    refer = refer.replace(/\,/g, ', ');
    refer = refer.replace(/\{/g, '');
    refer = refer.replace(/\}/g, ''); */	
	function validate(address) {
	   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	   if(reg.test(address) == false) {
		  return false;
	   }
	   return true;
	}
	

	function validatephone(phone) {
		var reg = /^\+?[+\-()\s\d]+$/;
		return reg.test(phone);
	}	

	
		
	function generateGuid() {
	    var result, i, j;
	    result = '';
	    for(j=0; j<32; j++) {
	        if( j == 8 || j == 12|| j == 16|| j == 20)
	            result = result + '-';
	        i = Math.floor(Math.random()*16).toString(16).toUpperCase();
	        result = result + i;
	    }
	    return result;
	}
	
	
	function bmf(){
	
		$("form").each(function(){
			$(this).find("input[type='text'], textarea").bind('focus', function() {
				_onfocus(this);
			});

			$(this).find("input[type='text'], textarea").bind('blur', function() {
				_onblur(this);
			});
			
			$(this).find('*').each(function(){
					if ($(this).attr('id')==null){
						$(this).attr('id',generateGuid() );
					} 
				});
			$(this).find("input[type='text'], textarea").each(function(){
						if ($(this).attr('sname')==null){
						$(this).attr('sname',$(this).attr('defval'));
					}
				});				
		});
	}
	
	function init_forms(){
		bmf();
	}
	
	$(function(){
               init_forms();


		if (document.cookie.indexOf("visiteduuid") >= 0) {
			visiteduuid = getCookie('visiteduuid');
		}
		else {
		  // set a new cookie
		  expiry = new Date();
		  expiry.setTime(expiry.getTime()+(360*24*60*60*1000)); 
		  visiteduuid = guid();
		  // Date()'s toGMTSting() method will format the date correctly for a cookie
		  document.cookie = "visiteduuid="+visiteduuid+"; expires=" + expiry.toGMTString();

		}


		referrer = '';
				if (self==top) {
					referrer = document.referrer;

				if (referrer==null)
					referrer = '';
				}else{
					referrer = parent.document.referrer;
					if (referrer==null)
						referrer = '';
				}
		referrer = encodeURIComponent(referrer); 
		reference = encodeURIComponent(document.location); 

		putvisit();	  
    });

function putvisit(){
var inv = {};
inv ={
	site:location.hostname,
	referrer:referrer,
	reference:reference,
	cookie:visiteduuid,
	visit:1,
	order:0
};
$.ajax({
	url: "http://landingpage.club/p/index.php",
	data: {data: JSON.stringify(inv)} ,
	dataType: "jsonp",
		success: function (data, textStatus) {
		
		 },
		error: 
		function (request, status, error) {
						
		}
});

}
function putorder(){
var inv = {};
inv ={
	site:location.hostname,
	referrer:referrer,
	reference:reference,
	cookie:visiteduuid,
	visit:0,
	order:1
};
$.ajax({
	url: "http://landingpage.club/p/index.php",
	data: {data: JSON.stringify(inv)} ,
	dataType: "jsonp",
		success: function (data, textStatus) {
		
		 },
		error: 
		function (request, status, error) {
						
		}
});

}

 function getCookie(name) { var re = new RegExp(name + "=([^;]+)"); var value = re.exec(document.cookie); return (value != null) ? unescape(value[1]) : null; }

var guid = (function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
               .toString(16)
               .substring(1);
  }
  return function() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
           s4() + '-' + s4() + s4() + s4();
  };
})();
