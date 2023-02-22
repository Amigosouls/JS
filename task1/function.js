function perfectNumber()
{
    var x = document.getElementById("val").value;
    var sum=0;
    for(i=0;i<x;i++)
    {
        if(x%i==0)
        {
            sum=sum+i;
        }
    }
    
    if(sum==x)
    {
        document.getElementById("getVal").innerHTML="Perfect Number";
    }
    else{
        document.getElementById("getVal").innerHTML="Not a Perfect Number";
    }
}
function factorial()
{
    var x = document.getElementById("val").value;
    var fact = 1;
    var i = 1;
    do{
        fact = fact * i;
        i = i+1;

    }
    while(i<=x);
    document.getElementById("getVal").innerHTML=fact;
}
function fibanocci()
{
    var x = document.getElementById("val").value;
    var a = -1;
    var b =1;
    var temp = 0;
    var i=1;
    str1 = new String();
    while(i<=x)
    {
        
            
           // document.write(b+" ");
            temp=a+b;
            a=b;
            b=temp;
            str1=str1 + "  "+temp;
            i++;
        }
    document.getElementById("getVal").innerHTML=str1;
}
function gender()
{
     x = document.getElementById("val").value;
    var str=x.toLowerCase()
    console.log(x)
    if(x=='male')
    {
        document.getElementById("getVal").innerHTML="The person is male";
    }
}