function onMouseDiv1(){
  // let h1tag = document.getElementsByClassName("div1");
  // this.style.
  // let h1tag = document.getElementsByClassName("div1");
  // document.getElementById("div1").style.backgroundColor='yellow';
  // document.getElementById("div1").style.border='dotted';
  document.getElementById("div1").style.color="red";
}

function onMouseDiv2(){
  // document.getElementById("div2").style.backgroundColor='yellow';
  // document.getElementById("div2").style.border='dotted';
  document.getElementById("div2").style.color="red"
}

function onDefaultDiv1(){
  // document.getElementById("div1").style.border="";
  // document.getElementById("div1").style.backgroundColor='white';
  document.getElementById("div1").style.color="black";
}

function onDefaultDiv2(){
  // document.getElementById("div2").style.border="";
  // document.getElementById("div2").style.backgroundColor='white';
  document.getElementById("div2").style.color="black";
}

document.getElementById("DivTag1")
    .onmouseover = function () {
        document.getElementById("DivTag1").style.color="yellow";
};

document.getElementById("DivTag1")
    .onmouseout = function () {
        document.getElementById("DivTag1").style.color="black";
};
    
document.getElementById("DivTag2")
    .onmouseover = function () {
        document.getElementById("DivTag2").style.color="yellow";
};

document.getElementById("DivTag2")
    .onmouseout = function () {
        document.getElementById("DivTag2").style.color="black";
};

function onMouse(event){
  // document.getElementById("div2").style.backgroundColor='yellow';
  // document.getElementById("div2").style.border='dotted';
  document.getElementById(id).style.color="blue"
}

function outMouse(event){
  // document.getElementById("div1").style.border="";
  // document.getElementById("div1").style.backgroundColor='white';
  document.getElementById(id).style.color="black";
}