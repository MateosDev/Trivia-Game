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
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter<=0){
            console.log("TIME UP");
            game.timeUp();
        }
    },

    loadQuestion: function(){
        timer = setInterval(game.countdown, 9000);
        $('subwrapper').html
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
};

var questions = [
    
    {
    question: "Who is Mia married to?",
    answers: ["Marcellus Wallace", "Vincent Vega", "The Wolf" ],
    correctAnswer: "Marcellus Wallace",
    },

    {
    question: "What is Vincent Vega's Profession?",
    answers: ["Undercover Cop" , "News Reporter" , "Hitman" ],
    correctAnswer : "Hitman",
    },

    {
    question: "What do you call a Quarter Pounder with Cheese in France?",    
    answers: ["Le Big Mac" , "Royale with Cheese" , "Big Kahuna Burger" ],
    correctAnswer : "Royale with Cheese"
    },

    {
    question: "What are the names of the couple that try to rob the coffee shop?",
    answers: ["Ringo and Yolanda" , "Will and Grace" , "Jody and Yvette"],
    correctAnswer: "Ringo and Yolanda"
    },

];

