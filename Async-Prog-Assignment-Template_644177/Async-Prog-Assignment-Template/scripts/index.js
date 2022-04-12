var img_url=["https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/doctor-strange-in-the-multiverse-of-madness-et00310791-07-04-2022-05-54-25.jpg","https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/kgf-chapter-2-et00098647-08-04-2022-11-33-32.jpg","https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/rrr-et00094579-29-03-2022-03-23-44.jpg"]




var moviesData =  [
    {
        image_url:
          "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTAlICA3ODVrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00094579-skzqavddcl-portrait.jpg",
        name: "RRR",
        date: "15-02-2022",
        rating:9.1,
      },
      {
        image_url:
          "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MW0gbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00098647-pyatkultem-portrait.jpg",
        name: "KGF2",
        date: "14-04-2022",
        rating:9.5,
      }
      ,
      {
        image_url:
          "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjI0ayBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00310791-zywbjpzsxe-portrait.jpg",
        name: "doctor strange",
        date: "15-02-2022",
        rating:7.5,
      }
      ,{
        image_url:
          "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NjA0ayBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00311733-wtalhcfzuh-portrait.jpg",
        name: "beast",
        date: "15-05-2022",
        rating:4.1,
      }
      ,
      {
        image_url:
          "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICA1NjNrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00110845-glzddsanvj-portrait.jpg",
        name: "Kashmir files",
        date: "15-02-2022",
        rating:10.0,
      },
      {
        image_url:
          "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NjQlICAxayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00325459-erqgktpzgs-portrait.jpg",
        name: "The Lost City",
        date: "12-02-2022",
        rating:9.5,
      }
      ,{
        image_url:
          "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODAlICAxMzZrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00114897-mqwalhlwcp-portrait.jpg",
        name: "Gangubai",
        date: "15-02-2022",
        rating:6.5,
      },
      {
        image_url:
          "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODElICAyNWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00107994-bwncltsnkm-portrait.jpg",
        name: "Attack",
        date: "15-02-2022",
        rating:3.5,
      }
      ,{
        image_url:
          "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODclICAzMmsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00077233-megreysqyu-portrait.jpg",
        name: "Jhund",
        date: "15-05-2022",
        rating:7.5,
      }

]

var slide_div=document.querySelector("#slideshow")
let i=0

    var img=document.createElement("img")
    setInterval(function(){
        if(i==img_url.length){
            i=0
        }
    slide_div.value=null
    img.src=img_url[i]
    slide_div.append(img)
    i++
    },2000)

    window.addEventListener("load", function () {
        displayData(moviesData);
      });
        
      
      function handleRatingSort() {
        var selected = document.querySelector("#sortbyprice").value;
        console.log(selected);
        if (selected == "sort-hl") {
          moviesData.sort(function (a, b) {
            return b.rating - a.rating;
          });
          displayData(moviesData);
        }
  
        if (selected == "sort-lh") {
          moviesData.sort(function (a, b) {
            return a.rating - b.rating;
          });
          displayData(moviesData)
      }
    }
//displayData(moviesData)


function displayData(moviesData){

    document.querySelector("#movies").innerHTML=null
    moviesData.map(function(el){
        var box=document.createElement("div")


        var img=document.createElement("img")
        img.src=el.image_url
        var h=document.createElement("h3")
        h.innerText="Movie Name:-"+el.name

        var h1=document.createElement("h4")
        h1.innerText="Realease Date:-"+el.date

        var h2=document.createElement("h4")
        h2.innerText="IMdb Rating:-"+el.rating

        box.append(img,h,h1,h2)
        document.querySelector("#movies").append(box)
})
}



