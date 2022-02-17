var num = {
    firstNum: 30
}

Object.defineProperty(num, "getNum", {
    get : function () {
        return this.firstNum;
        console.log(num.firstNum);
    }
});

// setting property
Object.defineProperty(num, "changeNum", {
    set : function (value) {
        this.firstNum = value;
    }
});

document.getElementById("userInput").value = num.getNum;

setInterval(() => {
    randomValue();
    document.getElementById("userInput").value = num.getNum;
}, 10000);

function randomValue(){
    // debugger;
    num.changeNum = Math.floor(Math.random() * 100);
}

function onSubmit(){
    // debugger;
    num.changeNum = document.getElementById("userInput").value;
    alert("Entered Number is : " + num.getNum);
}
