// scope --> scope hai ki aap apne created variables and functions kaha tak use kar sakte hai

// scope --> functional scope ,, global scope and block scope

// functional scope --> kisi function ke ander hi use ho sakti hai

// function udayan (){
//     let a = 19;  // functional scope
//     console.log(a);
// }

// global scope --> pore code mein kahi bhi use kar sakte hai ;; agar aapka variables kisi {} braces ke ander nhii hai to global scope hai

// let a = 19;  // global scope
// function udayan (){
//     console.log(a);
// }

// block scope --> {} curly braces mein hi use kar sakte hai

// {
//     let a = 19;  // block scope
//     console.log(a);
// }

// execution context --> javascript sabse pahle jaise hi aapka function dekhta hai sabse pahle javascipt banta hai execution context ,, ye ake process hai jo ki different phase main chalta hai, memory phase and doosre ka naam hai execution phase

// memory phase --> yanha variable store hota hai kisis function ke chalne ke baad

// execution phase --> ynha memory locate hone ke baad wo function execute hota hai(kaam hota hai)

// memory phase and execution phase ye dono execution context ke ander hota

// execution context abstract(jo hypothetical ho,, ho lekin dikhe na) hai

// laxical scoping --> ye hai ki aap kanha par physically available ho ye poori tareeke se depend karta hai ki aap kya access kar paaoge

// dynamic scoping --> kanha se call kar rahe ho uspe depend karega ki kya value milegi 29

// closure --> closure hota hai function jo ki kisi parent function ke ander ho aur ander wala function return ho rahaho and returning function use kare parent function ka koi variable

// ye sach hai ki function ke khatam hone par aapka function abd uska variables khatm ho jata hai ,, par jab bhi clousre banta hai to aapka function aur uska variables ka ake backlink banya jata hai aur uska naam hotahai [[environment]]

// function udayan(){
//     let a  = 20;
//     return function(){
//         console.log(a);
//     };
// }

// let fnc = udayan();
// fnc();

// this keyword --> this keyword special keyword hai ,, kyuki jaise ki baaki sare keyword ki value ya unka nature same rehta hai this ki value ya nature badal jata hai is baat se ki aap usee kanha use kanha use kar rahe ho 

// // global --> this ki value window  hota hai
// console.log(this);

// //function --> this ki value window  hota hai
// function udayan(){
//     console.log(this);
// }
// udayan();

// // method --> this ki value nhii hoti hai
// let obj = {
//     name: "udayan",
//     sayname: function(){
//         console.log(this.name); // this ki value obj hai
//     },
// };
// obj.sayname();

// // event handler --> this ki value wahi hota hai jis par addevent laga hoat ahai
// document.querySelector("h1").addEventListener("click" , function(){
//    console.log(this);
// })

// call aply bind --> function ko call karte time hum set kar sakte hai uski this ki value kya hogi

let obj = {
    name: "udayan",
    age: 17,
};

function kumar(){
    console.log(this.name);
}

kumar.call(obj);

1:45