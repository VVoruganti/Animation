var gift = $("#gift"),magicWand = $("#magic-wand"),speechBubble = $("#speech-bubble"),text=$("#text");
//  heart=$("#heart"), hyacinth=$("#hyacinth"), freesia = $("#freesia"), like = $("#like"), 
// like1 = $("$like-1"), iris = $("#iris"), protea = $("#protea"),
// dahlia = $("#dahlia"), petunia = $("$petunia"), wallflower = $("#wallflower"),
// rose = $("#rose"), flower = $("#flower"), poppy = $("#poppy") ;




var tl = new TimelineMax({
    delay:1
});

tl.from(gift, 1.5, {opacity:0, y:-300, ease:Bounce.easeOut, scale:4})
  .fromTo(magicWand, 1.5, {opacity:0.2,x:-250, rotation:0, scale:2},{x:575,y:-125, rotation:330, opacity:1, scale:1})
  .to(magicWand,0.5,{rotation:"+=30"})
  .to(gift,0.5,{opacity:0})
  .to(magicWand,0.5,{opacity:0})
  .fromTo(speechBubble,1,{x:600, y:-100,opacity:0,scale:0},{x:600,y:-100,opacity:1,scale:5})
  .to(text,0.2,{x:600,y:-250})
  .call(typing1)
  .call(autoClick(),7)
  ;
  
  
 function typing1(){
     Typed.new("#actual-text", {
         strings:["Hey Rhea.","You're one of the <br> coolest girls I <br> know","Also One of the <br> nicest","And just overall <br> awesomist!", "So I was <br> wondering...", "If you would <br> do me the honor", "and go to <br> Prom with me?"],
         typeSpeed:0
     });
}

