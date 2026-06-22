// count how many number which are divisible by 3 and 5 from 1 to 100;;

let num = 0;

for(let i = 1; i<=100; i++){
    if(i % 3 ==0 && i % 5 == 0){
        num++;
    }
}

console.log(num);