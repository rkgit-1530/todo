// selecting popupbox,overlay,addbutton
var popupbox=document.querySelector(".popupbox")
var overlay=document.querySelector(".overlay")
var add=document.getElementById("add")
var cancel=document.getElementById("Cancel")
var container=document.querySelector(".container")
var addtodo=document.getElementById("Addtodo")
var title=document.getElementById("Title")
var details=document.getElementById("Todo")

add.addEventListener("click",function(){
    popupbox.style.display="block"
    overlay.style.display="block"
})

cancel.addEventListener("click",function(){
    event.preventDefault()
    popupbox.style.display="none"
    overlay.style.display="none"
})

addtodo.addEventListener("click",function(){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","popupbox bg-success mb-3")
    div.innerHTML=
    `<header>${title.value}</header>
     <footer>${details.value}</p>
     <a href=""> <i class="bi bi-trash3-fill"></i>&nbsp;delete<a>
     </footer>`
    container.append(div)
    popupbox.style.display="none"
    overlay.style.display="none"

})
