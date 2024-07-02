var count = 0;
var pages = [];
var collapseTrigger = true;
var i;

function appendToStack(link)
{
  var element = document.getElementById("titlebar");
  var add = document.createElement("div");
  add.id = 'page' + count;
  add.innerHTML = "<span class=\'close\' onclick=\"closeParent(this);\">⨯</span><iframe id=\'idIframe"+count+"\'onload=\'iframeLoaded(this.id)\' style=\'width:90%\' scrolling=\"no\" src=\""+link+"\"></iframe>";
  pages.push("idIframe"+count);
  count++;
  element.insertAdjacentElement("afterend", add);
  document.getElementById("navtxt").remove();
}

function iframeLoaded(id) {
      var iFrameID = document.getElementById(id);
      if(iFrameID) {
            // here you can make the height, I delete it first, then I make it again
            iFrameID.height = "";
            iFrameID.transition_duration = 1+"s";
            iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + "px";
      }   
  }

function closeParent(element){
  element.parentElement.remove();
}
//if window is small enough, nav bar will collapse when you use it
  
function resize() {
    //resize all loaded pages
    pages.forEach(iframeLoaded);
    
    if ( $(window).width() < 739) {     
      //collapse nav bar
      if(collapseTrigger){
        collapseAll()
        collapseTrigger = false;
        }
      var m = document.getElementsByClassName("mobileOnly");
      for (i = 0; i < m.length; i++){
        m[i].style.display="block"
      }
    }
    else {
      //expand nav bar
      var m = document.getElementsByClassName("mobileOnly");
      for (i = 0; i < m.length; i++){
        m[i].style.display="none"
        m[i].nextElementSibling.style.maxHeight = "100%"
      }
      collapseTrigger = true;
    }
}
$(window).on("resize", resize);
resize(); // call once initially

//Collapsible menu stuff

var coll = document.getElementsByClassName("collapsible");

function collapse(e) {
    e.classList.toggle("active");
    var content = e.nextElementSibling;
    if (content.style.maxHeight !="100%"){
      content.style.maxHeight = "100%";
    } else {
      content.style.maxHeight = "0px";
    } 
}

function collapseAll(){
  for (i = 0; i < coll.length; i++) {
    coll[i].nextElementSibling.style.maxHeight = "0px"
  }
}

function expandMobile(){
  
  }