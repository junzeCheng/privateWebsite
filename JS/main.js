//窗口滚动导航栏
window.onscroll=function(){
    if(window.scrollY>0){
        topNavBar.classList.add("sticky");
    }else{
        topNavBar.classList.remove("sticky");
    }
}
//导航栏跳转
let aTags=document.querySelectorAll("nav>ul>li>a");
for(var i = 0;i<aTags.length;i++){
    aTags[i].onclick=function(e){
        e.preventDefault();
        let href=e.currentTarget.getAttribute("href");
        let element=document.querySelector(href);
        window.scrollTo(0,element.offsetTop-60);
    }
}