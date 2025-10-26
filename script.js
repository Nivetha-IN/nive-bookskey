//selecting popup box popup overlay button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button") 

addpopupbutton.addEventListener("click",function(){
    popupbox.style.display="block"
    popupbox.style.display="block"
})


// select elements
var popupOverlay = document.querySelector(".popup-overlay");
var popupBox = document.querySelector(".popup-box");
var addPopupButton = document.getElementById("add-popup-button");
var cancelPopupButton = document.getElementById("cancel-popup");

// show popup when "+" button clicked
addPopupButton.addEventListener("click", function () {
    popupOverlay.style.display = "block";
    popupBox.style.display = "block";
});

// hide popup when cancel clicked
cancelPopupButton.addEventListener("click", function (event) {
    event.preventDefault(); // prevent form refresh
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});


//select container,add-book,book-title-input,book-author-input,book-description-input

var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleinput= document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput= document.getElementById("book-description-input")

addbook.addEventListener('click',function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div. setAttribute("class","Book-Container")
     div.innerHTML = `
        <h2>${booktitleinput.value}</h2>
        <h4>${bookauthorinput.value}</h4>
        <p>${bookdescriptioninput.value}</p>
        <button class="delete-btn">Delete</button>
    `;

    container.append(div);

    // clear inputs
    booktitleinput.value = "";
    bookauthorinput.value = "";
    bookdescriptioninput.value = "";

    // close popup
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";

    // add delete functionality
    div.querySelector(".delete-btn").addEventListener("click", function(){
        div.remove();
    });
});