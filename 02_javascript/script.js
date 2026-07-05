// getElementById --> i can select any html thing by their id;;

// getElementByClassName --> i can select any html by their class name;

// querryselector --> i can select any one things of html;

// querryselectorall --> i can select all things of html;

// let  h1  = document.querySelector("h1");
// h1.innerHTML = "<i>hey body</>";

// h1.hidden = true;
// console.dir(h1);

// innerText --> it is used to change the text of html through javascript

// ineerHTML --> it is used to change the html through javascript

// innerContent --> it is used to add any content through javascript

// let a = document.querySelector("a");
// // a.href = "https://www.google.com";
// a.setAttribute("href" , "https://www.udayan.com");
// a.removeAttribute("href");

// console.log(a.getAttribute("href"));
// let img = document.querySelector("img");

// img.setAttribute("src" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2EJKUEQSGznzv42gDFxAt8Q969KvLR6wN_A&s")


// getAttribute --> i get any attribute references

// setAttribute --> i set any attribute references

// removeAttribute --> i can remove any attribute references

// let h2 = document.createElement("h2"); // it is used to create anyelement;;

// h2.textContent = "udayan singh ";  // it is used to add text in in any content;;

// console.log(h2);

// document.body.append(h2);  // i can add text in body of html on bottom of the body(append);;

// document.body.prepend(h2);  // i can add text in body of html on top of the body (prepend);;

// appendChild --> it is used to add element in bottom of the body;;

// prepend --> it is used to add element in top of the body;;

// textcontent --> it is used to add text in any element;;

// let h1 = document.querySelector("h1");

// h1.style.color = "blue";  // i can add style any element without css;;

// console.dir(h1); 
// h1.classList.remove("udayan");  // it is used to remove of class of any element

// h1.classList.toggle("udayan"); // if the class name already added than it will remove the classs name ,, and if the class name is not added than it add the class name,,


// let h1 = document.querySelector("h1");

// h1.addEventListener("dblclick" , function(){
//     h1.style.color = "red";
// })

// addEventListener --> if i do any action on the screen then the reaction i want to came , that will come through addEventListener;;

// let h1 = document.querySelector("h1");

// function dblclick(){
//     h1.style.color ="red";
// }

// h1.addEventListener("dblclick" , dblclick);
// h1.removeEventListener("dblclick" , dblclick);

// let inp = document.querySelector("input");

// inp.addEventListener("input" , function(udayan){
//     console.log(udayan.data);
// }

// inp.addEventListener("input" , function(udayan){
//     if(udayan.data !== null){
//         console.log(udayan.data);
//     }
// })

// let sel = document.querySelector("select");

// let device = document.querySelector(".device");

// sel.addEventListener("change" , function(udayan){
//     device.textContent = `${udayan.target.value} device selected`;
// })


// let h1 = document.querySelector("h1");

// window.addEventListener("keydown" , function(udayan){
//     h1.textContent = udayan.key;
// })

// let box = document.querySelector(".box");

// box.addEventListener("mouseover" , function(){
//     box.style.backgroundColor = "red";
// })

// box.addEventListener("mouseout" , function(){
//     box.style.backgroundColor = "blue";
// })


// window.addEventListener("mouseover" , function(dets){
//     console.log(dets);
// })

// let box = document.querySelector(".box");

// box.addEventListener("click" , function(dets){
//     console.log(dets);
// })

// let lists = document.querySelector(".lists");

// lists.addEventListener("click" , function(dets){
//     dets.target.style.textDecoration = "Line-through";
// })


// setInterval(function () {  // repeat itshelf in every fixed time of interval
//     console.log("udayan singh");
// }, 5000)

// setTimeout(function () {   // print after fixed interval of time
//     console.log("udayan singh");
// }, 5000)

// clearTimeout();  // clear the interval and timeout

// let count = 10;

// let interval = setInterval(function (){
//     if(count >= 0){
       
//         console.log(count);
//          count--;
//     }
//     else {
//         clearInterval(interval);
//     }
// }, 2000)


// localStorage --> humare browser ke ander data store karna jo ki browser band hone par bhi delete nhii hoga

// sessionStorage --> ye aapka data temporaily store karta hai matlab ki tab band hua aur data gayab

// cookies --> ye bhii data sotre karta hai and aapka data browser ke cookies naam ki property main save hota hai and ye cookie concept kam data ya light data ke liye hota hai

// localStorage.setItem("name" , "udayan singh");  // store value

// let val= localStorage.getItem("name");  // fetch item

// localStorage.removeItem("name");  // remove item

// localStorage.setItem("name" , "kumar");  // update the value


6:03 