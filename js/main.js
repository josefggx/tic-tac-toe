const displayController = (() => {
    const startMenu = document.querySelector('.start-menu');
    const vsBtn = document.querySelectorAll(".vs-btn");
    const gameContainer = document.querySelector('.game-container');

    vsBtn.forEach((button) => {
        button.addEventListener('click', () => {
            // @ts-ignore
            startMenu.style.display = 'none';
            // @ts-ignore
            gameContainer.style.display = 'flex';
        }); 
    });
})();
