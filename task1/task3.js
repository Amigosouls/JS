function validateForm(){
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var user_name = document.getinfo.getname.value;
    // var pass = document.parent.pass.value;
    // var con_pass = document.parent.confpass.value;
    console.log(user_name);
    
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
    display()
    {   
    }
}

class Employee extends Person2{
    constructor(empname,empage,empgen,empaddr,empcode,empdept,empdesg,empsal){
    this.empname=empname;
    this.empage = empage;
    this.empgen = empgen;
    this.empaddr = empaddr;
    this.empcode = empcode;
    this.empdept = empdept;
    this.empdesg = empdesg;
    this.empsal = empsal;
    }
    super(empname,empage,empgen,empaddr);
    display()
    {
        var x = "Name:"+this.empname+"<br> Age:"+this.empage+"<br> Gender:"+this.empgen+"<br> Address:"+this.empaddr+"<br> Designation"+this.empdesg+"<br> Code"+this.empcode+"<br> Salary:"+this.empsal;
        document.getElementById("show").innerHTML=x;
    }
}

function task3_2()
{
    var obj2 = new Employee("Bill Gates",62,"America",192812,"CS",)
}