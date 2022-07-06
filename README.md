- GET STARTED :

Pour lancer le projet ouvrer dans votre navigateur le fichier index.html


Le projet consiste a mettre en place un chat bot qui est relier a une api de inbenta :
https://developers.inbenta.io/chatbot/chatbot-api/api-setup


Front-end : Js , css , html , bootstrap , VueJs
Back-end : NodeJs , parcel (build)



- index.html : 
il est reliée a "CSS/style.css" , a "JS/app.js" et a des images.
Utilisation des librairies : bootstrap , VueJs

 - style.css :

il met en place tout le style de la page qui est responsive.

- app.js : 

Il inclut tout les fonctions de l'application: 



- function getHardResponse(userText) : 

Fonction qui récupère la réponse que l'utilisateur a tapé:



 - function getResponse() :


Obtient le texte de la zone de saisie et le traite



Marque un temps entre la réception du message et la réponse de Yoda:
    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)



- function buttonSendText(sampleText) :

Gère l'envoi de texte via des clics de bouton.



- function sendButton() :
fonction rattachée au bouton afin d'envoyer le texte écrit par le user.

fonction qui récupère la réponse.


- function getBotResponse(input): 

fonction qui récupère la réponse de Yoda et la traite en fonction des données vues sur l'api ;).






  
