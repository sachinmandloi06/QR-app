let themebtn = document.querySelector(".themebtn")
let nav = document.querySelector(".nav")
let container = document.querySelector(".container")
let card = document.querySelector(".card")
let input = document.querySelector("input")
let btn = document.querySelector(".btn")
let box = document.querySelector(".box")
let select = document.querySelector("select")
let image = document.querySelector("img")
let form = document.querySelector("form")
let downloadbtn = document.querySelector(".downloadbtn")

let count = 0;

const changetheme = () => {
    if (count % 2 === 0){
     nav.style.backgroundColor = "#1A2130"
     nav.style.color = "white"
     themebtn.style.backgroundColor = "#F3F7EC" 
     themebtn.style.color = "black"
     themebtn.innerHTML = "Light Mode"
     container.style.backgroundColor = "#6B8A7A"
     card.style.backgroundColor = "#254336"
     input.style.backgroundColor ="#254336"
     box.style.backgroundColor = "black"
     
    } else {
        nav.style.backgroundColor ="#B3E2A7"
        nav.style.color ="black"
        themebtn.style.backgroundColor = "#102C57" 
        themebtn.style.color = "white"
        themebtn.innerHTML = "Dark Mode"
        container.style.backgroundColor = "#538392"
        card.style.backgroundColor = "#80B9AD"
        input.style.backgroundColor ="#80B9AD"
        box.style.backgroundColor = "white"
    } 

    count++;
}

themebtn.addEventListener("click",changetheme)

const fetchQR = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(
        `https://api.qrserver.com/v1/create-qr-code/?size=${select.value}&data=${input.value}`
      );
      image.setAttribute("src", response.url);
    } catch (error) {
      window.alert("Something Went Wrong!!");
    }
    form.reset();
  };
  
  form.addEventListener("submit", fetchQR);
  

downloadbtn.addEventListener("click",() =>{

    if (image !== null){
        let imageAtrr = image.getAttribute("src");
        downloadbtn.setAttribute("href", imageAtrr)
    }
    else{
        downloadbtn.setAttribute("href", $(document.querySelector('canvas').toDataURL()))
    }
})


