// alert("heelooo");
// let a= prompt("please enter something");


// let sq=(c) =>{
//     console.log(c**2);
// };

// sq(a);

// let m= Number(prompt("please enter something"));
// let n= Number(prompt("please enter something"));


// function add(x,y)
// {
//     let z= x+y;
//     console.log(`addition of ${x} and ${y} is ${z}`);
// }

// add(m,n);

// const aneek= {
//     fullName: "Aneek Kumar Dutta",
//     age:18,
//     marks: 98
// };
// console.log(aneek);

// for(let val in aneek)
// {
//     console.log(aneek[val]);
// }

// let s= [1,2,3,4,5,6];
// let sum=0;
// for(let i=0; i<s.length; i++)
// {
//     sum= sum+ s[i];
// }
// console.log(sum);


// let str= prompt('enter a name');
// str= str.toLowerCase();
// let count=0;
// for(let c of str){
//     if(c=='i' || c=='a' || c=='e' || c=='u' || c=='o')
//     {
//         count++;
//     }
// }
// console.log(`the number of vowels are ${count}`);
// console.log(window);
let c= document.querySelector(".op");
let f1= document.body.firstChild;
console.dir(f1);
console.log(c);


let chid= document.querySelector(".op").children;
console.log(` div child ${chid}`);

let c1= document.querySelectorAll("div");
console.log(c1);

console.log('tag name: \t' + c.tagName);
console.log('inner html: \t' +c.innerHTML);
console.log('inner text: \t'+ c.innerText);


let e= document.querySelector("#e1");

e.innerText= e.innerText + "whataaattatat";

let r= document.querySelector(".logo");
console.log(r.getAttribute("class"));
r.setAttribute("class", "looogo");
console.log(r.getAttribute("class"));

let head= document.querySelector("header");
head.style.backgroundColor= "blue";

head.style.fontSize= "26px";

let bo= document.createElement("a");
bo.innerText= "rat";
bo.href="#";
bo.style.textDecoration= "none";
bo.style.fontSize= "32px";
bo.style.color= "white";

let an1= document.querySelector(".an1");
an1.before(bo);
an1.append(bo);

let r1= document.querySelector(".r1");

// r1.setAttribute("class", "r1v2");

r1.classList.add("r1v2");

let inc= document.querySelector("#inc");
let dec= document.querySelector("#dec");
let counter= document.querySelector("#co");
let i=0;

// inc.onclick = () =>{
//     console.log(`increase`);
//     counter.innerText= ++i;
// }

// dec.onclick= () =>{
//     console.log(`decrease`);
//     counter.innerText= --i;
// }

inc.addEventListener("click", ()=>{
    counter.innerText= ++i;
});

inc.addEventListener("click", ()=>{
    inc.style.backgroundColor= "black";
});

inc.addEventListener("dblclick", ()=>{
    inc.style.backgroundColor= "green";
});

dec.addEventListener("mouseenter",()=>{
    dec.style.backgroundColor= "yellow";
})

dec.addEventListener("click", ()=>{
    counter.innerText= --i;
});