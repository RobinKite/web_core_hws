//! Creation of constants 

const gameWindow = document.querySelector("#game-window");
const gameRules = document.querySelector("#game-rules");
const congrWindow = document.querySelector('.congratulations-window');
const mainField = document.querySelector('main');

const difficultyOptions = ['people', 'houses', 'numbers', 'weapons', 'food', 'letters'];
const difficultyNumbers = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];

const easyButton = document.querySelector("#but-easy")
const medButton = document.querySelector("#but-med")
const hardButton = document.querySelector("#but-hard")
const restButton = document.querySelector("#but-res")
const hintButton = document.querySelector("#but-hint")

//! Creation of variables

let timer, currDiff, winCond = [],
    gameSheet = [],
    backupHTMLGame, backupHTMLRules, backupField = [],
    backupRule = true;

//! Creation of button events

mainField.addEventListener("contextmenu", e => e.preventDefault());

easyButton.addEventListener('click', () => {
    if (currDiff !== 4) {
        restartGame();
        currDiff = 4;
        createGame();
        gameWindow.classList.add("easy");
        gameWindow.classList.remove("medium");
        gameWindow.classList.remove("hard");
        gameRules.classList.add("easy");
        gameRules.classList.remove("medium");
        gameRules.classList.remove("hard");
    }
})

medButton.addEventListener('click', () => {
    if (currDiff !== 5) {
        restartGame();
        currDiff = 5;
        createGame();
        gameWindow.classList.add("medium");
        gameWindow.classList.remove("easy");
        gameWindow.classList.remove("hard");
        gameRules.classList.add("medium");
        gameRules.classList.remove("easy");
        gameRules.classList.remove("hard");
    }
})

hardButton.addEventListener('click', () => {
    if (currDiff !== 6) {
        restartGame();
        currDiff = 6;
        createGame();
        gameWindow.classList.add("hard");
        gameWindow.classList.remove("easy");
        gameWindow.classList.remove("medium");
        gameRules.classList.add("hard");
        gameRules.classList.remove("easy");
        gameRules.classList.remove("medium");
    }
})

restButton.addEventListener('click', () => {
    if (currDiff) {
        restartGame();
        createGame();
    }
})

hintButton.addEventListener('click', () => {
    if (currDiff && !backupRule) {
        restartGame();
        gameRules.innerHTML = JSON.parse(JSON.stringify(backupHTMLRules));
        gameWindow.innerHTML = JSON.parse(JSON.stringify(backupHTMLGame));
        gameSheet = JSON.parse(JSON.stringify(backupField))
        document.querySelectorAll('.option').forEach(item => {
            item.addEventListener('click', () => {
                let currID = parseInt(item.id)
                let coordsX = Math.floor(currID / (currDiff * currDiff))
                let coordsY = Math.floor(currID / currDiff - currDiff * coordsX)
                let coordsZ = Math.floor(currID - currDiff * currDiff * coordsX - currDiff * coordsY)
                updateSheet(coordsX, coordsY, coordsZ)
            });
        })
        console.log('Brought back to the last correct step')
        console.log(winCond)
        backupRule = true;
    }
})

//! Main functions

function createWinCond() {
    let numb = []
    let winNum = []
    winCond = []
    for (let i = 0; i < currDiff * currDiff * currDiff; i++) {
        numb.push(i)
        if (numb.length % currDiff == 0) {
            winNum = shuffle(numb)
                // console.log(winNum)
            for (let j = 0; j < currDiff; j++) {
                if (winCond[j] == undefined || winCond.length % currDiff == 0) {
                    winCond.push(winNum[j]);
                    // console.log('we continue with ' + winNum[j])
                    break;
                }
                if ((winCond.length + currDiff) % currDiff == 1 && winCond[winCond.length - 1] != (winNum[j] - currDiff)) {
                    winCond.push(winNum[j]);
                    // console.log('we continue with ' + winNum[j])
                    break;
                }
                if ((winCond.length + currDiff) % currDiff == 2 && winCond[winCond.length - 1] != (winNum[j] - currDiff) && winCond[winCond.length - 2] != (winNum[j] - currDiff * 2)) {
                    winCond.push(winNum[j]);
                    // console.log('we continue with ' + winNum[j])
                    break;
                }
                if ((winCond.length + currDiff) % currDiff == 3 && winCond[winCond.length - 1] != (winNum[j] - currDiff) && winCond[winCond.length - 2] != (winNum[j] - currDiff * 2) && winCond[winCond.length - 3] != (winNum[j] - currDiff * 3)) {
                    winCond.push(winNum[j]);
                    // console.log('we continue with ' + winNum[j])
                    break;
                }
                if ((currDiff > 4 && winCond.length + currDiff) % currDiff == 4 && winCond[winCond.length - 1] != (winNum[j] - currDiff) && winCond[winCond.length - 2] != (winNum[j] - currDiff * 2) && winCond[winCond.length - 3] != (winNum[j] - currDiff * 3) && winCond[winCond.length - 4] != (winNum[j] - currDiff * 4)) {
                    winCond.push(winNum[j]);
                    // console.log('we continue with ' + winNum[j])
                    break;
                }
                if ((currDiff == 6 && winCond.length + currDiff) % currDiff == 5 && winCond[winCond.length - 1] != (winNum[j] - currDiff) && winCond[winCond.length - 2] != (winNum[j] - currDiff * 2) && winCond[winCond.length - 3] != (winNum[j] - currDiff * 3) && winCond[winCond.length - 4] != (winNum[j] - currDiff * 4) && winCond[winCond.length - 5] != (winNum[j] - currDiff * 5)) {
                    winCond.push(winNum[j]);
                    // console.log('we continue with ' + winNum[j])
                    break;
                }
                // console.log('Changing ' + winNum[j] + ' to ' + winNum[j + 1])
            }
            numb = [];
            winNum = [];
        }
    }
    console.log(winCond);
}

