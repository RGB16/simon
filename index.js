var button_colours=["red","blue","green","yellow"];


var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started = false;



$(document).keypress(function(){
    if (!started){
    $("h1").text("Level " + level);
    nextsequence();
    started=true;
    }
});




$(".btn").click(function() {

    //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
    var userChosenColour = $(this).attr("id");
  
    //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
    userClickedPattern.push(userChosenColour);
  
    //console.log(userClickedPattern);
    playsound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
   
  });


  function checkAnswer(currentLevel){
    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
  
        //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamePattern.length){
  
          //5. Call nextSequence() after a 1000 millisecond delay.
          setTimeout(function () {
            nextSequence();
          }, 1000);
  

          
        }
  
      } else {
  
        console.log("wrong");
        playsound("wrong");

        $("body").addClass("game-over");

        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        
        $("h1").text("Game Over, Press Any Key to Restart");
        startover();
      }


}



function nextsequence(){
    userClickedPattern=[];

  //4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
  level++;

  //5. Inside nextSequence(), update the h1 with this change in the value of level.
  $("h1").text("Level " + level);
    
    var randomnum=Math.floor(Math.random()*4);  


var randomChosenColour=button_colours[randomnum]
gamePattern.push(randomChosenColour);


$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playsound(randomChosenColour);

   

}


//---------------------------------------------------------------------------------------


function playsound(name){

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}

//---------------------------------------------------------------------------------------

//1. Create a new function called animatePress(), it should take a single input parameter called currentColour.
function animatePress(currentColor) {

    //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
    $("#" + currentColor).addClass("pressed");
  
    //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }


function startover(){
    level=0;
    started = false;
    gamePattern=[];
}






