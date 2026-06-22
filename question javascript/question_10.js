// skip multiples of 3 and write all the number from 1 to 20


for( let i =1; i<=20; i++){
    if(i % 3 == 0){
        continue;
    }
    console.log(i);
}