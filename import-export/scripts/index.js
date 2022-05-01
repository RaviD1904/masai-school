import navbar from '../components/navbar.js'
import {getData,append} from "./fetch.js"

document.getElementById("navbar").innerHTML=navbar()

let url="https://fakestoreapi.com/products"
let cont=document.getElementById("main")

getData(url).then((res)=>{
    append(res,cont)
})
