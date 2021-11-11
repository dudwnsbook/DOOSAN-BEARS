var nav = document.querySelector(".bottom-menu");
var dep = document.getElementsByClassName("depth");
var depBg = document.querySelector(".depth--bg");

nav.addEventListener("mouseenter",function(){
    depBg.classList.add('on');
    for(var i = 0; i<dep.length; i++){
        dep[i].classList.add('on');
    }
    
})

nav.addEventListener("mouseleave",function(){
        depBg.classList.remove('on');

        for(var i = 0; i<dep.length; i++){
        dep[i].classList.remove('on');
    }
})

depBg.addEventListener("mouseenter",function(){
    depBg.classList.add('on');
    for(var i = 0; i<dep.length; i++){
        dep[i].classList.add('on');
    }
})
depBg.addEventListener("mouseleave",function(){
    depBg.classList.remove('on');
    for(var i = 0; i<dep.length; i++){
        dep[i].classList.remove('on');
    }
})

var fixNav= document.getElementsByClassName("fix");
var fixLen= fixNav.length;
console.log("gd"+fixLen);
for(var j = 0; j<fixLen; j++){
    fixNav[j].addEventListener('mouseenter',function(e){
        e.target.classList.add('view'); 
    });
    fixNav[j].addEventListener('mouseleave',function(e){
        e.target.classList.remove('view'); 
    });
}
