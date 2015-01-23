$(document).ready(function(){
  "use strict";
  $(".imgOut").on("click", function(event){
    event.preventDefault();
    $("header").css("width","85%");
    $("header").css("background-color","transparent");
    $("#rightWrapper").css("width","85%");
    $("nav").removeClass("invis");

  });
});








// $(document).ready(function(){
//   "use strict";
//   var $Album1 = $(".smallRow a").eq(0);
//   var $Album2 = $(".smallRow a").eq(1);
//   var $Album3 = $(".smallRow a").eq(2);
//   var $Album4 = $(".smallRow a").eq(3);
//   var $Album5 = $(".smallRow a").eq(4);
//   var $Album6 = $(".smallRow a").eq(5);
//
//   var $Album1Button = $("nav a").eq(0);
//   var $Album2Button = $("nav a").eq(1);
//   var $Album3Button = $("nav a").eq(2);
//   var $Album4Button = $("nav a").eq(3);
//   var $Album5Button = $("nav a").eq(4);
//   var $Album6Button = $("nav a").eq(5);
//
//   $Album1.add($Album1Button).click(function Alb1(event){
//     event.preventDefault();
//     $("header").css("background-color","transparent");
//     $("header").css("width","80%");
//     $("header h1").text("Album 1");
//     $("#rightWrapper").css("width","80%");
//     $("nav").removeClass("invis");
//     $("nav").css("height","600px");
//     $(".smallRow").eq(1).css("display","none");
//     $(".smallRow a").css({"width":"300px","height":"400px","line-height":"750px"});
//     $(".smallRow a").eq(0).css("background-image","url(http://www.fillmurray.com/300/400)");
//     $(".smallRow a").eq(1).css("background-image","url(http://www.fillmurray.com/g/300/400)");
//     $(".smallRow a").eq(2).css("background-image","url(http://www.fillmurray.com/g/350/450)");
//     $(".smallRow a").eq(0).text("Photo 1");
//     $(".smallRow a").eq(1).text("Photo 2");
//     $(".smallRow a").eq(2).text("Photo 3");
//     $("header a").addClass("invis");
//     $(".smallRow a").siblings().css("display","block");
//     $($Album1).click(function(event){
//       $(this).siblings().css("display","none");
//       $(this).css({"width":"600px","height":"600px","line-height":"1150px","background-size":"cover",
//       "background-image":"url(http://www.fillmurray.com/300/400)"});
//       $("nav").addClass("invis");
//       $("#rightWrapper").css("width","100%");
//       $("header").css("width","100%");
//       $("header h1").text("Photo 1");
//       $("header a").removeClass("invis");
//       $("header a").text("Back to Album 1");
//       $("header a").click(Alb1);
//     });
//     $($Album2).click(function(event){
//       $(this).siblings().css("display","none");
//       $(this).css({"width":"600px","height":"600px","line-height":"1150px","background-size":"cover",
//       "background-image":"url(http://www.fillmurray.com/g/300/400)"});
//       $("nav").addClass("invis");
//       $("#rightWrapper").css("width","100%");
//       $("header").css("width","100%");
//       $("header h1").text("Photo 2");
//       $("header a").removeClass("invis");
//       $("header a").text("Back to Album 1");
//       $("header a").click(Alb1);
//     });
//     $($Album3).click(function(event){
//       $(this).siblings().css("display","none");
//       $(this).css({"width":"600px","height":"600px","line-height":"1150px","background-size":"cover",
//       "background-image":"url(http://www.fillmurray.com/g/350/450)"});
//       $("nav").addClass("invis");
//       $("#rightWrapper").css("width","100%");
//       $("header").css("width","100%");
//       $("header h1").text("Photo 3");
//       $("header a").removeClass("invis");
//       $("header a").text("Back to Album 1");
//       $("header a").click(Alb1);
//     });
//   });
//
//   $($Album2).add($Album2Button).click(function Alb2(event){
//     event.preventDefault();
//     $("header").css("background-color","transparent");
//     $("header").css("width","80%");
//     $("header h1").text("Album 2");
//     $("#rightWrapper").css("width","80%");
//     $("nav").removeClass("invis");
//     $("nav").css("height","600px");
//     $(".smallRow").eq(1).css("display","none");
//     $(".smallRow a").css({"width":"300px","height":"400px","line-height":"750px"});
//     $(".smallRow a").eq(0).css("background-image","url(http://lorempixel.com/300/400/nightlife)");
//     $(".smallRow a").eq(1).css("background-image","url(http://lorempixel.com/301/401/nightlife)");
//     $(".smallRow a").eq(2).css("background-image","url(http://lorempixel.com/355/455/nightlife)");
//     $(".smallRow a").eq(0).text("Photo 1");
//     $(".smallRow a").eq(1).text("Photo 2");
//     $(".smallRow a").eq(2).text("Photo 3");
//     $("header a").addClass("invis");
//     $(".smallRow a").siblings().css("display","block");
//     $($Album1).click(function(event){
//       $(this).siblings().css("display","none");
//       $(this).css({"width":"600px","height":"600px","line-height":"1150px","background-size":"cover",
//       "background-image":"url(http://lorempixel.com/300/400/nightlife)"});
//       $("nav").addClass("invis");
//       $("#rightWrapper").css("width","100%");
//       $("header").css("width","100%");
//       $("header h1").text("Photo 1");
//       $("header a").removeClass("invis");
//       $("header a").text("Back to Album 2");
//       $("header a").click(Alb2);
//     });
//     $($Album2).click(function(event){
//       $(this).siblings().css("display","none");
//       $(this).css({"width":"600px","height":"600px","line-height":"1150px","background-size":"cover",
//       "background-image":"url(http://lorempixel.com/301/401/nightlife)"});
//       $("nav").addClass("invis");
//       $("#rightWrapper").css("width","100%");
//       $("header").css("width","100%");
//       $("header h1").text("Photo 2");
//       $("header a").removeClass("invis");
//       $("header a").text("Back to Album 2");
//       $("header a").click(Alb2);
//     });
//     $($Album3).click(function(event){
//       $(this).siblings().css("display","none");
//       $(this).css({"width":"600px","height":"600px","line-height":"1150px","background-size":"cover",
//       "background-image":"url(http://lorempixel.com/355/455/nightlife)"});
//       $("nav").addClass("invis");
//       $("#rightWrapper").css("width","100%");
//       $("header").css("width","100%");
//       $("header h1").text("Photo 3");
//       $("header a").removeClass("invis");
//       $("header a").text("Back to Album 2");
//       $("header a").click(Alb2);
//     });
//   });
//   $($Album3).add($Album3Button).click(function Alb3(event){
//     event.preventDefault();
//     $("header").css("background-color","transparent");
//     $("header").css("width","80%");
//     $("header h1").text("Album 3");
//     $("#rightWrapper").css("width","80%");
//     $("nav").removeClass("invis");
//     $("nav").css("height","600px");
//     $(".smallRow").eq(1).css("display","none");
//     $(".smallRow a").css({"width":"300px","height":"400px","line-height":"750px"});
//     $(".smallRow a").eq(0).css("background-image","url(http://lorempixel.com/300/400/city)");
//     $(".smallRow a").eq(1).css("background-image","url(http://lorempixel.com/301/401/city)");
//     $(".smallRow a").eq(2).css("background-image","url(http://lorempixel.com/350/450/city)");
//     $(".smallRow a").eq(0).text("Photo 1");
//     $(".smallRow a").eq(1).text("Photo 2");
//     $(".smallRow a").eq(2).text("Photo 3");
//     $("header a").addClass("invis");
//     $(".smallRow a").siblings().css("display","block");
//     $($Album1).click(function(event){
//       $(this).siblings().css("display","none");
//       $(this).css({"width":"600px","height":"600px","line-height":"1150px","background-size":"cover",
//       "background-image":"url(http://lorempixel.com/300/400/city)"});
//       $("nav").addClass("invis");
//       $("#rightWrapper").css("width","100%");
//       $("header").css("width","100%");
//       $("header h1").text("Photo 1");
//       $("header a").removeClass("invis");
//       $("header a").text("Back to Album 3");
//       $("header a").click(Alb3);
//     });
//     $($Album2).click(function(event){
//       $(this).siblings().css("display","none");
//       $(this).css({"width":"600px","height":"600px","line-height":"1150px","background-size":"cover",
//       "background-image":"url(http://lorempixel.com/301/401/city)"});
//       $("nav").addClass("invis");
//       $("#rightWrapper").css("width","100%");
//       $("header").css("width","100%");
//       $("header h1").text("Photo 2");
//       $("header a").removeClass("invis");
//       $("header a").text("Back to Album 3");
//       $("header a").click(Alb3);
//     });
//     $($Album3).click(function(event){
//       $(this).siblings().css("display","none");
//       $(this).css({"width":"600px","height":"600px","line-height":"1150px","background-size":"cover",
//       "background-image":"url(http://lorempixel.com/350/450/city)"});
//       $("nav").addClass("invis");
//       $("#rightWrapper").css("width","100%");
//       $("header").css("width","100%");
//       $("header h1").text("Photo 3");
//       $("header a").removeClass("invis");
//       $("header a").text("Back to Album 3");
//       $("header a").click(Alb3);
//     });
//   });
//   $Album4.add($Album4Button).click(function Alb4(event){
//     event.preventDefault();
//     $("header").css("background-color","transparent");
//     $("header").css("width","80%");
//     $("header h1").text("Album 4");
//     $("#rightWrapper").css("width","80%");
//     $("nav").removeClass("invis");
//     $("nav").css("height","600px");
//     $(".smallRow").eq(1).css("display","none");
//     $(".smallRow a").css({"width":"300px","height":"400px","line-height":"750px"});
//     $(".smallRow a").eq(0).css("background-image","url(http://lorempixel.com/300/400/nature)");
//     $(".smallRow a").eq(1).css("background-image","url(http://lorempixel.com/301/401/nature)");
//     $(".smallRow a").eq(2).css("background-image","url(http://lorempixel.com/355/455/nature)");
//     $(".smallRow a").eq(0).text("Photo 1");
//     $(".smallRow a").eq(1).text("Photo 2");
//     $(".smallRow a").eq(2).text("Photo 3");
//     $("header a").addClass("invis");
//     $(".smallRow a").siblings().css("display","block");
//     $($Album1).click(function(event){
//       $(this).siblings().css("display","none");
//       $(this).css({"width":"600px","height":"600px","line-height":"1150px","background-size":"cover",
//       "background-image":"url(http://lorempixel.com/300/400/nature)"});
//       $("nav").addClass("invis");
//       $("#rightWrapper").css("width","100%");
//       $("header").css("width","100%");
//       $("header h1").text("Photo 1");
//       $("header a").removeClass("invis");
//       $("header a").text("Back to Album 4");
//       $("header a").click(Alb4);
//     });
//     $($Album2).click(function(event){
//       $(this).siblings().css("display","none");
//       $(this).css({"width":"600px","height":"600px","line-height":"1150px","background-size":"cover",
//       "background-image":"url(http://lorempixel.com/301/401/nature)"});
//       $("nav").addClass("invis");
//       $("#rightWrapper").css("width","100%");
//       $("header").css("width","100%");
//       $("header h1").text("Photo 2");
//       $("header a").removeClass("invis");
//       $("header a").text("Back to Album 4");
//       $("header a").click(Alb4);
//     });
//     $($Album3).click(function(event){
//       $(this).siblings().css("display","none");
//       $(this).css({"width":"600px","height":"600px","line-height":"1150px","background-size":"cover",
//       "background-image":"url(http://lorempixel.com/355/455/nature)"});
//       $("nav").addClass("invis");
//       $("#rightWrapper").css("width","100%");
//       $("header").css("width","100%");
//       $("header h1").text("Photo 3");
//       $("header a").removeClass("invis");
//       $("header a").text("Back to Album 4");
//       $("header a").click(Alb4);
//     });
//   });
//   $($Album5).add($Album5Button).click(function Alb5(event){
//     event.preventDefault();
//     $("header").css("background-color","transparent");
//     $("header").css("width","80%");
//     $("header h1").text("Album 5");
//     $("#rightWrapper").css("width","80%");
//     $("nav").removeClass("invis");
//     $("nav").css("height","600px");
//     $(".smallRow").eq(1).css("display","none");
//     $(".smallRow a").css({"width":"300px","height":"400px","line-height":"750px"});
//     $(".smallRow a").eq(0).css("background-image","url(http://lorempixel.com/300/400/sports)");
//     $(".smallRow a").eq(1).css("background-image","url(http://lorempixel.com/301/401/sports)");
//     $(".smallRow a").eq(2).css("background-image","url(http://lorempixel.com/355/455/sports)");
//     $(".smallRow a").eq(0).text("Photo 1");
//     $(".smallRow a").eq(1).text("Photo 2");
//     $(".smallRow a").eq(2).text("Photo 3");
//     $("header a").addClass("invis");
//     $(".smallRow a").siblings().css("display","block");
//     $($Album1).click(function(event){
//       $(this).siblings().css("display","none");
//       $(this).css({"width":"600px","height":"600px","line-height":"1150px","background-size":"cover",
//       "background-image":"url(http://lorempixel.com/300/400/sports)"});
//       $("nav").addClass("invis");
//       $("#rightWrapper").css("width","100%");
//       $("header").css("width","100%");
//       $("header h1").text("Photo 1");
//       $("header a").removeClass("invis");
//       $("header a").text("Back to Album 5");
//       $("header a").click(Alb5);
//     });
//     $($Album2).click(function(event){
//       $(this).siblings().css("display","none");
//       $(this).css({"width":"600px","height":"600px","line-height":"1150px","background-size":"cover",
//       "background-image":"url(http://lorempixel.com/301/401/sports)"});
//       $("nav").addClass("invis");
//       $("#rightWrapper").css("width","100%");
//       $("header").css("width","100%");
//       $("header h1").text("Photo 2");
//       $("header a").removeClass("invis");
//       $("header a").text("Back to Album 5");
//       $("header a").click(Alb5);
//     });
//     $($Album3).click(function(event){
//       $(this).siblings().css("display","none");
//       $(this).css({"width":"600px","height":"600px","line-height":"1150px","background-size":"cover",
//       "background-image":"url(http://lorempixel.com/355/455/sports)"});
//       $("nav").addClass("invis");
//       $("#rightWrapper").css("width","100%");
//       $("header").css("width","100%");
//       $("header h1").text("Photo 3");
//       $("header a").removeClass("invis");
//       $("header a").text("Back to Album 5");
//       $("header a").click(Alb5);
//     });
//   });
//   $($Album6).add($Album6Button).click(function Alb6(event){
//     event.preventDefault();
//     $("header").css("background-color","transparent");
//     $("header").css("width","80%");
//     $("header h1").text("Album 6");
//     $("#rightWrapper").css("width","80%");
//     $("nav").removeClass("invis");
//     $("nav").css("height","600px");
//     $(".smallRow").eq(1).css("display","none");
//     $(".smallRow a").css({"width":"300px","height":"400px","line-height":"750px"});
//     $(".smallRow a").eq(0).css("background-image","url(http://lorempixel.com/300/400/cats)");
//     $(".smallRow a").eq(1).css("background-image","url(http://lorempixel.com/301/401/cats)");
//     $(".smallRow a").eq(2).css("background-image","url(http://lorempixel.com/350/450/cats)");
//     $(".smallRow a").eq(0).text("Photo 1");
//     $(".smallRow a").eq(1).text("Photo 2");
//     $(".smallRow a").eq(2).text("Photo 3");
//     $("header a").addClass("invis");
//     $(".smallRow a").siblings().css("display","block");
//     $($Album1).click(function(event){
//       $(this).siblings().css("display","none");
//       $(this).css({"width":"600px","height":"600px","line-height":"1150px","background-size":"cover",
//       "background-image":"url(http://lorempixel.com/300/400/cats)"});
//       $("nav").addClass("invis");
//       $("#rightWrapper").css("width","100%");
//       $("header").css("width","100%");
//       $("header h1").text("Photo 1");
//       $("header a").removeClass("invis");
//       $("header a").text("Back to Album 6");
//       $("header a").click(Alb6);
//     });
//     $($Album2).click(function(event){
//       $(this).siblings().css("display","none");
//       $(this).css({"width":"600px","height":"600px","line-height":"1150px","background-size":"cover",
//       "background-image":"url(http://lorempixel.com/301/401/cats)"});
//       $("nav").addClass("invis");
//       $("#rightWrapper").css("width","100%");
//       $("header").css("width","100%");
//       $("header h1").text("Photo 2");
//       $("header a").removeClass("invis");
//       $("header a").text("Back to Album 6");
//       $("header a").click(Alb6);
//     });
//     $($Album3).click(function(event){
//       $(this).siblings().css("display","none");
//       $(this).css({"width":"600px","height":"600px","line-height":"1150px","background-size":"cover",
//       "background-image":"url(http://lorempixel.com/350/450/cats)"});
//       $("nav").addClass("invis");
//       $("#rightWrapper").css("width","100%");
//       $("header").css("width","100%");
//       $("header h1").text("Photo 3");
//       $("header a").removeClass("invis");
//       $("header a").text("Back to Album 6");
//       $("header a").click(Alb6);
//     });
//   });
// });
