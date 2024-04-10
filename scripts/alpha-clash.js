// function play() {
//   //step-1: hide the home screen
//   const homeScreen = document.getElementById('home-screen');
//   homeScreen.classList.add('hidden');
//   //step-2: show the playground
//   const playgroundSection = document.getElementById('play-ground');
//   playgroundSection.classList.remove('hidden');
// }

// function handleKeyboardButtonPress(event) {
//   const playerPressed = event.key;
//   const currentAlphabetElement = document.getElementById('current-alphabet');
//   const currentAlphabet = currentAlphabetElement.innerText;
//   const expectedAlphabet = currentAlphabet.toLowerCase();

//   if (playerPressed === expectedAlphabet) {
//     console.log('You got a point!');
//   } else {
//     console.log('dhurrr mia right key press koro');
//   }
// }

// document.addEventListener('keyup', handleKeyboardButtonPress);

function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;
  console.log('player pressed', playerPressed);

  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  if (playerPressed === expectedAlphabet) {
    console.log('You get a point');
    const currentScoreElement = document.getElementById('current-score');
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);

    const newScore = currentScore + 1;

    currentScoreElement.innerText = newScore;

    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log('You missed. You lost a life');
    const currentLifeElement = document.getElementById('current-life');
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);
    const newLife = currentLife - 1;
    currentLifeElement.innerText = newLife;
  }
}
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame() {
  const alphabet = getARandomAlphabet();
  console.log(alphabet);
  const currentAlphabetElement = document.getElementById('current-alphabet');
  currentAlphabetElement.innerText = alphabet;
  setBackgroundColorById(alphabet);
}

function play() {
  hideElementById('home-screen');
  showElementById('play-ground');
  continueGame();
}
