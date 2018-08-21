var offerJSON = {
				"2":{"gym-name":"IKON Fitness","offer":"upto 40% off on Gym Membership","price":"Rs 6666","link":"/SitePages/gymResult.aspx?searchkey=IKON Fitness","duration":"year","class":"current_item","offer-img":"/SiteAssets/Images/New_Home/offer/5.jpg"},
				"5":{"gym-name":"Toya Fitness","offer":"Get 2 months free on 12 months Membership with Cardio and Steam","price":"Rs 5999","link":"/SitePages/gymResult.aspx?searchkey=Toya Fitness","duration":"year","class":"next_item","offer-img":"/SiteAssets/Images/New_Home/offer/2.jpg"},
				"7":{"gym-name":"PowerHouse Gym","offer":"upto 60% off on Gym Membership","price":"Rs 1099","link":"/SitePages/gymResult.aspx?searchkey=powerhouse gym","duration":"month","class":"previous_item","offer-img":"/SiteAssets/Images/New_Home/offer/3.jpg"},
				"8":{"gym-name":"F2Fitness Gym","offer":"upto 50% off on Gym Membership","price":"Rs 1599","link":"/SitePages/gymResult.aspx?searchkey=F2 Fitness","duration":"15 days","class":"","offer-img":"/SiteAssets/Images/New_Home/offer/1.jpg"},
				"1":{"gym-name":"YFC Gym","offer":"upto 68% off on Gym Membership","price":"Rs 799","link":"/SitePages/gymResult.aspx?searchkey=YFC Gym","duration":"month","class":"","offer-img":"/SiteAssets/Images/New_Home/offer/4.jpg"},
				"6":{"gym-name":"Grace Fitness","offer":"upto 50% off on Gym Membership","price":"Rs 1099","link":"/SitePages/gymResult.aspx?searchkey=Grace Fitness","duration":"month","class":"","offer-img":"/SiteAssets/Images/New_Home/offer/6.jpg"},
				"12":{"gym-name":"Cloud 9","offer":"upto 80% off on Gym Membership","price":"Rs 1099","link":"/SitePages/gymResult.aspx?searchkey=Cloud 9","duration":"month","class":"","offer-img":"/SiteAssets/Images/New_Home/offer/7.jpg"},
				"9":{"gym-name":"PolyGon Fitness","offer":"Flat 50% off on Annual Membership","price":"8550","link":"/SitePages/gymResult.aspx?searchkey=Polygon Fitness","duration":"year","class":"","offer-img":"/SiteAssets/Images/New_Home/offer/3.jpg"},
				"10":{"gym-name":"Body Garage Mulund East","offer":"Flat 50% off on Annual Membership","price":"7500","link":"/SitePages/gymResult.aspx?searchkey=Body Garage&locality=Mulund East","duration":"year","class":"","offer-img":"/SiteAssets/Images/New_Home/offer/1.jpg"},
				"11":{"gym-name":"Body Garage Ghatkopar West","offer":"Flat 50% off on Annual Membership","price":"8500","link":"/SitePages/gymResult.aspx?searchkey=Body Garage&locality=Ghatkopar West","duration":"year","class":"","offer-img":"/SiteAssets/Images/New_Home/offer/2.jpg"},
				"4":{"gym-name":"New Body Garage Thane West","offer":"Flat 50% off on Annual Membership","price":"7999","link":"/SitePages/gymResult.aspx?searchkey=New Body Garage&locality=Thane West","duration":"year","class":"","offer-img":"/SiteAssets/Images/New_Home/offer/6.jpg"},				
				"3":{"gym-name":"World Fitness Forever","offer":"Flat 50% off on Annual Membership","price":"8499","link":"/SitePages/gymResult.aspx?searchkey=World Fitness Forever","duration":"year","class":"","offer-img":"/SiteAssets/Images/New_Home/offer/6.jpg"}				
				};

