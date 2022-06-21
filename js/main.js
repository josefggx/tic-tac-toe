const displayController = (() => {
    const startMenu = document.querySelector('.start-menu');
    const vsBtn = document.querySelectorAll(".vs-btn");
    const gameContainer = document.querySelector('.game-container');
    const backBtn = document.querySelector('#back-btn');
    // @ts-ignore
    const restartBtn = document.querySelector('#restart-btn');

    vsBtn.forEach((button) => {
        button.addEventListener('click', () => {
            // @ts-ignore
            startMenu.style.display = 'none';
            // @ts-ignore
            gameContainer.style.display = 'flex';
            if(button.id == "vs-player-btn") {
                // @ts-ignore
                document.querySelector('#player-two-name').textContent = 'Player 2';
                // @ts-ignore
                document.querySelector('#player-two-icon').style.display = 'block';
                // @ts-ignore
                document.querySelector('#regular-ai-icon').style.display = 'none';
                // @ts-ignore
                document.querySelector('#invincible-ai-icon').style.display = 'none';
            }
            if(button.id == "vs-regular-AI-btn") {
                // @ts-ignore
                document.querySelector('#player-two-name').textContent = 'Regular AI';
                // @ts-ignore
                document.querySelector('#player-two-icon').style.display = 'none';
                // @ts-ignore
                document.querySelector('#regular-ai-icon').style.display = 'block';
                // @ts-ignore
                document.querySelector('#invincible-ai-icon').style.display = 'none';
            }
            if(button.id == "vs-invincible-AI-btn") {
                // @ts-ignore
                document.querySelector('#player-two-name').textContent = 'Invincible AI'
                // @ts-ignore
                document.querySelector('#player-two-icon').style.display = 'none';
                // @ts-ignore
                document.querySelector('#regular-ai-icon').style.display = 'none';
                // @ts-ignore
                document.querySelector('#invincible-ai-icon').style.display = 'block';
            }
        });
    });
    // @ts-ignore
    backBtn.addEventListener('click', () => {
        // @ts-ignore
        startMenu.style.display = 'flex';
        // @ts-ignore
        gameContainer.style.display = 'none';
    })

})();

const gameBoard = (() => {
    let gameboardArray = [];

    const gameboardBoxes = document.querySelectorAll('.gameboard-box');
    gameboardBoxes.forEach((box) => {
        box.addEventListener('click', () => {
            
        });
    });

})()