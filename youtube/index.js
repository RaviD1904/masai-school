// //let api_key="AIzaSyCXyABJyY58S-kEsYJbTHrosChiVc2v6Ro"
// const url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf%202&key=${api_key}`
// fetch(url)
// .then((res)=>{
//     return res.json()
// })
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })



window.addEventListener('load', (event) => {
    const url = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=100&regionCode=In&key=AIzaSyC9ef1A49j3BCGCVl26CHG_7uyL4mUR8a8"
    fetch(url)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                let data = res.items
                console.log(data)
                displaydata(data);
            })
            .catch((err) => {
                console.log(err)
            })
})

searchYoutube=()=>{
    let api_key = "AIzaSyC9ef1A49j3BCGCVl26CHG_7uyL4mUR8a8"
    const quer = document.getElementById("query").value
    console.log("inside searchYou");
        let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=32&q=${quer}&key=${api_key}`
        console.log("url",url);
        fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            const data = res.items
            console.log(data)
            displaydata1(data);
        })
        .catch((err) => {
            console.log(err)
        })
}

        
        
        //const url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=32&q=${quer}&key=${api_key}`
        //const url = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=80&regionCode=In&key=AIzaSyCXyABJyY58S-kEsYJbTHrosChiVc2v6Ro"
        
        
       
            // fetch(url)
            // .then((res) => {
            //     return res.json()
            // })
            // .then((res) => {
            //     const data = res.items
            //     displaydata(data);
            // })
            // .catch((err) => {
            //     console.log(err)
            // })
        
        

    


function displaydata(data) {
    var cont = document.querySelector("#cont")
   //cont.innerHTML = null

    data.forEach(({ id, snippet: { title }, snippet: { thumbnails: { medium: { url } } } ,snippet: {channelTitle}}) => {
             
            let box = document.createElement("div")
            
            // let iframe = document.createElement("iframe")
            // iframe.src = `https://www.youtube.com/embed/${el.id.videoId}`
            // iframe.width = "100%"
            // iframe.height = "100%"
            // iframe.allow = "fullscreen"

            let img = document.createElement("img")
            img.src =url
            let name = document.createElement("h6")
            name.innerText = title
            let p= document.createElement("p")
            p.innerText=channelTitle
            box.append(img, name,p)
            cont.append(box)
            let localData={}
                
            
            
            box.addEventListener("click",()=>{
                localData.title=title
                localData.id=id
                localStorage.setItem("data",JSON.stringify(localData))
                window.location.href="video.html"
            })
            

        })
        //cont.innerHTML=null
    }



    function displaydata1(data) {
        var cont = document.querySelector("#cont")
       cont.innerHTML = null
    
        data.forEach(({ id:{videoId}, snippet: { title }, snippet: { thumbnails: { medium: { url } } } ,snippet: { channelTitle }}) => {
                 
                let box = document.createElement("div")
                
                // let iframe = document.createElement("iframe")
                // iframe.src = `https://www.youtube.com/embed/${el.id.videoId}`
                // iframe.width = "100%"
                // iframe.height = "100%"
                // iframe.allow = "fullscreen"
    
                let img = document.createElement("img")
                img.src =url
                let name = document.createElement("h6")
                name.innerText = title
                let p1= document.createElement("p")
                p1.innerText=channelTitle
                
                box.append(img, name,p1)
                cont.append(box)
                let localData={}
                    
                
                
                box.addEventListener("click",()=>{
                    localData.title=title
                    localData.id=videoId
                    localStorage.setItem("data",JSON.stringify(localData))
                    window.location.href="video.html"
                })
                
    
            })
            //cont.innerHTML=null
        }