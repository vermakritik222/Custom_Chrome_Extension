console.log(
  "----------------------- this is start of extension --------------------"
);
// document.querySelector("#mw-navigation").style.display = "none";
const el = document.querySelector(".vector-search-box-input").style;
el.padding = "11px";
el.borderRadius = "10px";
el.fontSize = "16px";

const tool_panel = document.querySelector("#mw-panel");
tool_panel.style.left = "-200px";

const content = document.querySelector("#content");
const contentStyle = content.style;
contentStyle.padding = "60px";
contentStyle.border = "none";
contentStyle.margin = "40px 40px";
contentStyle.borderRadius = "20px";
// contentStyle.width = "65%";
// contentStyle.background = "#04293A";
// contentStyle.color = "white";
contentStyle.boxShadow =
  "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px";

// console.log(document.getElementById("content").height);

const firstHeadingStyle = document.querySelector("#firstHeading").style;
firstHeadingStyle.border = "none";
firstHeadingStyle.marginBottom = "20px";
// firstHeadingStyle.color = "white";

// document.querySelector("#siteSub").style.display = "none";

const TopRightBoxStyle = document.querySelector(".infobox").style;
// TopRightBoxStyle.display = "none";
TopRightBoxStyle.position = "relative";
TopRightBoxStyle.top = "0px";
TopRightBoxStyle.right = "-60px";
TopRightBoxStyle.borderTopRightRadius = "20px";
TopRightBoxStyle.border = "none";
// console.log(TopRightBoxStyle);

const contentBoxStyle = document.querySelector("#toc").style;
// contentBoxStyle.position = "absolute ";
// contentBoxStyle.top = "0px";

const contentbtn = document.createElement("div");
contentbtn.classList.add("content_btn");
const backgray = document.createElement("div");
backgray.classList.add("backgray");

contentbtn.addEventListener("click", () => {
  if (contentBoxStyle.left === "0px") {
    contentBoxStyle.left = "-39%";
  } else {
    contentBoxStyle.left = "0px";
    // document.body.appendChild(backgray);
  }
});

const tool_btn = document.createElement("div");
tool_btn.classList.add("tool_btn");

tool_btn.addEventListener("click", () => {
  if (tool_panel.style.left === "0px") {
    tool_panel.style.left = "-200px";
  } else {
    tool_panel.style.left = "0px";
    // document.body.appendChild(backgray);
  }
});

document.body.appendChild(contentbtn);
document.body.appendChild(tool_btn);

console.log(
  "--------------------- this is end of extension -------------------------"
);
