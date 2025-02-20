var addpopupbutton=document.getElementById("popup-button")
var popupoverlay=document.querySelector(".overlay")
var popupbox=document.querySelector(".popup-box")
addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
var cancelbutton=document.getElementById("cancel-button")
cancelbutton.addEventListener("click",function(){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var addbook=document.getElementById("add-book")
var Container=document.querySelector(".Container")
var booktitle=document.getElementById("book-title-input")
var bookauthor=document.getElementById("book-author-input")
var bookdescription=document.getElementById("book-description-input")
addbook.addEventListener("click",function(){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>booktitle.value</h2>
    <h5>bookauthor.value</h5>
    <p>bookdescription.value</p>
    <button onclick="deletebook(event)">Delete</button>`
    Container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
function deletebook(event){
    event.target.parentElement.remove()
}
