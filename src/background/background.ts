const saveToLocalStorage = (
  data: Record<string, any>,
  callback: () => void
) => {
  chrome.storage.local.set(data, callback);
};

chrome.runtime.onInstalled.addListener((details) => {
  chrome.contextMenus.create({
    title: "Select text",
    id: "1",
    contexts: ["page", "selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "1") {
    saveToLocalStorage({ selectedText: info.selectionText }, () => {
      console.log("Selected text saved to local storage");
    });
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "validateApiKey") {
    const apiKey = message.apiKey;
    fetch("https://api.openai.com/v1/models", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          saveToLocalStorage({ apiKey: apiKey }, () => {
            sendResponse({ status: "API Key saved", apiKey: apiKey });
          });
        } else {
          sendResponse({ status: "Invalid API Key" });
        }
      })
      .catch((error) => {
        sendResponse({ status: "Validation Failed", error: error.toString() });
      });
    return true;
  }
  if (message.type === "setApiKey") {
    saveToLocalStorage({ apiKey: message.apiKey }, () => {
      sendResponse({ status: "API Key saved", apiKey: message.apiKey });
    });
    return true;
  }

  if (message.type === "fromContentScript") {
    sendResponse("Background script running...");
  }
});
