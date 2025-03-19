let x= 5;
let y= 7;

let z=x+y;
console.log(z);

let A = "Hello ";
let B = "world!";

let C = A + B;
console.log(C);


function SumNPrint(x1, x2) {
  
    let x3 = x1 + x2;
   
    console.log(x3);
}

SumNPrint(x, y);
SumNPrint(A, B);

if (C.length > z) {
    console.log(C); 
} else if (C.length < z) {
    console.log(z); 
} else {
    console.log("good job!"); 
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(fruitArray, arrayName) {

    fruitArray.forEach((fruit, index) => {
        
        if (fruit === "Banana") {
            alert("We found a banana in the " + arrayName); 
        }
    });
}

findTheBanana(L1, "first array"); 
findTheBanana(L2, "second array"); 


function greetingFunc() {
    
    let d = new Date();

    let h = d.getHours();

    if (h < 12) {
        console.log("Good morning");
    } else if (h >= 12 && h < 18) {
        console.log("Good afternoon");
    } else if (h >= 18 && h < 20) {
        console.log("Good evening");
    } else {
        console.log("Good night");
    }

    
    let greetingElement = document.getElementById("greeting");

    let greeting;
    if (h < 12) {
        greeting = "Good morning";
    } else if (h >= 12 && h < 18) {
        greeting = "Good afternoon";
    } else if (h >= 18 && h < 20) {
        greeting = "Good evening";
    } else {
        greeting = "Good night";
    }

    greetingElement.innerHTML = greeting + ", I am Margaret";
}
greetingFunc();