// add an object with the array find out if this  gonna work dude 
// how to only care about the true false
// how to search and get
//im thinking the true false is the way
var count=0


const questionOne=[
  {a:["yes he did"],
    b: true },
     {a:["no he didnt"],
       b: false },
       {a:["choose not to answer"],
         b: false },
    ];
console.log(questionOne)
const questionTwo=[
  {a:["how does one bowl for soup"],
    b: false },
    {a:["1985"],
      b: true },
      {a:["if you want pick me"],
        b: false },
];
console.log(questionTwo)
const questionThree=[
 {a:["How Would I Know?"],
   b: false },
   {a:["Ask A Serb"],
     b: true },
     {a:["You Tell Me"],
       b: false },
    ];
    console.log(questionThree)
//create main----made div the main---nvm 
var submit=document.getElementById("submit")
var takingTooLong = document.getElementById('tooktolong');
var iQ =document.getElementById("inQ")
var main = document.body
var quizH = document.createElement("h2")
//create div box for backround of questions
var box = document.createElement("div")
//create a div for animation or something
var figureOut = document.createElement("figure")
//create form to put inputs in form needs to inside figure
var figHead = document.createElement("div")
var figHead2 = document.createElement("div")

var figHead3= document.createElement("div")
var layOver = document.createElement("form")
var subBar = document.createElement("div")//subline with the next and back 
var nextBtn = document.createElement("button")
var nextBtn2=document.createElement("button")
var backBtn = document.createElement("button")
var foot = document.createElement("footer")
var createL= document.createElement("label" )
var createB=document.createElement("label" )
var createC=document.createElement("label" )
/*var ini1=document.getElementById("inputbox1")
var ini2=document.getElementById("inputbox2")
var ini3=document.getElementById("inputbox3")*/
//next needs to reveal next set of inputs and save the previous 
//back doesnt really matter just have it default if you can figure it out 
//create input 1 type= radio id= anS1 
//create start button with function
//to give start and back btns their text content and 
// and submit properties
/*var allInputs={
  aS1:ini1.value,
  aS2:ini2.value,
  aS3:ini3.value,
  
}*/

function loadIt(){
foot.style.fontSize="28px"
foot.style.backgroundColor="cadetblue"
foot.textContent="This is My right hand this is my left "
foot.style.position= "relative";
foot.style.top= "800px";
foot.style.display="flex"
box.style.backgroundColor="grey"
box.style.display="flex"
box.style.flexDirection="column"
box.style.border="solid"
box.style.width="580px"
box.style.height="580px"
box.style.padding="15px"
quizH.textContent= "welcome to question time"
quizH.style.position="relative"
quizH.style.left="440px"
nextBtn.textContent="nextBtn"
figureOut.style.flexDirection="column"
figureOut.style.display="flex"
figureOut.style.height="400px"
figureOut.style.width="400px"
figureOut.style.border="solid"
figureOut.style.borderColor="pink"
figureOut.style.borderWidth="15px"
subBar.style.position="relative"
figHead.textContent="whos the new guy in van halen"
figHead.style.fontSize="25px"

figHead3.textContent="whos the new guy in van halen"
figHead3.style.fontSize="25px"
createL.style.padding="5px"
createB.style.padding="5px"
createC.style.padding="5px"
subBar.style.top="420px"
backBtn.textContent="backBtn"
/*layOver.appendChild(ini1)
layOver.appendChild(ini2)
layOver.appendChild(ini3)*/
layOver.appendChild(createL)
layOver.appendChild(createB)
layOver.appendChild(createC)
main.appendChild(foot)
main.appendChild(quizH)
figureOut.appendChild(figHead)
main.appendChild(box)
box.appendChild(figureOut)
subBar.appendChild(layOver)
figureOut.appendChild(subBar)
subBar.appendChild(backBtn)
subBar.appendChild(nextBtn)
thisgonnabeLong1()
thisgonnabeLong()
starterSir()
nextBtn.style.display=""
count=0
codetimer();

};