function arrFiltr(arr, value) {
    return arr.filter(function(empt) {
        return empt != value;
    })
}

//! Random number generator function

function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;
    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createRules() {
    try {
        gameRules.appendChild(document.createElement('p')).textContent += 'Clues';

        // !TEMPORARY CODE - TO SHOW FINISHED PUZZLE

        for (let i = 0; i < currDiff; i++) {
            let row = document.createElement("div");
            row.classList.add("row");
            gameRules.appendChild(row);
            for (let j = 0; j < currDiff; j++) {
                let rule = document.createElement("div");
                rule.classList.add("rule");
                rule.classList.add(`${difficultyOptions[i]}-${parseInt(winCond[j+i*currDiff]) - (currDiff*(j)) - (currDiff*currDiff*i)}`);
                row.appendChild(rule);
            }
        }

        // !TEMPORARY CODE ENDED

        function generateTripleClue() {
            let middleNums = [],
                clue = [],
                rightNums = [],
                leftNums = [];

            for (let j = 1; j < currDiff * currDiff - 1; j++) {
                if (j % currDiff != 0 && (j + 1) % currDiff != 0) { middleNums.push(JSON.parse(JSON.stringify(winCond[j]))) }
            }

            let randomMiddleNumber = middleNums[Math.floor(Math.random() * middleNums.length)]

            for (let k = 0; k < currDiff; k++) {
                rightNums.push(winCond[((winCond.indexOf(randomMiddleNumber) % currDiff) - 1) + currDiff * k])
                leftNums.push(winCond[((winCond.indexOf(randomMiddleNumber) % currDiff) + 1) + currDiff * k])
            }

            clue.push(rightNums[Math.floor(Math.random() * rightNums.length)])
            clue.push(winCond[winCond.indexOf(randomMiddleNumber)])
            clue.push(leftNums[Math.floor(Math.random() * leftNums.length)])

            return clue;
        }


        let horRow = document.createElement("div");
        horRow.classList.add("game-rules-hor");
        gameRules.appendChild(horRow);

        let connectionClues = [];

        for (let m = 0, n = getRandomInt(currDiff - 1); m <= n; m++) {
            let tripleClue = generateTripleClue();

            connectionClues.push(tripleClue[1])

            let clue = document.createElement("div");
            clue.classList.add("clue")
            horRow.appendChild(clue);

            if (getRandomInt(2) % 2) {
                for (let i = 0; i < tripleClue.length; i++) {
                    let rule = document.createElement("div");
                    rule.classList.add("rule");
                    rule.classList.add(`${document.getElementById(tripleClue[i]).classList[1]}`);
                    clue.appendChild(rule);
                }
            } else {
                for (let i = tripleClue.length - 1; i >= 0; i--) {
                    let rule = document.createElement("div");
                    rule.classList.add("rule");
                    rule.classList.add(`${document.getElementById(tripleClue[i]).classList[1]}`);
                    clue.appendChild(rule);
                }
            }
        }

        console.log(connectionClues)

        let verCol = document.createElement("div");
        verCol.classList.add("game-rules-ver");
        gameRules.appendChild(verCol);

    } catch (Err) {
        console.log(Err);
    }
}

function restartGame() {
    console.clear()
    gameWindow.innerHTML = ""
    gameRules.innerHTML = ""
    gameSheet = [];
    congrWindow.classList.remove('visible');
    mainField.classList.remove('blackout');
    backupRule = true;
}

