document.querySelector("form").addEventListener("submit",myFun)

var cred_data=JSON.parse(localStorage.getItem("userdata")) || []

function myFun(){
    event.preventDefault()
    let obj={
        name:document.querySelector("#name").value,
        mob:document.querySelector("#mob").value,
        email:document.querySelector("#email").value,
        pass:document.querySelector("#pass").value
    }

    cred_data.push(obj)
    localStorage.setItem("userdata",JSON.stringify(cred_data))
    alert("Signup Sucessfully please login")
    
    document.querySelector("#name").value=null
    document.querySelector("#mob").value=null
    document.querySelector("#email").value=null
    document.querySelector("#pass").value=null


}






