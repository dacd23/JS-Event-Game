// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');
let kaputButton = document.getElementById('kaputt');
let website = document.getElementById('container');


// This function programs the "Reset" button to return the boxes to their default styles
let reset = function() {
  itemOne.style.width = ''
  itemTwo .style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = "none"
  website.style.backgroundColor = '';
  itemOne.style.marginRight = "auto";
  itemTwo.style.marginLeft = "auto";
  itemThree.style.marginRight = "auto";
  itemFour.style.marginLeft = "auto";
  kaputButton.style.borderRadius = "0.2px";
  kaputButton.style.width = "400px";
  kaputButton.style.height = "50px";
  kaputButton.innerText = "Kaputt the Website!";
};
resetButton.onclick = reset;

// Write your code here

function increaseWidth() {
  itemOne.style.width = '450px';
}

itemOne.addEventListener('mouseover', increaseWidth);

function colorValue() {
  return Math.floor(Math.random() * 256);
}

function changeBackground(){
let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
itemTwo.style.backgroundColor = randomColor;
};

itemTwo.addEventListener('mouseup', changeBackground);

function changeText() {
  itemThree.innerHTML = 'The mouse has left the element';
}

itemThree.addEventListener('mouseout', changeText);

function showItem() {
  itemFive.style.display = 'block';
}

itemFour.addEventListener('mousedown', showItem);


// Kaput function changes the color of the entire website. 

function kaputWebsite() {
  let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
  website.style.backgroundColor = randomColor;
  itemOne.style.marginRight = "250px";
  itemTwo.style.marginLeft = "260px";
  itemThree.style.marginRight = "280px";
  itemFour.style.marginLeft = "250px";
  kaputButton.style.borderRadius = "150px";
  kaputButton.style.width = "150px";
  kaputButton.style.height = "150px";
  kaputButton.innerText = "Click Reset button to fix the website!";
}


//button where the kaput event will be attached. 
kaputButton.addEventListener('click', kaputWebsite);

//This function shows a message when the website has been broken.
function kaputMessage() {
  if(kaputButton.innerText === "Click Reset button to fix the website!") {
   alert('You broke the website!!! Click the reset button to fix it.');
  };
 };

 //this event triggers when the website has been broken.
kaputButton.addEventListener('mouseout', kaputMessage);

