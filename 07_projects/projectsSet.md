# projects related to DOM

## projects link
[Click here]()

# solution code

## project 1

```javascript
console.log('Shubham');

const btns = document.querySelectorAll('.button')
    const body = document.querySelector('body')

    btns.forEach(function (btn) {
        console.log(btn)

        btn.addEventListener('click', function (e) {
            console.log(e);
            console.log(e.target);
            if(e.target.id === 'grey'){
                // body.style.backgroundColor = 'grey'
                body.style.backgroundColor = e.target.id
            }
            else if(e.target.id === 'white') {
                // body.style.backgroundColor = 'white'
                body.style.backgroundColor = e.target.id
            }
            else if(e.target.id === 'blue') {
                // body.style.backgroundColor = 'blue'
                body.style.backgroundColor = e.target.id
            }
            else if (e.target.id === 'yellow') {
                // body.style.backgroundColor = 'yellow'
                body.style.backgroundColor = e.target.id
            }
            else if(e.target.id === 'purple') {
                // body.style.backgroundColor = 'purple'
                body.style.backgroundColor = e.target.id
            }
        })
    });

```