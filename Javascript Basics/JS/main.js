var ourList = document.getElementById("our-list");

var ourButton = document.getElementById("our-button");

var ourHeadline = document.getElementById("our-headline");

var listItems = document.getElementById("our-list").getElementsByTagName("li");

// for(i = 0; i < listItems.length; i++){
//     listItems[i].addEventListener("click", activateItem);
//     //lt[i].innerHTML = "mim pora parena";
// }

ourList.addEventListener("click", activateItem);

function activateItem(e){
    //alert(" mim rege geche");
    if(e.target.nodeName = "LI"){
        ourHeadline.innerHTML = e.target.innerHTML;
        for(i = 0; i < e.target.parentNode.children.length; i++){
            e.target.parentNode.children[i].classList.remove("active");
        }
        e.target.classList.add("active");

    }

    // else{
    //     alert("Clik the items");
    // }
}

ourButton.addEventListener("click", createNewItem);

function createNewItem(){
    ourList.innerHTML += "<li>Something new</li>";
}