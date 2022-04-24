async function searchMovies(){
try {
    let movie=document.querySelector("#query").value
    
    const url=`https://www.omdbapi.com/?s=${movie}&apikey=14fddc23`


    let res=await fetch(url)
    let data=await res.json()

    return data.Search
} catch (error) {
    console.log(error)
}

}
let id
var cont=document.querySelector("#movies")
appedData=(data)=>{
    cont.innerHTML=""
    data.map((el)=>{
        let box=document.createElement("div")
        box.setAttribute("class","box")
       
        let p=document.createElement("p")
        p.innerText=el.Title
        let img=document.createElement("img")
        img.src=el.Poster

        box.append(img,p)
        cont.append(box)
        box.addEventListener("click",function(){
            
            displayMovie(el)
        })
    })
}


function displayMovie(el){
    console.log(el.Title);
    document.querySelector("#movie").innerHTML=""
    let img=document.createElement("img")
    img.src=el.Poster
    let h=document.createElement("h3")
    h.innerText=el.Title
    let h2=document.createElement("h6")
    h2.innerText=el.Year
    let p=document.createElement("p")
    p.innerText=el.Type
    p.style.color="black"
    document.querySelector("#movie").append(img,h,h2,p)

}








async function main(){
    
    let data=await searchMovies()
    if(data===undefined){
        return false
    }
    appedData(data)
}

function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }
    id=setTimeout(()=>{
        func()
    },delay)

}









trending=function(){
    window.location.href="/tred.html"
}













arr =[1,2,3,4]
n=
function pop_stk(arr,n){
    if(arr.length==0){
        return
    }
    else{
        pop_stk(arr,arr.length-1)
    }
}















