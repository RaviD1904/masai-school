import navbar from '../components/navbar.js'
import {getData,append} from "./fetch.js"

document.getElementById("navbar").innerHTML=navbar()

let url="https://fakestoreapi.com/products/category/jewelery"
let cont=document.getElementById("container")

getData(url).then((res)=>{
    append(res,cont)
})




// async function getData(){

//     try{
//         let res=await fetch("https://fakestoreapi.com/products/category/jewelery")
//         let data=await res.json()
//         append(data)
//     }
//     catch(err){
//         console.log(err)
//     }
// }


// function append(data){
//     let cont=document.getElementById("container")
//     data.forEach((el) => {
//         let box=document.createElement("div")
//         let img=document.createElement("img")
//         img.src=el.image
//         let p=document.createElement("p")
//         p.innerText=el.title;
//         let p1=document.createElement("p")
//         p1.innerText=el.price;

//         box.append(img,p,p1)
//         cont.append(box)
//     });
// }