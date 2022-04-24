
var food = document.querySelectorAll(".checkbox")
// 
var arr = []

//console.log(food);
for (var checkbox of food) {
    //console.log("indi for");
    checkbox.addEventListener('click', function () {
        //console.log("inside addeve");
        if (this.checked == true) {
            arr.push(this.value)
            //console.log("if arr", arr);
        }
        else {
            arr = arr.filter(e => e !== this.value)

            // arr.filter(function(e){
            //     return e!==this.value
            // })
        }
    })
}
//console.log(arr)

function getImage(val){
    let obj={
        'burger':"https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        'samosa':"https://upload.wikimedia.org/wikipedia/commons/c/cb/Samosachutney.jpg",
        'pizza':"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdjxohTSVQ4KgiYHWWKZtKq444EXFORFRg-w&usqp=CAU"
    }
    for(var key in obj){
        if(key==val){
            return obj[key]
            break
        }
    }

}




function orderFood() {
    var count=Math.floor(Math.random()*1000)
    alert(`Your OrderID Is ${count}`)
    let pro = new Promise(function (resolve, reject) {
        var time = Math.random() * 10 * 1000
        setTimeout(function () {
            displayData(arr,count)
            //alert(`Your Order ${arr.join("&")} is Ready`)
            
        },time)     
    })
}

    function displayData(arr,count){
        document.querySelector("#display").innerText=""
        console.log("insdie displaydat");
        for(var i=0;i<arr.length;i++){
            var img=document.createElement("img")
            img.src=getImage(arr[i])
            document.querySelector("#display").append(img)
            
        }
        let h=document.createElement("h2")
            h.innerText=`Order ID:-${count} is Ready.`
            document.querySelector("#display").append(h)
        
    }




