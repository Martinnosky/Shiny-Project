function sendMessage(){

let input=document.getElementById("userInput").value.toLowerCase();

let chat=document.getElementById("chat");

chat.innerHTML += "<p>Utilisateur : "+input+"</p>";

let response="Je ne comprends pas.";

if(input.includes("bonjour")){
response="Bonjour humain, comment t'appelles-tu ?";
}

if(input.includes("je m'appelle")){
response="Bonjour, ravi de te rencontrer.";
}

if(input.includes("jo")){
response="Les prochains JO auront lieu à Paris en 2024.";
}

if(input.includes("au revoir")){
response="Au revoir humain.";
}

chat.innerHTML += "<p>Robot : "+response+"</p>";

document.getElementById("userInput").value="";
}
