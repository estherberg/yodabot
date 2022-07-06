// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText,);
    let botHtml = '<p class="botText"><span>'  + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

}

function sendButton() {
    getResponse();
}

function getBotResponse(input) {
    if (input == "hello" || input == "hi") {
      return "Yoda: In a dark place we find ourselves, and a little more knowledge lights our way. What knowledge do you seek?";
    } else if (input == "what is fear?" || input == "what is fear") {
      return "Yoda: Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.";
    } else if (input == "thanks") {
      return "Yoda: Much to learn you still have... my old padawan. This is just the beginning!";
    } else if (input !== "hello" || input == "hi" || input !== "what is fear ?" || input !== "thanks"){
      return "Yoda: I'm sorry, I couldn't find any information relating to your question. Please search for another word or phrase.";
    } 
  
  }





// function getBotResponse(input) {
//   if (input == "hello") {
//     return "In a dark place we find ourselves, and a little more knowledge lights our way. What knowledge do you seek?";
//   } else if (input == "what is fear?") {
//     return "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.";
//   } else if (input == "thanks") {
//     return "Much to learn you still have... my old padawan. This is just the beginning!";
//   } else if (input !== "hello" || input !== "what is fear ?" || input !== "thanks"){


//  let input2 = input("I'm sorry, I couldn't find any information relating to your question. Please search for another word or phrase.");
//         if (input2 == "hello") {
//           return "In a dark place we find ourselves, and a little more knowledge lights our way. What knowledge do you seek?";
//       } else if (input2 == "what is fear?") {
//         return "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.";
//       } else if (input2 == "thanks") {
//         return "Much to learn you still have... my old padawan. This is just the beginning!";
//       } else {
//         return "Vous etes insolent, c'est la deuxieme fois que vous vous trompez";
//       }
//   } 
//   }

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});



  