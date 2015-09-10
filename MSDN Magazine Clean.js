// ==UserScript==
// @name         MSDN magazine Clean
// @namespace    http://your.homepage/
// @version      0.3
// @description  清理MSDN杂志页面的广告
// @author       Guanyc
// @match        http*://msdn.microsoft.com/*/magazine/*
// @grant        none
// ==/UserScript==

var content = document.getElementById("content");
var container = document.createElement("div");

if(content){

}
else
{
    content = document.getElementsByClassName("inner")[0];
}


content.insertBefore(container,content.childNodes[0]);



var span=document.createElement("span");
span.textContent=" Helper : ";
container.appendChild(span);


//btnhidecode.href="#";
var btnhidecode=document.createElement("button");
btnhidecode.textContent="Remove Code Part";
btnhidecode.onclick=function(){
    var items = document.getElementsByClassName("codeSnippetContainer");

    for(i=0;i<items.length;i++){
        items[i].hidden=true;
    }
}

container.appendChild(btnhidecode);



var span=document.createElement("span");
span.textContent="  |  "
container.appendChild(span);


var btnhideright=document.createElement("button");
btnhideright.textContent=" Remove Right Content";
btnhideright.onclick=function(){
    var item=document.getElementById("RightContent");
    
    if (item.parentNode.nodeName == "TD") {
        item.parentNode.remove()
    }
    else{
        item.remove()
    }

        
	var lc=document.getElementById("LeftContent");
    
    if (lc)
    {
        lc.style.width="100%";
    }
    
    var page=document.getElementsByClassName("article")[0]; 
    page.style.maxWidth="100%"
  
}

container.appendChild(btnhideright);


var span=document.createElement("span");
span.textContent="  |  "
container.appendChild(span);


var btncolor=document.createElement("button");
btncolor.textContent="Change back color";
btncolor.onclick=function(){
    var page = document.getElementById("page");
    
    if(page)
    {}
    else
    {
        page = document.getElementsByClassName("inner")[0];
    }
    
    page.style.backgroundColor="#ddd";
    
}

container.appendChild(btncolor);

