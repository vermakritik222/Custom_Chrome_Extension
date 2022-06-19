console.log("kello");
const filter = {
  url: [
    {
      urlMatches: "https://www.google.com",
    },
  ],
};

chrome.webNavigation.onCompleted.addListener(() => {
  console.log("The user has loaded my favorite website!");
}, filter);
