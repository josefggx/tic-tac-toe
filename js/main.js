const displayController = (() => {
    const startMenu = document.querySelector('.start-menu');
    const vsBtn = document.querySelectorAll(".vs-btn");
    const gameContainer = document.querySelector('.game-container');
    const backBtn = document.querySelector('#back-btn');
    // @ts-ignore
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
    // @ts-ignore
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
        },
        winCheck() {
            winCombinations.forEach(array => {
                let checker = array.every(e => this.marks.includes(e));
                console.log(checker)
                if(checker === true) {
                    return this.win = true;
                }
            })
        }
    };

    const playerFactory = (name, marks, icon, turn, win) => {
        let player = Object.create(playerActions);
        player.name = name;
        player.marks = marks;
        player.icon = icon;
        player.turn = turn;
        player.win = win;
        return player;
    }

    let player1 = playerFactory("Player 1", [], "fa-solid fa-user-large", true, false);
    let player2 = playerFactory("Player 2", [], "fa-solid fa-user-large", false, false);

    const gameboardBoxes = document.querySelectorAll('.gameboard-box');
    const playerGame = () => {
        gameboardBoxes.forEach((box) => {
            box.addEventListener('click', () => {
                if(player1.turn === true && box.textContent === "" && player1.win === false) {
                    box.textContent = "X";
                    player1.markIdentifier(box);
                    player1.winCheck();
                    if(player1.win === true) {
                        // @ts-ignore
                        document.querySelector("#winner-p").textContent = `${player1.name} wins!`
                    }
                    player1.changeTurn();
                    player2.changeTurn();
                }
                else if(player2.turn === true && box.textContent === "" && player1.win === false) {
                    box.textContent = "O";
                    player2.markIdentifier(box);
                    player2.winCheck();
                    if(player2.win === true) {
                        // @ts-ignore
                        document.querySelector("#winner-p").textContent = `${player2.name} wins!`
                    }
                    player2.changeTurn();
                    player1.changeTurn();
                }

            });
        });
    }
    playerGame();


})()