const timetable = document.querySelector(".timetable");
const button = document.querySelector(".button");
const eventsBox = document.querySelector(".eventsBox");
const dayBox = document.querySelector(".day");
const percentBox = document.querySelector(".percent");
const Challenge = document.querySelector(".weekChallenge__items");
const hr = document.querySelector(".hr");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const am = document.querySelector(".am");

const totalSecInDay = 24 * 60 * 60;

const onGoing = " onGoing";
const done = " done";
const eventC = " events";
const week = " week";

const weekChallenges = [
  // {
  //   day: "Monday",
  //   dayRank: 1,
  //   data: "Array",
  // },
  // {
  //   day: "Tuesday",
  //   dayRank: 2,
  //   data: "Array",
  // },
  // {
  //   day: "Wednesday",
  //   dayRank: 3,
  //   data: "Array",
  // },
  // {
  //   day: "Thursday",
  //   dayRank: 4,
  //   data: "Array",
  // },
  // {
  //   day: "Friday",
  //   dayRank: 5,
  //   data: "lecture of thermo(11 - 2) and transport(3.30-6), DSA",
  // },
  // {
  //   day: "Saturday",
  //   dayRank: 6,
  //   data: "cl-101 DSA",
  // },
  // {
  //   day: "Sunday",
  //   dayRank: 0,
  //   data: "cl-101 DSA",
  // },
];

const weekEvents = [
  {
    date: "2021-09-26",
    deadline: "Mid-sem",
    name: "MA201",
    time: "15",
  },
];

const links = [
  {
    sub: "MM201",
    Link: "",
  },
  {
    sub: "MM202",
    Link: "",
  },
  {
    sub: "MM205 lab",
    Link: "",
  },
  {
    sub: "MA201",
    Link: "",
  },
];

const data = [
  {
    day: "monday",
    data: [
      { id: "bio", Link: "https://example.com", time: 9 },
      { id: "MM206", Link: "https://meet.google.com/xbw-jiqd-cfb", time: 10 },
      { id: "HS201", Link: "https://example.com", time: 11 },
      { id: "MA202", Link: "https://example.com", time: 12 },
      { id: "Bio(tut)", Link: "https://example.com", time: 18 },
    ],
  },
  {
    day: "Tuesday",
    data: [
      { id: "bio", Link: "https://example.com", time: 9 },
      { id: "MM206", Link: "https://meet.google.com/xbw-jiqd-cfb", time: 10 },
      { id: "HS201", Link: "https://example.com", time: 11 },
      { id: "MA202", Link: "https://example.com", time: 12 },
      { id: "GE107", Link: "https://example.com", time: 18 },
    ],
  },
  {
    day: "wednesday",
    data: [
      { id: "bio", Link: "https://example.com", time: 9 },
      { id: "MM206", Link: "https://meet.google.com/xbw-jiqd-cfb", time: 10 },
      { id: "HS201", Link: "https://example.com", time: 11 },
      { id: "MA202", Link: "https://example.com", time: 12 },

      { id: "HS201(tut)", Link: "https://example.com", time: 18 },
    ],
  },
  {
    day: "THURSDAY",
    data: [
      { id: "MA202(tut)", Link: "https://example.com", time: 8 },
      { id: "MM207", Link: "https://meet.google.com/svq-bzai-umj", time: 15 },
    ],
  },
  {
    day: "friday",
    data: [
      {
        id: "MM207(tut)",
        Link: "https://meet.google.com/svq-bzai-umj",
        time: 8,
      },
      { id: "MM207", Link: "https://meet.google.com/svq-bzai-umj", time: 15 },
    ],
  },
  {
    day: "saturday",
    data: [{ id: "Nothing To Show", Link: "", time: new Date().getHours() }],
  },
  {
    day: "sunday",
    data: [{ id: "Nothing To Show", Link: "", time: new Date().getHours() }],
  },
];

// templates
const templateOfDays = `<a
href="  LINK"
target="_blank"
rel="noopener noreferrer"
>
<div class="timetable__items CLASS">
  <div class="timetable__items__content">
    <span class="sub">SUB</span>
    <span class="subtime">TIME</span>
  </div>
  <h4 class="classlink">
    LINK
  </h4>
</div>
</a>`;

const templateOfEvent = `<div class="timetable__items CLASS" style="padding-bottom: 7px;">
<div class="timetable__items__content">
  <span class="sub">NAME</span>
  <span class="subtime">TIME</span>
</div> 
<h5 class="classlink" style="text-align: right;">
DATE
</h5>
</div>`;

