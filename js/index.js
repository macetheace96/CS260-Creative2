$(document).ready(function() {
    var question = null;
    var answer = null;
    var value = null;
    var playerScore = 0;
    $("#start").click(function(e){
        $("#intro").hide();
        
        $.getJSON("http://jservice.io/api/random", function(data) {
            console.log(data);
            question = data[0]['question'];
            value = data[0]['value'];
            answer = data[0]['answer'];
            e.preventDefault();
            $("#game").show();
            $("#playerScore").text("Player score: " + playerScore);
            $("#myQuestion").text(question);
            $("#questionValue").text('Question value: ' + value)
            startTimer();
        })
    })
    
    $("#submit").click(function(e){
        var userAnswer = $("#input").val();
        if (userAnswer.toLowerCase() == answer.toLowerCase()) {
            playerScore = playerScore + value;
            $("#playerScore").text("Player score: " + playerScore);
            $("#response").text("Correct!");
        }
        else {
            $("#response").text("Wrong!");
        }
        $("#response").show();
        $("#input").hide();
        $("#input").val('');
        $("#submit").hide();
        $("#skip").hide();
        $("#continue").show();
        
        e.preventDefault();
    })
    
    $("#continue").click(function(e){
        $.getJSON("http://jservice.io/api/random", function(data) {
            console.log(data);
            question = data[0]['question'];
            value = data[0]['value'];
            answer = data[0]['answer'];
            e.preventDefault();
            $("#questions").show();
            $("#myQuestion").text(question);
            $("#questionValue").text('Question value: ' + value);
            $("#response").hide();
            $("#continue").hide();
            $("#input").val = ("Answer");
            $("#input").show();
            $("#submit").show();
            $("#skip").show();

        });
        
        e.preventDefault();
    })
    
    $("#skip").click(function(e){
        $.getJSON("http://jservice.io/api/random", function(data) {
            console.log(data);
            question = data[0]['question'];
            value = data[0]['value'];
            answer = data[0]['answer'];
            e.preventDefault();
            $("#questions").show();
            $("#myQuestion").text(question);
            $("#questionValue").text('Question value: ' + value);
            $("#response").hide();
            $("#continue").hide();
            $("#input").val = ("Answer");
            $("#input").show();
            $("#submit").show();
            $("#skip").show();

        });
        
        e.preventDefault();
    });
    
});

function startTimer(){
    $("#timer").width("75%");
    var start = $.now();
    $("#timer").animate(
        {width: "0px"},
        1000,
        "linear",
        function(){
            endGame();
        }
    );
}

function endGame(){
    $("#game").hide();
    $("#endGame").show();
    $("#endMessage").show();
    $("#endMessage").fadeOut(300);
}