$(document).ready(function(){
		if(window.outerWidth>=1300){
			var left = window.outerWidth/2-768/2; $('.voucherPopup').css("left",left+'px');
		}
			updateCookie();
			updateMetadata();
			//updateSlide();
			//updateOffer();			
			
			$("#offer-slider").AnimatedSlider( { 
				 prevButton: "#btn-prev", 
				 nextButton: "#btn-next",
				 visibleItems: 3,
				 infiniteScroll: true,
				 willChangeCallback: function(obj, item) { $("#statusText").text("Will change to " + item); },
				 changedCallback: function(obj, item) { $("#statusText").text("Changed to " + item); }
			  });
			  
			updateLink();
			updateLocation();			

			$( ".select-city" ).change(function(){
					var city = $( ".select-city").val();
					setCookie("city",city,7);
					if(city !="Mumbai"){
						window.location.assign('/'+city);
					}
			});		
			
			$('.btn-subscribe').click(function(){
			if($('.news-input input').val()){
				var url="http://gymtrekkerstore.com/site_assets/php/save_subscriber.php";
				var data1="email="+$('.news-input input').val()+"&city="+getCookie("city");
				var requestHeaders = {
		            "accept": "application/json;odata=verbose"
		        }
				$.ajax({
				  type: "POST",
				  url: url,
				  crossDomain: true,
				  async: false, 
				  data: data1,
				  success:  function (data)
				  {
				  if(data=="INVALID"){
				  	$('.news-input').append('<div style="color:red">Invalid Email id please try again</div>')
				  }else
				  {
					  $('.btn-subscribe').hide();
					  $('.news-input').html(data);
				  }
				  }
				});
			}
			});	
			//Request call
			$('.request-call').click(function(){
			var name = $('#Name1').val();
			var mobile=$('#Mobile1').val();
			var location=$('#Location1').val();
				var url="http://gymtrekkerstore.com/site_assets/jdbc/insert_requestcall.php";
				var data1="_name="+name+"&mobile="+mobile+"&location="+location;
				var requestHeaders = {
		            "accept": "application/json;odata=verbose"
		        }
				$.ajax({
				  type: "POST",
				  url: url,
				  crossDomain: true,
				  async: false, 
				  data: data1,
				  success:  function (data)
				  {
				  if($(data).text()=="INVALID"){
				  	$('.login-box').append('<div style="color:red">Invalid Mobile please try again</div>')
				  }else
				  {
					  $('.login-box').html('<div class="form-group" style="height:210px;color:white;text-align:left;font-size:20px;line-height:30px">'+$(data).text()+'</div>');
				  }
				  }
				});
			});

			
			// 15th aug register
			$('.btn-register').click(function(){
			var email = $('.reg-email input').val();
			var phone=$('.reg-mobile input').val();
			var location=$('.reg-location input').val();
				var url="http://gymtrekkerstore.com/site_assets/Special/on_independence.php";
				var data1="email="+email+"&phone="+phone+"&location="+location;
				var requestHeaders = {
		            "accept": "application/json;odata=verbose"
		        }
				$.ajax({
				  type: "POST",
				  url: url,
				  crossDomain: true,
				  async: false, 
				  data: data1,
				  success:  function (data)
				  {
				  if(data=="INVALID Email ID"){
				  	$('#registerBox').append('<div style="color:red">Invalid Email id please try again</div>')
				  }else
				  {
					  $('.btn-register').hide();
					  $('#registerBox').hide();
					  $('.reg-btn').html(data);
					  setTimeout(function(){ closeCityPopup(); }, 2000);
				  }
				  }
				});
			});
			
			$('.sc-dropdown .list-li').click(function(){
				$(this).addClass('selectedCategory');
				searchGym();
			});
			setInterval(function () {$('#btn-next').click();}, 5000);
						var $ui = $('.search-bar');											
			
			//Search By Name
			$ui.find('.s-name').bind('focus click',function(){
				$ui.find('.sn-ic')
				   .addClass('ic-up')
				   .removeClass('ic-down')
				   .andSelf()
				   .find('.sn-dropdown')
				   .show();
			});
			$ui.bind('mouseleave',function(){
				$ui.find('.sn-ic')
				   .addClass('ic-down')
				   .removeClass('ic-up')
				   .andSelf()
				   .find('.sn-dropdown')
				   .hide();
			});
			$ui.find('.sn-dropdown').find('div[data-value="fitness"]').prev().bind('click',function(){
				$(this).parent().siblings().find(':checkbox').attr('checked',this.checked).attr('disabled',this.checked);
			});
			
			//Search By Locations
			$ui.find('.s-loc').bind('focus click',function(){
				$ui.find('.sl-ic')
				   .addClass('ic-up')
				   .removeClass('ic-down')
				   .andSelf()
				   .find('.sl-dropdown')
				   .show();
			});
			$ui.bind('mouseleave',function(){
				$ui.find('.sl-ic')
				   .addClass('ic-down')
				   .removeClass('ic-up')
				   .andSelf()
				   .find('.sl-dropdown')
				   .hide();
			});
			$ui.find('.sl-dropdown').find('div[data-value="fitness"]').prev().bind('click',function(){
				$(this).parent().siblings().find(':checkbox').attr('checked',this.checked).attr('disabled',this.checked);
			});
			
			//Search By Category
			$ui.find('.s-cat').bind('focus click',function(){
				$ui.find('.sc-ic')
				   .addClass('ic-up')
				   .removeClass('ic-down')
				   .andSelf()
				   .find('.sc-dropdown')
				   .show();
			});
			$ui.bind('mouseleave',function(){
				$ui.find('.sc-ic')
				   .addClass('ic-down')
				   .removeClass('ic-up')
				   .andSelf()
				   .find('.sc-dropdown')
				   .hide();
			});
			$ui.find('.sc-dropdown').find('div[data-value="fitness"]').prev().bind('click',function(){
				$(this).parent().siblings().find(':checkbox').attr('checked',this.checked).attr('disabled',this.checked);
			});
					
});
 

