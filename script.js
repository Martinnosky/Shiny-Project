// déclaration de la variable "userName" qui sera utilisée pour mémoriser le nom de l'utilisateur
let userName = "";

// déclaration de la variable "rules" contenant plusieurs listes qui déterminent le langage et possibles réponses du chatbot
const rules = [
{
// liste de possibles manières pour que l'utilisateur dit "bonjour"
patterns: ["bonjour","salut","hello","coucou"],
// réponse du chatbot pour "bonjour"
response: "Bonjour ! Comment t'appelles-tu ?"
},
{
patterns: ["comment tu t'appelles","ton nom","tu t'appelles comment"],
response: "Je suis un petit robot de conversation."
},
{
// liste de possibles manières pour que l'utilisateur dit "comment ça va?"
patterns: ["comment ça va","ça va","ca va"],
// réponse du chatbot pour "comment ça va?"
response: "Je vais très bien merci. Et toi ?"
},
{
patterns: ["ça va bien","je vais bien","tout va bien"],
response: "Je suis content de l'entendre !"
},
{
// liste de possibles manières pour que l'utilisateur dit "qui es-tu?"
patterns: ["qui es tu","qui es-tu"],
// réponse du chatbot pour "qui es-tu?"
response: "Je suis un petit robot de conversation."
},

{
// liste de possibles manières pour que l'utilisateur dit "que fais-tu?"
patterns: ["que fais tu","que fais-tu"],
// réponse du chatbot pour "que fais-tu?"
response: "Je discute simplement avec toi."
},

{
// liste de possibles manières pour que l'utilisateur dit "merci"
patterns: ["merci"],
// réponse du chatbot pour "merci"
response: "Avec plaisir."
},

{
// liste de possibles manières pour que l'utilisateur dit "au revoir"
patterns: ["au revoir","bye"],
// réponse du chatbot pour "au revoir", avec une conditionnelle pour ajouter le nom de l'utilisateur si le chatbot le connait
response: function(){
if(userName !== ""){
return "Au revoir " + userName + " !";
}
return "Au revoir !";
}
}
];

// déclaration de fonction "SendMessage" qui permet à l'utilisateur d'introduire ces messages et les envoyer au chatbot
function sendMessage(){

// déclaration de variable "InputField" pour saisir le message entré par l'utilisateur
let inputField = document.getElementById("userInput");
// déclaration de variable "Input" qui transforme le message entré en minuscules pour facilité d'utilisation
let input = inputField.value.trim().toLowerCase();

// déclaration de variable "Chat" pour afficher un historique de la conversation avec le chatbot
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
