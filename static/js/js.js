$('#hovertrap').mouseover(
        function(){
           $(".twistorbutton").removeClass("hide");
           //setTimeout(function(){
           //     $(".twistorbutton").addClass("hide");
           //},3000);
           $(".rightbutton").animate({marginLeft:300}, 1000, "linear");
           $(".topbutton").animate({marginBottom:50},1000,"linear");
           $(".bottombutton").animate({marginTop:50},1000,"linear");
        }
);
