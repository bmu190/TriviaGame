$(document).ready(function() {

    
    var quesTotal = 4,
        answers = ["Amazon", "Chonquing", "Bamboo", "Canberra",],
        data = $("input"),
        rightAnswer = 0,
        wrongAnswer = 0,
        skipped = 0,
        count = 15;

    

    function scoreCount() {
        for (var i = 0; i < data.length; i++) {
            if (data[i].checked) {
            if (answers.indexOf(data[i].value) !== -1) {
               rightAnswer++;
                } else {
                    wrongAnswer++;
                }
            }
        }
       
        
        var totalAnswered = rightAnswer + wrongAnswer;
        console.log(totalAnswered);
        if (totalAnswered !== quesTotal) {
            skipped = quesTotal - totalAnswered;
        }

        $('#right').html(" " + rightAnswer);
        $('#notRight').html(" " + wrongAnswer);
        $('#skipped').html(" " + skipped);

    } 

    
    $("#quiz, #score").hide();

    
    $("#play").click(function() {
        $("#start").hide();
        $("#quiz").show();

    
        var startTimer = setInterval(function() {
            count--;
            $("#countdown").html(count);

        
            if (count === 0) {
                clearInterval(timer);
                $("#quiz, #timer").hide();
                $("#score").show();
                scoreCount();
            }
        }, 1000);

    });


    $("#submit").click(function() {
        $("#quiz, #timer").hide();
        $("#score").show();
        clearInterval(timer);
        scoreCount();
  
    });
});



