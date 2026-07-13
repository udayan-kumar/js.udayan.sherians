// DESIGN PATTERN

// MODULE PATTERN --> module pattern ake design pattern hai jisme hum apne code ko self executing function (IIFE) ke ander likhte hai , taki variable aur function private rahe,, eske ander se whi cheeze return karte hsi jise bahar use karte hain,, is pattern ka main fayeda hai data hiding (encapsulation) aur clean structure , reasuable aur mangebale ban sake....

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



// REVEALING MODULE FUNCTION --> i can fix name of what come inside

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



// factory function --> ake function bante hai jo object create karta hai (factory = object banane ki machine);;  factory function pattern ake aisa design pattern hai jisme hum ake simple function likhte hai jo naye objects banakar return karta hai , bina class ya keyword use kiye hue;;; 

// is pattern ka main idea hai --> object creation ko ake function ke through control karna ;; har baar jab tum factory function call karte ho , tumhe ake naya object milta hai jisme apne methods aur (agar chaho to) private data ho sakta hai

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

class YouTubeChannel{
    constructor(){
        this.subscribes = [];
    }

    subscribe(user){
        this.subscribes.push(user);
            user.update(`${user.name}, you have subscribed the channel..`);
    }

    unsubscribed(user){
        this.subscribes = this.subscribers.filter((sub) => sub !== user);
        user.update(`you have unsubscribed the channel..`);
    }
 
    notify(message){
      this.subscribes.forEach((sub) => sub.update(message));
    }
}

class user{
    constructor(name){
        this.name = name;
    }

    update(data){
        console.log(`${this.name}, ${data}`);
    }
}

let udayan = new YouTubeChannel();
let user1 = new user("udayan singh");

udayan.subscribe(user1);
udayan.notify("new video uploaded");
 