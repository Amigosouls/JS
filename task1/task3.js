function validateForm(){
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]){8}/;
    var letters = /^[A-Za-z]+$/;
   
    let user_name=document.task2.uname.value;
    let password=document.task2.pass.value;
    let conf_pass = document.task2.confpass.value;
    if(user_name=='')
    {
        alert("Username Cannot be Empty");
    }
    else if(!letters.test(user_name))
    {
        alert("User Name must contain only alphabets and space")
    }
    else if(password=='')
    {
        alert("Password Cannot be Empty");
    }
    else if(!pwd_expression.test(password))
    {
        alert("Password Doesn't Match");
    }
    else if(conf_pass='')
    {
        alert("Enter confirm Password");
    }
    else if(!conf_pass===password)
    {
        alert("Password Doesn't match");
    }
    else{
        window.location="http://127.0.0.1:5500/task1/result.html";
    }
    
}
function validateResult()
{
    let first_name = document.task2form.fname.value;
    let last_name = document.task2form.lname.value;
    let d_o_b = document.task2form.dob.value;
    let gender = document.task2form.gen.value;
    let pattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
    if(first_name=='' && last_name=='' && d_o_b=='' && gender=='')
    {
        alert("Fields cannot be empty");
    }
    else if(!pattern.test(d_o_b))
    {
        alert("Invalid date format!")
    }
    else
    {
        let current_date = new Date();
        let curr_date=current_date.getFullYear()
        //console.log(current_date);
        born = d_o_b.slice(6)
        age = curr_date-born;
        if(age>=18)
        {
            document.getElementById("show").innerHTML=first_name+" "+last_name+" is eligible to vote";
        } 
        else{
            document.getElementById("show").innerHTML=first_name+" "+last_name+" wait to reach 18 years";
        }
    }
}

class Person{
    constructor(name,age,gen,addr)
    {
    this.uname = name;
    this.age = age;
    this.gen = gen;
    this.addr = addr;
    }
    display()
    {
        var x = "Name:"+this.uname+"<br> Age:"+this.age+"<br Gender:"+this.gen+"<br> Address:"+this.addr;
        document.getElementById("show").innerHTML=x;
    }
}
function task3_1(){
   let Obj = new Person("Arun Joseph",22,"Male","Coimbatore");
    Obj.display();
}


class Person2{
    constructor(name,age,gen,addr)
    {
    this.uname = name;
    this.age = age;
    this.gen = gen;
    this.addr = addr;
    }
    display(){}
}

class Employee extends Person2{
    constructor(empname,empage,empgen,empaddr,empcode,empdept,empdesg,empsal){
    super(empname,empage,empgen,empaddr);
    this.empname=empname;
    this.empage = empage;
    this.empgen = empgen;
    this.empaddr = empaddr;
    this.empcode = empcode;
    this.empdept = empdept;
    this.empdesg = empdesg;
    this.empsal = empsal;
    }
    
    display()
    {
        
        let x = "Name:"+this.empname+"<br> Age:"+this.empage+"<br> Gender:"+this.empgen+"<br> Address:"+this.empaddr+"<br> Designation:"+this.empdesg+"<br> Code:"+this.empcode+"<br> Salary:"+this.empsal;
        document.getElementById("show").innerHTML=x;
    }
}

function task3_2()
{
    var obj2 = new Employee("Bill Gates",62,"male","America",192812,"CS","CEO",35200);
    obj2.display();
}