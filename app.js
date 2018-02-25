/*
  GAME FUNCTION:
  - Player must guess a number between a min and mx
  - Player gets a certain amount of guesses
  - Notify player of guesses remaining
  - Notify the player of the correct answer if loose
  - Let player choose to play again
*/

// Game values - Multiple values separated by commas / more efficient
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for Guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  
  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'crimson');
  }

  // Check if won
  if(guess === winningNum){
    // Game over - won
    gameOver(true, `You got it! The number was ${winningNum}`);
  } 
  else {
    // Deduct guesses left
    guessesLeft -= 1;

    // Check to see if if there is any guesses left
    if(guessesLeft === 0){
      // Game over - lost
      gameOver(false, `Sorry your all out of guesses, the correct number was ${winningNum}`);

    } else {
      // Game continues - answer wrong
      // Change border color
      guessInput.style.borderColor = 'crimson';

      // Clear input
      guessInput.value = '';

      // Try again message
      setMessage(`Sorry that was incorrect try again. You have ${guessesLeft} remaining.`,'crimson');
    }
  }
});

// Game Over
function gameOver(won, msg){
  let color;
  won === true ? color = 'MediumAquamarine' : color = 'crimson';
  // Disable input
  guessInput.disabled = true;
    
  // Change border color
  guessInput.style.borderColor = color;

  // Set text color
  message.style.color = color;

  // Winning message
  setMessage(msg);
}

// Set message
function setMessage (msg, color){
  message.style.color = color;
  message.textContent = msg;
}

