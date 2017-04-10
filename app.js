//fa-soundcloud refers to which font-awesome icon to use
var myicon= new trayItem("fa-soundcloud", "myicon");
function myicon() {
   alert("yey you clicked it!");

   //remove the icon
   myicon.destroy()
}
