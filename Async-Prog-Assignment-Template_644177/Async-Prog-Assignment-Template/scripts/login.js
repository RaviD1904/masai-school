document.querySelector("form").addEventListener("submit",myFun)

var reg_user=JSON.parse(localStorage.getItem("userdata"))

function myFun(){
    event.preventDefault()
    var inp_email=document.querySelector("#email").value
    var inp_pass=document.querySelector("#pass").value
    let  flag=false

    for(let i=0; i < reg_user.length;i++){
        // console.log(reg_user[i]);
        if(inp_email==reg_user[i].email && inp_pass==reg_user[i].pass){
            flag=true;
            break;
        }
    }
    if(flag){
        alert("Login Sucessfull")
        window.location.href="index.html"
    }
    else{
        alert("Invalid Credentials")
    }


    document.querySelector("#email").value=null
    document.querySelector("#pass").value=null








}