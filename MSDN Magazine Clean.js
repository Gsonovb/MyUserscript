// ==UserScript==
// @name         MSDN magazine Clean
// @namespace    http://your.homepage/
// @version      0.1
// @description  清理MSDN杂志页面的广告
// @author       Guanyc
// @match        http*://msdn.microsoft.com/*/magazine/*
// @grant        none
// ==/UserScript==

var container = document.getElementsByClassName("EyebrowContainer")[0];

var span=document.createElement("span");
span.textContent="  |  "
container.appendChild(span);


var btnhidecode=document.createElement("a");
btnhidecode.textContent="Remove Code Part";
btnhidecode.onclick=function(){
    var items = document.getElementsByClassName("CodeHighlighter");

    for(i=0;i<items.length;i++){
        items[i].hidden=true;
    }
}

container.appendChild(btnhidecode);


var span=document.createElement("span");
span.textContent="  |  "
container.appendChild(span);


var btnhideright=document.createElement("a");
btnhideright.textContent=" Remove Right Content";
btnhideright.onclick=function(){
    var item=document.getElementById("RightContent");
    item.parentElement.remove()
}

container.appendChild(btnhideright);


var span=document.createElement("span");
span.textContent="  |  "
container.appendChild(span);


var btncolor=document.createElement("a");
btncolor.textContent="Change back color";
btncolor.onclick=function(){
    var Content = document.getElementById("MainContent");
    Content.style.backgroundColor="#aaa";
    
    var Content2 = document.getElementById("BodyBackground");
    Content2.style.backgroundColor="#aaa";
    
    
    document.getElementsByClassName("MsdnPageBody")[0].style.backgroundColor="#bbb";
    
}

container.appendChild(btncolor);

