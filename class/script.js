class Person{
    constructor(name ,age){
        this.name=name,
        this.age=age
    }
    setDetails(newName , newAge){
        this.name = newName;s
        this.age = newAge
    }
    getDetails(){
        console.log(this)
        console.log(`name is ${this.name} and age is ${this.age}`)
    }
}
const binod = new Person("binod" , 4)
binod.getDetails() //iske case m this clss ka object hh
document.querySelector("button")
.addEventListener("click",binod.getDetails) //iske case m this button h baki prop(age , name) undefined hoga
setTimeout(binod.getDetails , 1000) // iske case m this ek window h baki prop(age , name) undefined hoga


document.querySelector(".btn")
.addEventListener("click",function(){  //iske case m this class ka object hh method call h kyuki
    binod.getDetails()
   // let fn=binod.getDetails; //gives err becuse method call
  //  fn()
})