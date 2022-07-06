- GET STARTED :

Pour lancer le projet ouvrez dans votre navigateur le fichier "index.html".


Le projet consiste a mettre en place un chat bot  yoda qui est relié a une api de inbenta qui recupère les reponses du serveur :
https://developers.inbenta.io/chatbot/chatbot-api/api-setup


Front-end : Js , Css , Html , Bootstrap , VueJs
Back-end : NodeJs , Parcel (build)
hosting platform : GitHub , Vercel
Model Vue Controler

- index.html : 

il est reliée a "CSS/style.css" , a "JS/app.js" et a des images.
Utilisation des librairies : bootstrap , VueJs.

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






  
