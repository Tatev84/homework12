/* var str="Ես սիրում եմ ծրագրավորել";
console.log(str.length)  */

/* var str="Ես սիրում եմ ծրագրավորել"
console.log(str.toUpperCase()) */

/* var str="Ես սիրում եմ ծրագրավորել"
console.log(str.indexOf("գ")) */

/* var str="Ես սիրում եմ ծրագրավորել"
 if(str.lastIndexOf("ո")!==-1){ 
    console.log(str.lastIndexOf("ո"))
 }else{
    console.log("չի գտնվել" )
}  */

/* var str="ես շատ եմ սիրում ծրագրավորել ջավասքրիփթով"
var words=str.split(" ")
console.log(words) */

/* var arr=["john", "JACOB", "jinGleHeimer", "schmidt"]
var arr1=arr.map(v=> v.toUpperCase())
console.log(arr1) 
 */
/* 
 var arr=["john", "JACOB", "jinGleHeimer", "schmidt"]


 var arr1=arr.map(v=> v.charAt(0).toUpperCase()+v.substr(1).toLowerCase())
console.log(arr1)  */



/* let student={
   name:"Poghos",
   lname:"Poghosyan",
      math:50,
      lang:80,
      biology:70,
      physics:84,
      info:56
      
   
}
function averageSubject(GPA){
var sum=0;
var count=0;
}
for (var i=0; i<GPA.length; i++){
   sum=+GPA[i]
   count++
   return sum/count
}

console.log(averageSubbject(GPA)) */

let person={
name:"Anna",
lname:"Poghosyan",
gender:"female",
age:21,

}
if(person.gender==="female"){
console.log(person.gender)
}
if (person.age>1 && person.age <14){
   console.log("poqr axjik")
}else if (person.age>17 && person.age <63){
console.log("chapahas mard")
} 
else{
   console.log("tatik")
}


