function employeeDetails(){
    let eName = "Bhramar";
    let eAge = 23;
    let eDesignation = "Developer";

    return{
        getName : function(){
            console.log("Employee Name : "+eName);
        },

        getAge : function(){
            console.log("Employee Age : "+eAge);
        },

        getDesignation : function(){
            console.log("Employee Designation : "+eDesignation);
        },
    }
}

var e = employeeDetails();
e.getName();
e.getAge();
e.getDesignation();