import navbar from "../componenets/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

var rate = document.getElementById("rec");
rate.oninput = () => {
  let value = rate.value;
  search1(value);
};

let cont = document.getElementById("meal");
async function search1(que) {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${que}`;

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

function appendData(data) {
  cont.innerHTML = "";
  data.forEach((el) => {
    let box = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.strMealThumb;
    let h3 = document.createElement("h3");
    h3.innerText = el.strMeal;
    box.append(img, h3);
    cont.append(box);
    box.addEventListener("click",()=>{
        meal(el)
    })
  });
}





let cont2=document.getElementById("rod")



let meal=function(el){
    cont.innerHTML = "";
    cont2.innerHTML = "";
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

}
