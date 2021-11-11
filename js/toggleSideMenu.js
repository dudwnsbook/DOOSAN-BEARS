// TOGGLE
var toggleLeftBtn = document.querySelector(".toggle-left");
var toggleRightBtn = document.querySelector(".toggle-right");
var sideLeftMenu = document.querySelector(".m-menu-left");
var sideRighMenu = document.querySelector(".m-menu-right")
var blackBg = document.querySelector(".m-blackbg-left");
var blackBgRight=document.querySelector(".m-blackbg-right");

// M-MENU
var m_con=document.querySelectorAll(".m-con");
var depthTit = document.querySelectorAll(".depth-tit");
var toggleDepth=document.querySelectorAll(".m-depth");
var conLength=m_con.length;
var clickBtn;

toggleLeftBtn.addEventListener('click',function(){
    sideLeftMenu.style.left=0+"%";
    sideLeftMenu.style.transition=0.6+"s";
})
toggleRightBtn.addEventListener('click',function(){
    sideRighMenu.style.right=0+"%";
    sideRighMenu.style.transition=0.6+"s";
})
blackBg.addEventListener('click',function(){
    sideLeftMenu.style.left=-100+"%";

})
blackBgRight.addEventListener('click',function(){
    sideRighMenu.style.right=-100+"%";
})


for(var a=0; a<conLength; a++){
    depthTit[a].addEventListener('click',function(e){
        var depthParent=e.target.parentNode;
        if(depthParent.className=="m-con on"){
            depthParent.classList.remove("on");
        }
        else{
            clickBtn=e.target.dataset.name;
            console.log(clickBtn)
            
            depthOff(clickBtn);
        }

    })
}

function depthOff(obj){
    for(var b = 0; b<toggleDepth.length; b++){
        if(obj==toggleDepth[b].dataset.name){
            m_con[b].classList.add('on');
        }
        else{
            m_con[b].classList.remove('on');
        }
    }
}