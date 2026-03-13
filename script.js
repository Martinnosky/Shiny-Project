let userName = "";

function sendMessage(){

let input = document.getElementById("userInput").value.toLowerCase();
let chat = document.getElementById("chat");

chat.innerHTML += "<p><b>Vous :</b> " + input + "</p>";

let response = "Je ne comprends pas très bien.";

if(input.includes("bonjour") || input.includes("salut")){
response = "Bonjour ! Comment t'appelles-tu ?";
}

else if(input.includes("je m'appelle")){
userName = input.split("je m'appelle ")[1];
response = "Enchanté " + userName + " ! Comment ça va ?";
}

else if(input.includes("ça va") || input.includes("ca va")){
response = "Je vais très bien merci. Et toi ?";
}

else if(input.includes("bien")){
response = "Super ! Je suis content de l'entendre.";
}

else if(input.includes("qui es tu") || input.includes("qui es-tu")){
response = "Je suis un petit robot de conversation.";
}

else if(input.includes("que fais tu") || input.includes("que fais-tu")){
response = "Je discute simplement avec toi.";
}

else if(input.includes("merci")){
response = "Avec plaisir.";
}

else if(input.includes("au revoir") || input.includes("bye")){
if(userName !== ""){
response = "Au revoir " + userName + " !";
}else{
response = "Au revoir !";
}
}

chat.innerHTML += "<p><b>Robot :</b> " + response + "</p>";

document.getElementById("userInput").value = "";
}

document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
