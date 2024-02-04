chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "fromContentScript") {
    console.log(message.data);
    console.log(message.type);
    console.log(sender);
  }

  sendResponse("Background script running...");
});
