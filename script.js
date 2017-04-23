$(document).ready(function() {

$(".btn").on("click",function(){
    $(".jumbotron").css({'z-index': -1});

});

});



/* Scrolling Function
$(function(){
    var scroller = $('#scroller div.innerScrollArea');
    var scrollerContent = scroller.children('ul');
    scrollerContent.children().clone().appendTo(scrollerContent);
    var curX = 0;
    scrollerContent.children().each(function(){
        var $this = $(this);
        $this.css('left', curX);
        curX += $this.outerWidth(true);
    });
    var fullW = curX / 2;
    var viewportW = scroller.width();

    scroller.css('overflow-x', 'auto');
});*/

















