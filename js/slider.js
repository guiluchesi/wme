var index = 1;
var featuredImg = $('#1');
var slides = ["slide1","slide2","slide3","slide4","slide5","slide6"];
var icons = ["play","living","food","toy","games","fit"];

function turnOff(){
    for(var i = 0; i<icons.length; i++){
        var icon = $('#'+icons[i]);
        icon.removeClass('active');
    }
}

function renderSlider(img, icon){   
    var ico = icons[icon-1];
    turnOff();
    featuredImg.animate({left: '0px'});
    featuredImg.attr('src', "images/" + img +'.jpg');
    $("#"+ico).addClass('active');
}

function next(){
    index >= slides.length ? index = 1 : index++;
    featuredImg.animate({left: '1900px'}, 400).animate({left: '-1900px'}, 0);
    renderSlider(slides[index-1], index);
};

function prev(){
    index <= 1 ? index = slides.length : index--;
    featuredImg.animate({left: '-1900px'}, 400).animate({left: '1900px'}, 0);
    renderSlider(slides[index-1], index);
};

$('.seletores').find('li').on('click', function(){
    var selectIndex = $.inArray($(this).attr('id'), icons);
    var selectImage = slides[selectIndex];
    featuredImg.animate({left: '1900px'}, 400).animate({left: '-1900px'}, 0);
    renderSlider(selectImage, selectIndex+1);
});

renderSlider("slide1", 1);
$('.right').on('click', next);
$('.left').on('click', prev);