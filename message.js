//creating dynamic welcoming message

let mymessage = document.getElementById("message");
let newElement = document.createElement("h2");
 
let date = new Date();
let currentHour = date.getHours();
  console.log();
let createTxtMsg;

if (currentHour >= 4 && currentHour < 10){
 createTxtMsg = "Good morning!";
} else if (currentHour >= 10 && currentHour < 12){
 createTxtMsg = "Good day!";
}  else if (currentHour >= 12 && currentHour < 18){
 createTxtMsg = "Good afternoon!";
}  else if (currentHour >= 18 && currentHour < 22){
 createTxtMsg = "Good evening!";
}  else if (currentHour >= 22 && currentHour < 4){
 createTxtMsg = "Good night!";
} else {
  createTxtMsg = "Welcome";
 }

let createEleTxt = document.createTextNode(createTxtMsg);

newElement.appendChild(createEleTxt);

mymessage.appendChild(newElement);

newElement.setAttribute("class", "welcome");

newElement.style.cssText = "text-align: center; font-size: 30px; font-family: arial; text-color: black";


