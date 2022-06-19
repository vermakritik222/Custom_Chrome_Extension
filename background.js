console.log("hello welcome to my chrome time tracker");
let dataObj = {};
let currenttabid = "newid";

chrome.tabs.onUpdated.addListener(function () {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
      status: "complete",
    },
    function (tabs) {
      var currentTab = tabs[0];
      if (currentTab) {
        if (dataObj[`${currentTab.id}-${currentTab.windowId}`]) {
          const length =
            dataObj[`${currentTab.id}-${currentTab.windowId}`].length;
          if (!dataObj[currenttabid][length - 1].ed) {
            // if (!(currentTab.url.split("/")[2] === "newtab")) {
            if (
              !(
                dataObj[currenttabid][length - 1].url ===
                currentTab.url.split("/")[2]
              )
            ) {
              dataObj[currenttabid][length - 1].ed = new Date();
              dataObj[`${currentTab.id}-${currentTab.windowId}`].push({
                tabId: currentTab.id,
                windowId: currentTab.windowId,
                url: currentTab.url.split("/")[2],
                st: new Date(),
              });
            }
            // }
          }
        }
      }
      // console.log("global state", dataObj);
    }
  );
});

chrome.tabs.onActivated.addListener(function (activeInfo) {
  // console.log("global state", dataObj);
  // console.log("global currenttabid", currenttabid);

  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    function (tabs) {
      const currentTab = tabs[0];

      if (!(currenttabid === "newid")) {
        const length = dataObj[currenttabid]?.length;
        dataObj[currenttabid][length - 1].ed = new Date();
        currenttabid = `${currentTab.id}-${currentTab.windowId}`;
      }

      if (!dataObj[`${currentTab.id}-${currentTab.windowId}`]) {
        // console.log("true");
        // if (!(currentTab.url.split("/")[2] === "newtab")) {
        dataObj[`${currentTab.id}-${currentTab.windowId}`] = [];
        dataObj[`${currentTab.id}-${currentTab.windowId}`].push({
          tabId: currentTab.id,
          windowId: currentTab.windowId,
          url: currentTab.url.split("/")[2],
          st: new Date(),
        });
        // }
      } else {
        if (!dataObj[`${currentTab.id}-${currentTab.windowId}`].ed) {
          dataObj[`${currentTab.id}-${currentTab.windowId}`].push({
            tabId: currentTab.id,
            windowId: currentTab.windowId,
            url: currentTab.url.split("/")[2],
            st: new Date(),
          });
        }
      }
      currenttabid = `${currentTab.id}-${currentTab.windowId}`;
    }
  );
});

chrome.windows.onRemoved.addListener(function () {
  chrome.windows.getAll(function (windows) {
    if (windows.length <= 0) {
      // Write code here
      fetch(`http://localhost:8000/${JSON.stringify(dataObj)}`)
        .then((response) => response.json())
        .then((data) => {});
      console.log("data saved successfully");
      dataObj = {};
      console.log("data removed successfully");
    }
  });
});
