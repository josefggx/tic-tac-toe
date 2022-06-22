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

    const winCombinations = [
        ["zero", "one", "two"],
        ["three", "four", "five"],
        ["six", "seven", "eight"],
        ["zero", "three", "six"],
        ["one", "four", "seven"],
        ["two", "five", "eight"],
        ["zero", "four", "eight"],
        ["five", "four", "two"]
    ];

    const playerActions = {
        changeTurn() {
            if(this.turn === false) {
                return this.turn = true;
            } else if(this.turn === true) {
                return this.turn = false;
            }
        },
        markIdentifier(box) {
            return this.marks.push(box.id);
        }

    };

    const playerFactory = (name, marks, icon, turn) => {
        let player = Object.create(playerActions);
        player.name = name;
        player.marks = marks;
        player.icon = icon;
        player.turn = turn;
        return player;
    }

    let player1 = playerFactory("Player 1", [], "fa-solid fa-user-large", true);
    let player2 = playerFactory("Player 2", [], "fa-solid fa-user-large", false);

    const gameboardBoxes = document.querySelectorAll('.gameboard-box');
    const playerGame = () => {
        gameboardBoxes.forEach((box) => {
            box.addEventListener('click', () => {
                if(player1.turn === true && box.textContent === "") {
                    box.textContent = "X";
                    player1.markIdentifier(box);
                    console.log(player1.marks);
                    player1.changeTurn();
                    player2.changeTurn();
                }
                else if(player2.turn === true && box.textContent === "") {
                    box.textContent = "O";
                    player2.markIdentifier(box);
                    console.log(player2.marks);
                    player2.changeTurn();
                    player1.changeTurn();
                }

            });
        });
    }
    playerGame();


})()