$( ".search-bar input" ).keypress(function( event ) {
  if ( event.which == 13 ) {
  	event.preventDefault();
  	searchGym();
     //window.location.assign("/SitePages/gymResult.aspx?searchkey="+$('.searchdemo').val());
  }
});

function updateMetadata(){
var keywords,desc,titleText;
titleText = 'Best Gyms in  '+getCookie("city")+' | Yoga & Zumba Classes in  '+getCookie("city")+' |GymTrekker'
desc = 'Discover the best gyms in '+getCookie("city")+', Yoga, Zumba, and Fitness Classes in '+getCookie("city")+'. Find phone numbers, addresses, reviews & ratings of the Gyms only at GymTrekker';
keywords ='Gyms in '+getCookie("city")+', Zumba Classes in '+getCookie("city")+', Fitness';
$('title').text(titleText)
$('meta[name="author"]').attr('content','Harshit Sethy');
$('meta[name="keywords"]').attr('content',keywords);
$('meta[name="description"]').attr('content',desc);
}

function closeCityPopup(){
	$('.overlay').hide();
	$('.voucherPopup').hide();
}


function subscribe(){
var url="http://gymtrekkerstore.com/site_assets/php/save_subscriber.php";
var data="email=hsethy1@gmail.com";
var requestHeaders = {
            "accept": "application/json;odata=verbose"
        }
jQuery.ajax({
  type: "POST",
  url: url,
  crossDomain: true,
  async: false, 
  data: data,
  headers:  requestHeaders ,
  dataType: "json"
});
}

function updateSlide(){
	//$('.slide-2 img').attr("src","");
	$('.slide-2 .hps-title1').text("IKON FITNESS");
	var oHTML = 'upto 40% off on Gym Membership <span class="white-t">Rs 6666/-</span> <br><span class="no-bold"></span>';
	$('.slide-2 .hps-title3').html(oHTML);
	$('.slide-3 .hps-title1').text("BODY GARAGE");
	oHTML = 'Get flat 50% off & get a gym kit worth Rs 5499/- free on Annual Membership <span class="no-bold"> for location: Thane west, Mulund east, Ghatkopar west</span><br>';
	$('.slide-3 .hps-title3').html(oHTML);
	$('.slide-3 .hps-title4').text("Buy Now");
	
}

function updateLink(){
	$('.sc-dropdown').append('<div class="list-li" data-value="zumba"><span class="se-icon fa icon-dance"></span><span> Zumba</span></div>');
	var link = "http://www.gymtrekker.com/SitePages/gymresult.aspx?feature=Hidden%20gym%20spots%20&%20Gems&city="+getCookie("city");
	$('.hiddenspot').attr("href",link);
	var link = "http://www.gymtrekker.com/SitePages/gymresult.aspx?feature=24x7%20GYMS&city="+getCookie("city");
	$('.24x7').attr("href",link);
	var link = "http://www.gymtrekker.com/SitePages/gymresult.aspx?feature=Gym%20with%20Pool%20and%20DJ&city="+getCookie("city");
	$('.gymwithpool').attr("href",link);
	var link = "http://www.gymtrekker.com/SitePages/gymresult.aspx?feature=Trending%20this%20Week&city="+getCookie("city");
	$('.trendingnow').attr("href",link);
	var link = "http://www.gymtrekker.com/SitePages/gymresult.aspx?feature=5%20Star%20Franchise%20Gym&city="+getCookie("city");
	$('.5stargyms').attr("href",link);
	$('.estore-block a').attr("href","http://www.gymtrekkerstore.com");
	$('.estore').attr("href","http://www.gymtrekkerstore.com");
	//$('.video-inner video source').attr("src","")	
	$('.twitter').attr("href","https://twitter.com/gymtrekker1");
	$('.facebook').attr("href","https://www.facebook.com/gymtrekker");
	$('.instagram').attr("href","https://instagram.com/gymtrekker");
	$('.google-plus').attr("href","https://plus.google.com/101691269007444749282");
	$('.aboutus').attr("href","about-us");
	$('.howitworks').attr("href","/howitworks");
	$('.contactus').attr("href","/contact-us");
	$('.logo a').attr("href","http://www.gymtrekker.com");
	$('.dis-fit-text').html('Discover Fitness in <span class="orange-text">MUMBAI</span> , <span class="orange-text">PUNE</span> &amp; <span class="orange-text">BANGALORE</span>');
	$('.compilations').attr('href','/collection');
}

