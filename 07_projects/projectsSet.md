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

```Digital Clock Code which is project 3 solution


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