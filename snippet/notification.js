chrome.storage.sync.set({ total: newTotal }, function () {
  if (amount && newTotal >= budget.limit) {
    var notifOptions = {
      type: "basic",
      iconUrl: "icon48.png",
      title: "Limit reached!",
      message: "Uh oh, look's like you've reached your alloted limit.",
    };
    chrome.notifications.create("limitNotif", notifOptions);
  }
});
