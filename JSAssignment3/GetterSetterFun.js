var num = {  
}

Object.defineProperty(num, "firstName", {
    get : function () {
        return value;
        // console.log(num.firstNum);
    },
    set : function(val){
        // debugger;
        value = val;
        document.getElementById("userInput").value = val;
    }
});

setInterval(() => {
    randomValue();
}, 10000);

function randomValue(){
    debugger;
    num.firstName = Math.floor(Math.random() * 100);
}

function onSubmit(){
    debugger;
    num.firstName = document.getElementById("userInput").value;
    alert("Entered Number is : " + num.firstName);
}
