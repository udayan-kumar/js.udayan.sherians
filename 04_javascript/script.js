// DESIGN PATTERN

//! MODULE PATTERN --> module pattern ake design pattern hai jisme hum apne code ko self executing function (IIFE) ke ander likhte hai , taki variable aur function private rahe,, eske ander se whi cheeze return karte hsi jise bahar use karte hain,, is pattern ka main fayeda hai data hiding (encapsulation) aur clean structure , reasuable aur mangebale ban sake....

// let Bank = (function(){
//     let bankbalnce = 12000;

//     function checkbalnce(){
//         console.log(bankbalnce);
//     }

//     function setbalance(val){
//         bankbalnce = val;
//     }

//     function withdraw (val){
//         if(val <= bankbalnce){
//             bankbalnce -= val;
//             console.log(bankbalnce);
//         }
//     }
//     return{
//         checkbalnce,
//         setbalance,
//         withdraw,
//     }
// })();

// Bank.withdraw(1000);



//! REVEALING MODULE FUNCTION --> i can fix name of what come inside

// let Bank = (function(){
//     let bankbalnce = 12000;

//     function checkbalnce(){
//         console.log(bankbalnce);
//     }

//     function setbalance(val){
//         bankbalnce = val;
//     }

//     function withdraw (val){
//         if(val <= bankbalnce){
//             bankbalnce -= val;
//             console.log(bankbalnce);
//         }
//     }
//     return{
//        check: checkbalnce,
//        set: setbalance,
//         draw: withdraw,
//     }
// })();

// Bank.withdraw(1000);



//! factory function --> ake function bante hai jo object create karta hai (factory = object banane ki machine);;  factory function pattern ake aisa design pattern hai jisme hum ake simple function likhte hai jo naye objects banakar return karta hai , bina class ya keyword use kiye hue;;; 

//! is pattern ka main idea hai --> object creation ko ake function ke through control karna ;; har baar jab tum factory function call karte ho , tumhe ake naya object milta hai jisme apne methods aur (agar chaho to) private data ho sakta hai

// function createProduct(name , price) {
//     let stock = 20;

//     return {
//         name,
//          price, 
//          checkstock(){
//             console.log(stock);
//         },

//         buy(quantity){
//             if(quantity <= stock){
//                 stock -= quantity;
//                 console.log(`${quantity} pieces booked - ${stock} pieces left`);
//             }
//             else {
//                 console.error(`we have only ${stock} pieces left`);
//             }
//         },

//         refil(quantity){
//             stock += quantity;
//             console.log(`refiled the stock - ${stock} pieces now`);
//         },
//     };
// }

// let iphone = createProduct("iphne" , 70000);
// iphone.buy(12);

// let oppo = createProduct("oppo",30000)
// oppo.buy(13);

// class YouTubeChannel{
//     constructor(){
//         this.subscribes = [];
//     }

//     subscribe(user){
//         this.subscribes.push(user);
//             user.update(`${user.name}, you have subscribed the channel..`);
//     }

//     unsubscribed(user){
//         this.subscribes = this.subscribers.filter((sub) => sub !== user);
//         user.update(`you have unsubscribed the channel..`);
//     }
 
//     notify(message){
//       this.subscribes.forEach((sub) => sub.update(message));
//     }
// }
 
// class user{
//     constructor(name){
//         this.name = name;
//     }

//     update(data){
//         console.log(`${this.name}, ${data}`);
//     }
// }

// let udayan = new YouTubeChannel();
// let user1 = new user("udayan singh");

// udayan.subscribe(user1);
// udayan.notify("new video uploaded");



//! DEBOUNCING --> AAP KOI ACTION KAR RAHE HO AND AAP YE NHII CHAHTE HAR ACTION PE KUCHH HO , JAB BHI MERE ACTION KE BEECH MEIN KOI SPECIFIC GAP AAJAYE TO FIR REACTION PERFORM HO

// function debouncing(fnc , delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer);
//         timer = setTimeout(function () {
//             fnc(...args);
//         }, delay)
//     };
// }

// document.querySelector("input").addEventListener("input" , debouncing(function () {
//     console.log("udayan singh");
// }, 1000)
// );


//! THROTTLE --> INTERVAL PAR CHALUNGA , ACTION HOTA RAHA AND AAPNE EK INTERVAL BATAYA TIO UTNE INTERVAL MEIN AAPKA EVENT CHALEGA


// function throttle(fnc , delay){
//     let timer = 0;
//     return function(...args){
//         let now = Date.now();
//         if(now - timer >= delay){
//             timer = now;
//             fnc(...args);
//         }
//     };
// }


// document.querySelector("input").addEventListener("input" , throttle(function(){
//     console.log("udayan singh");
// }, 1000)
// );

//! LAZY LOADING

// let img = document.querySelectorAll("img");

// const observer = new IntersectionObserver(
//     function (entries, observer){
//         entries.forEach(function (entry){
//             if(entry.isIntersecting){
//                 const img = entry.target;
//                 img.src = img.dataset.src;
//                 img.classList.add("loaded");
//                 observer.unobserve(entry);
//             }
//         });
//     },
//     {
//         root: null,
//         threshold: 0.1,
//     }
// );

// img.forEach(function (img){
//     observer.observe(img);
// });


//! CODE SPLITING --> CODE KO HUM ALAG ALAG FILE MEIN DAAL DIYE AUR USKO JAB AUR JANHA CHAHE USE KAR SAKTE HAI

// const btn = document.querySelector("button");

// btn.addEventListener("click" , async function(){
//     let heavy = await import("./heavy.js");
//     heavy.veryheavy();
// })



//! AVOIDING UNNECESSARY REFLOWS AND REPAINTS

// const ul = document.querySelector("ul");
// const space = document.createDocumentFragment();

// for(let i = 1; i<=100 ;i++){
//     const li = document.createElement("li");
//     li.textContent = i;
//     space.appendChild(li);
// }

// ul.appendChild(space);




//! MEMORY LEAK , TIMER , EVENT LISTNER

let count = 0;

const int = setInterval(() => {
    if(count<10){
        count++;
        console.log(count);
    }
    else{
        clearInterval(int);
        console.log("udayan singh");
    }
}, 500);