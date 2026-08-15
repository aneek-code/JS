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

let s= [1,2,3,4,5,6];
let sum=0;
for(let i=0; i<s.length; i++)
{
    sum= sum+ s[i];
}
console.log(sum);


let str= prompt('enter a name');
str= str.toLowerCase();
let count=0;
for(let c of str){
    if(c=='i' || c=='a' || c=='e' || c=='u' || c=='o')
    {
        count++;
    }
}
console.log(`the number of vowels are ${count}`);