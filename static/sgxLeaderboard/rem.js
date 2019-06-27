export default {
     set(){
    var uiw = 750;
    var winw = document.documentElement.clientWidth
    var rate = winw / uiw;
    document.documentElement.style.fontSize = rate * 100 + "px";
}
}