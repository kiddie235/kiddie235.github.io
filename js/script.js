/*===============================
Pre load animate
=================================*/

$(document).ready(function(){	
$('#loader').delay(2500).fadeOut(900);
});

$(document).ready(function(){	
$('#logo').delay(1900).fadeOut(600);
});

/*===============================
Scroll to
=================================*/

$(document).ready(function($) {

$(".scroll").click(function(event){		
event.preventDefault();
$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
});

$(".gotoTop").click(function(){
$('html,body').animate({scrollTop:0},700);
});

});

/*===============================
NiceSroll
=================================*/

$(document).ready(
function() {  
$("html").niceScroll({cursorcolor:"#5a9aa8"});
}
);

/*===============================
Set equal width/height for highlights
=================================*/

$(function() {
var div = $('.work-highlights span');
var width = div.width();
div.css('height', width);
$(window).resize(function(){              //resize window to adjust the height of screenshot
    var width = div.width();
    div.css('height', width);
});
});

/*===============================
Url preview script
=================================*/

this.screenshotPreview = function(){	

xOffset = 125;
yOffset = 90;

$("a.screenshot").hover(function(e){
this.t = this.title;
this.title = "";	
var c = (this.t != "") ? "<br/>" + this.t : "";
$("body").append("<p id='screenshot'><img src='"+ this.rel +"' alt='url preview' />"+ c +"</p>");								 
$("#screenshot")
.css("top",(e.pageY - xOffset) + "px")
.css("left",(e.pageX + yOffset) + "px")
.fadeIn("fast");						
},
function(){
this.title = this.t;	
$("#screenshot").remove();
});	
$("a.screenshot").mousemove(function(e){
$("#screenshot")
.css("top",(e.pageY - xOffset) + "px")
.css("left",(e.pageX + yOffset) + "px");
});			
};


// starting the script on page load
$(document).ready(function(){
screenshotPreview();
});


/*----------------------------------------------------*/
/*	Contact Form
/*----------------------------------------------------*/
$(document).ready(function(){
(function() {
var animateSpeed=1000;

var emailReg = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;

		//if submit button is clicked
        function validateName(name)
        {
                    if (name.val()=='*') 
                        {
                            name.addClass('validation-error',animateSpeed);
                            return false;
                        }
                    else
                        {
                            name.removeClass('validation-error',animateSpeed);
                            return true;
                        }
         }
		 
         function validateEmail(email,regex)
         {
                    if (!regex.test(email.val()))
                        {
                            email.addClass('validation-error',animateSpeed);
                            return false;
                        }
                    else
                        {
                            email.removeClass('validation-error',animateSpeed);
                            return true;
                        }
         }
		 
         function validateMessage(message)
         {
                    if (message.val()=='')
                        {
                            message.addClass('validation-error',animateSpeed);
                            return false;
                        }
                     else
                         {
                             message.removeClass('validation-error',animateSpeed);
                             return true;
                         }
          }
                
		$('#send').click(function()
        {
		// result of action
                var result=true;
                
		//Get the data from all the fields
		var name = $('input[name=name]');
		var email = $('input[name=email]');
		var message = $('textarea[name=message]');
                
                
         // validate of name input
         if(!validateName(name)) result=false;
         if(!validateEmail(email,emailReg)) result=false;
         if(!validateMessage(message)) result=false;
		
         if(result==false) return false;
		//organize the data properly
		var data = 'name=' + name.val() + '&email=' + email.val() + '&message='  + encodeURIComponent(message.val());
		
		//disabled all the text fields
		$('.text').attr('disabled','true');
		
		//show the loading sign
		$('.loading').fadeIn('slow');
		
		//start the ajax
		$.ajax({
		
			//this is the php file that processes the data and send mail
			url: "contact.php",	
			
			//GET method is used
			type: "GET",

			//pass the data			
			data: data,		
			
			//Do not cache the page
			cache: false,
			
			//success
			success: function (html) {				
				//if process.php returned 1/true (send mail success)
				if (html==1) {	

					//show the loading sign
					$('.loading').fadeOut('slow');	
					
					//show the success message
					$('.success-message').delay(1000).slideDown('slow').delay(2500).slideUp('slow');
                                        
                    //deactivate submit
					$('#send').attr('disabled',true);
					
				//if process.php returned 0/false (send mail failed)
				} else 
               
			   {
                  $('.loading').fadeOut('slow')
                  alert('Sorry, unexpected error. Please try again.');				
               }
			   
			}		
		});
		
		//cancel the submit button default behaviours
		return false;
        });
        $('input[name=name]').blur(function(){
           validateName($(this)); 
        });
        $('input[name=email]').blur(function(){
           validateEmail($(this),emailReg); 
        });
        $('textarea[name=message]').blur(function(){
           validateMessage($(this)); 
        });
       
})();
});

//toggle freelancing mode
$(document).ready(function(){
	var height = $('.success-message').height();
	$(".freelancing").click(function(){
		$("#contact-form").slideToggle('slow',function(){
			$('body').animate({scrollTop:$('#contact').offset().top},1000)
		});
	});
});

// //GA
// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
// (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
// m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
// })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

// ga('create', 'UA-41098334-1', 'junjie.li');
// ga('send', 'pageview');
