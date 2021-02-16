/**
* setLanguage 
* use $.lang[currentLanguage][languageNumber]
*/
function setLanguage(currentLanguage) {
    console.log('setLanguage', arguments);

	//언어 저장
	localStorage.setItem("locale", arguments[0]);

    var title = '';
    var description = '';
    var site_name = '';
    
    $('[data-langNum]').each(function() {
      var $this = $(this);


      $this.html($.lang[currentLanguage][$this.data('langnum')]); 
	});
  }  
   
  // 언어 변경
  $('.lang_list ul li a').click(function() {
    var lang = $(this).data('lang');
    //var lang = 'de';
    setLanguage(lang); 
    $(".lang_list ul li").removeClass("active");
	$(".lang_list").removeClass("active");
	
    $(this).parent().addClass("active");

    $("body").removeClass("en");
    $("body").removeClass("de");
    $("body").removeClass("ar");
    $("body").removeClass("es");
    $("body").removeClass("fr");
    $("body").removeClass("mx");
    $("body").removeClass("hi");
    $("body").removeClass("it");
    $("body").removeClass("jp");

    $("body").removeClass("kr");
    $("body").removeClass("ms");
    $("body").removeClass("br");
    $("body").removeClass("pt");
    $("body").removeClass("ru");
    $("body").removeClass("th");
    $("body").removeClass("tr");
    $("body").removeClass("hans");
    $("body").removeClass("hant");
    $("body").removeClass("vi");
    
    
    $("body").addClass(lang); 
	$("body").removeClass("overhide");
  });

