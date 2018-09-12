function openPage(pagename,child_tab){
  var pagecontent=document.getElementsByClassName("pagecontent");
  for(var i=0;i<pagecontent.length;i++){
    pagecontent[i].style.display="none";
  }
  if(pagename=="Main"){

  }else if(pagename=="Temp"){

  }
  document.getElementById(pagename).style.display="block";
  openTab(child_tab);
}
function openTab(tabName){
  var tabcontent=document.getElementsByClassName("tabcontent");
  for(var i=0;i<tabcontent.length;i++){
    tabcontent[i].style.display="none";
  }
  if(tabName=="Profile"){
    console.log("Profile Event")
    onLoadProfile();
  }
  document.getElementById(tabName).style.display="block";
}
var onLoadProfile=()=>{
  var target=document.getElementById("My-achievement");
  var red=30;
  var yellow=20;
  var green=50;
  var html="<div class='red' style='width:"+30+"%'></div>";
  html+="<div class='yellow' style='width:"+20+"%'></div>";
  html+="<div class='green' style='width:"+50+"%'></div>";
  target.innerHTML=html;
}
var app = {
    // Application Constructor

    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
      // Start page
      // openPage("Main","Home");
      openPage("Temp","AddBook");
    }
};

app.initialize();
