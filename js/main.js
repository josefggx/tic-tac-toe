const gameBoard = (() => {

    let winnerArray = [];
    let gameMode = "";

    const displayController = (() => {
        const startMenu = document.querySelector('.start-menu');
        const vsBtn = document.querySelectorAll(".vs-btn");
        const gameContainer = document.querySelector('.game-container');
        const backBtn = document.querySelector('#back-btn');
        // @ts-ignore
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
                    gameMode = "vs-player"
                    alert(gameMode);
                    // @ts-ignore
                    document.querySelector('#player-two-name').textContent = 'Player 2';
                    // @ts-ignore
                    document.querySelector('#player-two-icon').style.display = 'block';
                    // @ts-ignore
                    document.querySelector('#regular-ai-icon').style.display = 'none';
                    // @ts-ignore
                    document.querySelector('#invincible-ai-icon').style.display = 'none';
                    playerGame();
                }
                if(button.id == "vs-regular-AI-btn") {
                    gameMode = "vs-regular-AI"
                    alert(gameMode);
                    // @ts-ignore
                    document.querySelector('#player-two-name').textContent = 'Regular AI';
                    // @ts-ignore
                    document.querySelector('#player-two-icon').style.display = 'none';
                    // @ts-ignore
                    document.querySelector('#regular-ai-icon').style.display = 'block';
                    // @ts-ignore
                    document.querySelector('#invincible-ai-icon').style.display = 'none';
                    regularAIGame();
                }
                if(button.id == "vs-invincible-AI-btn") {
                    gameMode = "vs-invincible-AI"
                    alert(gameMode);
                    // @ts-ignore
                    document.querySelector('#player-two-name').textContent = 'Invincible AI'
                    // @ts-ignore
                    document.querySelector('#player-two-icon').style.display = 'none';
                    // @ts-ignore
                    document.querySelector('#regular-ai-icon').style.display = 'none';
                    // @ts-ignore
                    document.querySelector('#invincible-ai-icon').style.display = 'block';
                    regularAIGame();
                }
            });
        });
        // @ts-ignore
        backBtn.addEventListener('click', () => {
            window.location.reload();
        })
        // @ts-ignore
        restartBtn.addEventListener("click", () => {
            restartGame(player1, player2);
        })
    })();

    const restartGame = (player1, player2, IA1, IA2) => {
        gameboardBoxes.forEach((box) => {
            box.classList.add("gameboard-box-hover");
            box.textContent = "";
            // @ts-ignore
            document.querySelector("#winner-p").textContent = "";
            // @ts-ignore
            box.style.backgroundColor = "";
            player1.marks = [];
            player1.turn = true;
            player1.win = false;
            player2.marks = [];
            player2.turn = false;
            player2.win = false;
        });
    }

    const winCombinations = [
        ["zero", "one", "two"],
        ["three", "four", "five"],
        ["six", "seven", "eight"],
        ["zero", "three", "six"],
        ["one", "four", "seven"],
        ["two", "five", "eight"],
        ["zero", "four", "eight"],
        ["six", "four", "two"]
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
                if(checker === true) {
                    winnerArray = array;
                    console.log(winnerArray);
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
    let regularAI = playerFactory("Regular AI", [], "fa-solid fa-robot", false, false);
    let invincibleAI = playerFactory("Invincible AI", [], "fa-solid fa-cat", false, false);

    const gameboardBoxes = document.querySelectorAll('.gameboard-box');

    const playerGame = () => {
            // @ts-ignore
            gameboardBoxes.forEach((box) => {
                box.classList.add("gameboard-box-hover");
                box.addEventListener('click', () => {
                    if(player1.turn === true && box.textContent === "" && player1.win === false && player2.win === false) {
                        box.textContent = "X";
                        player1.markIdentifier(box);
                        player1.winCheck();
                        if(player1.win === true && player2.win === false) {
                            // @ts-ignore
                            document.querySelector("#winner-p").textContent = `${player1.name} wins!`;
                            gameboardBoxes.forEach((box) => {
                                box.classList.remove("gameboard-box-hover");
                                if(box.textContent === "X" && winnerArray.includes(box.id)) {
                                    // @ts-ignore
                                    box.style.backgroundColor = "pink";
                                }
                            })
                        }
                        player1.changeTurn();
                        player2.changeTurn();
                    }
                    else if(player2.turn === true && box.textContent === "" && player1.win === false && player2.win === false) {
                        box.textContent = "O";
                        player2.markIdentifier(box);
                        player2.winCheck();
                        if(player2.win === true && player1.win === false) {
                            // @ts-ignore
                            document.querySelector("#winner-p").textContent = `${player2.name} wins!`;
                            gameboardBoxes.forEach((box) => {
                                box.classList.remove("gameboard-box-hover");
                                if(box.textContent === "O" && winnerArray.includes(box.id)) {
                                    // @ts-ignore
                                    box.style.backgroundColor = "pink";
                                }
                            })
                        }
                        player2.changeTurn();
                        player1.changeTurn();
                    }
                    
                });
            });
    } 
    
    const regularAIGame = () => {
        // @ts-ignore
        gameboardBoxes.forEach((box) => {
            box.classList.add("gameboard-box-hover");
            box.addEventListener('click', () => {
                if(player1.turn === true && box.textContent === "" && player1.win === false && regularAI.win === false) {
                    box.textContent = "X";
                    player1.markIdentifier(box);
                    player1.winCheck();
                    if(player1.win === true && regularAI.win === false) {
                        // @ts-ignore
                        document.querySelector("#winner-p").textContent = `${player1.name} wins!`;
                        gameboardBoxes.forEach((box) => {
                            box.classList.remove("gameboard-box-hover");
                            if(box.textContent === "X" && winnerArray.includes(box.id)) {
                                // @ts-ignore
                                box.style.backgroundColor = "pink";
                            }
                        })
                    }
                    player1.changeTurn();
                    regularAI.changeTurn();
                }
                else if(regularAI.turn === true && box.textContent === "" && player1.win === false && regularAI.win === false) {
                    box.textContent = "uwu";
                    regularAI.markIdentifier(box);
                    regularAI.winCheck();
                    if(regularAI.win === true && player1.win === false) {
                        // @ts-ignore
                        document.querySelector("#winner-p").textContent = `${regularAI.name} wins!`;
                        gameboardBoxes.forEach((box) => {
                            box.classList.remove("gameboard-box-hover");
                            if(box.textContent === "uwu" && winnerArray.includes(box.id)) {
                                // @ts-ignore
                                box.style.backgroundColor = "pink";
                            }
                        })
                    }
                    regularAI.changeTurn();
                    player1.changeTurn();
                }

            });
        });
    }
})();