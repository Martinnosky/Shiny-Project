let userName = "";

const rules = [
{
patterns: ["bonjour","salut","hello","coucou"],
response: "Bonjour ! Comment t'appelles-tu ?"
},

{
patterns: ["comment ça va","ça va","ca va"],
response: "Je vais très bien merci. Et toi ?"
},

{
patterns: ["qui es tu","qui es-tu"],
response: "Je suis un petit robot de conversation."
},

{
patterns: ["que fais tu","que fais-tu"],
response: "Je discute simplement avec toi."
},

{
patterns: ["merci"],
response: "Avec plaisir."
},

{
patterns: ["au revoir","bye"],
response: function(){
if(userName !== ""){
return "Au revoir " + userName + " !";
}
return "Au revoir !";
}
}
];

function sendMessage(){

let inputField = document.getElementById("userInput");
let input = inputField.value.trim().toLowerCase();
let chat = document.getElementById("chat");

if(input === "") return;

chat.innerHTML += "<div class='user'><b>Vous :</b> " + input + "</div>";

inputField.value = "";

let response = "Je ne comprends pas très bien.";

if(input.includes("je m'appelle")){
userName = input.split("je m'appelle ")[1];
response = "Enchanté " + userName + " !";
}
else{

for(let rule of rules){

for(let pattern of rule.patterns){

if(input.includes(pattern)){

if(typeof rule.response === "function"){
response = rule.response();
}
else{
response = rule.response;
}

break;
}

}

}

}

chat.innerHTML += "<div class='robot' id='typing'>Robot est en train d'écrire...</div>";

chat.scrollTop = chat.scrollHeight;

setTimeout(function(){

let typing = document.getElementById("typing");
if(typing) typing.remove();

chat.innerHTML += "<div class='robot'><b>Robot :</b> " + response + "</div>";

chat.scrollTop = chat.scrollHeight;

},1000);

}

document.getElementById("userInput").addEventListener("keypress",function(event){

if(event.key === "Enter"){
sendMessage();
}

});
