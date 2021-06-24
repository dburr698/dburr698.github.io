let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/me-seaside.jpg') {
      myImage.setAttribute('src','images/cooper-with-toy.jpeg');
    } else {
      myImage.setAttribute('src','images/me-seaside.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello, ' + myName + '! Welcome to my page.';
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello again, ' + storedName + '! Welcome back to my page.';
}

myButton.onclick = function() {
    setUserName();
}
  