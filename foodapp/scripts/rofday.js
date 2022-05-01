import navbar from "../componenets/navbar.js"
document.getElementById("navbar").innerHTML=navbar()
search1()

let cont = document.getElementById("rod");
async function search1() {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/random.php`;

    let res = await fetch(url);
    let data = await res.json();
    if (data.meals == undefined) {
      cont.innerHTML = "Enter Proper Name Of Receipe";
    } else {
      appendData(data.meals);
    }
  } catch (error) {
    console.log(error);
  }
}

let cont2=document.getElementById("rod")

let appendData=function(data){
    cont.innerHTML = "";
    cont2.innerHTML = "";
    data.forEach((el)=> {
        let box = document.createElement("div");
        let box1= document.createElement("div");
  
        let img = document.createElement("img");
        img.src = el.strMealThumb;
        let h3 = document.createElement("h1");
        h3.innerText = el.strMeal;
        let h31 = document.createElement("h1");
        h31.innerText ="Receipe Details:"
        let p=document.createElement("p")
        p.innerText=el.strInstructions
        box.append(h3,img);
        box1.append(h31,p);
        cont2.append(box,box1);
    });
     

}