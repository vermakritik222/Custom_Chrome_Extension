const box1 = document.querySelector("#box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");

// const footer1 = document.getElementById("footer1");
// const footer2 = document.getElementById("footer2");
// const footer3 = document.getElementById("footer3");
// const footer4 = document.getElementById("footer4");
// const footer5 = document.getElementById("footer5");
// const footer6 = document.getElementById("footer6");
// const footer7 = document.getElementById("footer7");

const input = document.getElementById("input");
const root__url = "https://www.google.com/search?q=";
const inputdiv = document.getElementById("inputdiv");
const body = document.querySelector("body");

const mouseOverOpacity = 0.5;
const mouseOutOpacity = 1;
// const mouseOverHeight = 20;
// const mouseOutHeight = 0;

// document.getElementById("sec-2").style.display = "none";
setTimeout(() => {
  document.querySelector(".contener").style.display = "flex";
  document.querySelector("input").style.display = "block";
  // document.getElementById("sec-2").style.display = "block";
}, 10);

body.addEventListener("keypress", async function (e) {
  if (e.key === "/") {
    input.focus();
  }
});

input.addEventListener("keypress", async function (e) {
  if (e.key === "Enter") {
    let url = `${root__url}${input.value.split(" ").join("+")}`;

    const template = `
      <a id="ainput" href=${url}></a>
      `;

    inputdiv.innerHTML = await template;

    const ainput = document.getElementById("ainput");
    ainput.click();
  }
});

(function showTime() {
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  const time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
})();

box1.addEventListener("mouseover", () => {
  box2.style.opacity = mouseOverOpacity;
  box3.style.opacity = mouseOverOpacity;
  box4.style.opacity = mouseOverOpacity;
  box5.style.opacity = mouseOverOpacity;
  box6.style.opacity = mouseOverOpacity;
  box7.style.opacity = mouseOverOpacity;
  // footer1.style.height = `${mouseOverHeight}px`;
});
box1.addEventListener("mouseout", () => {
  box2.style.opacity = mouseOutOpacity;
  box3.style.opacity = mouseOutOpacity;
  box4.style.opacity = mouseOutOpacity;
  box5.style.opacity = mouseOutOpacity;
  box6.style.opacity = mouseOutOpacity;
  box7.style.opacity = mouseOutOpacity;
  // footer1.style.height = `${mouseOutHeight}px`;
});

box2.addEventListener("mouseover", () => {
  box1.style.opacity = mouseOverOpacity;
  box3.style.opacity = mouseOverOpacity;
  box4.style.opacity = mouseOverOpacity;
  box5.style.opacity = mouseOverOpacity;
  box6.style.opacity = mouseOverOpacity;
  box7.style.opacity = mouseOverOpacity;
  // footer2.style.height = `${mouseOverHeight}px`;
});
box2.addEventListener("mouseout", () => {
  box1.style.opacity = mouseOutOpacity;
  box3.style.opacity = mouseOutOpacity;
  box4.style.opacity = mouseOutOpacity;
  box5.style.opacity = mouseOutOpacity;
  box6.style.opacity = mouseOutOpacity;
  box7.style.opacity = mouseOutOpacity;
  // footer2.style.height = `${mouseOutHeight}px`;
});

box3.addEventListener("mouseover", () => {
  box1.style.opacity = mouseOverOpacity;
  box2.style.opacity = mouseOverOpacity;
  box4.style.opacity = mouseOverOpacity;
  box5.style.opacity = mouseOverOpacity;
  box6.style.opacity = mouseOverOpacity;
  box7.style.opacity = mouseOverOpacity;
  // footer3.style.height = `${mouseOverHeight}px`;
});
box3.addEventListener("mouseout", () => {
  box1.style.opacity = mouseOutOpacity;
  box2.style.opacity = mouseOutOpacity;
  box4.style.opacity = mouseOutOpacity;
  box5.style.opacity = mouseOutOpacity;
  box6.style.opacity = mouseOutOpacity;
  box7.style.opacity = mouseOutOpacity;
  // footer3.style.height = `${mouseOutHeight}px`;
});

box4.addEventListener("mouseover", () => {
  box1.style.opacity = mouseOverOpacity;
  box2.style.opacity = mouseOverOpacity;
  box3.style.opacity = mouseOverOpacity;
  box5.style.opacity = mouseOverOpacity;
  box6.style.opacity = mouseOverOpacity;
  box7.style.opacity = mouseOverOpacity;
  // footer4.style.height = `${mouseOverHeight}px`;
});
box4.addEventListener("mouseout", () => {
  box1.style.opacity = mouseOutOpacity;
  box2.style.opacity = mouseOutOpacity;
  box3.style.opacity = mouseOutOpacity;
  box5.style.opacity = mouseOutOpacity;
  box6.style.opacity = mouseOutOpacity;
  box7.style.opacity = mouseOutOpacity;
  // footer4.style.height = `${mouseOutHeight}px`;
});

