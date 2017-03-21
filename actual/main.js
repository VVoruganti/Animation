var gift = $("#gift"),magicWand = $("#magic-wand"),speechBubble = $("#speech-bubble"),text=$("#text");
//  heart=$("#heart"), hyacinth=$("#hyacinth"), freesia = $("#freesia"), like = $("#like"), 
// like1 = $("$like-1"), iris = $("#iris"), protea = $("#protea"),
// dahlia = $("#dahlia"), petunia = $("$petunia"), wallflower = $("#wallflower"),
// rose = $("#rose"), flower = $("#flower"), poppy = $("#poppy") ;




var tl = new TimelineMax({
    delay:1
});

tl.call(go)
  .fromTo(gift, 2, {opacity:0,y:-400, ease:Bounce.easeOut, scale:4},{opacity:1,y:0,scale:1})
  .fromTo(magicWand, 1.5, {opacity:0.2,x:-250, rotation:0, scale:2},{x:75,y:-100, rotation:330, opacity:1, scale:1})
  .to(magicWand,1,{rotation:"+=30"})
  .to(gift,1.5,{scale:12,opacity:0})
  .to(magicWand,0.2,{opacity:0})
  .fromTo(speechBubble,1,{y:-100,x:25,opacity:0,scale:0},{y:-100,x:25,opacity:1,scale:3})
  .to(text,0.2,{x:60,y:-220})
  .call(typing1)
  ;
  
  
 function typing1(){
     Typed.new("#actual-text", {
         strings:["Hey Rhea.","You're one of the <br> coolest girls I <br> know","Also one of the <br> nicest","And just overall <br> awesomist!", "So I was <br> wondering...", "If you would <br> do me the honor", "and go to <br> Prom with me?"],
         typeSpeed:0,
         backDelay:500,
         showCursor:false
     });
}

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBuBAJrjt3afH1hIZofLTNKgpP0tFZlOvI",
    authDomain: "prom-475f6.firebaseapp.com",
    databaseURL: "https://prom-475f6.firebaseio.com",
    storageBucket: "prom-475f6.appspot.com",
    messagingSenderId: "838651588657"
  };
  firebase.initializeApp(config);

var database = firebase.database();

function go() {
    database.ref().set({
        gotime:"go"
    });
}

$(document).ready(function() {
    database.ref().set({
        gotime:"now"
    });
})