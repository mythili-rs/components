 //ex1---function with no arguments and no return type

function fun(){
    console.log("Function sampe example")
}
fun()

//ex2--->function with arguments and with no return type

//, itself produce a space to avoid it we go for "+"
function fun(a,b)
{
    for(i=a;i<=b;i++){
        if(i%2==0)
        {
            console.log(i+" is an even no")
        }
        else
        {
            console.log(i+" is an odd no")
        }
    }
}
fun(5,10)


// ex3--->function with arguments and with return type

function fun(a,b)
{
    fact=1
    for(i=1;i<=3;i++)
    {
        fact=fact*i

    }
    return fact
}
ans=fun(3)
console.log(ans)

// ex4--->function with no arguments and with return type

function fun(){
    fact=1
    for(i=1;i<=5;i++)
    {
        fact=fact*i
    }
    return fact
}
ans=fun()
console.log(ans)