function codetimer() {
	var sec = 400;
	var timer = setInterval(function() {
		takingTooLong.textContent = '00:' + sec;
		sec--;
		if (sec <= 0) {
			clearInterval(timer);
			console.log('done');
		}
	}, 1000); //commas arent very nice.
}

backBtn.onclick=function back(){
  alert("there is no turning back.....just kidding hit the start game again")
}

nextBtn.onclick=function nexty(){
  thisgonnabeLong2()
  thisgonnabeLong3()
  starterSir2()
  /*console.log(allInputs)*/
  figHead2.textContent="Explain the Inherent Suffering Of Life"
  figHead2.style.fontSize="25px"
  figHead2.style.position="relative" , "top:25px;"
  
  nextBtn2.textContent="nextBtn"
  subBar.appendChild(nextBtn2)
  nextBtn.style.display="none"
  nextBtn2.style.display=""
  figHead.style.display="none"
  figureOut.appendChild(figHead2)
}


  function starterSir() {
    
 createL.textContent="1985 & 'Soup'";
    var createIn = document.createElement("input");
    
    
    createIn.type = "radio";
    createIn.id = "a1";
    createIn.value = "true"
    
    createL.appendChild(createIn)
    
    
    createIn.addEventListener('click',function pl(){
      count++
      console.log(count)
    })
    }
    
   
 
 
  function thisgonnabeLong() {
  createB.textContent="stacy";
  var createIn = document.createElement("input" );
  createIn.type = "radio";
  createIn.id = "a1";
  createIn.value = "false";
  
  createB.appendChild(createIn)
  createIn.checked 
  
  
 };

 function thisgonnabeLong1(){
  createC.textContent="how the fuck should i know";
  var createIn = document.createElement("input");
  createIn.type = "radio";
  createIn.id = "a1";
  createIn.value = "false";
  console.log(createIn)
  createC.appendChild(createIn)
  createIn.checked
 };
 

submit.onclick=function saveMe(){
var score = {
  urScore:count++ ,
  RAD:count++,
  
  

};
localStorage.setItem("score" , JSON.stringify(score));
loadIt2();
}
function loadIt2(){
  
  
  var highScore = JSON.parse(localStorage.getItem("score"));
  
  if (highScore!== 0) {
    document.getElementById("submit").textContent = urScore + 
    " You're Score " + RAD
}}



function renderMessage() {
  var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
  if (lastGrade !== null) {
    document.querySelector(".message").textContent = lastGrade.student + 
    " received a/an " + lastGrade.grade
  }
}









 function starterSir2(){
 
  createL.textContent="You First"
    var createIn = document.createElement("input")
    
    
    createIn.type = "radio"
    createIn.id = "a2"
    createIn.value = "false"
    createL.appendChild(createIn)
    console.log(createIn.value)
    
 }

function thisgonnabeLong2(){
  createB.textContent="Ask A Serb"
  var createIn = document.createElement("input")
  
  
  createIn.type = "radio"
  createIn.id = "a2"
  createIn.value = "true"
  
  createB.appendChild(createIn)
  console.log(createIn.value)
  
  createIn.addEventListener('click',function pl(){
    count++
    console.log(count)
 })
}
 
function thisgonnabeLong3(){
  createC.textContent="Eat A Wiener"
  var createIn = document.createElement("input")
  
  
  createIn.type = "radio"
  createIn.id = "a2"
  createIn.value = "false"
  createC.appendChild(createIn)
  console.log(createIn.value)
 
 }
 



nextBtn2.onclick=function nextPt(){
 thisgonnabeLong5()
 thisgonnabeLong4()
 starterSir3()
  nextBtn2.style.display="none"
  figHead2.style.display="none"
  figureOut.appendChild(figHead3)
  figHead3.textContent="Why Is The Ground So Close And The Heavens So High?"
  figHead3.style.fontSize="25px"
  figHead3.style.position="relative"
  figHead3.style.top="-45px"
}




function starterSir3(){
 
  createL.textContent="Ask Your Rebbe."
  var createIn = document.createElement("input")
    
    
    createIn.type = "radio"
    createIn.id = "a3"
    createIn.value = "false"
    createL.appendChild(createIn)
    console.log(createIn)
    
 }
