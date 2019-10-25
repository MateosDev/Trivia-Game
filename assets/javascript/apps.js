$("#start").on('click', function(){
    $("start").remove();
});

var game = {
    questions:questions,
    currentQuestion: 0,
    timer: 90, 
    correct: 0,
    incorrect: 0,

    countdown: function(){

    },

    loadQuestion: function(){

    },

    timeUp: function(){
    
    },

    results: function(){

    },

    clicked: function(){

    },

    answeredCorrectly: function(){

    },
    answeredIncorrectly: function(){

    },

    reset: function(){

    },
}

var questions = [{
    question: "Who is Mia married to?",
    answers: ["Marcellus Wallace", "Vincent Vega", "The Wolf" ],
    correctAnswer: "Marcellus Wallace",
}];

