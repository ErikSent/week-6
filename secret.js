const userNum = document.querySelector('#userNumber');
const submitBtn = document.querySelector('#sumbitBtn');
const feedbackBlock = document.querySelector('#feedBack');
const cpuRollBlock = document.querySelector('#cpuroll');
const winnerBlock = document.querySelector('#winner');


submitBtn.addEventListener('click', () => {
    const userChoice = Number(userNum.value); //casting
    const cpuChoice = Math.floor(Math.random() * 6);
    
    let message = '';

    if(userChoice === cpuChoice) {
        message = 'Congratulations! You won!';
    }
    else {
        message = 'Oops. CPU won. Try again!';
    }

    cpuRollBlock.innerHTML =`CPU rolled: ${cpuChoice}`;
    winnerBlock.innerHTML = message

    feedbackBlock.style.display = 'block';

})