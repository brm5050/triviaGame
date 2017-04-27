$(document).ready(function() {


var totalTime = 100;
var intervalId;
var totalRight = 0;



    $(".btn").on("click",function(){
        $(".jumbotron").hide();
        $(".hideBox").show();
        countdown();


    });

//countdown timer
function countdown() {
    intervalId = setInterval(decrease, 1000);
}

function decrease() {
    totalTime--;
    $("#timer").html("<h1>" + totalTime + "<h2>");
        if (totalTime === 0) {
            timeOut();
            console.log("Times Up");  
        }
}

function timeOut(){
    clearInterval(intervalId);
}

function answerAdd(){

}

$('.questions input[type="radio"]').click(function(){
    
    var type = $(this).data('type'),
        correctAnswerCount = 
            $('.questions input[type="radio"]:checked[data-type="1"]').length;
            if (correctAnswerCount === 1){
                totalRight++;
            }

            

    
    console.log('correctAnswerCount:', correctAnswerCount);
    console.log("Total Amount Right = ", totalRight , "/10");
});










//have trivia questions start up after player presses start and timer starts on click



//have state pictures scrolling under timer



//if player runs out of time, display you lose


//if player finishes game, have it display score on new page

//function to check answers

//submit button button



//end of document
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







/*if ($('input[type=radio]:checked').val() === "correct"){
userScore.correct++;
}   
 else {userScore.incorrect++
        }
        console.log(userScore)




/*$("input[type=radio]").on("click", function() {
            corrects = ($(this).val());
            console.log(obj)
        });*/









