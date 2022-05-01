async function getData(url){

    try{
        let res=await fetch(url)
        let data=await res.json()
        return data
    }
    catch(err){
        console.log(err)
    }
}



function append(data,container){
    //let cont=document.getElementById(container)
    data.forEach((el) => {
        let box=document.createElement("div")
        let img=document.createElement("img")
        img.src=el.image
        let p=document.createElement("p")
        p.innerText=el.title;
        let p1=document.createElement("p")
        p1.innerText=el.price;

        box.append(img,p,p1)
        container.append(box)
    });
}

export {getData,append}
