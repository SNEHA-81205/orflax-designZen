const chatBox = document.querySelector(".chat-box");
const inputField = chatBox.querySelector("input[type='text']");
const button = chatBox.querySelector("button");
const chatBoxBody = chatBox.querySelector(".chat-box-body");

button.addEventListener("click", sendMessage);
inputField.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  const message = inputField.value;
  inputField.value = "";
  chatBoxBody.innerHTML += `<div class="message"><p>${message}</p></div>`;
  chatBoxBody.innerHTML += `<div id="loading" class="response loading">.</div>`;
  scrollToBottom();
  
  // Simulate a "thinking" delay
  setTimeout(() => {
    document.getElementById("loading").remove();
    let responseMessage = getResponse(message);
    chatBoxBody.innerHTML += `<div class="response"><p>${responseMessage}</p></div>`;
    scrollToBottom();
  }, 2000);
}

function getResponse(userMessage) {
  // Handle different messages and send appropriate responses
  userMessage = userMessage.toLowerCase();

  if (userMessage.includes("what do you offer") || userMessage.includes("products")) {
    return "We offer a variety of copper, alloy and aluminum cables and flexible wires along with Multistrand and Parallel Flat wires for industrial, residential, and commercial applications.";
  } else if (userMessage.includes("hours") || userMessage.includes("open")) {
    return "We’re open Monday to Friday, from 9 AM to 6 PM.";
  } else if (userMessage.includes("place order") || userMessage.includes("sample")) {
    return "Sure, please provide your name, address and contact info & the order will be delivered within 3 to 7 business days, depending on order size and location.";
  } else if (userMessage.includes("-") || userMessage.includes("#")) {
    return "Okay, please provide the delivery size and you are ready to go!";
  } else if (userMessage.includes("m") || userMessage.includes("meters")) {
    return "Depending on your requirements, the order will reach you within 3 days. Your Order ID-213575.";
  } else if (userMessage.includes("thank you") || userMessage.includes("ok")) {
    return "Thanks for placing the order! If you have any more questions, feel free to ask.";
  } else {
    return "I'm sorry, I didn't understand that. Could you please clarify your question?";
  }
}

function scrollToBottom() {
  chatBoxBody.scrollTop = chatBoxBody.scrollHeight;
}
