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

// let obj = {
//     name: "udayan",
//     age: 17,
// };

// function kumar(){
//     console.log(this.name);
// }

// kumar.call(obj);


// OOPS --> humein factory banana hai , matlab ki aap ek baar blueprint bana do ki har object kaisa dikhega and hum log naye naye object with different values bana paayenge , yhii OOPS ka uper uper se pura kaam hai

// function Udayan(name,price,quantity,color,category){
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//     this.color = color;
//     this.category = category;
//     this.write = function(text){
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = color;
//         document.body.append(h1);
//     };
// }

// let biscuit = new Udayan("oreo",10,10,"red","choclate biscuit");
// let biscuit2 = new Udayan("marigold",10,10,"blue","normal");


// PROTOTYPES --> agar tumhara constructor function koi field apne protype par attach karle to us constructor se banne wale sabhi new instances yaani ki object, ke pass wo field automatically chali jaati hai

// function Udayan(name,price,quantity,color,category){
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//     this.color = color;
//     this.category = category;
    
// }
// Udayan.prototype.write = function(text){
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = this.color;
//         document.body.append(h1);
//     };

// let biscuit = new Udayan("oreo",10,10,"red","choclate biscuit");
// let biscuit2 = new Udayan("marigold",10,10,"blue","normal");

// CLASS

// class Udayan{
//     constructor(name, company, price, color){
//         this.name = name;
//         this.company = company;
//         this.price = price;
//         this.color = color;
//     }

//     write(text){
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color =this.color;
//         document.body.appendChild(h1);
//     }
// }

// let p1 = new Udayan("natraj","natraj", 10,"blue");

// CLASSICAL INHERITANCE --> classes banana aur unhe extend kar dena,, pichhle class ki value le lena,, ake class dusre class se kuchh leti hai

// PROTOTYPE INHERITANCE --> object to object inheritance ,, ake object dusre object se kuchh le lena ake object hai aap chaho to uski sarri props/methods ko inherit kara dete ho doosre object mein  

// let coffee = {
//     color: "dark",
//     drink: function(){
//         console.log("chup chap pii lo");
//     }
// }

// let arabita = Object.create(coffee);
// // arabita.taste = "not good";
// arabita.drink();

// koi bhi code javascript mein line by line chalega aur ye natural pattern hai ki code line by line chale ,, but kabhi kabar aise cases aate hai life mein jaha par aapka code wait karta hai and until der mein agla code chal jata hai

// sync --> aisa code jo line by line chale wo sync code hota hai

// async --> aisa code jo jab chale ke liye ready ho jaaye tab chale wo async code

// console.log(Math.floor(Math.random()*10));
3:34