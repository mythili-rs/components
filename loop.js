//control SVstatement:

//for
sum=0
for(var i=0;i<10;i++)
{
    sum+=i
}
console.log(sum)

//while
i=0
while(i<10)
{
    sum+=i
    i++
}
console.log(sum)

//dowhile
var i=0
do{
    sum+=i
    i++
}
while(i<10)
console.log(sum)

//examples:
arr=[10,20,30] //valid
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}
//ex2:
arr=[10,20,20.5] //valid
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}
//ex3:
arr=[10,20,true,false] //valid
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}
//ex4:
arr=[10,"string","true",20,"true"] //valid
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

//ex5:
//for in loop
arr=[10,"string",20,"kongu"]
for(const index in arr){
    console.log(index)
}

//for in loop
arr=[10,"string",20,"kongu"]
for(const index in arr){
    console.log("The value present in",index,"is:",arr)
}


//for of loop
arr=[10,"string",20,"kongu"]
for(const index of arr){
    console.log("The value present in",index,"is:",arr)
}

//for of loop
arr=[10,"string",20,"kongu"]
for(const index of arr){
    console.log(index)
}

//for of loop
arr=[10,"string",20,"kongu"]
for(const value of arr){ //correct way
    console.log(value)
}


//for each loop
arr=[10,"string",20,"kongu"]
arr.forEach(value => { 
    console.log(value)
});

//3rd way
var kec=new Object()
   kec["fees"]=100000
   kec["accomodation"]="Execellent"
   kec["food"]="Good"
   kec["hostelcount"]=10
   console.log(kec)
   console.log(kec.food)
   console.log(kec["hostelcount"])
   
   //for in eg =>o/p =key
   for (key in kec)
   {
    console.log(key,kec[key])
   }
   
 
   


