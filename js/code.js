
var x=[]
var y=[]
var amtScore =[]
var allScores = []

//https://michael-karen.medium.com/how-to-save-high-scores-in-local-storage-7860baca9d68



function youre(score){
var x = localStorage.getItem(allScores) ??[];
var lowestScore = x[amtScore - 1]?.score ?? 0;
    if(score > lowestScore){
    saveAllScores(score)
}
}


function saveAllScores(score) {
 name1 = prompt(', Enter name:');
   const newScore = { score, name1};
    x.push(newScore);
      x.splice(amtScore);
    localStorage.setItem(amtScore, JSON.stringify(newScore));
  console.log(localStorage)}





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
var subby=document.createElement("button")

function loadIt(){
foot.style.backgroundColor="cadetblue"
    foot.textContent="я з роками все більше розчаровуюся "
      foot.style.position= "relative";
          foot.style.top= "800px";
            box.style.position='relative'
            foot.style.display="flex"
            foot.style.justifyContent="center"
            box.style.backgroundColor="grey"
          box.style.display="flex"
        box.style.flexDirection="column"
      box.style.border="solid"
    box.style.width="510px"
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
        figHead.textContent="Which President warned of a two party system"
        figHead.style.fontSize="25px"
      figHead3.style.fontSize="25px"
    createL.style.padding="5px"
  createB.style.padding="5px"
createC.style.padding="5px"
  subBar.style.top="420px"
    backBtn.textContent="backBtn"
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
  codetimer();
    figHead3.textContent="Which President spoke of the military industrial complex?"
      figHead3.style.fontSize="25px"
      figHead3.style.position="relative"
  figHead3.style.top="-45px"
nextBtn.textContent="nextBtn"
  subby.textContent="Submit"
    submit.textContent="show score"
      figHead2.textContent="Why stay"
        figHead2.style.fontSize="25px"
        figHead2.style.position="relative" 
  nextBtn2.textContent="nextBtn"
    foot.style.fontSize="28px" 
      box.style.left="450px"
      submit.style.position='relative'
      submit.style.left='500px'
      subBar.style.padding='5px'
  
      
};

nextBtn2.onclick=function nextPt(){
  thisgonnabeLong5()
  thisgonnabeLong4()
  starterSir3()
   nextBtn2.style.display="none"
   figHead2.style.display="none"
   figureOut.appendChild(figHead3)
   subBar.appendChild(subby)
}
subby.onclick=function save(){
  
youre(allScores)
figHead3.style.display="none"
submit.textContent="show score"
sco=document.createElement('li')
  figureOut.appendChild(sco)
  var score2 = window.localStorage.getItem(amtScore)
  var z=JSON.parse(score2)
  console.log(z)
  var j = (  " this is your score " + z.name1 + "   " +  z.score   )
  console.log(j)
  sco.textContent= j
}

submit.onclick=function display(){
  box.style.backgroundColor="black"
    
}

function codetimer() {
	var sec = 400;
	var timer = setInterval(function() {
		takingTooLong.textContent = '0:' + sec;
		sec--;
		if (sec <= 0) {
			clearInterval(timer);
			console.log("Ви є у списку");
		}
	}, 1000); //commas arent very nice.
}

backBtn.onclick=function back(){
  alert("жартую, знову потрапив на початок гри")
}

nextBtn.onclick=function nexty(){
  thisgonnabeLong2()
  thisgonnabeLong3()
  starterSir2()
  /*console.log(allInputs)*/
 
  subBar.appendChild(nextBtn2)
  nextBtn.style.display="none"
  nextBtn2.style.display=""
  figHead.style.display="none"
  figureOut.appendChild(figHead2)
}


function starterSir() {
createL.textContent="Gerald Ford";
var createIn = document.createElement("input");
createIn.type = "radio";
createIn.id = "a1";
createIn.value = "true"
createL.appendChild(createIn)
createIn.addEventListener('click',function pl(){
allScores++
}
)
};

function thisgonnabeLong() {
  createB.textContent="George Washington";
  var createIn = document.createElement("input" );
  createIn.type = "radio";
  createIn.id = "a1";
  createIn.value = "false";
  createB.appendChild(createIn)
   
};

function thisgonnabeLong1(){
  createC.textContent="папа сталін";
  var createIn = document.createElement("input");
  createIn.type = "radio";
  createIn.id = "a1";
  createIn.value = "false";
  console.log(createIn)
  createC.appendChild(createIn)
  
 };

function starterSir2(){
createL.textContent="Patton"
var createIn = document.createElement("input")
createIn.type = "radio"
createIn.id = "a2"
createIn.value = "false"
createL.appendChild(createIn)
console.log(createIn.value)
}

function thisgonnabeLong2(){
createB.textContent="навіщо питати"
var createIn = document.createElement("input")
createIn.type = "radio"
createIn.id = "a2"
createIn.value = "true"
createB.appendChild(createIn)
console.log(createIn.value)
createIn.addEventListener('click',function pl(){
allScores++
console.log(allScores)
}
)
}

function thisgonnabeLong3(){
createC.textContent="Truman"
var createIn = document.createElement("input")
createIn.type = "radio"
createIn.id = "a2"
createIn.value = "false"
createC.appendChild(createIn)
console.log(createIn.value)
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
createB.textContent=" Maybe Cheese Is The Answer."
var createIn = document.createElement("input")
createIn.type = "radio"
createIn.id = "a3"
createIn.value = "false"
createB.appendChild(createIn)
console.log(createIn)
 }
function thisgonnabeLong5(){
createC.textContent="The Heights Are No Longer There."
var createIn = document.createElement("input")
createIn.type = "radio"
createIn.id = "a3"
createIn.value = "true"
createC.appendChild(createIn)
console.log(createIn)
createIn.addEventListener('click',function pl(){
allScores++
console.log(allScores)
}
)
};






/*function loadIt2(){
  
  
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
}*/



/*
function showScore(){
  localStorage.getItem()
}
*/
/* 
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
    */
//create main----made div the main---nvm 

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
/*TIMER THAT WORKS DONT youreING DELETE 

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
/* YOU NEED TO READ MORE BC YOU ARE CLUELESS
https://stackoverflow.com/questions/351409/how-to-append-something-to-an-array
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
https://eloquentjavascript.net/04_data.html

*/