function checkWin(firstArray, secondArray) {
    let fullSheet = [];
    firstArray.forEach(array => {
        array.forEach(item => {
            let filRow = arrFiltr(item);
            if (filRow.length == 1) {
                fullSheet.push(parseInt(filRow))
            }
        })
    })

    fullSheet.sort(function(a, b) { return a - b; })
    console.log(secondArray)

    // console.log(JSON.stringify(fullSheet).split('[').join('').split(']').join(''))
    // console.log('WIN CONDITION: ' + JSON.stringify(secondArray).split('[').join('').split(']').join(''))
    if (fullSheet && secondArray && fullSheet.length != secondArray.length) return false;
    else return JSON.stringify(fullSheet).split('[').join('').split(']').join('') == JSON.stringify(secondArray).split('[').join('').split(']').join('');
}

function updateSheet(a, b, c, id) {
    console.clear()

    if (backupRule) {
        backupField = JSON.parse(JSON.stringify(gameSheet));
        backupHTMLGame = JSON.parse(JSON.stringify(gameWindow.innerHTML))
        backupHTMLRules = JSON.parse(JSON.stringify(gameRules.innerHTML))
    }
    // console.table(backupField[a])

    if (typeof(gameSheet[a][b]) === 'object' && gameSheet[a][c][b] !== null && arrFiltr(gameSheet[a][c]).length > 1 || typeof(gameSheet[a][b]) === 'object' && gameSheet[a][c][b] == 0 && arrFiltr(gameSheet[a][c]).length > 1) {
        document.getElementById(gameSheet[a][c][b]).classList.add('hidden')
        gameSheet[a][c][b] = null
    }

    let nullCountHor = 0;
    let nullCountVer = 0;
    let notNullHor;
    let notNullVer;
    let tempC;

    for (let j = 0; j < currDiff; j++) {
        if (gameSheet[a][j][b] === null) {
            nullCountHor++
        } else {
            notNullHor = gameSheet[a][j][b];
        }

        if (gameSheet[a][c][j] === null) {
            nullCountVer++
        } else {
            notNullVer = gameSheet[a][c][j];
            tempC = j
        }
    }

    if (nullCountHor == (currDiff - 1)) {
        let lastOpt = document.getElementById(`${notNullHor.toString()}`)
        if (lastOpt) {
            lastOpt.classList.add("last-option");
            for (let j = 0; j < currDiff; j++) {
                if (notNullHor != gameSheet[a][notNullHor - currDiff * currDiff * a - currDiff * b][j] && gameSheet[a][notNullHor - currDiff * currDiff * a - currDiff * b][j] !== null) {
                    document.getElementById(gameSheet[a][notNullHor - currDiff * currDiff * a - currDiff * b][j]).classList.add('hidden')
                    gameSheet[a][notNullHor - currDiff * currDiff * a - currDiff * b][j] = null
                }
            }
        }
    }

    if (nullCountVer == (currDiff - 1)) {
        let lastOpt = document.getElementById(`${notNullVer.toString()}`)
        if (lastOpt) {
            lastOpt.classList.add("last-option");
            for (let j = 0; j < currDiff; j++) {
                if (notNullVer !== gameSheet[a][j][tempC] && gameSheet[a][j][tempC] !== null) {
                    document.getElementById(gameSheet[a][j][tempC]).classList.add('hidden')
                    gameSheet[a][j][tempC] = null
                }

            }
        }
    }

    console.table(gameSheet[a])

    // ! NEW CODE

    let filtrArr = [];
    let answer = [];
    for (let i = 0; i < currDiff; i++) {
        for (let j = 0; j < currDiff; j++) {
            let unfiltr = [];
            for (let k = 0; k < currDiff; k++) {
                unfiltr.push(gameSheet[i][k][j]);
            }
            let filtr = arrFiltr(unfiltr)
            if (filtr.length == 1 && unfiltr.includes(winCond[j + i * currDiff])) {
                filtrArr.push(filtr)
            } else if (unfiltr.includes(winCond[j + i * currDiff])) {
                filtrArr.push(['+']);
            } else {
                backupRule = false;
                filtrArr.push(['-']);
            }
        }
    }

    for (let k = 0; k < winCond.length; k++) {
        if (winCond[k] == filtrArr[k]) answer.push(true);
        else if (filtrArr[k] == '+') answer.push('N/I');
        else if (filtrArr[k] == '-') answer.push(false);
    }
    if (answer.includes(false)) {
        console.log(`Found mistake, please restart.`);
    } else {
        console.log(`Everything seems logical, keep it up!`)
    }

    // ! NEW CODE

    if (checkWin(gameSheet, winCond)) {
        if (!congrWindow.classList.contains('visible')) {
            mainField.classList.add('blackout');
            congrWindow.innerHTML = "";
            congrWindow.appendChild(document.createElement('p')).textContent += `The case is closed succesfully!`
            congrWindow.appendChild(document.createElement('p')).textContent += `Your time is ${document.getElementById('timer').textContent}.`
        }
        congrWindow.classList.add('visible');
        // console.log(`YOU WON!`)
        // console.log(`Your time is ${document.getElementById('timer').textContent}.`)
        stopTimer()
    }
}

