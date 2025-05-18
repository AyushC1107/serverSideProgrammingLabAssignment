function displayMessage(message, sender) {
    const chatbox = document.getElementById("chatbox");
    const newMessage = document.createElement("div");
    newMessage.classList.add("message", sender);
    newMessage.innerText = message;
    chatbox.appendChild(newMessage);
    chatbox.scrollTop = chatbox.scrollHeight;
  }
  
  function sendMessage() {
    const userInput = document.getElementById("userInput");
    const message = userInput.value.trim();
  
    if (message !== "") {
      displayMessage(message, "user");
      userInput.value = "";
  
      let botResponse = "";
  
      if (message.toLowerCase().includes("hello") || message.toLowerCase().includes("hi")) {
        botResponse = "Hello! How can I help you today?";
      } else if (message.toLowerCase().includes("how are you")) {
        botResponse = "I'm just a bot, but I'm doing fine! How about you?";
      } else if (message.toLowerCase().includes("bye")) {
        botResponse = "Goodbye! Have a great day!";
      } else {
        botResponse = "I'm sorry, I didn't understand that. Can you try again?";
      }
  
      setTimeout(() => {
        displayMessage(botResponse, "bot");
      }, 500);
    }
  }
  
  document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
  