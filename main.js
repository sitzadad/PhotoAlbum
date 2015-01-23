$(document).ready(function(){
  "use strict";

  //used for conditional statement in big function
  var whatPage=true;

  //***NEW EVENT:CLICKING <nav> BUTTON OR IMAGES (on home page) LOAD ALBUM***************************
  $(".imgOut,.albumButton,header button").on("click", function(event){
    //NORMAL ALBUM VIEW IF COMING FROM FROM HOME SCREEN
    if(whatPage===true||$(this).prop("class")==="styleButton albumButton"){
      //resizing all images to small size (necessary if coming out of enlarged view)
      $(".imgIn").css({"width":"250px","height":"250px"});
      $(".imgOut").css("width","300px");
      //reappears any photos that were previously set to "display:none;"
      $("#rightWrapper li").removeClass("invis");
      //disappears header "back" button (visible if coming out of enlaged image view)
      $("header button").addClass("invis");
      //making room for appearance of left floating <nav>
      $("header").css("width","85%");
      $("#rightWrapper").css("width","85%");
      //<nav> appears floating left
      $("nav").removeClass("invis");
      //removing header background color
      $("header").css("background-color","transparent");
      //getting album #
      var albumNum=$(this).attr('rel');
      //replacing heading text with album #
      $("header h1").text(albumNum);
      //replaces album labels with photo labels
      for(var i=0, j=1; i<6; i++, j++){
        $(".imgLabel").eq(i).text("Photo "+j);
      }
      //change page variable
      whatPage=false;
    //ENLARGED IMAGE VIEW IF ALREADY IN ALBUM VIEW******************************
    }else if(whatPage===false){
      //<nav> disappears
      $("nav").addClass("invis");
      //enlarging header and rightWrapper to fill space left by <nav>
      $("header").css("width","100%");
      $("#rightWrapper").css("width","100%");
      //header "back" button appears
      $("header button").removeClass("invis");
      //removes images except the selected image
      $("#rightWrapper li").not($(this).parent()).addClass("invis");
      //enlarging selected image
      $(this).children(".imgIn").css({"width":"500px","height":"500px"});
      $(this).css("width","550px");
      //getting current album #
      var backToWhere=$("header h1").text();
      //Overriding header back button's rel value with current album # (used to go back)
      $("header button").attr("rel", backToWhere);
      //Overriding header back button's text
      $("header button").text("Back to "+backToWhere);
      //change page variable
      whatPage=true;
    }else{
      console.log("IMPOSSIBLE TO GET HERE")
    }
  });

  //***NEW EVENT:CLICKING HOME BUTTON (located in <nav>) RELOADS PAGE (i.e., returns to home page)*********
  $(".homeButton").on("click", function(){
    document.location.reload(true);
  });



  //IMAGE LOGIC


  //IMAGE OBJECT OF ARRAYS
  var imgObj={
    "My Albums":["http://dummyimage.com/250x250&text=Grey","http://dummyimage.com/250x250/8A2BE2&text=Purple","http://dummyimage.com/250x250/4876FF&text=Blue","http://dummyimage.com/250x250/00F5FF&text=Aqua","http://dummyimage.com/250x250/0EE76&text=Green","http://dummyimage.com/250x250/FFFF00&text=Yellow"],
    "Album 1":["http://dummyimage.com/250x250&text=One","http://dummyimage.com/250x250&text=Two","http://dummyimage.com/250x250&text=Three","http://dummyimage.com/250x250&text=Four","http://dummyimage.com/250x250&text=Five","http://dummyimage.com/250x250&text=Six"],
    "Album 2":["http://dummyimage.com/250x250/8A2BE2&text=One","http://dummyimage.com/250x250/8A2BE2&text=Two","http://dummyimage.com/250x250/8A2BE2&text=Three","http://dummyimage.com/250x250/8A2BE2&text=Four","http://dummyimage.com/250x250/8A2BE2&text=Five","http://dummyimage.com/250x250/8A2BE2&text=Six"],
    "Album 3":["http://dummyimage.com/250x250/4876FF&text=One","http://dummyimage.com/250x250/4876FF&text=Two","http://dummyimage.com/250x250/4876FF&text=Three","http://dummyimage.com/250x250/4876FF&text=Four","http://dummyimage.com/250x250/4876FF&text=Five","http://dummyimage.com/250x250/4876FF&text=Six"],
    "Album 4":["http://dummyimage.com/250x250/00F5FF&text=One","http://dummyimage.com/250x250/00F5FF&text=Two","http://dummyimage.com/250x250/00F5FF&text=Three","http://dummyimage.com/250x250/00F5FF&text=Four","http://dummyimage.com/250x250/00F5FF&text=Five","http://dummyimage.com/250x250/00F5FF&text=Six"],
    "Album 5":["http://dummyimage.com/250x250/0EE76&text=One","http://dummyimage.com/250x250/0EE76&text=Two","http://dummyimage.com/250x250/0EE76&text=Three","http://dummyimage.com/250x250/0EE76&text=Four","http://dummyimage.com/250x250/0EE76&text=Five","http://dummyimage.com/250x250/0EE76&text=Six"],
    "Album 6":["http://dummyimage.com/250x250/FFFF00&text=One","http://dummyimage.com/250x250/FFFF00&text=Two","http://dummyimage.com/250x250/FFFF00&text=Three","http://dummyimage.com/250x250/FFFF00&text=Four","http://dummyimage.com/250x250/FFFF00&text=Five","http://dummyimage.com/250x250/FFFF00&text=Six"]
  };



  //DEFINING keyPosition for following conditional statement
  var keyPosition;


  //had to copy this out of event listener below because need to load initial home screen images
  if($("header h1").text()==="My Albums"){
    keyPosition=$("header h1").text();
    for(var k=0;k<imgObj[keyPosition].length;k++){
      $(".imgIn").eq(k).css("background-image","url("+imgObj[keyPosition][k]+")");
    }
  }

  $("body").on("click", function(){
    //getting .text() of header h1 to determine photos placed in the .imgIn <div>s
    if($("header h1").text()==="My Albums"){
      keyPosition=$("header h1").text();
      for(var k=0;k<imgObj[keyPosition].length;k++){
        $(".imgIn").eq(k).css("background-image","url("+imgObj[keyPosition][k]+")");
      }
    }else if($("header h1").text()==="Album 1"){
      keyPosition=$("header h1").text();
      for(var k=0;k<imgObj[keyPosition].length;k++){
        $(".imgIn").eq(k).css("background-image","url("+imgObj[keyPosition][k]+")");
      }
    }else if($("header h1").text()==="Album 2"){
      keyPosition=$("header h1").text();
      for(var k=0;k<imgObj[keyPosition].length;k++){
        $(".imgIn").eq(k).css("background-image","url("+imgObj[keyPosition][k]+")");
      }
    }else if($("header h1").text()==="Album 3"){
      keyPosition=$("header h1").text();
      for(var k=0;k<imgObj[keyPosition].length;k++){
        $(".imgIn").eq(k).css("background-image","url("+imgObj[keyPosition][k]+")");
      }
    }else if($("header h1").text()==="Album 4"){
      keyPosition=$("header h1").text();
      for(var k=0;k<imgObj[keyPosition].length;k++){
        $(".imgIn").eq(k).css("background-image","url("+imgObj[keyPosition][k]+")");
      }
    }else if($("header h1").text()==="Album 5"){
      keyPosition=$("header h1").text();
      for(var k=0;k<imgObj[keyPosition].length;k++){
        $(".imgIn").eq(k).css("background-image","url("+imgObj[keyPosition][k]+")");
      }
    }else if($("header h1").text()==="Album 6"){
      keyPosition=$("header h1").text();
      for(var k=0;k<imgObj[keyPosition].length;k++){
        $(".imgIn").eq(k).css("background-image","url("+imgObj[keyPosition][k]+")");
      }
    }else{
      $(".imageIn").css("background-color","red");
    }
  });
});
