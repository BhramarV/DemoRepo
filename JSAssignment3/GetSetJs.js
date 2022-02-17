const student = {
    firstName: 'Monica'
}

// getting property
Object.defineProperty(student, "getName", {
    get : function () {
        return this.firstName;
    }
});

// setting property
Object.defineProperty(student, "changeName", {
    set : function (value) {
        this.firstName = value;
    }
});

console.log(student.firstName); // Monica

// changing the property value
student.changeName = 'Sarah';

console.log(student.firstName); // Sarah


let num = 60;
console.log(num);
document.getElementById("userInput").value = num;
function onSubmit(){
    debugger;
    // document.getElementById("userInput").value = num;
    num = document.getElementById("userInput").value;
    // alert("Entered Number is : " + num);
    setTimeout(function() { randomValue(); }, 5000);
    // randomValue();
    document.getElementById("userInput").value = num;
}

function randomValue(){
    debugger;
    num = Math.floor(Math.random() * 100);
    // return ranNum;
}