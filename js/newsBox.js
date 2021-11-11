var newsTitBtn = document.getElementsByClassName("newstit");
var newsList = document.getElementsByClassName("list");
var btnlen = newsTitBtn.length;
console.log(btnlen);


for(var a= 0 ; a<btnlen; a++){
    newsTitBtn[a].addEventListener('click',function(e){
//        e.target.classList.add('on');
        for(var b =0 ; b<btnlen; b++){
            if( e.target.dataset.name == newsTitBtn[b].dataset.name){
                e.target.classList.add('on');
                newsList[b].classList.add('on');
            }
            else{
                newsTitBtn[b].classList.remove('on');
                                newsList[b].classList.remove('on');

            }
        }
       
        console.log(e.target.dataset.name);
    })
}