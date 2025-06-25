const num = prompt('Enter a number.')
if(num < 0){
    alert('Negative Number.')
}
else if(num >= 0){
    alert('Positive Number.')
}

const age = +prompt('Enter your age in number (for exampe: 18) to see if you are eligible for voting.')
if(age >=18){
    alert('You are eligible for voting!')
}
else{
    alert('You are not eligible for voting!')
}

const password = prompt('Enter your password.')
const confirmPass = prompt('Confirm your password.')
if(password === confirmPass){
    alert('Correct!')
}
else{
    alert('Incorrect!')
}

const marks = +prompt('Enter your marks')
if(marks >= 80){
    alert('Grade A')
}

const temperature = +prompt('Enter Temperature (for example: 36)')
if(temperature > 35){
    alert('Garmi zyada hai!')
}

const username = prompt('Enter your name')
if(username === 'Ahmed'){
    alert('Welcome!')
}