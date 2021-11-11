var slideCon=document.getElementsByClassName("imgList");
var slideLen = slideCon.length;
var currentIndex=0;
var nextIndex;
var prvIndex;

function slide(obj,obj1){
    slideCon[obj].classList.add('View');
    slideCon[obj1].classList.remove('View');
    
    currentIndex=obj;
}
function autoSlide(){
    setInterval(function(){
        nextIndex = (currentIndex+1)%slideLen;
        prvIndex = currentIndex%slideLen;
        console.log(nextIndex);
        console.log(prvIndex);
        slide(nextIndex,prvIndex);    
    
    },6000);
}

slideCon[0].classList.add('View');
autoSlide();



//GameSlider

var prveBtn = document.querySelector(".prveBtn");
var nextBtn = document.querySelector(".nextBtn");
var gameUl = document.querySelector(".gameCalendar");
var BtnCount =1;

prveBtn.addEventListener('click',function(){
    BtnCount--;
    gameUl.style.left=(-100*BtnCount)+"%";
    
    if(BtnCount<0){
//        prveBtn.style.cursor="none";
        gameUl.style.left=0+"%";
        BtnCount=0;
    }
//    console.log(BtnCount);
});
nextBtn.addEventListener('click',function(){
    BtnCount++;
    gameUl.style.left=(-100*BtnCount)+"%";
//    console.log(BtnCount);
    if(BtnCount>2){
//        prveBtn.style.cursor="none";
        gameUl.style.left=-200+"%";
        BtnCount=2;
    }
    
})
//console.log(BtnCount);