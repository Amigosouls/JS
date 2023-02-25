function perfectNumber() {
    var x = document.getElementById("val").value;
    var sum = 0;
    for (i = 0; i < x; i++) {
        if (x % i == 0) {
            sum = sum + i;
        }
    }

    if (sum == x) {
        document.getElementById("getVal").innerHTML = "Perfect Number";
    }
    else {
        document.getElementById("getVal").innerHTML = "Not a Perfect Number";
    }
}
function factorial() {
    var x = document.getElementById("val").value;
    var fact = 1;
    var i = 1;
    do {
        fact = fact * i;
        i = i + 1;

    }
    while (i <= x);
    document.getElementById("getVal").innerHTML = fact;
}
function fibanocci() {
    var x = document.getElementById("val").value;
    var a = -1;
    var b = 1;
    var temp = 0;
    var i = 1;
    str1 = new String();
    while (i <= x) {


        // document.write(b+" ");
        temp = a + b;
        a = b;
        b = temp;
        str1 = str1 + "  " + temp;
        i++;
    }
    document.getElementById("getVal").innerHTML = str1;
}
function gender() {
    x = document.getElementById("val").value;

    if (x == 'male') {
        document.getElementById("getVal").innerHTML = "Person is male";
    }
    else if (x == 'female') {
        document.getElementById("getVal").innerHTML = "Person is Female";
    }
    switch (x) {
        case 'male':
            document.getElementById("getVal").innerHTML = "Person is male";
            break;
        case 'female':
            document.getElementById("getVal").innerHTML = "Person is female";
            break;
        default:
            document.getElementById("getVal").innerHTML = "Gender Unspecified";
    }
}
function genderS() {
    x = document.getElementById("val").value;
    switch (x) {
        case 'male':
            document.getElementById("getVal").innerHTML = "Person is male";
            break;
        case 'female':
            document.getElementById("getVal").innerHTML = "Person is female";
            break;
        default:
            document.getElementById("getVal").innerHTML = "Gender Unspecified";
    }
}

function regForm() {
    var name = document.reg.name.value;
    var age = document.reg.age.value;
    var gen = document.reg.gen.value;
    var stat = document.reg.status.value;
    // document.getElementById("result").innerHTML=name;


    document.write("<h2 style='margin:20px; font-family:Cambria; background-color:#e9967a; position:absolute'>", name, "</h2><br><br>");
    document.write("<h2 style='margin:20px; font-family:Cambria; background-color:#e9967a; position:absolute'>", age, "</h2><br><br>");
    document.write("<h2 style='margin:20px; font-family:Cambria; background-color:#e9967a; position:absolute'>", gen, "</h2><br><br>");
    document.write("<h2 style='margin:20px; font-family:Cambria; background-color:#e9967a; position:absolute'>", stat, "</h2><br><br>");



}
let friend = [];
function addFriendsAtEnd() {
    var val = document.getVal.name.value;
    if (val == '') {
        alert("Input Box Empty");
    }
    else {
        friend.push(val);
        document.getElementById("show").innerHTML = friend;
    }
}
function addFriendsAtBeginning() {
    var val = document.getVal.name.value;
    if (val == '') {
        alert("Input Box Empty");
    }
    else {
        friend.unshift(val);
        document.getElementById("show").innerHTML = friend;
    }
}
function deleteFriendsAtEnd() {
    if (friend.length == 0) {
        alert("Array Empty");
    }
    else {
        friend.pop();
        document.getElementById("show").innerHTML = friend;
    }
}
function deleteFriendsAtBeginning() {
    if (friend.length == 0) {
        alert("Array Empty");
    }
    else {
        friend.shift()
        document.getElementById("show").innerHTML = friend;
    }
}
function showArray() {
    if (friend.length == 0) {
        alert("Array Empty");
    }
    else {
        document.getElementById("show").innerHTML = friend;
    }
}
function sortArray() {
    if (friend.length == 0) {
        alert("Array Empty");
    }
    else {
        let result = "Un sorted array:<br>" + friend.reverse() + "<br>Sorted Array:<br>" + friend.sort();
        document.getElementById("show").innerHTML = result;
    }
}
function printFor() {
    if (friend.length == 0) {
        alert("Array Empty");
    }
    else {
        var resStr = "";
        for (i = 0; i < friend.length; i++) {
            resStr = resStr + friend[i] + " ";
        }
        document.getElementById("show").innerHTML = resStr;
    }
}
function printForEach() {
    if (friend.length == 0) {
        alert("Array Empty");
    }
    else {
        var resStr = "";
        friend.forEach(x => {
            resStr = resStr + x + " ";
        });
        document.getElementById("show").innerHTML = resStr;
    }
}
function printForIn() {
    if (friend.length == 0) {
        alert("Array Empty");
    }
    else {
        var resStr = "";
        for (const key in friend) {
            if (Object.hasOwnProperty.call(friend, key)) {
                resStr = resStr + friend[key] + " ";
            }
        }
        document.getElementById("show").innerHTML = resStr;
    }
}
function printForOf() {
    if (friend.length == 0) {
        alert("Array Empty");
    }
    else {
        var resStr = "";
        for (const x of friend) {
            resStr = resStr + x + " ";
        }
        document.getElementById("show").innerHTML = resStr;
    }
}
function printComma() {
    if (friend.length == 0) {
        alert("Array Empty");
    }
    else {
        var resStr = friend.join();
        document.getElementById("show").innerHTML = resStr;
    }
}
function printDateTime() {

    var resStr =new Date();
    

    document.getElementById("show").innerHTML = resStr.toLocaleTimeString()+"  "+resStr.toLocaleDateString();

}