$(document).ready(function(){
    $("#remaining-time").hide();
    $("#start").on('click', trivia.startGame,);
    $(document).on('click' , '.option', trivia.guessChecker);
    
    
    
  });
  
 
  var trivia = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
    timer: 20,
    timerOn: false,
    timerId : '',

    questions: {
        q1: "Who is Mia married to?",
        q2: "What is Vincent Vega's Profession?",
        q3: "What do you call a Quarter Pounder with Cheese in France?",    
        q4: "What are the names of the couple that try to rob the coffee shop?",
        q5: "What does Butch Coolidge do for a living?",
        q6: "Who sold Vincent the heroin that Mia Wallace overdosed on?",
    },
 
    
       

    options: {
      q1: ["Marcellus Wallace", "Vincent Vega" , "The Wolf" ],
      q2: ["Undercover Cop" , "News Reporter" , "Hitman" ],
      q3: ["Le Big Mac" , "Royale with Cheese" , "Big Kahuna Burger" ],
      q4: ["Ringo and Yolanda" , "Will and Grace" , "Jody and Yvette" ],
      q5: ["He's the butler" , "Boxer" , "Mr. Wolf's Assistant" ],
      q6: ["The Gimp" , "Jules" , "Lance" ],
    
    },

    answers: {
      q1: "Marcellus Wallace" ,
      q2: "Hitman",
      q3: "Royale with Cheese",
      q4: "Ringo and Yolanda",
      q5: "Boxer",
      q6: "Lance",
    },
    

    startGame: function(){
      trivia.currentSet = 0;
      trivia.correct = 0;
      trivia.incorrect = 0;
      trivia.unanswered = 0;
      clearInterval(trivia.timerId);
      
      $('#game').show();
      
      $('#results').html('');
      
      $('#timer').text(trivia.timer);
      
      $('#start').hide();
  
      $('#remaining-time').show();
      
      trivia.nextQuestion();
      
    },

    nextQuestion : function(){
      
      trivia.timer = 10;
       $('#timer').removeClass('last-seconds');
      $('#timer').text(trivia.timer);
      
      if(!trivia.timerOn){
        trivia.timerId = setInterval(trivia.timerRunning, 1000);
      }
      
      var questionContent = Object.values(trivia.questions)[trivia.currentSet];
      $('#question').text(questionContent);
      
      var questionOptions = Object.values(trivia.options)[trivia.currentSet];
      
      $.each(questionOptions, function(index, key){
        $('#options').append($('<button class="option btn btn-info btn-lg">'+key+'</button>'));
      })

      
    },
    timerRunning : function(){

      if(trivia.timer > -1 && trivia.currentSet < Object.keys(trivia.questions).length){
        $('#timer').text(trivia.timer);
        trivia.timer--;
          if(trivia.timer === 4){
            $('#timer').addClass('last-seconds');
          }
      }

      else if(trivia.timer === -1){
        trivia.unanswered++;
        trivia.result = false;
        clearInterval(trivia.timerId);
        resultId = setTimeout(trivia.guessResult, 1000);
        $('#results').html('<h3>Out of time! The answer was '+ Object.values(trivia.answers)[trivia.currentSet] +'</h3>');
      }

      else if(trivia.currentSet === Object.keys(trivia.questions).length){
        
        $('#results')
          .html('<h3>Thank you for playing!</h3>'+
          '<p>Correct: '+ trivia.correct +'</p>'+
          '<p>Incorrect: '+ trivia.incorrect +'</p>'+
          '<p>Unaswered: '+ trivia.unanswered +'</p>'+
          '<p>Please play again!</p>');
        
        $('#game').hide();
        
        $('#start').show();

        $('#boss').remove();
      }
      
    },

    guessChecker : function() {
      
      var resultId;
      
      var currentAnswer = Object.values(trivia.answers)[trivia.currentSet];
      
      
      if($(this).text() === currentAnswer){
        $(this).addClass('btn-success').removeClass('btn-info');
        
        trivia.correct++;
        clearInterval(trivia.timerId);
        resultId = setTimeout(trivia.guessResult, 1000);
        $('#results').html('<h3>Correct Answer!</h3>');
      }

      else{
        $(this).addClass('btn-danger').removeClass('btn-info');     
        trivia.incorrect++;
        clearInterval(trivia.timerId);
        resultId = setTimeout(trivia.guessResult, 1000);
        $('#results').html('<h3>Mr. Wallace expects better! '+ currentAnswer +'</h3>');
      }
      
    },
    guessResult : function(){
      
      trivia.currentSet++;
      $('.option').remove();
      $('#results h3').remove();
      trivia.nextQuestion();
       
    }
    
  };

 
  
  
    console.log(trivia.answers);