function thisgonnabeLong4(){
  createB.textContent="I'm Not Sure. Maybe Christ Is The Answer."
  var createIn = document.createElement("input")
  
  
  createIn.type = "radio"
  createIn.id = "a3"
  createIn.value = "false"
  createB.appendChild(createIn)
  console.log(createIn)
 }
  function thisgonnabeLong5(){
  createC.textContent="Wine And Cheese Scare The Heights Away."
  var createIn = document.createElement("input")
  
  
  createIn.type = "radio"
  createIn.id = "a3"
  createIn.value = "true"
  createC.appendChild(createIn)
  console.log(createIn)
  createIn.addEventListener('click',function pl(){
    count++
    console.log(count)
 })
  }














/* BIG OLE APPEND LESSON

var body = document.body;

var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";
// Add text for list items
li1.textContent = "Apples 🍎 ";
li2.textContent = "Pizza 🍕 ";
li3.textContent = "Dumplings 🥟 ";
li4.textContent = "Cupcakes 🧁 ";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
// Append ordered list 
favoriteEl.appendChild(listEl);
// Append list items to ordered list element 
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

*/
/*TIMER THAT WORKS DONT FUCKING DELETE 

function codetimer(){
    var sec = 700;
    var timer = setInterval(function(){
        document.getElementById("tooktolong").innerHTML="00:" + sec;
        sec --;
        if (sec <= 0) {
            clearInterval(timer);
        }
    }, 1000);//commas arent very nice.
};
 

codetimer()
*/

/*THIS IS STUFF FOR RADIO INPUTS IF DONT FIGURE ELSE OUT
var idk = document.getElementById("startbtn").onclick=
 function scrollsir(){
    var firstSet = document.createElement("input");
    firstSet.type = 'radio';
    firstSet.id = 'not';
    firstSet.value = "no he didnt"

 
var stuff = document.getElementById("answersandthings")
idk.appendChild(stuff)
var firstVal = document.createTextNode(firstSet.value);
stuff.appendChild(firstVal)



stuff.appendChild(not)
scrollsir()
}
*/
/** STARTBUTTON WORK 
var startGame = document.querySelector("#startbtn");
var timeLeft=30;
function answerMe (){
startGame.addEventListener("click" , function(event){
    event.preventDefault

    

})} */

/* TRIM/PROMPT EXAMPLES IF YOU GO THAT WAY !!!!OBJECT IN FUNCTION
https://www.w3schools.com/jsref/prop_html_innerhtml.asp

function saveLastGrade() {
// Save related form data as an object
var studentGrade = {
student: student.value,
grade: grade.value,
comment: comment.value.trim()
};

var tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "enter tag");

if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
  alert("please enter a valid tag");
} else {
  // Creates element based on tag entered by user
  var tag = document.createElement(tagName);

  // Adds text content to created tag
  tag.textContent = "This was made via prompts. It's a " + tagName + ".";
  
  // Appends tag as child of document body
  document.body.appendChild(tag);
}

var nextTag = confirm("Would you like to add another tag?");

if (nextTag === true) {
  var secondTagName = prompt("Please enter another  HTML Tag (ex. h1, h2, p, div):", "enter tag here");
  if(secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
    alert("please enter a valid tag");
  } else {
    var secondTag = document.createElement(secondTagName);
    secondTag.textContent = "This is our second tag via prompts, it's a " + secondTagName + ".";
    document.body.appendChild(secondTag);
  }
}
var submitAnswer = function() {

  var radios = document.getElementsByName('choice');
  var val= "";
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         val = radios[i].value; 
         console.log(val);
       }
  }
  
  if (val == "" ) {
    alert('please select choice answer');
  } else if ( val == "answer1" ) {
    alert('Answer is correct !');
  } else {
    alert('Answer is wrong');
  }
};
*/
/*SHIT YOU NEED TO READ MORE BC YOU ARE CLUELESS
https://stackoverflow.com/questions/351409/how-to-append-something-to-an-array
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
https://eloquentjavascript.net/04_data.html

*/