var user = [];
var message = [];
var userInput  = document.getElementById("user");
var messageInput  = document.getElementById("message");
function save() {
 user.push(userInput.value);
 message.push(messageInput.value);
}
console.log(user);
console.log(message);
 