//ip
 var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

  var ip = "";
    var hostname = "";
    var city = "";
    var region = "";
    var country = "";
    var loc = "";
    var org = "";

	var isLang = localStorage.getItem("locale");
	var urlLang  = getUrlParameter('lang');
	isLang = urlLang ? urlLang : isLang;
	localStorage.setItem("locale", isLang);

	if(isLang) {
		if(isLang == "en"){
			$("body").addClass("en");
		}else if(isLang == "de"){
			$("body").addClass("de");
			$(".lang_list ul li.en").removeClass("active");
			$(".lang_list ul li.de").addClass("active");
			var lang = 'de';
			setLanguage(lang); 
		}else if(isLang == "ar"){
			$("body").addClass("ar");
			$(".lang_list ul li.en").removeClass("active");
			$(".lang_list ul li.ar").addClass("active");
			var lang = 'ar';
			setLanguage(lang); 
		}else if(isLang == "es"){
			$("body").addClass("es");
			$(".lang_list ul li.en").removeClass("active");
			$(".lang_list ul li.es").addClass("active");
			var lang = 'es';
			setLanguage(lang); 
		}else if(isLang == "fr"){
			$("body").addClass("fr");
			$(".lang_list ul li.en").removeClass("active");
			$(".lang_list ul li.fr").addClass("active");
			var lang = 'fr';
			setLanguage(lang); 
		}else if(isLang == "mx"){
			$("body").addClass("ex-MX");
			$(".lang_list ul li.en").removeClass("active");
			$(".lang_list ul li.ex-MX").addClass("active");
			var lang = 'mx';
			setLanguage(lang); 
		}else if(isLang == "hi"){
			$("body").addClass("hi");
			$(".lang_list ul li.en").removeClass("active");
			$(".lang_list ul li.hi").addClass("active");
			var lang = 'hi';
			setLanguage(lang); 
		}else if(isLang == "it"){
			$("body").addClass("it");
			$(".lang_list ul li.en").removeClass("active");
			$(".lang_list ul li.it").addClass("active");
			var lang = 'it';
			setLanguage(lang); 
		}else if(isLang == "jp"){
			$("body").addClass("jp");
			$(".lang_list ul li.en").removeClass("active");
			$(".lang_list ul li.jp").addClass("active");
			var lang = 'jp';
			setLanguage(lang); 
		}else if(isLang == "kr"){
			$("body").addClass("kr");
			$(".lang_list ul li.en").removeClass("active");
			$(".lang_list ul li.kr").addClass("active");
			var lang = 'kr';
			setLanguage(lang); 
		}else if(isLang == "ms"){
			$("body").addClass("ms");
			$(".lang_list ul li.en").removeClass("active");
			$(".lang_list ul li.ms").addClass("active");
			var lang = 'ms';
			setLanguage(lang); 
		}else if(isLang == "br"){
			$("body").addClass("pt-BR");
			$(".lang_list ul li.en").removeClass("active");
			$(".lang_list ul li.pt-BR").addClass("active");
			var lang = 'br';
			setLanguage(lang); 
		}else if(isLang == "pt"){
			$("body").addClass("pt-PT");
			$(".lang_list ul li.en").removeClass("active");
			$(".lang_list ul li.pt-PT").addClass("active");
			var lang = 'pt';
			setLanguage(lang); 
		}else if(isLang == "ru"){
			$("body").addClass("ru");
			$(".lang_list ul li.en").removeClass("active");
			$(".lang_list ul li.ru").addClass("active");
			var lang = 'ru';
			setLanguage(lang); 
		}else if(isLang == "th"){
			$("body").addClass("th");
			$(".lang_list ul li.en").removeClass("active");
			$(".lang_list ul li.th").addClass("active");
			var lang = 'th';
			setLanguage(lang); 
		}else if(isLang == "tr"){
			$("body").addClass("tr");
			$(".lang_list ul li.en").removeClass("active");
			$(".lang_list ul li.tr").addClass("active");
			var lang = 'tr';
			setLanguage(lang); 
		}else if(isLang == "hans"){
			$("body").addClass("zh-Hans");
			$(".lang_list ul li.en").removeClass("active");
			$(".lang_list ul li.zh-Hans").addClass("active");
			var lang = 'hans';
			setLanguage(lang); 
		}else if(isLang == "hant"){
			$("body").addClass("zh-Hant");
			$(".lang_list ul li.en").removeClass("active");
			$(".lang_list ul li.zh-Hant").addClass("active");
			var lang = 'hant';
			setLanguage(lang); 
		}else if(isLang == "vi"){
			$("body").addClass("vi");
			$(".lang_list ul li.en").removeClass("active");
			$(".lang_list ul li.vi").addClass("active");
			var lang = 'vi';
			setLanguage(lang); 
		}





	} else {
		$.getJSON("http://ipinfo.io", function(data) {
			ip = data.ip // 접속자 ip
			hostname = data.hostname // 접속자 hostname
			city = data.city // 접속자 도시
			region = data.region // 접속자 지역
			country = data.country // 접속자 국가
			loc = data.loc // 접속 위도, 경도
			org = data.org // ISP (인터넷 서비스 제공사업자)

			if(country == "EN"){
				console.log(data);
				$("body").addClass("en");
			}else if(country == "DE"){
				console.log(data);
				$("body").addClass("de");
				$(".lang_list ul li.en").removeClass("active");
				$(".lang_list ul li.de").addClass("active");
				var lang = 'de';
				setLanguage(lang); 
			}else if(country == "AR"){
				console.log(data);
				$("body").addClass("ar");
				$(".lang_list ul li.en").removeClass("active");
				$(".lang_list ul li.ar").addClass("active");
				var lang = 'ar';
				setLanguage(lang); 
			}else if(country == "ES"){
				console.log(data);
				$("body").addClass("es");
				$(".lang_list ul li.en").removeClass("active");
				$(".lang_list ul li.es").addClass("active");
				var lang = 'es';
				setLanguage(lang); 
			}else if(country == "FR"){
				console.log(data);
				$("body").addClass("fr");
				$(".lang_list ul li.en").removeClass("active");
				$(".lang_list ul li.fr").addClass("active");
				var lang = 'fr';
				setLanguage(lang); 
			}else if(country == "EX-MX"){
				console.log(data);
				$("body").addClass("ex-MX");
				$(".lang_list ul li.en").removeClass("active");
				$(".lang_list ul li.ex-MX").addClass("active");
				var lang = 'mx';
				setLanguage(lang); 
			}else if(country == "HI"){
				console.log(data);
				$("body").addClass("hi");
				$(".lang_list ul li.en").removeClass("active");
				$(".lang_list ul li.hi").addClass("active");
				var lang = 'hi';
				setLanguage(lang); 
			}else if(country == "IT"){
				console.log(data);
				$("body").addClass("it");
				$(".lang_list ul li.en").removeClass("active");
				$(".lang_list ul li.it").addClass("active");
				var lang = 'it';
				setLanguage(lang); 
			}else if(country == "JP"){
				console.log(data);
				$("body").addClass("jp");
				$(".lang_list ul li.en").removeClass("active");
				$(".lang_list ul li.jp").addClass("active");
				var lang = 'jp';
				setLanguage(lang); 
			}else if(country == "KR"){
				console.log(data);
				$("body").addClass("kr");
				$(".lang_list ul li.en").removeClass("active");
				$(".lang_list ul li.kr").addClass("active");
				var lang = 'kr';
				setLanguage(lang); 
			}else if(country == "MS"){
				console.log(data);
				$("body").addClass("ms");
				$(".lang_list ul li.en").removeClass("active");
				$(".lang_list ul li.ms").addClass("active");
				var lang = 'ms';
				setLanguage(lang); 
			}else if(country == "PT-BR"){
				console.log(data);
				$("body").addClass("pt-BR");
				$(".lang_list ul li.en").removeClass("active");
				$(".lang_list ul li.pt-BR").addClass("active");
				var lang = 'br';
				setLanguage(lang); 
			}else if(country == "PT-PT"){
				console.log(data);
				$("body").addClass("pt-PT");
				$(".lang_list ul li.en").removeClass("active");
				$(".lang_list ul li.pt-PT").addClass("active");
				var lang = 'pt';
				setLanguage(lang); 
			}else if(country == "RU"){
				console.log(data);
				$("body").addClass("ru");
				$(".lang_list ul li.en").removeClass("active");
				$(".lang_list ul li.ru").addClass("active");
				var lang = 'ru';
				setLanguage(lang); 
			}else if(country == "TH"){
				console.log(data);
				$("body").addClass("th");
				$(".lang_list ul li.en").removeClass("active");
				$(".lang_list ul li.th").addClass("active");
				var lang = 'th';
				setLanguage(lang); 
			}else if(country == "TR"){
				console.log(data);
				$("body").addClass("tr");
				$(".lang_list ul li.en").removeClass("active");
				$(".lang_list ul li.tr").addClass("active");
				var lang = 'tr';
				setLanguage(lang); 
			}else if(country == "ZH-HANS"){
				console.log(data);
				$("body").addClass("zh-Hans");
				$(".lang_list ul li.en").removeClass("active");
				$(".lang_list ul li.zh-Hans").addClass("active");
				var lang = 'hans';
				setLanguage(lang); 
			}else if(country == "ZH-HANT"){
				console.log(data);
				$("body").addClass("zh-Hant");
				$(".lang_list ul li.en").removeClass("active");
				$(".lang_list ul li.zh-Hant").addClass("active");
				var lang = 'hant';
				setLanguage(lang); 
			}else if(country == "VI"){
				console.log(data);
				$("body").addClass("vi");
				$(".lang_list ul li.en").removeClass("active");
				$(".lang_list ul li.vi").addClass("active");
				var lang = 'vi';
				setLanguage(lang); 
			}
		});
	}

 
