# projects related to DOM

## projects link

[Click here]()

# solution code

## project 1

```javascript
console.log("Shubham");

const btns = document.querySelectorAll(".button");
const body = document.querySelector("body");

btns.forEach(function (btn) {
  console.log(btn);

  btn.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      // body.style.backgroundColor = 'grey'
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "white") {
      // body.style.backgroundColor = 'white'
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "blue") {
      // body.style.backgroundColor = 'blue'
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "yellow") {
      // body.style.backgroundColor = 'yellow'
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "purple") {
      // body.style.backgroundColor = 'purple'
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## project 2 solution 
```javascript

const form = document.querySelector('form')

    // this height use case will give you empty value
    // const height = parseInt(document.querySelector('#height').value)

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const height = parseInt(document.querySelector('#height').value)
        const weight = parseInt(document.querySelector('#weight').value)
        const results = document.querySelector('#results')
        
        if(height === '' || height < 0 || isNaN(height)){
            results.innerHTML = `Please give a valid height ${height}`
        }else if (weight === '' || weight < 0 || isNaN(weight)) {
            results.innerHTML = `Please give a valid weight ${weight}`
        }else {
            const bmi = (weight / ((height * height) / 10000)).toFixed(2)
            
            if(bmi < 18.6) {
                results.innerHTML = `<span>Under Weight = </span><span>${bmi}</span>`
            }else if(bmi > 18.6 && bmi < 24.9) {
                results.innerHTML = `<span>Normal Range = </span><span>${bmi}</span>`
            }else {
                results.innerHTML = `<span>Over Weight = </span><span>${bmi}</span>`
            }
        }
    })
```

## project 3 solution code

``` javascript
const clock = document.getElementById('clock')  

  setInterval(() => {
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
  }, 1000);

```

## Digital Clock Code which is project 3 solution

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Local Time</title>
    <style>
        body {
            background-color: #212121;
            color: #fff;
        }

        .center {
            display: flex;
            height: 100vh;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        #clock {
            font-size: 40px;
            background-color: orange;
            padding: 25px 60px;
            margin-top: 10px;
            border-radius: 10px;
        }
    </style>
</head>
<body> 
    <div class="center">
        <div id="banner"><h1>Your Local Time</h1></div>
        <div id="clock"></div>
    </div> 
    <script>
        const clock = document.getElementById('clock')  

        setInterval(() => {
            let date = new Date()
            clock.innerHTML = date.toLocaleTimeString()
        }, 1000);
    </script>
</body>
</html>
```

## project 4 solution 
```javascript


        let randomNumber = parseInt(Math.random() * 100 + 1) 

        const submit = document.querySelector('#submit')
        const userInput = document.querySelector('#guessField')
        const guessSlot = document.querySelector('.guesses')
        const remaining = document.querySelector('.lastResult')
        const lowOrHi = document.querySelector('.lowOrHi')
        const startOver = document.querySelector('.resultParas')

        const p = document.createElement('p')

        let prevGuess = []
        let numGuess = 1

        let playGame = true

        if (playGame) {
            submit.addEventListener('click', (e) => {
                e.preventDefault()
                const guess = parseInt(userInput.value)
                validateGuess(guess)
            })
        }

        // validateGuess function check karega ki hamara input 1 to 100 ke bich me hai ki nahi
        function validateGuess(guess) {
            if(isNaN(guess)){
                alert('Please enter a valid number')
            }else if(guess < 1){
                alert('Please enter a number more than 1')
            } else if (guess > 100) {
                alert('Please enter a number less than 100')
            }else {
                prevGuess.push(guess)
                if(numGuess === 11){
                    displayGuess(guess)
                    displayMessage(`Game over. Random number is ${randomNumber}`)
                    endGame()
                }
                else {
                    displayGuess(guess)
                    checkGuess(guess)
                }
            }
        }


        // ye check karega ki user ne value liya kahi o random number equal hai ki nahi 
        // aur user ka value random value se low hai to ye batayega ki value low hai fir guesss karo
        // ya fir user ka value random value se high hai to ye batayega ki value high hai fir guesss karo
        function checkGuess(guess) {
            if(guess == randomNumber){
                displayMessage('You guessed it right')
                endGame()
            }
            else if (guess < randomNumber) {
                displayMessage('Number too low') 
            }
            else if (guess > randomNumber) {
                displayMessage('Number too high') 
            }
        }

        function displayGuess(guess) {
            userInput.value = ''    // value ko null kar dega aur fir naya aayega isme
            guessSlot.innerHTML += `${guess}  `
            numGuess++
            remaining.innerHTML = `${11 - numGuess}`
        }

        function displayMessage(message) {
            lowOrHi.innerHTML = `<h2>${message}</h2>`
        }

        function endGame() {
            userInput.value = ''
            userInput.setAttribute('disabled', '')
            p.classList.add('button')
            p.innerHTML = `<h2 id='newGame'>Start new game</h2>`
            startOver.appendChild(p)
            playGame = false
            newGame()
        }

        function newGame() {
            document.querySelector('#newGame').addEventListener('click', (e) => {
                randomNumber = parseInt(Math.random() * 100 + 1) 
                prevGuess = []
                numGuess = 1
                guessSlot.innerHTML = ''
                remaining.innerHTML = `${11 - numGuess}`
                userInput.removeAttribute('disabled');
                startOver.removeChild(p)

                playGame = true
            })
        }
```

