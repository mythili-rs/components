//variable
a = 'a'
console.log("General variable declaratiom a = 'a'",a)
var b='var'//var is used for variable declaration ,var is function scoped
console.log("this variable belongs to var,var b='var' type",b)
b=10
console.log("changed variable:",b)

let c ='let'//also used for variable declaration ,block scoped,that only accessed inside the block
console.log("this variable belongs to let,let c ='let'type",c)
const d = 100 //constant cannot changed
console.log("constant variable belongs to const type",d)

//data types : undefined,null,boolean,string,sumbol,number,and object
//storing values with assignment operator
//= is assignment operator
var e
var f=9
e=8
f=e
console.log(f)
//case sensitive variables must be all lowercase but html is not case sensitive

var abc
abc = 10
console.log(abc)