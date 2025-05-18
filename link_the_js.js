var aa=250;
var text=""
text=check_the_num(aa)

window.onload=function (){
document.getElementById("change it").innerHTML= text};

function check_the_num(aa){
if (aa>200) {
 text="num is > 200"
}
else{
text=" num is not > 200"
}
return text;
}