## project 4 all solution code
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Number Guessing Game</title>

    <style>
        html {
        font-family: sans-serif;
        }

        body {
        width: 300px;
        max-width: 750px;
        min-width: 480px;
        margin: 0 auto;
        background-color: #212121;
        }

        .lastResult {
        color: white;
        padding: 7px;
        }

        .guesses {
        color: white;
        padding: 7px;
        }

        button {
        background-color: #141414;
        color: #fff;
        width: 250px;
        height: 50px;
        border-radius: 25px;
        font-size: 30px;
        border-style: none;
        margin-top: 30px;
        /* margin-left: 50px; */
        }

        #submit {
        background-color: #161616;
        color: #ffffff;
        width: 200px;
        height: 50px;
        border-radius: 10px;
        font-size: 20px;
        border-style: none;
        margin-top: 50px;
        /* margin-left: 75px; */
        }

        #guessField {
        color: #000;
        width: 250px;
        height: 50px;
        font-size: 30px;
        border-style: none;
        margin-top: 25px;

        /* margin-left: 50px; */
        border: 5px solid #6c6d6d;
        text-align: center;
        }

        #guess {
        font-size: 55px;
        /* margin-left: 90px; */
        margin-top: 120px;
        color: #fff;
        }

        .guesses {
        background-color: #7a7a7a;
        }

        #wrapper {
        box-sizing: border-box;
        text-align: center;
        width: 450px;
        height: auto;
        background-color: #474747;
        color: #fff;
        font-size: 25px;
        }

        h1 {
        background-color: #161616;

        color: #fff;
        text-align: center;
        }

        p {
        font-size: 16px;
        text-align: center;
        }
    </style>
</head>

<body style="background-color:#212121; color:#fff;"> 
    <div id="wrapper">
        <h1>Number guessing game</h1>
        <p>Try and guess a random number between 1 and 100.</p>
        <p>You have 10 attempts to guess the right number.</p>
        </br>
        <form class="form">
            <label2 for="guessField" id="guess">Guess a number</label>
                <input type="text" id="guessField" class="guessField">
                <input type="submit" id="submit" value="Submit guess" class="guessSubmit">
        </form>

        <div class="resultParas">
            <p>Previous Guesses: <span class="guesses"></span></p>
            <p>Guesses Remaining: <span class="lastResult">10</span></p>
            <p class="lowOrHi"></p>
        </div>
    </div>

    <script>
        let randomNumber = parseInt(Math.random() * 100 + 1) 

        const submit = document.querySelector('#submit')
        const userInput = document.querySelector('#guessField')
        const guessSlot = document.querySelector('.guesses')
        const remaining = document.querySelector('.lastResult')
        const lowOrHi = document.querySelector('.lowOrHi')
        const startOver = document.querySelector('.resultParas')

        const p = document.createElement('p')

        let prevGuess = []
        let numGuess = 1

        let playGame = true

        if (playGame) {
            submit.addEventListener('click', (e) => {
                e.preventDefault()
                const guess = parseInt(userInput.value)
                validateGuess(guess)
            })
        }

        // validateGuess function check karega ki hamara input 1 to 100 ke bich me hai ki nahi
        function validateGuess(guess) {
            if(isNaN(guess)){
                alert('Please enter a valid number')
            }else if(guess < 1){
                alert('Please enter a number more than 1')
            } else if (guess > 100) {
                alert('Please enter a number less than 100')
            }else {
                prevGuess.push(guess)
                if(numGuess === 11){
                    displayGuess(guess)
                    displayMessage(`Game over. Random number is ${randomNumber}`)
                    endGame()
                }
                else {
                    displayGuess(guess)
                    checkGuess(guess)
                }
            }
        }


        // ye check karega ki user ne value liya kahi o random number equal hai ki nahi 
        // aur user ka value random value se low hai to ye batayega ki value low hai fir guesss karo
        // ya fir user ka value random value se high hai to ye batayega ki value high hai fir guesss karo
        function checkGuess(guess) {
            if(guess == randomNumber){
                displayMessage('You guessed it right')
                endGame()
            }
            else if (guess < randomNumber) {
                displayMessage('Number too low') 
            }
            else if (guess > randomNumber) {
                displayMessage('Number too high') 
            }
        }

        function displayGuess(guess) {
            userInput.value = ''    // value ko null kar dega aur fir naya aayega isme
            guessSlot.innerHTML += `${guess}  `
            numGuess++
            remaining.innerHTML = `${11 - numGuess}`
        }

        function displayMessage(message) {
            lowOrHi.innerHTML = `<h2>${message}</h2>`
        }

        function endGame() {
            userInput.value = ''
            userInput.setAttribute('disabled', '')
            p.classList.add('button')
            p.innerHTML = `<h2 id='newGame'>Start new game</h2>`
            startOver.appendChild(p)
            playGame = false
            newGame()
        }

        function newGame() {
            document.querySelector('#newGame').addEventListener('click', (e) => {
                randomNumber = parseInt(Math.random() * 100 + 1) 
                prevGuess = []
                numGuess = 1
                guessSlot.innerHTML = ''
                remaining.innerHTML = `${11 - numGuess}`
                userInput.removeAttribute('disabled');
                startOver.removeChild(p)

                playGame = true
            })
        }
    </script>
</body>

</html>

```