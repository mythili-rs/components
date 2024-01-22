//Global 
var sum=0;
var i=0;
do{
    sum+=i;
    i++;
    //console.log(sum)
}while(i<10);
console.log(sum)


//local scope--let----->we  can't access the i outside the block
for(let i=1;i<=5;i++)
{
    console.log(i)
}
//console.log(i)==>reference error


//block

//var -->we can access i outside the block
for(var i=1;i<=5;i++)
{
    console.log(i)
}
console.log(i)

// ----------------------------------------------------------------
var a=10//global
console.log(a)  //10
{
    let a=5 //local
    let b=5
    console.log(a) //5
    console.log(b)  //5
}
console.log(a) //10
console.log(b) //ReferenceError: b is not defined

// -----------------------------------------------------------
var a=10
console.log(a)  //10
{
    var a=5
    var b=5
    console.log(a) //5
    console.log(b)  //5
}
console.log(a) //5   becoz inside the loop we used var
console.log(b) //5