box5.addEventListener("mouseover", () => {
  box1.style.opacity = mouseOverOpacity;
  box2.style.opacity = mouseOverOpacity;
  box3.style.opacity = mouseOverOpacity;
  box4.style.opacity = mouseOverOpacity;
  box6.style.opacity = mouseOverOpacity;
  box7.style.opacity = mouseOverOpacity;
  // footer5.style.height = `${mouseOverHeight}px`;
});
box5.addEventListener("mouseout", () => {
  box1.style.opacity = mouseOutOpacity;
  box2.style.opacity = mouseOutOpacity;
  box3.style.opacity = mouseOutOpacity;
  box4.style.opacity = mouseOutOpacity;
  box6.style.opacity = mouseOutOpacity;
  box7.style.opacity = mouseOutOpacity;
  // footer5.style.height = `${mouseOutHeight}px`;
});

box6.addEventListener("mouseover", () => {
  box1.style.opacity = mouseOverOpacity;
  box2.style.opacity = mouseOverOpacity;
  box3.style.opacity = mouseOverOpacity;
  box4.style.opacity = mouseOverOpacity;
  box5.style.opacity = mouseOverOpacity;
  box7.style.opacity = mouseOverOpacity;
  // footer6.style.height = `${mouseOverHeight}px`;
});
box6.addEventListener("mouseout", () => {
  box1.style.opacity = mouseOutOpacity;
  box2.style.opacity = mouseOutOpacity;
  box3.style.opacity = mouseOutOpacity;
  box4.style.opacity = mouseOutOpacity;
  box5.style.opacity = mouseOutOpacity;
  box7.style.opacity = mouseOutOpacity;
  // footer6.style.height = `${mouseOutHeight}px`;
});

box7.addEventListener("mouseover", () => {
  box1.style.opacity = mouseOverOpacity;
  box2.style.opacity = mouseOverOpacity;
  box3.style.opacity = mouseOverOpacity;
  box4.style.opacity = mouseOverOpacity;
  box5.style.opacity = mouseOverOpacity;
  box6.style.opacity = mouseOverOpacity;
  // footer7.style.height = `${mouseOverHeight}px`;
});
box7.addEventListener("mouseout", () => {
  box1.style.opacity = mouseOutOpacity;
  box2.style.opacity = mouseOutOpacity;
  box3.style.opacity = mouseOutOpacity;
  box5.style.opacity = mouseOutOpacity;
  box4.style.opacity = mouseOutOpacity;
  box6.style.opacity = mouseOutOpacity;
  // footer7.style.height = `${mouseOutHeight}px`;
});

//  sec-02

// const toggleBtn = document.querySelector(".toggle");
// const sec2Cover = document.getElementById("sec-2");
// const Container = document.querySelector(".sec2__container");
// sec2Cover.style.marginTop = "750px";

// toggleBtn.addEventListener("click", () => {
//   console.log(sec2Cover.style.marginTop);
//   if (sec2Cover.style.marginTop === "750px") {
//     sec2Cover.style.marginTop = "490px";
//   } else if (sec2Cover.style.marginTop === "490px") {
//     sec2Cover.style.marginTop = "750px";
//     console.log(sec2Cover.style);
//   }
// });

// const dataforcard = [
//   {
//     title: "ML",
//     disc: "ML Road map by campusX yt chanel",
//     link: "https://github.com/campusx-official/ML-Roadmap-for-2022",
//   },
// ];

// let temple = `<a href="LINK" class="sec2__cardsCover">
// <div class="sec2__cards">
//   <div class="sec2__cardsContent">
//     <div class="sec2__cardsText">TITLE</div>
//     <div class="sec2__cardLink">
//       DISC
//     </div>
//   </div>
// </div>
// </a>`;

// function fun() {
//   const finalPush = [];
//   dataforcard.map((el) => {
//     let temp = temple;
//     temp = temp.replace("LINK", el.link);
//     temp = temp.replace("TITLE", el.title);
//     temp = temp.replace("DISC", el.disc);
//     finalPush.push(temp);
//   });
//   finalPush.join(" ");
//   Container.innerHTML = finalPush;
// }

// fun();
