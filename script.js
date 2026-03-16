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
 patterns:["bonne nuit"],
  response :"Bonne nuit ! Repose toi bien"
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

// déclaration de fonction "sendMessage" qui permet à l'utilisateur d'introduire ces messages et les envoyer au chatbot
function sendMessage(){

// déclaration de variable "inputField" pour saisir le message entré par l'utilisateur
let inputField = document.getElementById("userInput");
// déclaration de variable "Input" qui transforme le message entré en minuscules pour facilité d'utilisation
let input = inputField.value.trim().toLowerCase();

// déclaration de variable "chat" pour afficher un historique de la conversation avec le chatbot
let chat = document.getElementById("chat");

// ne pas utiliser la variable "chat" si la case d'entrée de l'utilisateur est vide
if(input === "") return;

// structure d'affichage des messages entrés par l'utilisateur, comme une messagerie
chat.innerHTML += "<div class='user'><b>Vous :</b> " + input + "</div>";

// effacer le message entré par l'utilisateur après que ce dernier l'envoie
inputField.value = "";

// déclaration de variable "response" que le chatbot affichera lorsqu'il peut pas répondre à une question, mais qui sera affectée par une réponse valide dès que le chatbot la reconnaît
let response = "Je ne comprends pas très bien.";

// vérification du message entré par l'utilisateur, cherchant une introduction
if(input.includes("je m'appelle")){
userName = input.split("je m'appelle ")[1];
// affectation de la variable "Response" pour que le chatbot dit bonjour à l'utilisateur
response = "Enchanté " + userName + " !";
}
// au cas où l'utilisateur entre quelque chose d'autre que "je m'appelle...", on éxécute la commande suivante
else{

// boucle for et déclaration de variable "rule", qui comprend une règle individuelle dans la liste de listes "rules"
for(let rule of rules){

// boucle for et déclaration de variable "pattern", qui comprend un "motif" individuel dans la liste de listes "rules"
for(let pattern of rule.patterns){

// condition qui cherche trouver un match entre les motifs et le message entré par l'utilisateur
if(input.includes(pattern)){

// 
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

 // affichage d'un texte qui dit "typing", pour simuler une courte période dans laquelle le chatbot "écrit sa réponse", cependant le chatbot processe le message et cherche une réponse appropriée
chat.innerHTML += "<div class='robot' id='typing'>Robot est en train d'écrire...</div>";

// renvoie le centre de l'écran vers le message le plus récent, lorsque l'utilisateur entre un message
chat.scrollTop = chat.scrollHeight;

// éxécution de la fonction "function" après délai
setTimeout(function(){

// déclaration de variable "typing", qui revise le message d'attente du chatbot, et le vide avant d'afficher la réponse
let typing = document.getElementById("typing");
if(typing) typing.remove();

// affichage de la réponse du chatbot
chat.innerHTML += "<div class='robot'><b>Robot :</b> " + response + "</div>";

// renvoie le centre de l'écran vers le message le plus récent, lorsque le chatbot entre un message
chat.scrollTop = chat.scrollHeight;

// détermination du temps de délai pour "setTimeout" à 1000 millisecondes, soit une seconde
},1000);

}

// création de "EventListener" qui relie le code à l'utilisateur grace a une touche
document.getElementById("userInput").addEventListener("keypress",function(event){

// association de la touche qui déclenche la fonction à "Enter" du clavier
if(event.key === "Enter"){
sendMessage();
}

});
