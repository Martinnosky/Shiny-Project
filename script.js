function sendMessage(){

let input=document.getElementById("userInput").value;

let chat=document.getElementById("chat");

chat.innerHTML += "<p>Utilisateur : "+input+"</p>";

chat.innerHTML += "<p>Robot : Je ne comprends pas encore.</p>";

document.getElementById("userInput").value="";
}
