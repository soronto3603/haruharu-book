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
  }else if(tabName=="Book"){
    bookSetItem();
  }
  document.getElementById(tabName).style.display="block";
}
function clean_addBook_page(){
  document.getElementById('input_book-name').value="";
  document.getElementById('input_book-author').value="";
  document.getElementById('input_book-start-reading').value="2017-05-21";
}
//Home

//Book
function makeItems(){
  if(book_data==null){
    return "";
  }
  var html="";
  for(var i=0;i<book_data.length;i++){
    html+="<div class=margin></div>";
    html+="<div class=item>";
    html+="<div class=left>";
    html+='<img src="'+book_data[i]['imguri']+'">';
    html+="</div>";
    html+="<div class=right>";
    html+='<div class="title">'+book_data[i]['name']+'</div>';
    html+='<div class="sub_title">'+book_data[i]['author']+'</div>';
    html+='<div class="progress_bar">';
    html+='<div class="progress">';
    var color="";
    if(book_data[i]['progress']<50){
      color="red";
    }else if(book_data[i]['progress']<100){
      color="yellow";
    }else if(book_data[i]['progress']==100){
      color="green";
    }
    html+='<div class="progress-color '+color+'" style="width:'+book_data[i]['progress']+'%">'+book_data[i]['progress']+'%</div>';
    html+="</div>";
    html+=`<div class="progress-click blue" onmousedown="console.log('onmousedown');">click</div>;`
    html+="</div>"
    html+='<div class="more_button">more info</div>'
    html+='<div class="clear"></div>';
    html+="</div>";
    html+="</div>";
  }
  return html;
}
function bookSetItem(){
  document.getElementById('items').innerHTML=makeItems();
}
//Profile
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

//DB Module
var db;
function dbinit(){ //database init.
    db = sqlitePlugin.openDatabase('mydb.db', '1.0', '', 1);
    db.transaction(function (txn) {
      txn.executeSql('create table if not exists book(id Integer primary key autoincrement,name Varchar,author Varchar,start_reading Varchar,finish_reading Varchar,progress Int,imguri Varchar)', [], function (tx, res) {
      });
      console.log("DB Init Succes");
    });
}
function insertTestBook(){
  db.transaction(function (txn) {
    txn.executeSql('insert into book(name,author,start_reading,finish_reading,progress,imguri) values(?,?,?,?,0,"")', ['제발','한글좀',"12","34"], function (tx, res) {});
  });
}
function insertBookWith(name,author,start,finish,progress,imguri){
  db.transaction(function(txn){
    txn.executeSql('insert into book(name,author,start_reading,finish_reading,progress,imguri) values(?,?,?,?,?,?)',[name,author,start,finish,progress,imguri],function(tx,res){});
  });
}
function showTable(){
  db.transaction(function(txn){
    txn.executeSql('select * from book',[],function(tx,res){
      console.log(res.rows);
    });
  });
}
var book_data=null;
function getTable(exitFunction){
  db.transaction(function(txn){
    txn.executeSql('select * from book',[],function(tx,res){
      book_data=res.rows._array;
      exitFunction();
    });
  });
}
function dropTable(){
  db.transaction(function (txn) {
    txn.executeSql('drop table book', [], function (tx, res) {
    });
  });
}
//db adaptor
function addbook_submit(){
    var name=document.getElementById("input_book-name").value;
    var author=document.getElementById("input_book-author").value;
    var start_reading=document.getElementById("input_book-start-reading").value;

    var start_reading=new Date(start_reading);

    var imguri=document.getElementById("input_book-imguri").value;

    insertBookWith(name,author,start_reading.getTime(),start_reading.getTime(),0,imguri);
}
//camera module
function getCameraOption(){
  var options={
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      // In this app, dynamically set the picture source, Camera or photo gallery
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: Camera.EncodingType.JPEG,
      mediaType: Camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true  //Corrects Android orientation quirks
    };
  return options;
}
function cameraSuccess(imguri){
  console.log(imguri);
  document.getElementById("input_book-imguri").value=imguri;
}
function cameraFail(error){
  console.log(error);
}
function getPictureFromGallery(){
  navigator.camera.getPicture(cameraSuccess,cameraFail,getCameraOption());
}
//cordova app initial
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

      dbinit();

      // DB insert test

      insertBookWith("Djangounchained","WesternDrama","1536827416777","1536827416777",60,"img\\book_cover_1.PNG");
      insertBookWith("FightClub","Drama","1536827416777","1536827416777",25,"img\\book_cover_2.PNG");
      insertBookWith("Obilivion","Action, Mystery","1536827416999","1536827416999",100,"img\\book_cover_3.PNG");
      //get Table ()=>{} loading bar
      getTable(()=>{});
      showTable();

      // Start page
      openPage("Main","Home");
      // openPage("Temp","AddBook");

    }
};

app.initialize();
