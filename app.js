var home = document.querySelector("#home")
var contactMe = document.querySelector("#contactMe");
var feed = document.querySelector("#feed")

var closeHomeBtn = document.querySelector(".closeHome");
var closeContactBtn = document.querySelector(".closeContact");
var closeFeedBtn = document.querySelector(".closeFeed");

var maximizeHome = document.querySelector(".maximizeHome");
var maximizeContact = document.querySelector(".maximizeContact");
var maximizeFeed = document.querySelector(".maximizeFeed");

var openHome = document.querySelector(".fa-apple");
var phone = document.querySelector(".phone");
var mail = document.querySelector(".mail");

home.style.display = "none";
contactMe.style.display = "none";
feed.style.display = "none";


closeHomeBtn.addEventListener("click", function(){
    if(home.style.display !== "none"){
        home.style.display = "none";
    } 
})
closeContactBtn.addEventListener("click", function(){
    if(contactMe.style.display !== "none"){
        contactMe.style.display = "none";
    } 
})

closeFeedBtn.addEventListener("click", function(){
    if(feed.style.display !== "none"){
        feed.style.display = "none";
    } 
})

openHome.addEventListener("click",()=>{
    home.style.display = "flex";
})

phone.addEventListener("click",()=>{
    contactMe.style.display = "flex";
})

mail.addEventListener("click",()=>{
    feed.style.display = "flex";
})


maximizeHome.addEventListener("click",function(){
    if(home.style.minHeight === "50%" || home.style.minWidth === "45%" )
    {
        home.style.Width === "100%";
        home.style.Height === "100%";
    }
    if(home.style.minHeight === "100%" || home.style.minWidth === "100%" )
    {
        home.style.minWidth === "45%";
        home.style.minHeight === "50%";
    }
})

// draggable

dragElement(document.getElementById("home"));
dragElement(document.getElementById("contactMe"));
dragElement(document.getElementById("feed"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
