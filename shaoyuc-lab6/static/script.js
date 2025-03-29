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

// let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
// let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// function findTheBanana(fruitArray, arrayName) {

//     fruitArray.forEach((fruit, index) => {
        
//         if (fruit === "Banana") {
//             alert("We found a banana in the " + arrayName); 
//         }
//     });
// }

// findTheBanana(L1, "first array"); 
// findTheBanana(L2, "second array"); 


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



function addYear() {
    
    const currentYear = new Date().getFullYear();
    
    document.getElementById("copyYear").textContent = currentYear;
}

function showList() {
    

    document.getElementById("funList").style.display = "block";
    document.getElementById("readMoreButton").style.display = "none";

}

$("#readLess").click(function(){
    $("#longIntro").hide();
    $("#readLess").hide();  
    $("#readMore").show();     
  });
 
 
   $("#readMore").click(function(){
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();     
  });



    function validate() {
        var userName = document.getElementById("UserName");
        var userEmail = document.getElementById("UserEmail");
        var userText = document.getElementById("Usertext");
        var msg = document.getElementById("ValidateMsg");
        if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()) {
            msg.innerHTML = "Please fill out the form correctly so I can get back to you :)";
        }
     }

     document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');
        
        if (hamburger && navLinks) {
            hamburger.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });
        }
    

        function setActiveLink() {
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const navLinks = document.querySelectorAll('.nav-links a');
            
            navLinks.forEach(link => {
                const linkPage = link.getAttribute('href').split('/').pop();
                
                
                if (currentPage === linkPage || 
                    (currentPage === '' && linkPage === 'index.html')) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    
        setActiveLink();
    });