function updateOffer(){
	var oHTML = '';
	var row='';
	for(i=1;i<13;i++){
		row = offerJSON[i.toString()];
		 oHTML += '<li class="current_item"><a href="'+row["link"]+'">\
                <div class="gym-name">'+row["gym-name"]+'</div>\
                <div class="gym-off white">'+row["offer"]+'</div>\
                <div class="gym-price">from <br>\
                  <span class="bold">'+row["price"]+'/</span> '+row["duration"]+'</div>\
                <img src="'+row["offer-img"]+'"></a></li>'
	}
	oHTML +=oHTML;
	$('#offer-slider').html(oHTML);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function updateCookie(){
			$( ".select-city").append('<option class="Bangalore">Bangalore</option><option class="Hyderabad">Hyderabad</option><option class="Ahmedabad">Ahmedabad</option><option class="Goa">Goa</option><option class="Aurangabad">Aurangabad</option><option class="Nasik">Nasik</option>');			
			if(!getCookie("city")){
				setCookie("city","Mumbai",7);
				//window.location.assign('/Hyderabad')
			}else{
				var city = getCookie("city");
				$(".select-city").val(city);
				if(city !="Mumbai"){
					window.location.assign('/'+city);
				}
			}
}
			
function updateLocation(){
			var oHTMLChumk ="";
			var gLocality,gCity;
			var GymLocalityJSON = {};
			//alert(data.d.results.length)
			$('.locationList').each(function () {
				gCity = $(this).children('.cityName').text();
				gCity = gCity.toLowerCase();
				gLocality =  $(this).children('.locality').text();
				if(gLocality!=''){
				gLocality = gLocality.toUpperCase();
				gLocality = gLocality.trim();
			 	gLocalityCity = gLocality+","+gCity;
					if(parseInt(GymLocalityJSON[gLocalityCity ])>=1)
					{
						GymLocalityJSON[gLocalityCity ] = parseInt(GymLocalityJSON[gLocalityCity ])+1; 
                	}else{
                		GymLocalityJSON[gLocalityCity ] = 1;
                	}
                }
			});
			$.each(GymLocalityJSON , function (index, value) {
				var tempCity = index.split(",")[1];
				var tempLocality = index.split(",")[0];
				oHTMLChumk +='<div class="col-md-3 col-sm-4 col-xs-6 '+tempCity+' '+tempLocality[0]+'"><a href="http://www.gymtrekker.com/sitePages/gymResult.aspx?city='+tempCity+'&searchkey='+tempLocality+'" >'+tempLocality+'<span class="localityCount">('+value+')</span></a></div>';
			});
			$('.ms-hide').hide();
			$('.localityList').html(oHTMLChumk);
			var oHTML = '';			
			$('.pagination a').each(function(){
				var alpha = $(this).text();
				oHTML += '<li>'+alpha+'</li>';
			});
			$('.pagination').html(oHTML);
			$('.pagination li').click(function(){
				var temp = $(this).text();
				$('.localityList div').hide();
				var tempShow = '.'+temp;
				$(tempShow).show();				
			});			
}

function searchGym(){
	var locality='',classes='',searchkey='',city='';
	if($('.loctionBox input').val()){		
		locality = encodeURIComponent($('.loctionBox input').val());
		locality = "searchkey="+locality.trim()+"&";
	}
	if($('.gymNameBox input').val()){
		searchkey= encodeURIComponent($('.gymNameBox input').val());
		searchkey="searchkey="+searchkey.trim()+"&";
		if($('.loctionBox input').val()){		
			locality = $('.loctionBox input').val();
			locality = "&locality="+locality.trim()+"&";
		}
	}
	if($('.selectedCategory').text()){
		classes= $('.selectedCategory').text();
		classes="classes="+classes.trim()+"&";
	}
	city = getCookie("city");
	if($('.selectedCategory').text().trim()=="Gyms"||$('.selectedCategory').text()=="All Fitness Options"){
		window.location.assign("/SitePages/allgyms.aspx?"+classes+searchkey+locality+"city="+city);		
	}else if($('.selectedCategory').text().trim()=="Yoga"){
		searchkey="searchkey=yoga&";
		window.location.assign("/SitePages/yogaResult.aspx?"+searchkey+locality+"city="+city);			
	}else if($('.selectedCategory').text().trim()=="Swimming"){
		window.location.assign("/SitePages/gymResult.aspx?amenities=Pool&city="+city);
	}else{
		window.location.assign("/SitePages/gymResult.aspx?"+classes+searchkey+locality+"city="+city);	
	}	
}

 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-57021365-1', 'auto');
  ga('send', 'pageview');


_atrk_opts = { atrk_acct:"w1HFl1aAFUE052", domain:"gymtrekker.com",dynamic: true};
(function() { var as = document.createElement('script'); as.type = 'text/javascript'; as.async = true; as.src = "https://d31qbv1cthcecs.cloudfront.net/atrk.js"; var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(as, s); })();
