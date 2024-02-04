chrome.runtime.sendMessage(
  { type: "fromContentScript", data: "some data" },
  (response) => {
    console.log(response);
  }
);
