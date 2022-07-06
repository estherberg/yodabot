GET STARTED :

Pour lancer le projet ouvrer dans votre navigateur le fichier index.html


Le projet consiste a mettre en place un chat bot qui est relier a une api de inbenta :
https://developers.inbenta.io/chatbot/chatbot-api/api-setup


index.html


Fonction qui récupère la réponse que le user a tapé:
function getHardResponse(userText)
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>'  + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

document.getElementById("chat-bar-bottom").scrollIntoView(true);


Obtient le texte de la zone de saisie et le traite:
function getResponse() {
let userText = $("#textInput").val();

let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

$("#textInput").val("");
$("#chatbox").append(userHtml);
document.getElementById("chat-bar-bottom").scrollIntoView(true);

Marque un temps entre la réception du message et la réponse de Yoda:
    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

Gère l'envoi de texte via des clics de bouton:
function buttonSendText(sampleText) 
let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

$("#textInput").val("");
$("#chatbox").append(userHtml);
document.getElementById("chat-bar-bottom").scrollIntoView(true);


function sendButton() : fonction rattachée au bouton afin d'envoyer le texte écrit par le user.
getResponse(): fonction qui récupère la réponse.


function getBotResponse(input): fonction qui récupère la réponse de Yoda.


// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});



  
