// function play() {
//   //step-1: hide the home screen
//   const homeScreen = document.getElementById('home-screen');
//   homeScreen.classList.add('hidden');
//   //step-2: show the playground
//   const playgroundSection = document.getElementById('play-ground');
//   playgroundSection.classList.remove('hidden');
// }

function continueGame(){}

function play() {
  hideElementById('home-screen');
  showElementById('play-ground');
  continueGame();
}