const templateOfWeekChallenge = ` <div class="timetable__items__content" style="padding-bottom: 5px; margin-bottom: 6px; transition: none;" >
<span class="sub ">DAY</span>
<span class="subtime ">DATA</span>
</div>`;

// FUNCTIONS

const getTimePercent = (hr, min) => {
  const totalSec = hr * 60 * 60 + min * 60;
  return (totalSec / totalSecInDay) * 100;
};

const myFunction = (data, quiz) => {
  const date = new Date().getDay();
  let work;
  let day;
  switch (date) {
    case 1:
      work = data[0];
      break;
    case 2:
      work = data[1];
      break;
    case 3:
      work = data[2];
      break;
    case 4:
      work = data[3];
      break;
    case 5:
      work = data[4];
      break;
    case 6:
      work = data[5];
      break;
    case 0:
      work = data[6];
      break;
  }

  day = work.day;
  dayBox.innerHTML = `<h1>${day}</h1>`;
  const final = [];
  work.data.forEach((el) => {
    final.push(container(el));
  });

  const timeTableData = final.join(" ");
  return { timeTableData, day };
};

function container(el) {
  let template = templateOfDays;

  template = template.replace(/SUB/, el.id);
  template = template.replace(/LINK/g, el.Link);
  template = template.replace(
    /TIME/g,
    `${el.time < 12 ? el.time + ":AM" : el.time - 12 + ":PM"}`
  );
  if (new Date().getHours() > el.time) {
    template = template.replace(/CLASS/g, done);
  } else if (new Date().getHours() == el.time) {
    template = template.replace(/CLASS/g, onGoing);
  } else {
    template = template.replace(/CLASS/g, " ");
  }

  return template;
}

function events(weekEvents) {
  const week = new Date();
  const event = [];
  week.setDate(week.getDate() + 7);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  weekEvents.map((el) => {
    const eventDate = new Date(
      `${el.date} ${el.time < 24 ? el.time * 1 + 1 : "00"}:00:00`
    );

    if (
      week.getTime() >= eventDate.getTime() &&
      eventDate.getTime() >= Date.now()
    ) {
      let template = templateOfEvent;
      template = template.replace(/NAME/, el.name);
      template = template.replace(/TIME/, el.deadline ? el.deadline : "");
      template = template.replace(
        /DATE/,
        `${
          eventDate.getDay() != new Date().getDay()
            ? days[eventDate.getDay()]
            : "Today"
        } ${el.date} @${el.time > 12 ? el.time - 12 + "PM" : el.time + "AM"}`
      );
      if (el.date.split("-")[2] * 1 === new Date().getDate()) {
        template = template.replace("CLASS", "ongoingEvents");
      } else {
        template = template.replace("CLASS", "");
      }

      event.push(template);
    }
  });

  if (!event.length) {
    let template = templateOfEvent;
    template = template.replace(/NAME/, "NO EVENTS THIS WEEK");
    template = template.replace(/TIME/, "");
    event.push(template);
  }

  eventsBox.innerHTML = event.join(" ");
}

function weekChallenge(weekChallenges) {
  const data = [];
  weekChallenges.map((el) => {
    let template = templateOfWeekChallenge;
    if (el.dayRank >= new Date().getDay()) {
      template = template.replace(/DAY/, el.day);
      template = template.replace(/DATA/, el.data);
      template = template.replace(/CLASS/);
    } else if (el.dayRank <= new Date().getDay()) {
      template = template.replace(/DAY/, el.day);
      template = template.replace(/DATA/, el.data);
      template = template.replace(/CLASS/, " ");
    }
    data.push(template);
  });
  Challenge.innerHTML = data.join(" ");
}
// print

(function () {
  const content = myFunction(data);

  const timePercent =
    Math.round(
      (100 - getTimePercent(new Date().getHours(), new Date().getMinutes())) *
        10
    ) / 10;

  percentBox.innerHTML = `${timePercent}%`;
  timetable.innerHTML = content.timeTableData;

  hr.innerHTML = `${
    new Date().getHours() > 12
      ? new Date().getHours() - 12
      : new Date().getHours()
  } :&ThinSpace;`;
  min.innerHTML = `${new Date().getMinutes()} :&ThinSpace;`;

  sec.innerHTML = `${new Date().getSeconds()} &ThinSpace;`;
  am.innerHTML = new Date().getHours() > 12 ? "pm" : "am";

  weekChallenge(weekChallenges);
  events(weekEvents);
})();

setInterval(() => {
  min.innerHTML = `${new Date().getMinutes()} :&ThinSpace;`;
  sec.innerHTML = `${new Date().getSeconds()} &ThinSpace;`;
}, 1000);
