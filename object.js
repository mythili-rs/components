//Objects Declarations
//1st way
var customerDetails = {
    "name":"Mythili",
    "age":"20",
    "phone number":"7200848459",

}
console.log(customerDetails)

//2nd way
var customerDetails={}
customerDetails["id"]="21ECR123"
customerDetails["Name"]="Mythili R S"
customerDetails["Age"]="20"
customerDetails["Phone Number"]="7200848459"
console.log(customerDetails)

//3rd way
var kec=new Object()
   kec["fees"]=100000
   kec["accomodation"]="Execellent"
   kec["food"]="Good"
   kec["hostelcount"]=10
   console.log(kec)
   console.log(kec.food)
   console.log(kec["hostelcount"])
