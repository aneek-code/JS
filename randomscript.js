const col_arr = [
  "black",
  "red",
  "green",
  "blue",
  "yellow",
  "violet",
  "purple",
  "orange",
  "navy",
  "aquamarine",
  "white",
];

let ele1 = document.querySelector("#change-back");

const change_col = () => {
  const ran = Math.random();
  let c1 = Math.round(ran * 10);
  document.body.style.backgroundColor = col_arr[c1];
};
ele1.addEventListener("click", change_col);

let dec = document.querySelector("#dec");
let inc = document.querySelector("#inc");
let counter = document.querySelector("#counter");
let reset = document.querySelector("#res");

let c = 0;
dec.addEventListener("click", () => {
  counter.innerText = --c;
  counter_change(c);
});

inc.addEventListener("click", () => {
  counter.innerText = ++c;
  counter_change(c);
});

reset.addEventListener("click", () => {
  counter.innerText = 0;
  c = 0;
  counter_change(c);
});

const counter_change = (c) => {
  if (c > 0) {
    counter.style.backgroundColor = "green";
  } else if (c < 0) {
    counter.style.backgroundColor = "red";
  } else {
    counter.style.backgroundColor = "grey";
  }
};

let clock_dis = document.querySelector("#clock");
setInterval(() => {
  let clock = new Date();
  clock_dis.innerText =
    clock.getHours() + ":" + clock.getMinutes() + ":" + clock.getSeconds();
}, 1000);

let task = document.querySelector(".task");
const task_code = task.innerHTML;
let text = document.querySelector("#area");
let done = document.querySelector("#btn");
let add_task = document.querySelector("#add");

add_task.addEventListener("click", () => {
  let new_task = document.createElement("div");
  new_task.innerHTML = task_code;
  task.append(new_task);
  let del = new_task.querySelector(".del");
  del.addEventListener("click", () => {
    new_task.remove();
  });
});

let dis = document.querySelector("#dis");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let equal = document.querySelector("#equal");
let clear = document.querySelector("#clear");

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (dis.innerText === "0") {
      dis.innerText = number.innerText;
    } else {
      dis.innerText += number.innerText;
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    dis.innerText += operator.innerText;
  });
});

equal.addEventListener("click", () => {
  dis.innerText = eval(dis.innerText);
});

clear.addEventListener("click", () => {
  dis.innerText = "0";
});
