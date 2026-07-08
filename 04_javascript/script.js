// DESIGN PATTERN

// MODULE PATTERN --> module pattern ake design pattern hai jisme hum apne code ko self executing function (IIFE) ke ander likhte hai , taki variable aur function private rahe,, eske ander se whi cheeze return karte hsi jise bahar use karte hain,, is pattern ka main fayeda hai data hiding (encapsulation) aur clean structure , reasuable aur mangebale ban sake....

let Bank = (function(){
    let bankbalnce = 12000;

    function checkbalnce(){
        console.log(bankbalnce);
    }

    function setbalance(val){
        bankbalnce = val;
    }

    function withdraw (val){
        if(val <= bankbalnce){
            bankbalnce -= val;
            console.log(bankbalnce);
        }
    }

    return{
        checkbalnce,
        setbalance,
        withdraw,
    }
})();

Bank.withdraw(1000);