function createGame() {
    try {
        startTimer();
        createOptionsClasses();



        function createOptionsClasses() {
            mainField.classList.add('container');
            gameWindow.appendChild(document.createElement('p')).textContent += 'Suspects';
            for (let i = 0; i < currDiff; i++) {
                let row = document.createElement("div");
                row.classList.add("row");
                row.classList.add(`${difficultyOptions[i]}-row`)
                gameWindow.appendChild(row);
                for (let j = 0; j < currDiff; j++) {
                    let box = document.createElement("div");
                    box.classList.add("box");
                    box.classList.add(`${difficultyNumbers[j]}-box`)
                    row.appendChild(box);
                    for (let k = 0; k < currDiff; k++) {
                        let option = document.createElement("div");
                        option.classList.add("option");
                        if (row.classList.contains(`${difficultyOptions[i]}-row`) && box.classList.contains(`${difficultyNumbers[j]}-box`)) {
                            option.classList.add(`${difficultyOptions[i]}-${k}`);
                        }
                        option.setAttribute('id', `${k+j*currDiff+i*currDiff*currDiff}`)
                        box.appendChild(option);

                        option.addEventListener('click', () => {
                            updateSheet(i, j, k);
                        });
                    }
                }
            }
        }

        createOptionsArr();

        function createOptionsArr() {
            let gameCell = document.querySelectorAll(".option");
            let gameOptions = []; //! 0--63

            Array.from(gameCell).forEach(item => {
                gameOptions.push(parseInt(item.id))
            })

            for (let k = 0; k < currDiff; k++) {
                let gameRows = [];

                for (let j = 0; j < currDiff; j++) {
                    let gameBoxs = [];
                    for (let i = currDiff * currDiff * k + j; i < currDiff * currDiff * (k + 1); i += currDiff) {
                        gameBoxs.push(gameOptions[i])
                    }
                    gameRows.push(gameBoxs)
                }
                gameSheet.push(gameRows)
            }
        }

        createWinCond();
        createRules();

        // ! ADDITIONAL FUNCTIONS

        // function checkNull(arr) {
        //     let qq = 0;
        //     for (let elem of arr) {
        //         if (elem === null) qq++
        //     }
        //     if (qq == (currDiff - 1)) return true;
        //     return false;
        // }

        // function makeLastOption(filter, o) {
        //     for (let n = 0; n < currDiff; n++) {
        //         let lastOpt = document.getElementById(`${filter[n].toString()}`)
        //         if (lastOpt) {
        //             gameSheet[o][n] = filter[n].toString()
        //         }
        //     }
        // }

    } catch (Err) {
        console.log(Err);
    }

}

//! Timer functions

function startTimer(minutes, timerValue) {
    stopTimer();
    minutes = typeof minutes !== 'undefined' ? minutes : 0;
    timerValue = typeof timerValue !== 'undefined' ? timerValue : 0;
    timer = setInterval(() => {
        if (timerValue > 59) {
            minutes += Math.floor(timerValue / 60);
            timerValue -= 60
        }
        if (minutes < 10 && timerValue < 10) {
            document.getElementById('timer').innerHTML = '0' + minutes + ':0' + timerValue;
        } else if (minutes < 10 && timerValue >= 10) {
            document.getElementById('timer').innerHTML = '0' + minutes + ':' + timerValue;
        } else if (minutes >= 10 && timerValue < 10) {
            document.getElementById('timer').innerHTML = '' + minutes + ':0' + timerValue;
        } else {
            document.getElementById('timer').innerHTML = '' + minutes + ':' + timerValue;
        }
        timerValue++;

        if (minutes >= 60) {
            stopTimer();
            document.getElementById('timer').innerHTML = 'GAME OVER';
        }
    }, 1000);

    //*PAUSE FUCNCTIONS (MAY SLOW DOWN THE BROWSER, BY DEFAULTS TURNED OFF)
    // window.addEventListener('focus', function(event) {
    //     startTimer(minutes, timerValue)
    // });

    // window.addEventListener('blur', function(event) {
    //     stopTimer()
    // });
}

function stopTimer() {
    clearInterval(timer);
    // console.log('timer is stopped')
}

//! ATTENTION! BUG: if there are 3 option left out of 6 places, by deleting one option from any of those left, it might dissapear due to other two places being full with 2 last options.
//? For example: [-] [-] [-] [456] [456] [456] ---> *deleting 4* ---> [-] [-] [-] [56] [456] [456] ---> *if last 2 are 5 and 6, then..* ---> [-] [-] [-] [-] [5] [6] ---> *no room for 4!*