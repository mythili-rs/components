//obj= new Object()
//setexample:collection of unique data or values syntax:variable Name=new set()  variable Name.add (value)
//Map:key value pair :variable Name=new Map();  variable Name.add ("id";"21ECR123");

//1st ex:
setExample=new Set("aiadmk","bjp","congress")
console.log(setExample)

setExample=new Set(["aiadmk","bjp","congress"])
console.log(setExample)
setExample.add("dmk")
setExample.add("aiadmk")
console.log(setExample)

//for of loop = output prints.
for (value of setExample) {
    console.log(value)
}


//for in loop = no output.
setExample=new Set(["aiadmk","bjp","congress"])
for(key in setExample){
    console.log(key)
}


//Map
mapEg=new Map([
    ["id","21ECR123"],
    ["name","Mythili"],
])
console.log(mapEg)

//for of loop
mapEg=new Map([
    ["id","21ECR123"],
    ["name","Mythili"],
])
for(value of mapEg){
    console.log(value)
}

//for in loop = no output
mapEg=new Map([
    ["id","21ECR123"],
    ["name","Mythili"],
])
for(key in mapEg){
    console.log(key)
}

console.log(mapEg.has("name")) //if the element is present or not

//eg
mapEg=new Map([
    ["id","21ECR123"],
    ["name","MYthili"],
])
mapEg.set("age","20")
mapEg.set("phone number","720084859")
mapEg.delete("name")
console.log(mapEg)

