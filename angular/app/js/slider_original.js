sliderInt=1;
sliderNext=2;

$("#prev").click(function(){
    newSlide = sliderInt-1;
    showSlide(newSlide);
});

$("#next").click(function(){
    newSlide = sliderInt+1;
    showSlide(newSlide);
});

$(".1").click(function(){
    slide=1;
    showSlide(slide);
});

$(".2").click(function(){
    slide=2;
    showSlide(slide);
});

$(".3").click(function(){
    slide=3;
    showSlide(slide);
});

$(".4").click(function(){
    slide=4;
    showSlide(slide);
});

$(".5").click(function(){
    slide=5;
    showSlide(slide);
});

$(".6").click(function(){
    slide=6;
    showSlide(slide);
});

function showSlide(id){
    count = $(".slidercontent > img").size();

    if(id > count){
        id=1;
    } else if(id < 1){
        id=count;
    }
    
    $(".slidercontent > img#" + sliderInt).animate({
        left: -1900
    });
    $(".slidercontent > img#" + id).animate({
        left: 1900
    });  
    $(".slidercontent > img#" + id).animate({
        left: 0
    }); 

    if(id==1){
        $(".seletores > li.1").css("background", "url('img/selec1on.png') no-repeat");
        $(".seletores > li.2").css("background", "url('img/selec2.png') no-repeat");
        $(".seletores > li.3").css("background", "url('img/selec3.png') no-repeat");
        $(".seletores > li.4").css("background", "url('img/selec4.png') no-repeat");
        $(".seletores > li.5").css("background", "url('img/selec5.png') no-repeat");
        $(".seletores > li.6").css("background", "url('img/selec6.png') no-repeat");
    } else if(id==2){
        $(".seletores > li.1").css("background", "url('img/selec1.png') no-repeat");
        $(".seletores > li.2").css("background", "url('img/selec2on.png') no-repeat");
        $(".seletores > li.3").css("background", "url('img/selec3.png') no-repeat");
        $(".seletores > li.4").css("background", "url('img/selec4.png') no-repeat");
        $(".seletores > li.5").css("background", "url('img/selec5.png') no-repeat");
        $(".seletores > li.6").css("background", "url('img/selec6.png') no-repeat");
    } else if(id==3){
        $(".seletores > li.1").css("background", "url('img/selec1.png') no-repeat");
        $(".seletores > li.2").css("background", "url('img/selec2.png') no-repeat");
        $(".seletores > li.3").css("background", "url('img/selec3on.png') no-repeat");
        $(".seletores > li.4").css("background", "url('img/selec4.png') no-repeat");
        $(".seletores > li.5").css("background", "url('img/selec5.png') no-repeat");
        $(".seletores > li.6").css("background", "url('img/selec6.png') no-repeat");
    } else if(id==4){
        $(".seletores > li.1").css("background", "url('img/selec1.png') no-repeat");
        $(".seletores > li.2").css("background", "url('img/selec2.png') no-repeat");
        $(".seletores > li.3").css("background", "url('img/selec3.png') no-repeat");
        $(".seletores > li.4").css("background", "url('img/selec4on.png') no-repeat");
        $(".seletores > li.5").css("background", "url('img/selec5.png') no-repeat");
        $(".seletores > li.6").css("background", "url('img/selec6.png') no-repeat");
    } else if(id==5){
        $(".seletores > li.1").css("background", "url('img/selec1.png') no-repeat");
        $(".seletores > li.2").css("background", "url('img/selec2.png') no-repeat");
        $(".seletores > li.3").css("background", "url('img/selec3.png') no-repeat");
        $(".seletores > li.4").css("background", "url('img/selec4.png') no-repeat");
        $(".seletores > li.5").css("background", "url('img/selec5on.png') no-repeat");
        $(".seletores > li.6").css("background", "url('img/selec6.png') no-repeat");
    } else if(id==6){
        $(".seletores > li.1").css("background", "url('img/selec1.png') no-repeat");
        $(".seletores > li.2").css("background", "url('img/selec2.png') no-repeat");
        $(".seletores > li.3").css("background", "url('img/selec3.png') no-repeat");
        $(".seletores > li.4").css("background", "url('img/selec4.png') no-repeat");
        $(".seletores > li.5").css("background", "url('img/selec5.png') no-repeat");
        $(".seletores > li.6").css("background", "url('img/selec6on.png') no-repeat");
    }

    sliderInt=id;
    sliderNext=id+1;
}